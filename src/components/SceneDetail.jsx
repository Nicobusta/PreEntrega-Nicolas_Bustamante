import React from 'react'
import { Canvas } from '@react-three/fiber'
import  { Taza } from './TazaDetail'
import {Environment, ScrollControls } from '@react-three/drei'
import "./ItemDetail.scss"

const Scene = () => {
  
  return (
    <div className={"scene"}>
    <Canvas className={"canvas"} camera={{fov:20, position: [0, 0, 8.3]}}>
      <ScrollControls pages={1} damping={0.25}>
        <Taza/>
      </ScrollControls>
      <ambientLight intensity={1} color={0xffffff}/>
      <Environment preset="city" />
      
    </Canvas>
    </div>
  )
}

export default Scene