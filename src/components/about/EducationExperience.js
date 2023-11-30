const experiencesData = [
  {
    id: 1,
    date: "2022 - Maintenant",
    designation: "Extelis",
    company: "Technicien Télécoms & Réseaux - CDI",
  },
  {
    id: 2,
    date: "2021 - 2022",
    designation: "Extelis",
    company: "Technicien Télécoms & Réseaux - Apprenti",
  },
  {
    id: 3,
    date: "2017 - 2021",
    designation: "SAV Electronique",
    company: "Technicien réseaux - Apprenti",
  },
];
const educationData = [
  {
    id: 1,
    date: "2021 - 2022",
    degree: "LICENCE Informatique – Option Cybersécurité",
    institute: "UIMM Alsace - le CNAM",
  },
  {
    id: 2,
    date: "2019 - 2021",
    degree: "BTS Systèmes Numériques",
    institute: "UIMM Alsace",
  },
  {
    id: 3,
    date: "2016 - 2019",
    degree: "BAC PRO Systèmes Numériques",
    institute: "Lycée Gutenberg",
  },
];

const EducationExperience = () => {
  return (
    <div className="tokyo_tm_resumebox w-full h-auto clear-both float-left bg-white py-[93px] px-0">
      <div className="container">
        <div className="in w-full h-auto clear-both float-left flex">
          <div className="left w-1/2 pr-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Formation</h3>
            </div>
            <div className="tokyo_tm_resume_list w-full h-auto clear-both float-left">
              <ul className="m-0 list-none relative inline-block pt-[10px]">
                {educationData.map((edu, i) => (
                  <li
                    className={`m-0 w-full float-left relative pl-[20px] ${
                      i == educationData.length - 1 ? "" : "pb-[45px]"
                    }`}
                    key={edu.id}
                  >
                    <div className="list_inner  w-full h-auto clear-both float-left relative flex">
                      <div className="time w-1/2 pr-[20px]">
                        <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          {edu.date}
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[20px]">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          {edu.degree}
                        </h3>
                        <span className="text-[14px]">{edu.institute}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right w-1/2 pl-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Expérience</h3>
            </div>
            <div className="tokyo_tm_resume_list w-full h-auto clear-both float-left">
              <ul className="m-0 list-none relative inline-block pt-[10px]">
                {experiencesData.map((exp, i) => (
                  <li
                    className={`m-0 w-full float-left relative pl-[20px] ${
                      i == experiencesData.length - 1 ? "" : "pb-[45px]"
                    }`}
                    key={exp.id}
                  >
                    <div className="list_inner  w-full h-auto clear-both float-left relative flex">
                      <div className="time w-1/2 pr-[20px]">
                        <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          {exp.date}
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[20px]">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          {exp.company}
                        </h3>
                        <span className="text-[14px]">{exp.designation}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EducationExperience;
