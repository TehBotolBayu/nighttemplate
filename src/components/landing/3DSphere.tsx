"use client";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { MyModel } from "../3Dmodels/EyeSphere";

const SpinningSphere = () => {
//   const sphereRef = useRef<Mesh>(null!);

  return (
    <div className="h-screen w-[80vw] absolute top-0 right-0">
      <Canvas camera={{ position: [-10, -10, -15] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} />
        {/* <mesh ref={sphereRef} rotation={[0, 0, 0]}>
          <sphereGeometry args={[1.5, 64, 64]} />
          <meshStandardMaterial color="#6366f1" wireframe />
        </mesh> */}
        <MyModel />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
};

export default SpinningSphere;
