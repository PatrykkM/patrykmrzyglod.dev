import { JobPositionTypes } from "@/components/layouts/WorkExperience/types/types";
import Image from "next/image";

const SingleWorkExperienceDesktop = ({
  position,
  id,
}: {
  position: JobPositionTypes;
  id: number;
}) => {
  return (
    <div
      className="z-50 flex w-full justify-center rounded-md"
      key={position.company}
    >
      <div
        className={`${
          id % 2 === 0 ? `invisible` : `flex`
        }  relative z-10 mx-3 my-7 flex w-4/5 flex-col rounded-md border-b-2 border-white bg-Jobs-blue p-4 text-sm`}
      >
        <div className="absolute -right-1 h-3 w-3 rotate-45 bg-Jobs-blue"></div>
        <p className="text-2xl font-bold">{position.name}</p>
        <p>{position.company}</p>
        <p className="p-4 leading-6">{position.description}</p>
        <p>{position.time}</p>
      </div>
      <div className="flex w-1/5 justify-center">
        <div className="relative w-1 bg-white">
          <div className=" absolute left-1/2 top-6 h-16 w-16 -translate-x-1/2 rounded-full">
            <Image
              src={position.img}
              alt={`Logo of ${position.company}`}
              fill
              className="rounded-full object-cover"
              placeholder="blur"
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
      <div
        className={`${
          id % 2 !== 0 ? `invisible` : `flex`
        }  relative mx-3 my-7 flex w-4/5 flex-col rounded-md border-b-2  border-white bg-Jobs-blue p-4 text-sm`}
      >
        <div className="absolute -left-1 h-3 w-3 rotate-45 bg-Jobs-blue"></div>
        <p className="text-2xl font-bold">{position.name}</p>
        <p>{position.company}</p>
        <p className="p-4 leading-6">{position.description}</p>
        <p>{position.time}</p>
      </div>
    </div>
  );
};

export default SingleWorkExperienceDesktop;
