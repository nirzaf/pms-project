import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Color } from 'three';

export const WaveAnimation = () => {
  const meshRef = useRef<Mesh>(null);
  const color1 = new Color('#2563eb'); // Blue
  const color2 = new Color('#0ea5e9'); // Light blue

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      const position = meshRef.current.geometry.attributes.position;
      const material = meshRef.current.material as import('three').MeshStandardMaterial;
      
      // Animate color
      const mixedColor = color1.clone().lerp(color2, Math.sin(time * 0.2) * 0.5 + 0.5);
      material.color = mixedColor;
      
      for (let i = 0; i < position.count; i++) {
        const x = position.getX(i);
        const y = position.getY(i);
        
        // Create more complex wave patterns
        const waveX1 = 0.4 * Math.sin(x * 2 + time * 0.7);
        const waveX2 = 0.2 * Math.sin(x * 3 + time * 0.4);
        const waveY1 = 0.3 * Math.sin(y * 2 + time * 0.7);
        const waveY2 = 0.15 * Math.cos(y * 5 + time * 0.5);
        
        position.setZ(i, waveX1 + waveX2 + waveY1 + waveY2);
      }
      
      position.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeGeometry args={[30, 30, 64, 64]} />
      <meshStandardMaterial 
        color={color1}
        wireframe={false}
        transparent
        opacity={0.8}
        metalness={0.2}
        roughness={0.1}
      />
    </mesh>
  );
};