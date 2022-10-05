import Logo from './images/logo.png'
import HeaderArrow from './images/header-arrow.png'
export default function Header() {
  return (
    <>
    <div className="h-18 md:h-28 w-full bg-secondary flex md:justify-start justify-center z-10 relative">
        <div className="md:w-1/3 w-1/2 flex flex-row justify-center px-4">
            <div className="h-1/2">
            <img src={Logo} alt="DevFest 2022" className="h-full md:-mt-7 -mt-3.5 opacity-20"/>
            <img src={Logo} alt="DevFest 2022" className="h-full"/>
            <img src={Logo} alt="DevFest 2022" className="h-full opacity-20"/>
            </div>
        </div>
        <div className='md:w-2/3 w-0 md:flex hidden headermenu items-center px-20'>
          <img src={HeaderArrow} alt="arrow" className="h-16"/>
          <div className="flex items-center justify-between w-full px-6 text-white text-2xl font-semibold font-sans">
            <a href="https://devfest.gdgkolkata.in/">Home</a>
            <a href="https://devfest.gdgkolkata.in/">Speakers</a>
            <a href="https://devfest.gdgkolkata.in/">Schedule</a>
            <a href="https://devfest.gdgkolkata.in/">Socials</a>
          </div>
        </div>
    </div>
    </>
      );
}