import * as THREE from "three";
// @ts-expect-error - GLTFLoader types not recognized
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// @ts-expect-error - GLTF types not recognized
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import { useEffect, useRef } from "react";
const Planet3Dmodel = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);

    renderer.setPixelRatio(window.devicePixelRatio);

    const adjustSizeAndScale = (model?: THREE.Object3D) => {
      const scaleRatio = window.devicePixelRatio;
      const width =
        window.innerWidth < 1024 ? 300 * scaleRatio : 470 * scaleRatio;
      const height =
        window.innerWidth < 1024 ? 300 * scaleRatio : 470 * scaleRatio;
      renderer.setSize(width / scaleRatio, height / scaleRatio);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      if (model) {
        const scale = window.innerWidth < 1024 ? 1.9 : 3.2;
        model.scale.set(scale, scale, scale);
      }
    };

    if (currentMount) {
      while (currentMount.firstChild) {
        currentMount.removeChild(currentMount.firstChild);
      }
      currentMount.appendChild(renderer.domElement);
    }

    const loader = new GLTFLoader();
    let model: THREE.Object3D<THREE.Object3DEventMap>;

    loader.load(
      new URL(
        "../../../../public/three/planet-model-3d/stylized_planet.glb",
        import.meta.url
      ).href,
      (gltf: GLTF) => {
        model = gltf.scene;
        scene.add(model);
        gltf.scene.rotation.y = Math.PI / 4;
        adjustSizeAndScale(model);
      },
      undefined,
      (error: ErrorEvent) => {
        console.error("Error loading model:", error);
      }
    );

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (model) {
        model.rotation.y += 0.002;
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => adjustSizeAndScale(model);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);

      if (currentMount) {
        while (currentMount.firstChild) {
          currentMount.removeChild(currentMount.firstChild);
        }
      }

      scene.clear();
      renderer.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="dark:bg-primary-400 bg-primary-300">
      <div ref={mountRef} className="flex h-full w-full justify-center"></div>
    </div>
  );
};

export default Planet3Dmodel;
