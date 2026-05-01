import React, { useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky, useGLTF, useAnimations, Environment, Html, useProgress } from '@react-three/drei';
import * as THREE from 'three';
import { AlertCircle } from 'lucide-react';

// Loader component to show progress
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl">
        <div className="w-12 h-12 border-4 border-amber-primary border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-white font-mono font-bold text-lg">{progress.toFixed(0)}% loaded</p>
        <p className="text-gray-400 text-xs mt-2">Preparing 3D environment...</p>
      </div>
    </Html>
  );
}

// Model component
function Model({ url }) {
  // useGLTF automatically handles draco compression using a Google CDN decoder
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    // Play the first animation if available
    const actionNames = Object.keys(actions);
    if (actionNames.length > 0 && actions[actionNames[0]]) {
      actions[actionNames[0]]?.play();
    }
  }, [actions]);

  // Position and scale based on user's vanilla code
  return <primitive object={scene} position={[1, 1, 0]} scale={0.01} />;
}

// Preload the model to avoid pop-in
useGLTF.preload('https://threejs.org/examples/models/gltf/LittlestTokyo.glb');

const ThreeViewer = () => {
  const [error, setError] = React.useState(null);

  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-dark-bg p-8 text-center">
        <div className="w-16 h-16 rounded-2xl bg-critical/10 flex items-center justify-center border border-critical/20 text-critical mb-6">
          <AlertCircle size={32} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">3D View Unavailable</h3>
        <p className="text-white/40 text-sm max-w-md">The immersive tour could not be loaded. This might be due to your connection or browser compatibility.</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-2 bg-white/5 hover:bg-white/10 rounded-full text-xs font-bold transition-all border border-white/10"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[#111] cursor-grab active:cursor-grabbing">
      <ErrorBoundary onError={setError}>
        <Canvas
          camera={{ position: [5, 2, 8], fov: 40 }}
          gl={{ toneMapping: THREE.ACESFilmicToneMapping, antialias: true }}
        >
          <Suspense fallback={<Loader />}>
            <Sky 
              distance={10000} 
              turbidity={0} 
              rayleigh={3} 
              mieDirectionalG={0.7} 
              sunPosition={[-0.8, 0.19, 0.56]} 
            />
            <Environment preset="city" />
            <ambientLight intensity={1.2} />
            <directionalLight position={[-0.8, 0.19, 0.56]} intensity={1.5} castShadow />
            <Model url="https://threejs.org/examples/models/gltf/LittlestTokyo.glb" />
            <OrbitControls 
              enableDamping 
              target={[0, 0.7, 0]} 
              makeDefault
              minDistance={2}
              maxDistance={20}
            />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

// Simple Error Boundary Wrapper
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error) { this.props.onError(error); }
  render() { return this.props.children; }
}

export default ThreeViewer;
