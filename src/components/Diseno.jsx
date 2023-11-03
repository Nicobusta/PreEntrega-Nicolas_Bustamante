import React from 'react';
import * as THREE from 'three';


const Diseno = ({ texturaURL }) => {
    const estampado = new THREE.TextureLoader().load(texturaURL);

    estampado.repeat.set(1.5, 3); // Escala la textura (repetición)
estampado.offset.set(-0.15, 0);

    const textura = new THREE.MeshStandardMaterial({
        roughness: 0.5,
        metalness: 0.1,
        envMapIntensity: 1,
        map: estampado
    });

    return (
        <meshStandardMaterial {...textura} />
    );
}

export default Diseno;
