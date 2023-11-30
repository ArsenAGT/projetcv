import { Fragment } from "react";
const Intro = () => {
  return (
    <Fragment>
      <div className="top_author_image w-full h-auto clear-both float-left relative mb-[35px]">
        <img className="min-w-full" src="assets/img/slider/2.jpg" alt="image" />
      </div>
      <div className="about_title w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]">
        <h3 className="text-[22px] font-bold">Arsen GASPAROV</h3>
        <span></span>
      </div>
      <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
        <p className="mb-[11px]">
          Bonjour, je suis Arsen GASPAROV, un professionnel de 23 ans dans le domaine des technologies de l'information. Avec une licence en informatique spécialisée en cybersécurité, j'ai 6 ans d'expérience en informatique, dont 5 ans en alternance et plus d'1 an en CDI. Passionné par la technologie et la sécurité informatique, je suis prêt à relever de nouveaux défis.
        </p>
        <p>
         
        </p>
      </div>
      <div className="tokyo_tm_short_info w-full h-auto clear-both float-left flex border-solid border-[#DFDFDF] border-b pb-[30px] mb-[40px]">
        <div className="left w-1/2 pr-[100px]">
          <div className="tokyo_tm_info w-full h-auto clear-both float-left">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Age:
                </span>
                <span>23</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Address:
                </span>
                <span>17 Route de Bischwiller, 67800 Bischheim</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  E-mail:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="mailto:agt.arsen@gmail.com"
                  >
                    agt.arsen@gmail.com
                  </a>
                </span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Téléphone::
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="tel:+33 6 01 10 50 88"
                  >
                    06 01 10 50 88
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right w-1/2 pl-[50px]">
          <div className="tokyo_tm_info">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Étude:
                </span>
                <span>LICENCE Informatique</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Poste actuel:
                </span>
                <span>Technicien Télécoms & Réseaux </span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Permis auto:
                </span>
                <span>Oui (Catégorie B)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tokyo_tm_button" data-position="left">
        <a href="assets/img/cv/1.jpg" download>
          <span>Télécharger mon CV</span>
        </a>
      </div>
    </Fragment>
  );
};
export default Intro;
