"use client"
import React, { useEffect } from 'react'

import Granim from "granim";

export default function GranimWrapper() {

    useEffect(() => {
    new Granim({
      element: '#granim-canvas',
      name: 'granim',
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [
            ['#0f2027', '#203a43'],       // Deep teal to charcoal
            ['#141e30', '#243b55'],       // Navy to steel blue
            ['#232526', '#414345'],       // Gunmetal to dark gray
            ['#000000', '#434343'],       // Pure black to soft black
          ]
        }
      }
    });

  }, [])
  return (
    <canvas className="w-full h-screen absolute z-0 " id="granim-canvas"></canvas>
  )
}

