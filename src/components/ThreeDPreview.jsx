import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

function Shirt({ texture }) {
  const map = useTexture(texture);
  return (
    <mesh scale={[2.5, 3, 1]}>
      <boxGeometry args={[1, 1.3, 0.1]} />
      <meshStandardMaterial map={map} />
    </mesh>
  );
}

export default function ThreeDPreview({ imageUrl }) {
  return (
    <div className="h-[400px] w-full">
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} />
        <Shirt texture={imageUrl} />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
