import * as THREE from "three";
// @ts-expect-error - OrbitControls types not recognized
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// @ts-expect-error - GLTFLoader types not recognized
import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import React, { useEffect, useRef, useState } from "react";
import { PiArrowBendLeftDownFill } from "react-icons/pi";

interface ThreeJSRefs {
  scene: THREE.Scene | null;
  camera: THREE.PerspectiveCamera | null;
  renderer: THREE.WebGLRenderer | null;
  controls: OrbitControls | null;
}

const Tesla3Dmodel: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const threeRefs = useRef<ThreeJSRefs>({
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  const getRendererSize = () => ({
    width: window.innerWidth >= 1024 ? 400 : 310,
    height: window.innerWidth >= 1024 ? 400 : 310,
  });

  const setupScene = () => {
    const scene = new THREE.Scene();
    scene.background = null;
    threeRefs.current.scene = scene;
    return scene;
  };

  const setupCamera = (width: number, height: number) => {
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.01, 1000);
    camera.position.set(90, 10, 0);
    threeRefs.current.camera = camera;
    return camera;
  };

  const setupRenderer = (width: number, height: number) => {
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      premultipliedAlpha: false,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    threeRefs.current.renderer = renderer;
    return renderer;
  };

  const setupLights = (scene: THREE.Scene) => {
    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(1, 1, 0).normalize();
    scene.add(directionalLight);
  };

  const setupControls = (
    camera: THREE.PerspectiveCamera,
    domElement: HTMLCanvasElement
  ) => {
    const controls = new OrbitControls(camera, domElement);
    controls.enableRotate = true;
    controls.enableZoom = false;
    threeRefs.current.controls = controls;
    return controls;
  };

  const loadModel = (scene: THREE.Scene, camera: THREE.PerspectiveCamera) => {
    const loader = new GLTFLoader();
    loader.load(
      "/three/tesla-model-3d/tesla_2018_model_3.glb",
      (gltf: GLTF) => {
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
  };

  useEffect(() => {
    const refs = threeRefs.current;
    const mount = mountRef.current;

    const { width, height } = getRendererSize();
    const scene = setupScene();
    const camera = setupCamera(width, height);
    const renderer = setupRenderer(width, height);

    if (mount) {
      const existingCanvas = mount.querySelector("canvas");
      if (existingCanvas) {
        mount.removeChild(existingCanvas);
      }
      mount.appendChild(renderer.domElement);
    }

    setupLights(scene);
    const controls = setupControls(camera, renderer.domElement);
    loadModel(scene, camera);

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const { width, height } = getRendererSize();
      if (refs.camera && refs.renderer) {
        refs.camera.aspect = width / height;
        refs.camera.updateProjectionMatrix();
        refs.renderer.setSize(width, height);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      if (mount && refs.renderer) {
        mount.removeChild(refs.renderer.domElement);
      }

      if (refs.scene) {
        refs.scene.clear();
      }

      if (refs.renderer) {
        refs.renderer.dispose();
      }

      if (refs.controls) {
        refs.controls.dispose();
      }
    };
  }, []);

  return (
    <section className="dark:text-main-text-light flex flex-col items-center justify-center text-text-light-mode dark:text-text-dark-mode">
      <div className="ml-32 mt-2 flex items-center self-center  ">
        <div className="mt-6 text-3xl">
          <PiArrowBendLeftDownFill />
        </div>
        <p>Try to rotate me!</p>
      </div>
      <div
        ref={mountRef}
        className="relative flex items-center justify-center bg-transparent"
      >
        {isLoading ? (
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform">
            <div className="h-20 w-20 animate-spin rounded-full border-2 border-t-2 border-indigo-500 border-t-transparent sm:h-32 sm:w-32"></div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Tesla3Dmodel;
