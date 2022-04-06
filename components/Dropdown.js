
import Link from "next/link";

const Dropdown = ({isOpen, toggle}) => {
  return (
  <div className={isOpen ? "grid grid-rows-4 text-center text-white text-base font-medium leading-6 items-center bg-[#1A1A29]" : 'hidden'}onClick={toggle}>
    <Link className='p-4 text-base font-medium leading-6 hover:text-[#7562E0]' href='#about'>About</Link>
    <Link className='p-4 text-base font-medium leading-6 hover:text-[#7562E0]' href='#skills'>Skills</Link>
    <Link className='p-4 text-base font-medium leading-6 hover:text-[#7562E0]' href='#portfolio'>Portfolio</Link>
    <Link className='p-4 text-base font-medium leading-6 hover:text-[#7562E0]' href='#connect'>Connect</Link>
  </div>
  );
};

export default Dropdown