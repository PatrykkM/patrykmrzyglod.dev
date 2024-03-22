import { motion } from "framer-motion";
import * as THREE from "three";
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// @ts-ignore
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import { useEffect, useRef } from "react";

import { Planet3DformVariants } from "../../../utils/motion";

const Planet3Dmodel = () => {
	const motionOpt = {
		initial: "offscreen",
		whileInView: "onscreen",
		viewport: { once: true },
		variants: Planet3DformVariants,
	};
	const mountRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
		camera.position.z = 5;

		const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
		renderer.setClearColor(0x000000, 0);

		renderer.setPixelRatio(window.devicePixelRatio);

		const adjustSizeAndScale = (model?: THREE.Object3D) => {
			const scaleRatio = window.devicePixelRatio;
			const width = window.innerWidth < 1024 ? 300 * scaleRatio : 470 * scaleRatio;
			const height = window.innerWidth < 1024 ? 300 * scaleRatio : 470 * scaleRatio;
			renderer.setSize(width / scaleRatio, height / scaleRatio);
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			if (model) {
				const scale = window.innerWidth < 1024 ? 1.9 : 3.2;
				model.scale.set(scale, scale, scale);
			}
		};

		mountRef.current?.appendChild(renderer.domElement);

		const loader = new GLTFLoader();
		let model: THREE.Object3D<THREE.Object3DEventMap>;

		loader.load(
			new URL("../../../assets/PlanetModel3D-GLB/stylized_planet.glb", import.meta.url).href,
			(gltf: GLTF) => {
				model = gltf.scene;
				scene.add(model);
				gltf.scene.rotation.y = Math.PI / 4;
				adjustSizeAndScale(model);
			},
			undefined,
			(error: ErrorEvent) => {
				console.error("Error loading model:", error);
			},
		);

		const animate = () => {
			requestAnimationFrame(animate);
			if (model) {
				model.rotation.y += 0.002;
			}
			renderer.render(scene, camera);
		};
		animate();

		window.addEventListener("resize", () => adjustSizeAndScale(model));

		return () => {
			if (mountRef.current) {
				mountRef.current.removeChild(renderer.domElement);
			}
			window.removeEventListener("resize", () => adjustSizeAndScale(model));
		};
	}, []);

	return (
		<motion.div {...motionOpt}>
			<div className="bg-Grey-Wave dark:bg-light-mode-items">
				<div ref={mountRef} className="flex h-full w-full justify-center"></div>
			</div>
		</motion.div>
	);
};

export default Planet3Dmodel;
