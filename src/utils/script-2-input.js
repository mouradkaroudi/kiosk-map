// Parse SVG to extract vertices from ploa_* lines
const svg = document.querySelector('#ikr_svg');
// Assume ikrZoom function is defined elsewhere
ikrZoom(svg);

// Extract vertices from ploa_* lines
const vertices = [];
const ploaLines = Array.from(svg.querySelectorAll('line.map_road')).filter(line => line.getAttribute('id').startsWith('ploa_'));
ploaLines.forEach(line => {
  const id = line.getAttribute('id').replace('ploa_', '');
  const x2 = parseFloat(line.getAttribute('x2'));
  const y2 = parseFloat(line.getAttribute('y2'));
  vertices.push({
    id: id,
    cx: x2,
    cy: y2,
    element: line
  });
});

// Map ploa_* lines to their respective plots
const ploatLines = {};
ploaLines.forEach(line => {
  const id = line.getAttribute('id');
  const plotId = id.replace('ploa_', '');
  ploatLines[plotId] = line;
});

// Group roads by plot or connection
const roadsByPlot = {};
Array.from(svg.querySelectorAll('line.map_road')).forEach(line => {
  const id = line.getAttribute('id');
  const match = id.match(/^road_(\w+)(?:_([^_]+))?$/);
  if (match) {
    const plotId = match[1];
    const suffix = match[2] || '';
    if (!roadsByPlot[plotId]) {
      roadsByPlot[plotId] = [];
    }
    roadsByPlot[plotId].push(id);
  }
});

// Function to find the closest vertex to a coordinate
function findClosestVertex(x, y) {
  let minDist = Infinity;
  let closestVertex = null;
  vertices.forEach(vertex => {
    const dist = Math.sqrt(
      Math.pow(vertex.cx - x, 2) + Math.pow(vertex.cy - y, 2)
    );
    if (dist < minDist && dist < 90) {
      minDist = dist;
      closestVertex = vertex.id;
    }
  });
  return closestVertex;
}

// Parse edges from road_* lines and ploas_* paths
const edges = [];
Array.from(svg.querySelectorAll('line.map_road')).forEach(line => {
  const id = line.getAttribute('id');
  if (id.startsWith('road_')) {
    const x1 = parseFloat(line.getAttribute('x1'));
    const y1 = parseFloat(line.getAttribute('y1'));
    const x2 = parseFloat(line.getAttribute('x2'));
    const y2 = parseFloat(line.getAttribute('y2'));
    let from = findClosestVertex(x1, y1);
    let to = findClosestVertex(x2, y2);
    const match = id.match(/^road_(\w+)(?:_([^_]+))?$/);
    if (match) {
      const plotId = match[1];
      const suffix = match[2] || '';
      if (id === `road_${plotId}` && !suffix) {
        from = plotId;
        to = id;
      } else if (id === "road_4") {
        from = "1";
        to = "4";
      } else if (id === "road_5") {
        from = "4";
        to = "5";
      } else if (id === "road_6") {
        from = "5";
        to = "6";
      } else if (id === "road_8") {
        from = "6";
        to = "8";
      } else if (id === "road_10") {
        from = "8";
        to = "10";
      } else if (id === "road_10_a") {
        from = "10";
        to = "9";
      }
    }
    if (from && to) {
      edges.push({
        from,
        to,
        coordFrom: `${x1},${y1}`,
        coordTo: `${x2},${y2}`,
        element: line,
        id: id,
        type: 'line',
        weight: Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
      });
    } else {
      //console.log(`Skipping line ${id}: from=${from}, to=${to}`);
    }
  }
});

Array.from(svg.querySelectorAll('path.map_road')).forEach(path => {
  const id = path.getAttribute('id');
  if (id.startsWith('ploas_')) {
    const plotId = id.replace('ploas_', '');
    let from, to;
    if (id === 'ploas_31') {
      from = '20';
      to = '31';
    }
    if (from && to) {
      edges.push({
        from,
        to,
        coordFrom: null,
        coordTo: null,
        element: path,
        id: id,
        type: 'path',
        weight: 50
      });
    } else {
      //console.log(`Skipping path ${id}: from=${from}, to=${to}`);
    }
  }
});

// Build graph from SVG edges and route array
const graph = {};
const allNodes = [...new Set([...vertices.map(v => v.id), ...route.flat()])];
allNodes.forEach(node => {
  graph[node] = [];
});

console.log('graph',graph)

edges.forEach(edge => {
  if (graph[edge.from] && graph[edge.to]) {
    if (!graph[edge.from].some(e => e.node === edge.to)) {
      graph[edge.from].push({ node: edge.to, weight: edge.weight });
    }
    if (!graph[edge.to].some(e => e.node === edge.from)) {
      graph[edge.to].push({ node: edge.from, weight: edge.weight });
    }
  }
});

route.forEach(path => {
  for (let i = 0; i < path.length - 1; i++) {
    const from = path[i].trim();
    const to = path[i + 1].trim();
    if (!graph[from]) graph[from] = [];
    if (!graph[to]) graph[to] = [];
    const weight = vertices.find(v => v.id === from) && vertices.find(v => v.id === to)
      ? Math.sqrt(Math.pow(vertices.find(v => v.id === to).cx - vertices.find(v => v.id === from).cx, 2) +
        Math.pow(vertices.find(v => v.id === to).cy - vertices.find(v => v.id === from).cy, 2))
      : 1;
    if (!graph[from].some(edge => edge.node === to)) {
      graph[from].push({ node: to, weight });
    }
    if (!graph[to].some(edge => edge.node === from)) {
      graph[to].push({ node: from, weight });
    }
  }
});

//console.log('Graph:', Object.entries(graph).map(([node, neighbors]) => `${node}: ${neighbors.map(n => `${n.node} (${n.weight.toFixed(2)})`).join(', ')}`));

// Dijkstra's Algorithm
function dijkstra(graph, start, end) {
  const distances = {};
  const visited = {};
  const previous = {};
  const queue = [];

  for (let node in graph) {
    distances[node] = Infinity;
    previous[node] = null;
  }
  distances[start] = 0;
  queue.push({ node: start, distance: 0 });

  while (queue.length) {
    queue.sort((a, b) => a.distance - b.distance);
    const { node: current } = queue.shift();
    if (current === end) break;
    if (visited[current]) continue;

    visited[current] = true;

    for (let neighbor of graph[current]) {
      let newDist = distances[current] + neighbor.weight;
      if (newDist < distances[neighbor.node]) {
        distances[neighbor.node] = newDist;
        previous[neighbor.node] = current;
        queue.push({ node: neighbor.node, distance: newDist });
      }
    }
  }

  const path = [];
  let curr = end;
  while (curr) {
    path.unshift(curr);
    curr = previous[curr];
  }

  return { distance: distances[end], path };
}

// Format point names
function formatPointName(id) {
  return id.startsWith('road_') ? `Junction ${id}` : `Plot ${id}`;
}

function populateDropdowns() {

  const mappedArray = [
    { id: "1", stateName: "1 - Building 1" },
    { id: "2", stateName: "2 - Building 2" },
    { id: "4", stateName: "4 - Building 4" },
    { id: "3", stateName: "3 - Building 3" },


    { id: "5", stateName: "5 - Building 5" },
    { id: "6", stateName: "6 - Building 6" },

    { id: "7", stateName: "7 - Building 7" },
    { id: "8", stateName: "8 - Building 8 " },
    { id: "9", stateName: "9 - Building 9" },
    { id: "10", stateName: "10 - Building 10" },
    { id: "11", stateName: "11 - Building 11" },
    { id: "12", stateName: "12 - Building 12" },
    { id: "14", stateName: "14 - Building 14" },
    { id: "15", stateName: "15 - Building 15" },
    { id: "16", stateName: "16 - Building 16" },
    { id: "17", stateName: "17 - Building 17" },
    { id: "18", stateName: "18 - Building 18" },
    { id: "19", stateName: "19 - Building 19" },
    { id: "20", stateName: "20 - Building 20" },
    { id: "21", stateName: "21 - Building 21" },
    { id: "22", stateName: "22 - Building 22" },
    { id: "23", stateName: "23 - Building 23" },
    { id: "24", stateName: "24 - Building 24" },
    { id: "25", stateName: "25 - Building 25" },
    { id: "26", stateName: "26 - Building 26" },
    { id: "27", stateName: "27 - Building 27" },
    { id: "28", stateName: "28 - Building 28" },
    { id: "29", stateName: "29 - Building 29" },
    { id: "30", stateName: "30 - Building 30" },
    { id: "31", stateName: "31 - Building 31" },
    { id: "32", stateName: "32 - Building 32" },
    { id: "33", stateName: "33 - Building 33" },
    { id: "34", stateName: "34 - Building 34" },
    { id: "35", stateName: "35 - Building 35" },
    { id: "36", stateName: "36 - Building 36" },
    { id: "37", stateName: "37 - Building 37" },
    { id: "38", stateName: "38 - Building 38" },
    { id: "39", stateName: "39 - Building 39" },
    { id: "40", stateName: "40 - Building 40" },
    { id: "41", stateName: "41 - Building 41" },
    { id: "42", stateName: "42 - Building 42" },
    { id: "43", stateName: "43 - Building 43" },
    { id: "44", stateName: "44 - Building 44" },
    { id: "45", stateName: "45 - Building 45" },
    { id: "46", stateName: "46 - Building 46" },
    { id: "47", stateName: "47 - Building 47" },

    // { id: "129", stateName: "129 - J. KENNEDY FINE ARTS" },
    { id: "132", stateName: "132 - EVERS PHYSICAL PLANT" },
    { id: "135", stateName: "135 - LIBRARY - LIB" },
    { id: "136", stateName: "136 - WHITING HALL" },
    { id: "137", stateName: "137 - DREW-GRIFFITH SCIENCE" },
    { id: "140", stateName: "140 - McGLOCKTON - NROTC -	MCG" },
    { id: "141", stateName: "141 - WRIGHT STADIUM -	WRT" },
    { id: "147", stateName: "147 - UNIVERSITY VILLAGE	- UV" },
    { id: "153", stateName: "153 - UNIVERSITY COMMONS" },
    { id: "162", stateName: "162 - FOUNDATION HOUSE" },
    { id: "t.a.-wright-stadium", stateName: "144 -TIGER ARENA -	TA" },
    { id: "wright_stadium", stateName: "A - WRIGHT STADIUM" },


    { id: "b", stateName: "B - NROTC" },
    { id: "c", stateName: "C - UNIVERSITY VILLAGE" },
    { id: "d1", stateName: "D1 - TIGER ARENA (WEST)" },
    { id: "d2", stateName: "D2 - TIGER ARENA (EAST)" },
    { id: "e", stateName: "E - WHITING HALL" },
    { id: "f", stateName: "F - LIBRARY" },
    { id: "g", stateName: "G - HOWARD JORDAN" },
    { id: "j", stateName: "H - NEW STUDENT UNION" },
    { id: "j", stateName: "J - SOCIAL SCIENCE" },
    { id: "k", stateName: "K - PHYSICAL PLANT" },
    { id: "l", stateName: "L - KENNEDY" },
    { id: "m1", stateName: "M1 - HUBERT TECH" },
    { id: "m2", stateName: "M2 - HUBERT TECH (CAMPUS POLICE) (SERVICE VEHICLES ONLY)" },
    { id: "m3", stateName: "M3 - HUBERT TECH" },
    { id: "amams-hall", stateName: "113 - ADAMS HALL - ADM" },
    { id: "herty-hall", stateName: "114 - HERTY HALL - HRT" },
    { id: "public-safety", stateName: "117 - HAMMOND HALL - HMM" },
    { id: "c.hubert-resident-hall", stateName: "119 - C. HUBERT RESIDENT HALL" },

    { id: "bowen-smith-resdent-hall", stateName: "122 - BOWEN SMITH -	BWN" },

    { id: "humbert-techonology", stateName: "127 - HUBERT HALL -	HUB" },
    { id: "hubert-resident-hall", stateName: "128 - BOSTIC HALL - BST" },

    { id: "132_parking", stateName: "  Parking 132" },
    { id: "whiting-hill", stateName: "136 - WHITING HALL -	WHT" },
    { id: "a118", stateName: "118 - PUBLIC SAFETY -	PUB & STC " },
    { id: "a121", stateName: "121 - MARINE BIOLOGY - MRBIO & MRSC" },
    { id: "a138", stateName: "138" },





    { id: "M3", stateName: "M3 - HUBERT TECH" },
    { id: "n", stateName: "N - PAYNE" },
    { id: "o", stateName: "O - HARRIS MCDEW HEALTH CENTER (PATIENTS)" },
    { id: "p", stateName: "P - FLGC & BOWEN-SMITH" },
    { id: "q", stateName: "Q - Hammond Hall" },
    { id: "r", stateName: "R - Camilla Hubert" },

    { id: "s1", stateName: "S2 - GARDNER HALL" },
    { id: "s2", stateName: "S2 - GARDNER HALL" },
    { id: "s3", stateName: "S3 - CAFETERIA" },
    { id: "t1", stateName: "T1 - HILL HALL (EAST/SIDE)" },
    { id: "u", stateName: "U - HODGE HALL" },
    { id: "v", stateName: "V1 - Colston (North)" },
    { id: "w", stateName: "W - TIGER PLACE" },
    { id: "x", stateName: "X - TIGER POINT" },
    { id: "y", stateName: "Y - MORGAN HALL" },
    { id: "z", stateName: "Z - BOSTIC" },
    { id: "aa", stateName: "AA - TIGER EXPRESS" },
    { id: "bb", stateName: "BB - Drew Griffith" },
    { id: "cc", stateName: "CC - University Village (Overflow)" },
    { id: "dd", stateName: "DD - University Advancement/Alumni House" },
    { id: "ee", stateName: "EE - Harris Hall" },
    { id: "ff", stateName: "FF - Alexis Circle" },
    { id: "football_practice_field", stateName: "170 - FOOTBALL PRACTICE FIELD" },
    //  {id:"laroche-entry",stateName:"Laroche entry"},
    { id: "laundry", stateName: "laundry" },
    { id: "powell-hall", stateName: "115 - POWELL HALL -	PWL" },
    { id: "skidaway_road", stateName: "Skidaway road" },
    { id: "the-pavlion", stateName: "161 - THE PAVILION" },
    { id: "foundation-house", stateName: "162- FOUNDATION HOUSE" },


    { id: "gardner-hall", stateName: "101 - GARDNER -	GRD" },
    { id: "wiley-wilcox-gym", stateName: "102 - WILEY-WILCOX -	WWG" },
    { id: "colston-administration", stateName: "103 - COLSTON -	CST" },
    { id: "king-frazier-student-center", stateName: "104 - KING-FRASIER -	KNG" },
    { id: "hodge-hall", stateName: "106 - HODGE HAL - HDG" },
    { id: "hill-hall", stateName: "107 -HILL HALL-	HH" },
    { id: "lift-station", stateName: "109 - LIFT STATION" },
    { id: "morgan-hall", stateName: "111 -MORGAN HALL -	MRG" },
    { id: "morgan-annex", stateName: "112 - MORGAN ANNEX -	MRGA" },
    { id: "bowen-smith-resident-hall", stateName: "122 - BOWEN-SMITH RESIDENT HALL" },
    { id: "cottage-9", stateName: "124 - COTTAGE 9" },
    { id: "health-clinic", stateName: "125 - HARRIS MCDEW - HAR" },
    { id: "payne-hall", stateName: "126 - PAYNE HALL -	PYN" },
    { id: "j.kennedy-fine-arts", stateName: "129 - J F KENNEDY -	JFK" },
    { id: "evers-physical-plant", stateName: "132 - PHYSICAL PLANT -	PHY" },
    { id: "jordan-business-school", stateName: "134 - JORDAN HALL - JRD" },
    { id: "a-h-gordon-library", stateName: "135 - A.H. GORDON LIBRARY" },
    { id: "whiting-hall", stateName: "136 - WHITING HALL" },
    { id: "drew-griffith-science", stateName: "137 - DREW GRIFFITH -	DRW" },
    { id: "nordic-and-field-house", stateName: "140 - NORDIC AND FIELD HOUSE" },
    { id: "university-village", stateName: "147 - UNIVERSITY VILLAGE" },
    { id: "freshmen-living-learning-center", stateName: "149 - FRESHMAN LLC	- FLLC" },
    { id: "university-commons", stateName: "153 - UNIVERSITY COMMONS" },
    { id: "social-science-building", stateName: "154 - SOCIAL SCIENCE BUILDING" },
    { id: "tiger-point-residence-hall", stateName: "157 - Tiger Pointe -	TPT & UVC" },
    { id: "tiger-place-residence-hall", stateName: "158 - Tiger Place	- TPL" },
    { id: "tiger-court-residence-hall", stateName: "159 - Tiger Court (Peacock) -	TC" },
    { id: "new-student-center", stateName: "160 - Student Union -	SU" },
    { id: "the-pavilion", stateName: "161 - THE PAVILION" },
    { id: "foundation-house", stateName: "162 - FOUNDATION HOUSE" },
    { id: "football-practice-field", stateName: "170 - FOOTBALL PRACTICE FIELD" },
    { id: "nrotc", stateName: "B - NROTC" },
    { id: "university-village-2", stateName: "C - UNIVERSITY VILLAGE" },
    { id: "tiger-arena-west", stateName: "D1 - TIGER ARENA (WEST)" },
    { id: "d2", stateName: "D2 - TIGER ARENA (EAST)" },
    { id: "whiting-hall-2", stateName: "E - WHITING HALL" },
    { id: "library", stateName: "F - LIBRARY" },
    { id: "howard-jordan", stateName: "G - HOWARD JORDAN" },
    { id: "new-student-union", stateName: "H - NEW STUDENT UNION" },
    { id: "social-science", stateName: "J - SOCIAL SCIENCE" },
    { id: "physical-plant", stateName: "K - PHYSICAL PLANT" },
    { id: "kennedy", stateName: "L - KENNEDY" },
    { id: "hubert-tech", stateName: "M1 - HUBERT TECH" },
    { id: "hubert-tech-campus-police", stateName: "M2 - HUBERT TECH (CAMPUS POLICE) (SERVICE VEHICLES ONLY)" },
    { id: "hubert-tech-2", stateName: "M3 - HUBERT TECH" },
    { id: "payne", stateName: "N - PAYNE" },
    { id: "harris-mcdew-health-center", stateName: "O - HARRIS MCDEW HEALTH CENTER (PATIENTS)" },
    { id: "flgc-and-bowen-smith", stateName: "P - FLGC & BOWEN-SMITH" },
    { id: "tiger-place", stateName: "W - TIGER PLACE" },
    { id: "tiger-point", stateName: "X - TIGER POINT" },
    { id: "bostic", stateName: "Z - BOSTIC" },
    { id: "tiger-express-2", stateName: "AA - TIGER EXPRESS" }
  ];

  const startSelect = document.getElementById('start');
  const endSelect = document.getElementById('end');

  console.log('startSelect', startSelect)

  startSelect.innerHTML = '<option value="">Select start plot</option>';
  endSelect.innerHTML = '<option value="">Select end plot</option>';

  // Filter mappedArray to include only IDs present in vertices
  const plotNodes = mappedArray
    .filter(node => vertices.some(v => v.id.replace("plot_", "").replace("ploa_", "") === node.id))
    .sort((a, b) => {

      // Extract the ID part from stateName (e.g., "101 - GARDNER HALL" -> "101")
      const aId = a.stateName.split(' - ')[0];
      const bId = b.stateName.split(' - ')[0];

      const aIsNum = /^\d+$/.test(aId);
      const bIsNum = /^\d+$/.test(bId);

      if (aIsNum && bIsNum) {
        // Sort numeric IDs (1 to 100)
        return Number(aId) - Number(bId);
      } else if (aIsNum) {
        // Numeric IDs come before non-numeric
        return -1;
      } else if (bIsNum) {
        return 1;
      } else {
        // Sort non-numeric IDs (A to Z)
        return aId.localeCompare(bId);
      }
    });

  const n = [];
  plotNodes.forEach(node => {
    n.push(node.id);
    const optionStart = document.createElement('option');
    optionStart.value = node.id;
    optionStart.textContent = node.stateName;
    startSelect.appendChild(optionStart);

    const optionEnd = document.createElement('option');
    optionEnd.value = node.id;
    optionEnd.textContent = node.stateName;
    endSelect.appendChild(optionEnd);
  });
}

// Find and highlight route
function findAndHighlightRoute(start, end) {
  // Normalize input: remove 'ploa_' prefix if present
  start = start.replace(/^ploa_/, '');
  end = end.replace(/^ploa_/, '');

  if (!start || !end) {
    alert('Please provide both start and end plots.');
    document.getElementById('pathDisplay').textContent = '';
    return;
  }

  if (!graph[start] || !graph[end]) {
    alert('Selected start or end plot is not valid or not connected in the graph.');
    document.getElementById('pathDisplay').textContent = '';
    return;
  }

  // Reset previous highlights
  svg.querySelectorAll('line, path, polygon').forEach(element => {
    element.classList.remove('highlight', 'highlight_path', 'startVertex', 'finishedVertex', 'currentVertex', 'fill-none');
    element.classList.add('map_road');
  });

  const { path, distance } = dijkstra(graph, start, end);

  if (distance === Infinity || path.length <= 1) {
    alert('No valid route found between these plots.');
    document.getElementById('pathDisplay').textContent = '';
    return;
  }

  // Highlight edges
  const highlightedEdges = new Set();
  for (let i = 0; i < path.length - 1; i++) {
    for (let j = i + 1; j < path.length; j++) {
      const from = path[i];
      const to = path[j];
      const edgeKey = `${from}-${to}`;
      const reverseEdgeKey = `${to}-${from}`;
      let edge = edges.find(e =>
        (e.from === from && e.to === to) ||
        (e.from === to && e.to === from)
      );
      if (edge && !highlightedEdges.has(edge.id)) {
        //console.log(`Found edge: ${edge.id} (${edge.from} -> ${edge.to})`);
        edge.element.classList.remove('map_road');
        // Apply highlight_path for path and polygon, highlight for line
        if (edge.element.tagName === 'path' || edge.element.tagName === 'polygon') {
          edge.element.classList.add('highlight_path');
        } else if (edge.element.tagName === 'line') {
          edge.element.classList.add('highlight');
        }
        highlightedEdges.add(edge.id);
      } else if (edgeToLineMap[edgeKey] && !highlightedEdges.has(edgeToLineMap[edgeKey])) {
        const lineId = edgeToLineMap[edgeKey];
        //console.log(`Using edgeToLineMap for ${edgeKey}: ${lineId}`);
        const lineElement = svg.querySelector(`#${lineId}`);
        if (lineElement) {
          lineElement.classList.remove('map_road');
          // Apply highlight_path for path and polygon, highlight for line

          // check the road_laroche_22 in the path tag if find the class then remove the highlight_path class
          if (lineElement.tagName === 'path' && lineElement.getAttribute('id') === 'road_laroche_22') {
            lineElement.classList.add('fill-none');
            lineElement.classList.remove('highlight_path');
          }


          if (lineElement.tagName === 'path' || lineElement.tagName === 'polygon') {
            lineElement.classList.add('highlight_path');
          } else if (lineElement.tagName === 'line') {
            lineElement.classList.add('highlight');
          }
          highlightedEdges.add(lineId);
        }
      } else if (edgeToLineMap[reverseEdgeKey] && !highlightedEdges.has(edgeToLineMap[reverseEdgeKey])) {
        const lineId = edgeToLineMap[reverseEdgeKey];
        //console.log(`Using edgeToLineMap for ${reverseEdgeKey}: ${lineId}`);
        const lineElement = svg.querySelector(`#${lineId}`);
        if (lineElement) {
          lineElement.classList.remove('map_road');
          // Apply highlight_path for path and polygon, highlight for line
          if (lineElement.tagName === 'path' || lineElement.tagName === 'polygon') {
            lineElement.classList.add('highlight_path');
          } else if (lineElement.tagName === 'line') {
            lineElement.classList.add('highlight');
          }
          highlightedEdges.add(lineId);
        }
      } else {
        //console.log(`No edge found for ${edgeKey} or ${reverseEdgeKey}`);
      }
    }
  }

  // Highlight only start and end ploa_* lines
  path.forEach((node, index) => {
    const vertex = vertices.find(v => v.id === node);
    if (vertex && !node.startsWith('road_')) {
      const line = vertex.element;
      if (line) {
        if (index === 0) {
          line.classList.remove('map_road');
          line.classList.add('startVertex');
        } else if (index === path.length - 1) {
          line.classList.remove('map_road');
          line.classList.add('finishedVertex');
        }
      }
    }
  });
  // hide the path display 
  // document.getElementById('pathDisplay').textContent = `Path: ${path.filter(id => !id.startsWith('road_')).map(formatPointName).join(' → ')} (distance: ${distance.toFixed(2)})`;
}

// Initialize
populateDropdowns();
document.getElementById('findRoute').addEventListener('click', () => {
  const startSelect = document.getElementById('start').value;
  const endSelect = document.getElementById('end').value;
  const start = startSelect;
  const end = endSelect;
  findAndHighlightRoute(start, end);
});