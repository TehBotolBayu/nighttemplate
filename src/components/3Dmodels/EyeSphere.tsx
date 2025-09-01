import { useGLTF } from "@react-three/drei";

export function MyModel() {
  const { scene } = useGLTF("/models/scifi.glb");
  return <primitive object={scene} scale={12} />;
}

// ✅ Preload the model so it’s cached before use
useGLTF.preload("/models/scifi.glb");
