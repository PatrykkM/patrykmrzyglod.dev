import * as THREE from "three";
// @ts-ignore
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import React, { useEffect, useRef, useState } from "react";
import { PiArrowBendLeftDownFill } from "react-icons/pi";

const Tesla3Dmodel: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const setRendererSize = () => {
      const width = window.innerWidth >= 1024 ? 400 : 310;
      const height = window.innerWidth >= 1024 ? 400 : 310;
      return { width, height };
    };

    const { width, height } = setRendererSize();

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.01, 1000);
    camera.position.set(90, 10, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      premultipliedAlpha: false,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    rendererRef.current = renderer;
    mountRef.current?.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(1, 1, 0).normalize();
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    loader.load(
      new URL(
        "../../../../public/three/tesla-model-3d/tesla_2018_model_3.glb",
        import.meta.url
      ).href,
      (gltf: any) => {
        const model = gltf.scene;
        model.scale.set(0.2, 0.2, 0.2);
        model.position.set(0, 0, 0);
        scene.add(model);
        camera.lookAt(model.position);
        setIsLoading(false);
      },
      undefined,
      (error: Error) => {
        console.error("Error loading model:", error);
      }
    );

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableRotate = true;
    controls.enableZoom = false;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const { width, height } = setRendererSize();
      const camera = cameraRef.current;
      const renderer = rendererRef.current;
      if (camera && renderer) {
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return (
    <section className="dark:text-main-text-light flex flex-col items-center justify-center text-white dark:text-black">
      <div className="ml-32 mt-2 flex items-center self-center">
        <div className="mt-6 text-3xl">
          <PiArrowBendLeftDownFill />
        </div>
        <p>Try to rotate me!</p>
      </div>
      <div
        ref={mountRef}
        className="relative flex items-center justify-center  bg-transparent "
      >
        {isLoading ? (
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform">
            <div className="h-20 w-20 animate-spin rounded-full  border-2 border-t-2 border-indigo-500 border-t-transparent sm:h-32 sm:w-32"></div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Tesla3Dmodel;
