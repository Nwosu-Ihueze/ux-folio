import Image from "next/image";
import Link from "next/link";


const Hero = () => {

  return (
    <section className="bg-[#1A1A29] lg:px-24 text-gray-700 font-Poppins">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="mb-8 md:text-2xl text-white font-medium">Rosemary Nwosu-Ihueze</p>
          <h1 className="lg:text-6xl md:text-4xl text-3xl mb-4 text-[#7562E0] font-bold px-1">UX Engineer
          </h1>
          <p className="mb-8 text-lg text-white font-noraml">Hello, I am a UX designer with vast experience in frontend web development and blockchain development based in Kentucky.</p>
          <div className="flex justify-center">
            <Link href="https://www.behance.net/rosemarynneoma" passHref={true}><button className="inline-flex text-white bg-[#7562E0] hover:bg-[#33296D] border-0 py-2 px-4 focus:outline-none rounded-xl text-base font-medium">Behance</button></Link>
            <Link href="https://github.com/Nwosu-Ihueze/ux-resume/tree/main" passHref={true}><button className="ml-4 inline-flex text-white border-solid border-2 border-white hover:border-[#7562E0] hover:text-[#7562E0] py-2 px-6 rounded-xl text-base font-medium">View Resume</button></Link>
          </div>
          {/* <h1>
          <span className="text1">Fancy heading on your static web page</span><span className="text2">What?? How does it change without javascript?</span>
        </h1> */}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
          src="/Bitmap.png"
          alt="Profile"
          width="100%"
          height="100%"
          layout="responsive"
          className="rounded-full"
          objectFit="cover"
          priority="true"
        />
        </div>
      </div>
    </section>

  );
};

export default Hero;







