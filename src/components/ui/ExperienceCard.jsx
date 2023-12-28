import { default as blob } from "../../assets/blob.svg";

const ExperienceCard = ({ education}) => {
  return (
    <div className="flex w-full flex-col items-center gap-3 rounded-lg p-5 md:flex-row md:gap-12 md:text-left">
      <div className="relative top-0 left-0 w-3/4 md:w-1/2">
        <img className="relative top-0 left-0" src={blob} alt="blob" />
      </div>
      

      <div
        data-aos-easing="ease-in-out"
        data-aos="fade-up"
        className="w-full px-9 md:flex md:flex-col"
      >
        {education.map((edu,index) => (
          <div>
            <h2 className="text-xl font-bold"key={index}>{edu.name}</h2>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
