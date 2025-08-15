function ikrZoom(ikrsvg) {
  let isPanning = false;
  let startX = 0;
  let startY = 0;

  const step = .2;
  const maxScale = 2;
  const minScale = 1;
  let currentScale = 1;

  const ts = {
    scale: 1,
    translate: { x: 0, y: 0 },
  };

  const zoomInBtn = document.getElementById("zoom_in");
  const zoomOutBtn = document.getElementById("zoom_out");
  const resetBtn = document.getElementById("reset");

  // Initialize transform
  applyTransform();

  // Zoom In (optional external control)
  if (zoomInBtn) {
    zoomInBtn.addEventListener("click", () => {
      if (ts.scale < maxScale) {
        ts.scale += step;
        currentScale = ts.scale;
        applyTransform();
      }
    });
  }

  // Zoom Out (optional external control)
  if (zoomOutBtn) {
    zoomOutBtn.addEventListener("click", () => {
      if (ts.scale > minScale) {
        ts.scale -= step;
        currentScale = ts.scale;
        applyTransform();
      }
    });
  }

  // Reset (optional external control)
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      ts.scale = 1;
      ts.translate.x = 0;
      ts.translate.y = 0;
      currentScale = 1;
      applyTransform();
    });
  }

  // Mouse down (start panning)
  ikrsvg.addEventListener("mousedown", (e) => {
    isPanning = true;
    startX = e.clientX - ts.translate.x;
    startY = e.clientY - ts.translate.y;
    ikrsvg.style.cursor = "grabbing";
  });

  // Mouse up (stop panning)
  ikrsvg.addEventListener("mouseup", () => {
    isPanning = false;
    ikrsvg.style.cursor = "grab";
  });

  // Mouse leave (stop panning)
  ikrsvg.addEventListener("mouseleave", () => {
    isPanning = false;
    ikrsvg.style.cursor = "grab";
  });

  // Mouse move (perform panning)
  ikrsvg.addEventListener("mousemove", (e) => {
    if (!isPanning) return;
    ts.translate.x = e.clientX - startX;
    ts.translate.y = e.clientY - startY;
    applyTransform();
  });

  // Smooth transform application
  function applyTransform() {
    ikrsvg.style.transition = "transform 0.2s ease";
    ikrsvg.style.transformOrigin = "center center";
    ikrsvg.style.transform = `translate(${ts.translate.x}px, ${ts.translate.y}px) scale(${ts.scale})`;
  }
}
