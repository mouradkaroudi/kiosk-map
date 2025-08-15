import React, { useEffect, useRef } from 'react'
import mapSvg from './assets/map.svg?raw'
import { initRouting } from './utils/initRouting.js'

export default function App() {
  const svgContainerRef = useRef(null)

  useEffect(() => {
    // Inject the SVG markup into the container
    if (svgContainerRef.current) {
      svgContainerRef.current.innerHTML = mapSvg
    }
    // Initialize routing logic after SVG is in the DOM
    try {
      initRouting()
    } catch (e) {
      console.error('Init failed:', e)
    }
  }, [])

  return (
    <div className="app">
      <div className="toolbar">
        <div style={{display:'flex', gap:'0.5rem', alignItems:'center'}}>
          <label>Start:</label>
          <select id="start" style={{minWidth: 200}}></select>
          <input id="startInput" placeholder="or type start plot" />
        </div>
        <div style={{display:'flex', gap:'0.5rem', alignItems:'center'}}>
          <label>End:</label>
          <select id="end" style={{minWidth: 200}}></select>
          <input id="endInput" placeholder="or type end plot" />
        </div>
        <div className="controls">
          <button id="findRoute">Find Route</button>
          <button id="zoom_in">＋</button>
          <button id="zoom_out">－</button>
          <button id="reset">Reset</button>
        </div>
      </div>

      <div className="canvas">
        <div className="svg-wrap" id="svgContainer" ref={svgContainerRef} />
      </div>

      <div className="legend">
        <strong>Path:</strong> <span id="pathDisplay"></span>
      </div>
    </div>
  )
}
