const partnersDark = [

  { id: 1, image: "assets/img/partners/dark/wildix.png" },
  { id: 2, image: "assets/img/partners/dark/alcatel.png" },
  { id: 3, image: "assets/img/partners/dark/unify.png" },
  { id: 4, image: "assets/img/partners/dark/cisco.png" },
  { id: 5, image: "assets/img/partners/dark/vanderbilt.png" },
  { id: 6, image: "assets/img/partners/dark/ajax.png" },
  { id: 7, image: "assets/img/partners/dark/castel.png" },
  { id: 8, image: "assets/img/partners/dark/hikvision.png" },
];

const Partners = () => {
  return (
    <div className="tokyo_tm_partners w-full h-auto clear-both float-left bg-white py-[100px] px-0">
      <div className="container">
        <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
          <h3 className="text-[20px] font-bold">Partnerss</h3>
        </div>
        <div className="partners_inner w-full h-auto clear-both float-left">
          <ul className="mt-[-2px] mr-[-10px] mb-[-2px] ml-[-2px] list-none pt-[2px] float-left pl-[2px]">
            {partnersDark.map((partner) => (
              <li
                key={partner.id}
                className="m-0 float-left w-1/4 border-solid border-[#eee] border-2 text-center h-[145px] leading-[145px] relative mt-[-2px] ml-[-2px] overflow-hidden"
              >
                <div className="list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                  <img
                    className="max-w-[70%] max-h-[100px] inline-block"
                    src={partner.image}
                    alt="image"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Partners;
