const FooterSection = () => {
    return (
      <footer className="bg-[#032016] text-gray-300 py-20 rounded-t-3xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Logo always on top, full width */}
          <div className="flex items-center space-x-3 mb-10">
            <img src="/bereslogo.svg" alt="Beres Logo" className="h-full w-90" />
            <h3 className="text-3xl font-extrabold text-white">Beres</h3>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 items-start">
            {/* Left: Description */}
            <div>
              <p className="text-base leading-relaxed text-justify max-w-sm !text-white">
                We’re a remote software company. Care for joy as much as process.
                See details as the baseline of quality. And we help people focus
                on what matters.
              </p>
            </div>
  
            {/* Middle: About */}
            <div>
              <h4 className="text-xl font-semibold mb-5 !text-white">About</h4>
              <ul className="space-y-1">
                <li><a href="#benefits" className="!text-white">Benefits</a></li>
                <li><a href="#features" className="!text-white">Features</a></li>
                <li><a href="#pricing" className="!text-white">Prize</a></li>
              </ul>
            </div>
  
            {/* Right: Social */}
            <div>
              <h4 className="text-xl font-semibold mb-5 !text-white">Social</h4>
              <ul className="space-y-3">
                <li><a href="#" className="!text-white">Instagram</a></li>
                <li><a href="#" className="!text-white">Facebook</a></li>
              </ul>
            </div>
          </div>
  
          {/* Bottom row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-16 pt-8 text-sm ">
            <p className="!text-[#AEEA30] font-semibold">Designed by Beres</p>
            <div className="flex flex-wrap gap-8 mt-6 md:mt-0 text-gray-400">
              <a href="#" className="!text-[#AEEA30]">Privacy policy</a>
              <a href="#" className="!text-[#AEEA30]">Terms of use</a>
              <a href="#" className="!text-[#AEEA30]">Imprint</a>
              <span className="!text-[#AEEA30]">@Beres 2025</span>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default FooterSection;
  