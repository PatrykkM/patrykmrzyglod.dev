import { projectVariants } from "@/utils/motion";
import { motion, useAnimation } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

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
      className="mb-8 mt-18 flex flex-col rounded-lg dark:bg-dynamic-menu p-5 font-normal bg-light-mode-items sm:mr-6 sm:w-92 shadow-md"
    >
      <div className="overflow-hidden rounded-lg">
        <a href={project.link} target="_blank">
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
        </a>
      </div>
      <div className="mt-3 flex flex-grow flex-col">
        <h3 className="text-2xl font-bold text-blue-800 dark:text-text-dark-mode">
          {project.name}
        </h3>
        <p className="mt-3 text-sm dark:text-gray-300 text-gray-500">
          {t(`projects.${project.name}.description`)}
        </p>
      </div>
      <div className="flex flex-wrap">
        {project.techs.map((e, id) => (
          <p
            className={`${e.color} mr-[1px] mt-3 text-sm lg:mr-[3px]`}
            key={id}
          >
            #{e.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default Project;
