import { projectVariants } from "@/utils/motion";
import { motion, useAnimation } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
const Project = ({
  index,
  project,
}: {
  index: number;
  project: {
    name: string;
    img: StaticImageData;
    link: string;
    techs: { name: string; color: string }[];
  };
}) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("onscreen");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="offscreen"
      animate={controls}
      variants={projectVariants}
      key={index}
      className="dark:bg-primary-500 bg-primary-300 flex flex-col gap-3 rounded-lg p-5 font-normal shadow-md transition-colors duration-300 sm:w-92"
    >
      <div className="overflow-hidden rounded-lg">
        <Link href={project.link} target="_blank">
          <div className="relative h-52 w-full">
            <Image
              src={project.img}
              alt={`Photo of my project named ${project.name}`}
              fill
              className="object-cover"
              placeholder="blur"
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-grow flex-col">
        <h3 className="dark:text-primary-100 text-2xl font-bold text-blue-800">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
          {t(`projects.${project.name}.description`)}
        </p>
      </div>
      <div className="flex flex-wrap gap-1">
        {project.techs.map((e, id) => (
          <p className={`${e.color}  text-sm `} key={id}>
            #{e.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default Project;
