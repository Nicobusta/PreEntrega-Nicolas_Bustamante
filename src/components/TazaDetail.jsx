import React from 'react'
import { OrbitControls, useGLTF} from "@react-three/drei";
import Diseno from "./Diseno";
import { useContext} from 'react'
import { CartContext } from '../context/ShoppingCartContext';

export function Taza(props) {


  const {img} = useContext(CartContext);
  

  
  const { nodes, materials } = useGLTF("/taza.glb");
  return (
    <>
    
      <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mug_low_A4_0.geometry}
      >
       
        <Diseno texturaURL={img} />
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
    
      <OrbitControls enableZoom={false} enableRotate={true} autoRotate />
    </>
    
  );
}

useGLTF.preload("/taza.glb");



