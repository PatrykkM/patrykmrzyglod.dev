import { useRef, useEffect } from "react";
import * as THREE from "three";
// @ts-ignore

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Planet3Dmodel = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  let model = useRef<THREE.Object3D>();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(33, 1, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0);

    const adjustSize = () => {
      const width = window.innerWidth < 1024 ? 300 : 470;
      const height = window.innerWidth < 1024 ? 300 : 470;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    adjustSize();

    mountRef.current?.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load(
      new URL(
        "../../assets/PlanetModel3D-GLB/stylized_planet.glb",
        import.meta.url
      ).href,
      (gltf: any) => {
        model.current = gltf.scene;
        scene.add(gltf.scene);
        gltf.scene.rotation.y = Math.PI / 4;
      },
      undefined,
      (error: Error) => {
        console.error("Error loading model:", error);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);

      if (model.current) {
        model.current.rotation.y += 0.001;
      }

      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener("resize", adjustSize);

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", adjustSize);
    };
  }, []);

  return (
    <div className="bg-Grey-Wave dark:bg-light-mode-items">
      <div ref={mountRef} className="w-full h-full flex justify-center"></div>
    </div>
  );
};

export default Planet3Dmodel;
