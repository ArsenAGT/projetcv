import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import EducationExperience from "./about/EducationExperience";
import Intro from "./about/Intro";
import KnowledgeInterests from "./about/KnowledgeInterests";
import Skills from "./about/Skills";
import Testimonials from "./about/Testimonials";
import Partnersabout from "./about/Partnersabout";
const About = () => {
  return (
    <SectionContainer name={"about"}>
      <div className="container">
        <div className="tokyo_tm_about w-full h-auto clear-both float-left py-[100px] px-0">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle pageName={"Ma Présentation"} title={""} />
            </div>
          </div>
          <Intro />
        </div>
      </div>
      <EducationExperience />
      <Skills />
      <KnowledgeInterests />
      <Partnersabout />
      <Testimonials />
    </SectionContainer>
  );
};
export default About;
