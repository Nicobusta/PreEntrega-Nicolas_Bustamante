import React from 'react'
import { useLayoutEffect, useRef } from "react";
import { OrbitControls, useGLTF, useScroll } from "@react-three/drei";
import { useFrame} from "@react-three/fiber";
import {gsap} from 'gsap';
import Diseno from "../Diseno";

export function Taza(props) {
  const { nodes, materials } = useGLTF("/taza.glb");

  const scrollControl=useScroll();
  const timeLine=useRef();

  const grupoGeneralRef=useRef();

  useLayoutEffect(() => {
    timeLine.current=gsap.timeline();

    timeLine.current.to(
      grupoGeneralRef.current.rotation,
      {
        y:Math.PI,
        duration:3,
      },
      0
    )

    timeLine.current.to(
      grupoGeneralRef.current.position,
      {
        x:-3,
        y:-1,
        duration:3,
      },
      0
    )

  }, [])

  useFrame( () => {
    timeLine.current.seek(
      scrollControl.offset*timeLine.current.duration()
      )
     
  })  

  return (
    <>
      <group {...props} dispose={null}  ref={grupoGeneralRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mug_low_A4_0.geometry}
      >
        <Diseno texturaURL="/diseno.png" /> 
      </mesh>
      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mug_low_da5al_0.geometry}
        material={materials.da5al}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mug_low_Mat_0.geometry}
        material={materials.material_3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mug_low_yad_0.geometry}
        material={materials.material_3}
      />
      </group>
      <OrbitControls enableZoom={false} enableRotate={false} />
    </>
    
  );
}

useGLTF.preload("/taza.glb");



