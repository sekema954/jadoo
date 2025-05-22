import appstore from '../assets/images/apple (2) 1.png';
import playstore from '../assets/images/google-play 1.png';

const Footer = () => {
  return (
    <footer className="bg-white px-10 lg:px-20 py-16 text-[#5E6282]">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Brand & description */}
        <div className="max-w-[250px]">
          <h1 className="text-[32px] font-bold text-[#181E4B]">Jadoo.</h1>
          <p className="mt-4">Book your trip in minute, get full control for much longer.</p>
        </div>

        {/* Links sections */}
        <div className="flex flex-col lg:flex-row flex-wrap gap-16 ">
          {[
            { title: 'Company', links: ['About', 'Careers', 'Mobile'] },
            { title: 'Contact', links: ['Help/FAQ', 'Press', 'Affiliates'] },
            { title: 'More', links: ['Airlinefees', 'Airline', 'Low fare tips'] },
          ].map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-black mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Socials & App Store */}
        <div className="flex flex-col items-center lg:items-end">
          <div className="flex gap-5 mb-6">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md">
              <i className="fab fa-facebook-f text-[#5E6282]" />
            </span>
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-400 via-pink-500 to-yellow-500 text-white shadow-md">
              <i className="fab fa-instagram" />
            </span>
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md">
              <i className="fab fa-twitter text-[#5E6282]" />
            </span>
          </div>

          <h4 className="font-medium mb-4">Discover our app</h4>
          <div className="flex gap-4">
            {[{ img: playstore, label1: "GET IT ON", label2: "Google Play" }, { img: appstore, label1: "Download on the", label2: "App Store" }].map((store, idx) => (
              <div key={idx} className="bg-black px-3 py-2 text-white w-[135px] rounded-xl flex items-center gap-2">
                <img src={store.img} alt={store.label2} className="w-6 h-6" />
                <div className="text-[10px] leading-none">
                  <p>{store.label1}</p>
                  <p className="text-sm font-semibold -mt-1">{store.label2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center mt-16 text-sm text-[#5E6282]">
        All rights reserved @jadoo.co
      </p>
    </footer>
  );
};

export default Footer;
