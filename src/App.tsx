import { useEffect, useRef, useState } from 'react';
import './App.css';
import mapSvg from './assets/map.svg?raw'
import { SelectLocation } from '@/components/ui/select-location';

import { edgeToLineMap } from './utils/edgeToLineMap';
import { route } from './utils/route';
import { Button } from './components/ui/button';
import Panzoom from '@panzoom/panzoom'
import { RefreshCcwIcon, ZoomIn, ZoomOut } from 'lucide-react';

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

// Find and highlight route
function findAndHighlightRoute(vertices, edges, graph, start, end, svg) {
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

if (typeof CSS === "undefined" || typeof CSS.escape !== "function") {
  (function () {
    var cssEscape = function (value) {
      return String(value).replace(/[^a-zA-Z0-9_\-]/g, function (ch) {
        var hex = ch.charCodeAt(0).toString(16).toUpperCase();
        return "\\" + hex + " ";
      });
    };
    if (typeof window.CSS === "undefined") window.CSS = {};
    window.CSS.escape = cssEscape;
  })();
}

// Normalize kioskId to dropdown value
function kioskIdToDropdownValue(kioskIdStr) {
  return kioskIdStr
    .replace(/^kiosk[-_]/i, "")
    .replace(/_/g, "-")
    .toLowerCase();
}


export default function App() {

  const [toDestination, setToDestination] = useState("")

  const svgContainerRef = useRef<HTMLDivElement | null>(null)

  const urlParams = new URLSearchParams(window.location.search);
  const kioskId = urlParams.get("kioskid");

  useEffect(() => {
    // Inject the SVG markup into the container
    if (svgContainerRef.current) {
      console.log('svgContainerRef.current', svgContainerRef.current)
      svgContainerRef.current.innerHTML = mapSvg
    }

    const elem = document.getElementById('ikr_svg')
    const panzoom = Panzoom(elem, {
      maxScale: 5,
      minScale: 1,
      startScale: 1,
      contain: 'outside'
    })
    // panzoom.pan(10, 10)
    // panzoom.zoom(2, { animate: true })

    elem.parentElement.addEventListener('wheel', panzoom.zoomWithWheel);


    // document.addEventListener("DOMContentLoaded", () => {

    // Tooltip
    function attachTooltip(targetEl, text) {
      const tooltip = document.createElement("div");
      tooltip.textContent = text;
      Object.assign(tooltip.style, {
        position: "absolute",
        padding: "6px 10px",
        background: "rgba(0,0,0,0.85)",
        color: "#fff",
        fontSize: "12px",
        borderRadius: "4px",
        pointerEvents: "none",
        opacity: "0",
        transform: "translate(10px, 10px)",
        transition: "opacity 0.15s ease",
        zIndex: "9999",
        whiteSpace: "nowrap",
      });
      document.body.appendChild(tooltip);

      targetEl.addEventListener("mouseenter", () => {
        tooltip.style.opacity = "1";
      });
      targetEl.addEventListener("mousemove", (e) => {
        const x = e.pageX || (e.clientX + window.scrollX);
        const y = e.pageY || (e.clientY + window.scrollY);
        tooltip.style.left = x + 10 + "px";
        tooltip.style.top = y + 10 + "px";
      });
      targetEl.addEventListener("mouseleave", () => {
        tooltip.style.opacity = "0";
      });

      return tooltip;
    }

    // Select dropdown value
    function selectDropdownValue(value) {
      const dropdown =
        document.querySelector("#startPlotSelect") ||
        document.querySelector("select");
      if (!dropdown) return;
      const opt = dropdown.querySelector(`option[value="${CSS.escape(value)}"]`);
      if (opt) {
        dropdown.value = value;
        dropdown.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }


    /**
     * Create an outer "ring" by cloning the SVG element and styling it with a fat stroke.
     * We animate the stroke-width and stroke-opacity to simulate a glowing ring outside the shape.
     * No scaling/filters needed; purely stroke-based animation.
     */
    function startStrokeRingGlow(el) {
      // Find the nearest SVG parent to ensure we insert into the same coordinate space
      const parent = el.parentNode;
      if (!parent) return () => { };

      // Clone a shallow copy to avoid duplicating child IDs deeply; enough for path/shape/group
      const ring = el.cloneNode(false);
      // Avoid duplicate IDs
      ring.removeAttribute("id");

      // Make it only a stroke (no fill), sitting visually "outside" the element boundary
      ring.setAttribute("fill", "none");
      ring.setAttribute("stroke", "gold");
      ring.setAttribute("stroke-linejoin", "round");
      ring.setAttribute("stroke-linecap", "round");
      ring.style.pointerEvents = "none"; // don't block interactions with the real element

      // Base stroke parameters
      const BASE = 6;   // base stroke width (outer ring thickness)
      const AMP = 6;   // how much to grow/shrink the stroke width
      ring.setAttribute("stroke-width", String(BASE));

      // Optional dashed outline motion (uncomment if you want a subtle traveling ring)
      // ring.setAttribute("stroke-dasharray", "12 10");

      // Insert ring directly after the element so it renders on top
      if (el.nextSibling) {
        parent.insertBefore(ring, el.nextSibling);
      } else {
        parent.appendChild(ring);
      }

      // Animate with requestAnimationFrame
      let rafId = null;
      let t0 = null;

      const reduceMotion =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      function frame(ts) {
        if (t0 == null) t0 = ts;
        const t = (ts - t0) / 1000; // seconds

        // Smooth pulse between BASE and BASE+AMP via sine
        const s = (Math.sin(t * (reduceMotion ? 2.5 : 4)) + 1) / 2; // 0..1
        const width = BASE + AMP * s;
        ring.setAttribute("stroke-width", width.toFixed(2));

        // Fade opacity slightly to enhance glow feel
        const op = 0.5 + 0.5 * (1 - s); // 1..0.5
        ring.setAttribute("stroke-opacity", op.toFixed(2));

        // Optional: dash offset for subtle moving ring (if using dasharray)
        // const dashOffset = (t * 60) % 100;
        // ring.setAttribute("stroke-dashoffset", dashOffset.toFixed(1));

        rafId = requestAnimationFrame(frame);
      }

      rafId = requestAnimationFrame(frame);

      // Return a stop function to cleanup
      return function stop() {
        if (rafId) cancelAnimationFrame(rafId);
        if (ring && ring.parentNode) ring.parentNode.removeChild(ring);
      };
    }

    function stopOnFirstInteraction(el, stopFn) {
      const onceOpts = { once: true, passive: true };
      const stopAndCleanup = () => {
        stopFn();
        cleanup();
      };
      function cleanup() {
        el.removeEventListener("mouseenter", stopAndCleanup);
        el.removeEventListener("click", stopAndCleanup);
        el.removeEventListener("touchstart", stopAndCleanup);
        document.removeEventListener("keydown", stopAndCleanup);
      }
      el.addEventListener("mouseenter", stopAndCleanup, onceOpts);
      el.addEventListener("click", stopAndCleanup, onceOpts);
      el.addEventListener("touchstart", stopAndCleanup, onceOpts);
      document.addEventListener("keydown", stopAndCleanup, onceOpts);
    }

    if (kioskId) {
      const kosic_element = document.querySelector(`#${CSS.escape(kioskId)}`);
      console.log('kosic_element', kosic_element)
      if (!kosic_element) return;

      // Keep the element's own fill simple; the glow is handled by the stroked clone
      kosic_element.style.fill = "green";

      // Start the outer ring glow
      const stopGlow = startStrokeRingGlow(kosic_element);
      // Stop glow on first interaction (hover/click/touch/key)
      stopOnFirstInteraction(kosic_element, stopGlow);

      // Hover effects for the base element
      kosic_element.addEventListener("mouseenter", () => {
        kosic_element.style.fill = "red";// Full JS: outer "glow ring" using a stroked SVG <use> overlay that pulses until user interacts

        // document.addEventListener("DOMContentLoaded", () => {

        // Tooltip
        function attachTooltip(targetEl, text) {
          const tooltip = document.createElement("div");
          tooltip.textContent = text;
          Object.assign(tooltip.style, {
            position: "absolute",
            padding: "6px 10px",
            background: "rgba(0,0,0,0.85)",
            color: "#fff",
            fontSize: "12px",
            borderRadius: "4px",
            pointerEvents: "none",
            opacity: "0",
            transform: "translate(10px, 10px)",
            transition: "opacity 0.15s ease",
            zIndex: "9999",
            whiteSpace: "nowrap",
          });
          document.body.appendChild(tooltip);

          targetEl.addEventListener("mouseenter", () => {
            tooltip.style.opacity = "1";
          });
          targetEl.addEventListener("mousemove", (e) => {
            const x = e.pageX || (e.clientX + window.scrollX);
            const y = e.pageY || (e.clientY + window.scrollY);
            tooltip.style.left = x + 10 + "px";
            tooltip.style.top = y + 10 + "px";
          });
          targetEl.addEventListener("mouseleave", () => {
            tooltip.style.opacity = "0";
          });
        }

        /**
         * Create an OUTER "ring" by adding a <use> overlay that references the target element.
         * We insert it *BEHIND* the element so the inner half of the stroke is hidden,
         * making it look like a ring outside the shape. We animate stroke-width & opacity.
         */
        function startStrokeRingGlow(el) {
          const svg =
            el.ownerSVGElement || el.closest && el.closest("svg");
          if (!svg) {
            console.warn("Target is not inside an SVG.");
            return () => { };
          }

          const ns = "http://www.w3.org/2000/svg";
          const xlink = "http://www.w3.org/1999/xlink";

          // Build <use xlink:href="#id" />
          const ring = document.createElementNS(ns, "use");
          // Modern and legacy hrefs for compatibility
          ring.setAttribute("href", `#${el.id}`);
          ring.setAttributeNS(xlink, "xlink:href", `#${el.id}`);

          // Stroke-only appearance
          ring.setAttribute("fill", "none");
          ring.setAttribute("stroke", "gold");
          ring.setAttribute("stroke-linejoin", "round");
          ring.setAttribute("stroke-linecap", "round");
          // Keep stroke width constant if the SVG is zoomed/scaled
          ring.setAttribute("vector-effect", "non-scaling-stroke");
          // Do not block pointer events to the real element
          ring.style.pointerEvents = "none";

          // Base stroke settings
          const BASE = 6; // base ring thickness
          const AMP = 6; // pulsation amplitude

          ring.setAttribute("stroke-width", String(BASE));
          ring.setAttribute("stroke-opacity", "0.9");

          // Insert the ring *before* the element so it renders behind it.
          // This hides the inner half of the stroke, making it look like an outer-only ring.
          const parent = el.parentNode;
          if (!parent) return () => { };
          parent.insertBefore(ring, el);

          // Animate via rAF
          let rafId = null;
          let t0 = null;

          const reduceMotion =
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

          function frame(ts) {
            if (t0 == null) t0 = ts;
            const t = (ts - t0) / 1000; // seconds

            // Smooth pulse
            const speed = reduceMotion ? 2.0 : 4.0;
            const s = (Math.sin(t * speed) + 1) / 2; // 0..1
            const width = BASE + AMP * s;
            ring.setAttribute("stroke-width", width.toFixed(2));

            // Opacity breathing
            const op = 0.45 + 0.45 * (1 - s); // 0.9..0.45
            ring.setAttribute("stroke-opacity", op.toFixed(2));

            rafId = requestAnimationFrame(frame);
          }

          rafId = requestAnimationFrame(frame);

          // Return a stop func
          return function stop() {
            if (rafId) cancelAnimationFrame(rafId);
            if (ring && ring.parentNode) ring.parentNode.removeChild(ring);
          };
        }

        // Stop the glow on first interaction with element
        function stopOnFirstInteraction(el, stopFn) {
          const onceOpts = { once: true, passive: true };
          const stopAndCleanup = () => {
            stopFn();
            cleanup();
          };
          function cleanup() {
            el.removeEventListener("mouseenter", stopAndCleanup);
            el.removeEventListener("click", stopAndCleanup);
            el.removeEventListener("touchstart", stopAndCleanup);
            document.removeEventListener("keydown", stopAndCleanup);
          }
          el.addEventListener("mouseenter", stopAndCleanup, onceOpts);
          el.addEventListener("click", stopAndCleanup, onceOpts);
          el.addEventListener("touchstart", stopAndCleanup, onceOpts);
          document.addEventListener("keydown", stopAndCleanup, onceOpts);
        }

        if (kioskId) {
          const kosic_element = document.querySelector(`#${CSS.escape(kioskId)}`);
          console.log("kosic_element", kosic_element)
          if (!kosic_element) {
            console.warn("No element found with id:", kioskId);
            return;
          }

          // Base fill; ring appears outside because overlay is behind
          kosic_element.style.fill = "green";

          // Start outer ring glow
          const stopGlow = startStrokeRingGlow(kosic_element);
          // Remove glow on first interaction
          stopOnFirstInteraction(kosic_element, stopGlow);

          // Hover effects for the base element
          kosic_element.addEventListener("mouseenter", () => {
            kosic_element.style.fill = "red";
          });
          kosic_element.addEventListener("mouseleave", () => {
            kosic_element.style.fill = "green";
          });

          // Tooltip
          attachTooltip(kosic_element, "You are here");

          // Also sync when clicking
          kosic_element.addEventListener("click", () => {
            selectDropdownValue(dropdownValue);
          });
        }
        // });

      });
      kosic_element.addEventListener("mouseleave", () => {
        kosic_element.style.fill = "green";
      });

      // Tooltip
      attachTooltip(kosic_element, "You are here");

      kosic_element.addEventListener("click", () => {
        // selectDropdownValue(dropdownValue);
      });
    }
    // });

  }, [])

  const handleFindRoute = (destination: string) => {

    const vertices = [];
    const ploatLines = {};
    const edges = [];
    const graph = {};


    const startSelect = kioskIdToDropdownValue(kioskId);
    const endSelect = destination;
    const start = startSelect;
    const end = endSelect;
    const svg = document.querySelector('#ikr_svg');

    // Extract vertices from ploa_* lines
    if (svg) {
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
      Array.from(svg.querySelectorAll('line.map_road')).forEach(line => {
        const id = line.getAttribute('id');

        if (id && id.startsWith('road_')) {
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
        if (id && id.startsWith('ploas_')) {
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
      const allNodes = [...new Set([...vertices.map(v => v.id), ...route.flat()])];
      allNodes.forEach(node => {
        graph[node] = [];
      });

      console.log('graph', graph)

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
    }

    findAndHighlightRoute(vertices, edges, graph, start, end, svg);

  }

  const onZoomIn = () => {}
  const onZoomOut = () => {}
  const onZoomRest = () => {}

  return (
    <>
      <div className="flex justify-between w-full absolute top-0 left-0 z-50 p-4 overflow-auto gap-6">
        <div className='shadow-lg'>
          <SelectLocation
            value={toDestination}
            onChange={(value) => {
              console.log('value', value);
              setToDestination(value);
              handleFindRoute(value);
            }}
          />
        </div>
        <div className='flex gap-4'>
          <Button id="zoom_in" size={"icon"} variant={"outline"} className='shadow-lg cursor-pointer'>
            <ZoomIn className='size-4' />
          </Button>
          <Button id="zoom_out" size={"icon"} variant={"outline"} className='shadow-lg cursor-pointer'>
            <ZoomOut className='size-4' />
          </Button>
          <Button id="reset" size={"icon"} variant={"outline"} className='shadow-lg cursor-pointer'>
            <RefreshCcwIcon className='size-4' />
          </Button>
        </div>
      </div>
      <div className="h-full svg-wrap" id="svgContainer" ref={svgContainerRef} />
    </>
  );
}
