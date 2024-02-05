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
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(75, 300 / 300, 0.01, 1000);
    camera.position.set(90, 10, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      premultipliedAlpha: false,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(300, 300);
    rendererRef.current = renderer;

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(1, 1, 0).normalize();
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    const modelPath =
      // @ts-ignore
      process.env.NODE_ENV === "development"
        ? new URL("../../assets/TeslaModel3D/scene.gltf", import.meta.url).href
        : "https://patrykkm.github.io/patrykmrzyglod.dev/assets/scene-72H7WMkS.gltf";

    loader.load(
      modelPath,
      (gltf: any) => {
        const model = gltf.scene;
        model.scale.set(0.2, 0.2, 0.2);
        model.position.set(0, 0, 0);
        scene.add(model);
        camera.lookAt(model.position);
      },
      undefined,
      (error: any) => {
        console.error("An error happened:", error);
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
      const camera = cameraRef.current;
      const renderer = rendererRef.current;

      if (camera && renderer && mountRef.current) {
        camera.aspect =
          mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(
          mountRef.current.clientWidth,
          mountRef.current.clientHeight
        );
        renderer.setPixelRatio(window.devicePixelRatio);
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
    <section className="flex flex-col justify-center items-center text-white">
      <div className="self-center flex mt-2 items-center ml-32">
        <div className="text-3xl mt-6">
          <PiArrowBendLeftDownFill />
        </div>
        Try to rotate me
      </div>
      <div
        ref={mountRef}
        className="flex justify-center items-center"
        style={{
          width: "300px",
          height: "300px",
          background: "transparent",
        }}
      ></div>
    </section>
  );
};

export default Tesla3Dmodel;
