import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { PiArrowBendLeftDownFill } from "react-icons/pi";
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// @ts-ignore
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Tesla3Dmodel: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

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
        "../../assets/TeslaModel3D-GLB/tesla_2018_model_3.glb",
        import.meta.url
      ).href,
      (gltf: any) => {
        const model = gltf.scene;
        model.scale.set(0.2, 0.2, 0.2);
        model.position.set(0, 0, 0);
        scene.add(model);
        camera.lookAt(model.position);
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
    <section className="flex flex-col justify-center items-center text-white dark:text-main-text-light dark:text-black">
      <div className="self-center flex mt-2 items-center ml-32">
        <div className="text-3xl mt-6">
          <PiArrowBendLeftDownFill />
        </div>
        Try to rotate me!
      </div>
      <div
        ref={mountRef}
        className="flex justify-center items-center  bg-transparent "
      ></div>
    </section>
  );
};

export default Tesla3Dmodel;
