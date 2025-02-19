import { JobPositionTypes } from "@/components/layouts/WorkExperience/types/types";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  logoVariants,
  workExperienceDesktopDescribeVariants,
} from "@/utils/motion";

interface JobCardProps {
  isLeft: boolean;
  position: JobPositionTypes;
  id: number;
}

const JobCard = ({ isLeft, position, id }: JobCardProps) => {
  const { t } = useTranslation();

  const animationVariant =
    workExperienceDesktopDescribeVariants[
      isLeft === (id % 2 === 0) ? "leftVariant" : "rightVariant"
    ];

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={animationVariant}
      className={`relative mx-3 my-7 flex w-4/5 rounded-md p-4 ${!isLeft ? "flex-col gap-4 bg-neutral-200 text-sm" : ""}`}
    >
      {isLeft ? (
        <p
          className={`${id % 2 === 0 ? "-mr-7" : "-ml-7"} flex grow font-medium text-primary-300 ${
            id % 2 === 0 ? "justify-end" : "justify-start"
          }`}
        >
          {t(`jobs.${position.id}.fullTime`)}
        </p>
      ) : (
        <>
          <div
            className={`absolute ${id % 2 === 0 ? "-left-1" : "-right-1"} h-3 w-3 rotate-45 bg-neutral-200`}
          />
          <div>
            <p className="text-2xl font-bold">
              {t(`jobs.${position.id}.title`)}
            </p>
            <p className="text-lg">{position.id}</p>
          </div>
          <p className="leading-6">{t(`jobs.${position.id}.description`)}</p>
        </>
      )}
    </motion.div>
  );
};

const CompanyLogo = ({ position }: { position: JobPositionTypes }) => (
  <div className="relative flex w-1/5 justify-center">
    <div className="w-1 bg-white"></div>
    <motion.div
      variants={logoVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="absolute top-6 h-16 w-16 overflow-hidden rounded-full border-[3px] border-white"
    >
      <Image
        src={position.img}
        alt={`Logo of ${position.id}`}
        fill
        className="rounded-full object-cover"
        placeholder="blur"
        priority
        quality={100}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </motion.div>
  </div>
);

const SingleWorkExperienceDesktop = ({
  position,
  id,
}: {
  position: JobPositionTypes;
  id: number;
}) => (
  <div className="z-50 flex w-full justify-center rounded-md" key={position.id}>
    <JobCard isLeft={id % 2 === 0} position={position} id={id} />
    <CompanyLogo position={position} />
    <JobCard isLeft={id % 2 !== 0} position={position} id={id} />
  </div>
);

export default SingleWorkExperienceDesktop;
