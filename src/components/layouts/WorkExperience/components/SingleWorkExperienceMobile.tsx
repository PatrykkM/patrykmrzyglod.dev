import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";

import { logoVariants, workExperienceMobileVariants } from "@/utils/motion";
import { JobPositionTypes } from "@/components/layouts/WorkExperience/types/types";

interface SingleWorkExperienceMobileProps {
  position: JobPositionTypes;
  id: number;
}

const CompanyLogo = ({ position }: { position: JobPositionTypes }) => (
  <div className="relative flex w-1/5 justify-center">
    <div className="w-1 bg-white"></div>
    <motion.div
      variants={logoVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="absolute top-6 h-12 w-12 overflow-hidden rounded-full border-[3px] border-white"
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

const JobDetails = ({
  position,
  t,
}: {
  position: JobPositionTypes;
  t: TFunction;
}) => (
  <motion.div
    className="relative z-10 mx-3 my-7 w-4/5 rounded-md border-b-2 border-white bg-neutral-200 p-4 text-sm"
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true }}
    variants={workExperienceMobileVariants}
  >
    <div className="absolute -left-1 h-3 w-3 rotate-45 bg-neutral-200"></div>
    <div>
      <p className="text-2xl font-bold">{t(`jobs.${position.id}.title`)}</p>
      <p className="text-lg">{position.id}</p>
    </div>
    <p className="p-4 leading-6">{t(`jobs.${position.id}.description`)}</p>
    <p>{t(`jobs.${position.id}.time`)}</p>
  </motion.div>
);

const SingleWorkExperienceMobile = ({
  position,
  id,
}: SingleWorkExperienceMobileProps) => {
  const { t } = useTranslation();

  return (
    <div key={id} className="flex w-full justify-center rounded-md">
      <CompanyLogo position={position} />
      <JobDetails position={position} t={t} />
    </div>
  );
};

export default SingleWorkExperienceMobile;
