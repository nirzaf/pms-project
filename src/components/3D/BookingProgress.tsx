import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { Group } from 'three';

const steps = [
  'Select Dates',
  'Choose Room',
  'Add Extras',
  'Confirm Booking'
];

export const BookingProgress = () => {
  const groupRef = useRef<Group>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const time = clock.getElapsedTime();
      groupRef.current.position.y = Math.sin(time) * 0.1 + 2;
      groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 2, 0]}>
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const angle = (index / steps.length) * Math.PI * 2;
        const radius = 3;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;

        return (
          <group key={step} position={[x, 0, z]} rotation={[0, -angle, 0]}>
            <Text
              position={[0, 0, 0]}
              fontSize={0.3}
              color={isActive ? '#60a5fa' : '#94a3b8'}
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.02}
              outlineColor="#1e293b"
            >
              {step}
            </Text>
            {isActive && (
              <mesh position={[0, -0.5, 0]}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={0.5} />
              </mesh>
            )}
          </group>
        );
      })}
    </group>
  );
};