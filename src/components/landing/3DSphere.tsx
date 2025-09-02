"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { cn } from "@/lib/utils";
import { MyModel } from "../3Dmodels/EyeSphere";

type Props = { className?: string }

const SpinningSphere = ({ className }: Props) => {
  return (
    <div className={cn("relative h-full w-full", className)}>
      <Canvas className="!absolute inset-0" camera={{ position: [-10, -10, -15] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 6, 3]} intensity={0.8} />
        <MyModel />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
};

export default SpinningSphere;
