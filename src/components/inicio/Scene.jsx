import React from 'react'
import { Canvas } from '@react-three/fiber'
import  { Taza } from './Taza'
import {Environment, ScrollControls } from '@react-three/drei'

const Scene = () => {
  return (
    <div className={"scene_container"}>
    <Canvas camera={{fov:35, position: [0, 0, 8.3]}}>
      <ScrollControls pages={1} damping={0.25}>
        <Taza position={[2, 1.2, 0]}/>
      </ScrollControls>
      <ambientLight intensity={2} color={0xffffff}/>
      <Environment preset="city" />
      
    </Canvas>
    </div>
  )
}

export default Scene