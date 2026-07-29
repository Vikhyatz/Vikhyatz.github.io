"use client"
import React, { useEffect } from 'react'


// DIFFERENT TRIES BEFORE FINALIZING COLORBENDS AS THE FINAL BACKGROUND T_T
// import DotField from './DotField';
// import SoftAurora from './SoftAurora';
// import LightPillar from './LightPillar'
// import Dither from './Dither'
import ColorBends from './ColorBends'

export default function BackgroundWrapper() {

    return (

        <div className="w-full h-screen fixed">

            <ColorBends
                colors={["#003153"]}
                rotation={90}
                speed={0.2}
                scale={1}
                frequency={1}
                warpStrength={1}
                mouseInfluence={2}
                noise={0.15}
                parallax={0.5}
                iterations={1}
                intensity={1.5}
                bandWidth={6}
                transparent
                autoRotate={0}
                color="#003153"
            />
        </div>
    )
}

