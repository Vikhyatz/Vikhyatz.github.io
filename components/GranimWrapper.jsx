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
            ['#232a34', '#181a1b'],       // Darker gunmetal to near-black
            ['#22304a', '#10151c'],       // Deep navy to charcoal
            ['#1a232b', '#434343'],       // Midnight blue to soft black
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

