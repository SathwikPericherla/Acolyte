"use client"
import React, { useEffect, useRef, useState } from 'react'
import { fabric } from "fabric"
import { CanvasInitializer } from '@/components/canvas/CanvasInitializer';
import { CanvasProvider, useCanvas } from '@/context/CanvasContext';

type Props = {}

const page = (props: Props) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const fabricCanvas = useRef<fabric.Canvas | null>(null);
    const [rect, setRect] = useState<{ width: number, height: number }>({ width: 800, height: 900 })

    useEffect(() => {
        if (!fabricCanvas.current) return

        const rectObj = new fabric.Rect({
            left: 100,
            top: 100,
            width: 200,
            height: 150,
            fill: "#ffeb3b", // Background color (similar to sticky notes)
            rx: 10, // Rounded corners (horizontal radius)
            ry: 10, // Rounded corners (vertical radius)
            selectable:true,
            shadow: {
                color: "rgba(0,0,0,0.3)",
                blur: 10,
                offsetX: 5,
                offsetY: 5,
            },
        });
        
        fabricCanvas.current.add(rectObj)
    }, [fabricCanvas.current])
    return (
        <div >

            <canvas className='border-2 m-6' ref={canvasRef} ></canvas>
            <CanvasInitializer canvasRef={canvasRef} fabricCanvas={fabricCanvas} rect={rect} />


        </div>
    )
}

export default page