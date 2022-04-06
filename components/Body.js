import Image from "next/image";
import Link from "next/link";



const Body = () => {
 
  return (
    <>
    {/*About Section Start */}
    <section className="lg:px-24 font-Poppins bg-[#d8d8e6]" id="about">
      <div className="container px-5 py-16 mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="md:text-3xl text-2xl text-[#7562E0] font-semibold">ABOUT</h1>
        </div>
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
    <Image
          src="/code.png"
          alt="Code"
          width="100%"
          height="100%"
          layout="responsive"
          className="lg:h-20"
          priority="true"/>
    </div>
    <div className="lg:flex-grow lg:w-1/2 md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center lg:pl-24 lg:pt-48">
        <p className="mb-8 text-base font-normal">I am a computer programmer and a junior majoring in computer science and a self-taught developer.  I am knowledgeable in Figma, Javascript, Python , Solidity and experimental knowledge of Rust.
        I have built several projects around these languages including ux design and case study of a jazz lounge app, restauranteur portfolio, and smart contract for decentralized applications.</p>
        </div>
 
  </div>
</section>
{/* About Ends */}

{/*Skills Start */}
<section className="bg-[#1A1A29] lg:px-24 font-Poppins" id="skills">
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="md:text-3xl text-2xl text-[#7562E0] mb-8 font-semibold">SKILLS</h1>
    </div>
    <div className="flex flex-wrap -m-4 items-stretch">
      <div className="xl:w-1/3 md:w-1/3 p-4">
        <div className="border border-[#7562E0] p-6 rounded-lg h-full">
          <div className="items-center flex flex-col rounded-full mb-4">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M48.8348 58.1939H38.4614C35.6205 58.1939 33.6689 57.4178 32.4243 56.1732C31.1797 54.9286 30.4035 52.977 30.4035 50.136V13.8291C30.4035 10.9881 31.1797 9.03653 32.4243 7.79193C33.6689 6.54733 35.6205 5.77116 38.4614 5.77116H48.8348C51.6758 5.77116 53.6274 6.54733 54.872 7.79193C56.1166 9.03653 56.8927 10.9881 56.8927 13.8291V50.136C56.8927 52.9737 56.1119 54.926 54.8634 56.172C53.6143 57.4186 51.6611 58.1939 48.8348 58.1939ZM38.4614 6.32688C36.2244 6.32688 34.2303 6.79429 32.8285 8.19614C31.4266 9.59799 30.9592 11.5921 30.9592 13.8291V50.136C30.9592 52.373 31.4266 54.3671 32.8285 55.769C34.2303 57.1708 36.2244 57.6382 38.4614 57.6382H48.8348C51.0718 57.6382 53.0659 57.1708 54.4678 55.769C55.8696 54.3671 56.337 52.373 56.337 50.136V13.8291C56.337 11.5921 55.8696 9.59799 54.4678 8.19614C53.0659 6.79429 51.0718 6.32688 48.8348 6.32688H38.4614Z" stroke="white" strokeWidth="3.33431"/>
          <path d="M43.6481 16.7003H30.6813C30.6188 16.7003 30.5492 16.6751 30.489 16.6148C30.4287 16.5545 30.4035 16.485 30.4035 16.4224C30.4035 16.3599 30.4287 16.2903 30.489 16.2301C30.5492 16.1698 30.6188 16.1446 30.6813 16.1446H43.6481C43.7107 16.1446 43.7802 16.1698 43.8405 16.2301C43.9008 16.2903 43.926 16.3599 43.926 16.4224C43.926 16.485 43.9008 16.5545 43.8405 16.6148C43.7802 16.6751 43.7107 16.7003 43.6481 16.7003Z" stroke="white" strokeWidth="3.33431"/>
          <path d="M41.0548 47.8205H30.6813C30.6188 47.8205 30.5492 47.7953 30.489 47.735C30.4287 47.6748 30.4035 47.6052 30.4035 47.5427C30.4035 47.4801 30.4287 47.4106 30.489 47.3503C30.5492 47.29 30.6188 47.2648 30.6813 47.2648H41.0548C41.1173 47.2648 41.1869 47.29 41.2471 47.3503C41.3074 47.4106 41.3326 47.4801 41.3326 47.5427C41.3326 47.6052 41.3074 47.6748 41.2471 47.7351C41.1869 47.7953 41.1173 47.8205 41.0548 47.8205Z" stroke="white" strokeWidth="3.33431"/>
          <path d="M30.6721 37.3176L30.6638 37.3175H30.6555C30.5198 37.3175 30.3996 37.1979 30.4031 37.0534L30.4036 37.0335V37.0137C30.4036 36.9001 30.5096 36.7618 30.6814 36.7618H30.6814H30.6814H30.6814H30.6814H30.6814H30.6814H30.6814H30.6814H30.6814H30.6814H30.6814H30.6814H30.6814H30.6814H30.6814H30.6814H30.6814H30.6814H30.6814H30.6814H30.6814H30.6814H30.6814H30.6814H30.6814H30.6814H30.6814H30.6814H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6815H30.6816H30.6816H30.6816H30.6816H30.6816H30.6816H30.6816H30.6816H30.6816H30.6816H30.6816H30.6816H30.6816H30.6816H30.6816H30.6816H30.6816H30.6816H30.6817H30.6817H30.6817H30.6817H30.6817H30.6817H30.6817H30.6817H30.6817H30.6817H30.6817H30.6817H30.6817H30.6818H30.6818H30.6818H30.6818H30.6818H30.6818H30.6818H30.6818H30.6818H30.6818H30.6818H30.6819H30.6819H30.6819H30.6819H30.6819H30.6819H30.6819H30.6819H30.6819H30.682H30.682H30.682H30.682H30.682H30.682H30.682H30.682H30.6821H30.6821H30.6821H30.6821H30.6821H30.6821H30.6821H30.6821H30.6822H30.6822H30.6822H30.6822H30.6822H30.6822H30.6822H30.6823H30.6823H30.6823H30.6823H30.6823H30.6823H30.6824H30.6824H30.6824H30.6824H30.6824H30.6824H30.6825H30.6825H30.6825H30.6825H30.6825H30.6826H30.6826H30.6826H30.6826H30.6826H30.6827H30.6827H30.6827H30.6827H30.6827H30.6828H30.6828H30.6828H30.6828H30.6828H30.6829H30.6829H30.6829H30.6829H30.683H30.683H30.683H30.683H30.6831H30.6831H30.6831H30.6831H30.6832H30.6832H30.6832H30.6832H30.6833H30.6833H30.6833H30.6833H30.6834H30.6834H30.6834H30.6834H30.6835H30.6835H30.6835H30.6836H30.6836H30.6836H30.6836H30.6837H30.6837H30.6837H30.6838H30.6838H30.6838H30.6839H30.6839H30.6839H30.684H30.684H30.684H30.684H30.6841H30.6841H30.6841H30.6842H30.6842H30.6843H30.6843H30.6843H30.6844H30.6844H30.6844H30.6845H30.6845H30.6845H30.6846H30.6846H30.6847H30.6847H30.6847H30.6848H30.6848H30.6848H30.6849H30.6849H30.685H30.685H30.685H30.6851H30.6851H30.6852H30.6852H30.6853H30.6853H30.6853H30.6854H30.6854H30.6855H30.6855H30.6856H30.6856H30.6857H30.6857H30.6857H30.6858H30.6858H30.6859H30.6859H30.686H30.686H30.6861H30.6861H30.6862H30.6862H30.6863H30.6863H30.6864H30.6864H30.6865H30.6865H30.6866H30.6866H30.6867H30.6867H30.6868H30.6868H30.6869H30.6869H30.687H30.6871H30.6871H30.6872H30.6872H30.6873H30.6873H30.6874H30.6875H30.6875H30.6876H30.6876H30.6877H30.6877H30.6878H30.6879H30.6879H30.688H30.688H30.6881H30.6882H30.6882H30.6883H30.6884H30.6884H30.6885H30.6885H30.6886H30.6887H30.6887H30.6888H30.6889H30.6889H30.689H30.6891H30.6891H30.6892H30.6893H30.6893H30.6894H30.6895H30.6896H30.6896H30.6897H30.6898H30.6898H30.6899H30.69H30.6901H30.6901H30.6902H30.6903H30.6904H30.6904H30.6905H30.6906H30.6907H30.6907H30.6908H30.6909H30.691H30.691H30.6911H30.6912H30.6913H30.6914H30.6914H30.6915H30.6916H30.6917H30.6918H30.6918H30.6919H30.692H30.6921H30.6922H30.6923H30.6924H30.6924H30.6925H30.6926H30.6927H30.6928H30.6929H30.693H30.693H30.6931H30.6932H30.6933H30.6934H30.6935H30.6936H30.6937H30.6938H30.6939H30.694H30.6941H30.6942H30.6942H30.6943H30.6944H30.6945H30.6946H30.6947H30.6948H30.6949H30.695H30.6951H30.6952H30.6953H30.6954H30.6955H30.6956H30.6957H30.6958H30.6959H30.696H30.6961H30.6962H30.6963H30.6965H30.6966H30.6967H30.6968H30.6969H30.697H30.6971H30.6972H30.6973H30.6974H30.6975H30.6976H30.6978H30.6979H30.698H30.6981H30.6982H30.6983H30.6984H30.6986H30.6987H30.6988H30.6989H30.699H30.6991H30.6993H30.6994H30.6995H30.6996H30.6997H30.6999H30.7H30.7001H30.7002H30.7003H30.7005L43.6574 36.8913L43.6658 36.8914H43.6741C43.8097 36.8914 43.9298 37.0108 43.9265 37.1552C43.9218 37.335 43.786 37.4447 43.6526 37.4471L30.6721 37.3176Z" stroke="white" strokeWidth="3.33431"/>
          <path d="M38.4614 27.0737H30.6813C30.6188 27.0737 30.5492 27.0485 30.489 26.9882C30.4287 26.928 30.4035 26.8584 30.4035 26.7958C30.4035 26.7333 30.4287 26.6637 30.489 26.6035C30.5492 26.5432 30.6188 26.518 30.6813 26.518H38.4614C38.524 26.518 38.5935 26.5432 38.6538 26.6035C38.7141 26.6637 38.7393 26.7333 38.7393 26.7958C38.7393 26.8584 38.7141 26.928 38.6538 26.9882C38.5935 27.0485 38.524 27.0737 38.4614 27.0737Z" stroke="white" strokeWidth="3.33431"/>
          <path d="M10.4811 54.9296L10.4805 54.9287L8.35581 51.4048C8.35549 51.4043 8.35517 51.4038 8.35486 51.4032C7.73006 50.3609 7.21891 48.5314 7.21891 47.3352V13.6994C7.21891 9.32971 10.7775 5.77116 15.1472 5.77116C19.5169 5.77116 23.0754 9.32971 23.0754 13.6994V47.3093C23.0754 48.5057 22.564 50.3359 21.939 51.378C21.9389 51.3783 21.9387 51.3786 21.9385 51.3789L19.8138 54.9028L19.8051 54.9172L19.7968 54.9317C18.5371 57.1196 16.7936 58.1161 15.1731 58.1161C13.5507 58.1161 11.7978 57.1167 10.4811 54.9296ZM8.83742 51.0897L8.83738 51.0897L8.84394 51.1006L10.9662 54.6204C10.967 54.6217 10.9678 54.623 10.9685 54.6243C11.8856 56.1609 13.3362 57.5345 15.1731 57.5345C17.022 57.5345 18.4704 56.1169 19.3726 54.6327L19.3757 54.6275L21.5023 51.1006L21.5023 51.1006L21.5088 51.0897C21.824 50.5577 22.0724 49.8659 22.2401 49.2537C22.4076 48.6418 22.5456 47.9224 22.5456 47.3093V13.6994C22.5456 9.64071 19.2318 6.32688 15.1731 6.32688C11.1144 6.32688 7.80057 9.64071 7.80057 13.6994V47.3093C7.80057 47.9224 7.93858 48.6418 8.10612 49.2537C8.27375 49.8659 8.5222 50.5577 8.83742 51.0897Z" stroke="white" strokeWidth="3.33431"/>
          <path d="M22.8235 19.2937H7.49677C7.43423 19.2937 7.36466 19.2685 7.30439 19.2082C7.24413 19.1479 7.21891 19.0784 7.21891 19.0158C7.21891 18.9533 7.24413 18.8837 7.30439 18.8234C7.36466 18.7632 7.43423 18.738 7.49677 18.738H22.8235C22.886 18.738 22.9556 18.7632 23.0159 18.8234C23.0761 18.8837 23.1013 18.9533 23.1013 19.0158C23.1013 19.0784 23.0761 19.1479 23.0159 19.2082C22.9556 19.2685 22.886 19.2937 22.8235 19.2937Z" stroke="white" strokeWidth="3.33431"/>
          </svg>
          </div>
          <h2 className="md:text-2xl text-lg text-white text-center mb-2 font-medium">UX DESIGN</h2>
          <p className="md:text-lg text-base text-white text-center font-normal">Designing with users at the center for optimal experience.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/3 p-4">
        <div className="border border-white p-6 rounded-lg h-full">
          <div className="items-center flex flex-col rounded-full mb-4">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.2272 34.5646C22.5172 35.4196 21.0922 36.6891 20.0299 38.2696C19.434 39.1764 19.434 40.3164 20.0299 41.2232C21.0922 42.8037 22.5172 44.0732 24.2272 44.9282" stroke="white" strokeWidth="3.27273" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M40.3169 34.5646C42.0269 35.4196 43.4519 36.6891 44.5142 38.2696C45.1101 39.1764 45.1101 40.3164 44.5142 41.2232C43.4519 42.8037 42.0269 44.0732 40.3169 44.9282" stroke="white" strokeWidth="3.27273" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.09082 34.5646V39.7464C6.09082 52.7009 11.2726 57.8828 24.2272 57.8828H39.7726C52.7272 57.8828 57.909 52.7009 57.909 39.7464V24.2009C57.909 11.2464 52.7272 6.06458 39.7726 6.06458H24.2272C11.2726 6.06458 6.09082 11.2464 6.09082 24.2009" stroke="white" strokeWidth="3.27273" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.68701 21.636L56.4843 21.6101" stroke="white" strokeWidth="3.27273" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          </div>
          <h2 className="md:text-2xl text-lg text-[#7562E0] text-center mb-2 font-medium">FRONTEND DEVELOPMENT</h2>
          <p className="md:text-lg text-base text-[#7562E0] text-center font-normal">Converting designs to code using development tools.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/3 p-4">
        <div className="border border-[#7562E0] p-6 rounded-lg h-full">
          <div className="items-center flex flex-col rounded-full mb-4">
          <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.15 35.65V24.8" stroke="#F5F5F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20.5375 46.5C23.3197 46.5 25.5751 44.2446 25.5751 41.4625C25.5751 38.6804 23.3197 36.425 20.5375 36.425C17.7554 36.425 15.5 38.6804 15.5 41.4625C15.5 44.2446 17.7554 46.5 20.5375 46.5Z" stroke="#F5F5F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20.15 24.8C22.7181 24.8 24.7999 22.7181 24.7999 20.15C24.7999 17.5818 22.7181 15.5 20.15 15.5C17.5818 15.5 15.5 17.5818 15.5 20.15C15.5 22.7181 17.5818 24.8 20.15 24.8Z" stroke="#F5F5F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M41.85 24.8C44.4182 24.8 46.5 22.7181 46.5 20.15C46.5 17.5818 44.4182 15.5 41.85 15.5C39.2819 15.5 37.2001 17.5818 37.2001 20.15C37.2001 22.7181 39.2819 24.8 41.85 24.8Z" stroke="#F5F5F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20.3567 35.65C21.0542 32.9375 23.5342 30.9225 26.4533 30.9484L31.775 30.9741C35.8308 31 39.2925 28.3908 40.5584 24.7483" stroke="#F5F5F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23.25 5.16663H38.75C51.6667 5.16663 56.8333 10.3333 56.8333 23.25V38.75C56.8333 51.6666 51.6667 56.8333 38.75 56.8333H23.25C10.3333 56.8333 5.16666 51.6666 5.16666 38.75V23.25C5.16666 10.3333 10.3333 5.16663 23.25 5.16663Z" stroke="#F5F5F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          </div>
          <h2 className="md:text-2xl text-lg text-white text-center mb-2 font-medium">VERSION CONTROL</h2>
          <p className="md:text-lg text-base text-white text-center font-normal">Project storage, collaboration and version control.</p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Skills End */}




{/* Portfolio */}
<section className="text-gray-700 font-Poppins lg:px-24 bg-[#d8d8e6]" id="portfolio">
  <div className="container px-5 py-12 mx-auto">
  <h1 className="md:text-3xl text-2xl text-[#7562E0] mb-8 text-center font-semibold">Portfolio</h1>
  {/* <div className="flex justify-center lg:space-x-8 space-x-6 mb-8">
    <p className="md:text-2xl text-lg text-[#7562E0] active:text-white font-medium">All</p>
    <p className="md:text-2xl text-lg text-[#7562E0] active:text-white font-medium">UX</p>
    <p className="md:text-2xl text-lg text-[#7562E0] active:text-white font-medium">Frontend</p>
    <p className="md:text-2xl text-lg text-[#7562E0] active:text-white font-medium">Blockchain</p>
  </div> */}
  
  <div className="flex flex-row flex-wrap -mx-2 items-stretch">       
    <div className="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
      <div className="relative bg-[#7562E0] rounded-xl border h-full">
        <picture className="block rounded-xl">
        <Image
          src="/jazz.png"
          alt="Profile"
          width="100%"
          height="100%"
          layout="responsive"
          className="lg:h-48 md:h-36 w-full object-center rounded-t-xl"
          objectFit="cover"
          priority="true"
        />
        </picture>
        <div className="p-2 text-center">
          <h3 className="font-bold md:text-lg text-base text-white mb-3 font-medium" title="Card 1">
            
              Jazzhut
           
          </h3>
          <p className="font-normal md:text-base text-small mb-3 text-white font-normal">I created a dedicated mobile app for scheduling and making reservations for events in a jazz lounge.</p>
          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h3 className="text-lg text-white">
                        <Link className="items-center md:text-base text-small font-medium" href="https://www.behance.net/gallery/140626181/Jazzhut" passHref={true}>
                            Case Study
                        </Link>
                    </h3>
                    <p className="text-white text-lg" >
                      <Link className="text-white items-center md:text-base text-small font-medium" href="https://www.figma.com/proto/pfTEVP2AoJjGSrIC2g8WIE/Jazzhut?kind=&node-id=4%3A721&page-id=0%3A1&scaling=min-zoom&show-proto-sidebar=1&starting-point-node-id=2%3A3" passHref={true}>
                      Prototype</Link>
                    </p>
                </header>
        </div>
      </div>
    </div>
                    
    <div className="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
      <div className="relative bg-[#e3e3ed] rounded-xl border h-full">
        <picture className="block bg-gray-200 border-b rounded-xl">
        <Image
          src="/tab.png"
          alt="Profile"
          width="100%"
          height="100%"
          layout="responsive"
          className="lg:h-48 md:h-36 w-full object-center rounded-t-xl"
          objectFit="cover"
          priority="true"
        />
        </picture>
        <div className="p-2 text-center">
          <h3 className="font-bold md:text-lg text-base text-[#7562E0] mb-3 font-medium" title="Card 2">
            
              DIY
           
          </h3>
          <p className="font-normal md:text-base text-small mb-3 text-[#7562E0] font-normal">
          DIY is designed to make learning how to repair and make things easy and covenient.
          </p>
          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h3 className="text-lg text-[#7562E0]">
                        <Link className="items-center md:text-base text-small font-medium" href="https://www.behance.net/gallery/140644679/DIY" passHref={true}>
                            Case Study
                        </Link>
                    </h3>
                    <p className="text-[#7562E0] text-lg" >
                      <Link className="items-center md:text-base text-small font-medium" href="https://www.figma.com/proto/WK3JRBk2EDkuDCdAQBLSJM/DIY?kind=&node-id=35%3A446&page-id=0%3A1&scaling=min-zoom&starting-point-node-id=32%3A25" passHref={true}>
                      Prototype</Link>
                    </p>
                </header>
        </div>
      </div>
    </div>
                    
    <div className="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
      <div className="relative bg-[#7562E0] rounded-xl border h-full">
        <picture className="block bg-gray-200 border-b rounded-xl">
        <Image
          src="/vote.png"
          alt="Profile"
          width="100%"
          height="100%"
          layout="responsive"
          className="lg:h-48 md:h-36 w-full object-center rounded-t-xl"
          objectFit="cover"
          priority="true"
        />
        </picture>
        <div className="p-2 text-center">
          <h3 className="font-bold md:text-lg text-base text-white mb-3 font-medium" title="Card 3">
              Vote
          </h3>
          <p className="font-normal md:text-base text-small mb-3 text-white font-normal">
          This is a voter registration project aimed at getting young adults to register to vote.
          </p>
          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h3 className="text-lg text-white">
                        <Link className="items-center md:text-base text-small font-medium" href="https://www.behance.net/gallery/141072767/Voter-Registration-Application-Case-Study" passHref={true}>
                            Case Study
                        </Link>
                    </h3>
                    <p className="text-white text-lg" >
                      <Link className="items-center md:text-base text-small font-medium" href="https://www.figma.com/proto/Rv4NQ7sb2AbMHilyOzMPCk/Voting?node-id=39%3A8&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=39%3A8" passHref={true}>
                      Prototype</Link>
                    </p>
                </header>
        </div>
      </div>
    </div>
                    
    <div className="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
      <div className="relative bg-[#e3e3ed] rounded-xl border h-full">
        <picture className="block bg-gray-200 border-b rounded-xl">
        <Image
          src="/envato.png"
          alt="Profile"
          width="100%"
          height="100%"
          layout="responsive"
          className="lg:h-48 md:h-36 w-full object-center rounded-t-xl"
          objectFit="cover"
          priority="true"
        />
        </picture>
        <div className="p-2 text-center">
          <h3 className="font-bold md:text-lg text-base text-[#7562E0] mb-3 font-medium" title="Card 3">
              Envato Care
          </h3>
          <p className="font-normal md:text-base text-small mb-3 text-[#7562E0] font-normal">
            This project is a code implementation of a pharmaceutical portfolio from Figma.
          </p>
          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h3 className="text-lg text-[#7562E0]">
                        <Link className="items-center md:text-base text-small font-medium" href="https://variant.netlify.app/" passHref={true}>
                            Live
                        </Link>
                    </h3>
                    <p className="text-[#7562E0] text-lg" >
                      <Link className="items-center md:text-base text-small font-medium" href="https://github.com/Nwosu-Ihueze/Envato-care" passHref={true}>
                      Github</Link>
                    </p>
                </header>
        </div>
      </div>
    </div>
                    
    <div className="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
      <div className="relative bg-[#7562E0] rounded-xl border h-full">
        <picture className="block bg-gray-200 border-b rounded-xl">
        <Image
          src="/slayer.png"
          alt="Profile"
          width="100%"
          height="100%"
          layout="responsive"
          className="lg:h-48 md:h-36 w-full object-center rounded-t-xl"
          objectFit="cover"
          priority="true"
        />
        </picture>
        <div className="p-2 text-center">
          <h3 className="font-bold md:text-lg text-base text-white mb-3 font-medium" title="Card 5">
            
             Metaverse Slayer
           
          </h3>
          <p className="font-normal md:text-base text-small mb-3 text-white font-normal">
            A simple blockchain game residing in Ethereum devnet
          </p>
          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h3 className="text-lg text-white">
                        <Link className="items-center md:text-base text-small font-medium" href="https://metaverse-slayer.netlify.app/" passHref={true}>
                            Live
                        </Link>
                    </h3>
                    <p className="text-white text-lg" >
                      <Link className="items-center md:text-base text-small font-medium" href="https://github.com/Nwosu-Ihueze/Metaverse-Slayer" passHref={true}>
                      Github</Link>
                    </p>
                </header>
        </div>
      </div>
    </div>
                    
    <div className="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
      <div className="relative bg-[#e3e3ed] rounded-xl border h-full">
        <picture className="block bg-gray-200 border-b rounded-xl">
        <Image
          src="/dao.png"
          alt="Profile"
          width="100%"
          height="100%"
          layout="responsive"
          className="lg:h-48 md:h-36 w-full object-center rounded-t-xl"
          objectFit="cover"
          priority="true"
        />
        </picture>
        <div className="p-2 text-center">
          <h3 className="font-bold md:text-lg text-base text-[#7562E0] mb-3 font-medium" title="Card 6">
              DAO
          </h3>
          <p className="font-normal md:text-base text-small mb-3 text-[#7562E0] font-normal">
            This is a decentralized autonomous organization built on the rinkeby testnet.
          </p>
          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h3 className="text-lg text-[#7562E0]">
                        <Link className="items-center md:text-base text-small font-medium" href="https://cryptodev-dao.vercel.app/" passHref={true}>
                            Live
                        </Link>
                    </h3>
                    <p className="text-[#7562E0] text-lg" >
                      <Link className="items-center md:text-base text-small font-medium" href="https://github.com/Nwosu-Ihueze/cryptodev-dao" passHref={true}>
                      Github</Link>
                    </p>
                </header>
        </div>
      </div>
    </div>
 
</div>

  </div>
</section>

<section className="bg-[#1A1A29] lg:px-24 font-Poppins" id="connect">
<div className="flex flex-row justify-center items-center min-h-screen">
	<main className="flex flex-col lg:flex-row bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6">
		<div className="flex-1 p-4 lg:p-6">
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-12 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="text-center lg:text-left">
              <h1 className="my-2 text-[#7562E0] font-bold text-xl font-bold lg:text-5xl md:text-3xl">Bring your dreams and ideas to life.
              </h1>
              <p className="my-2 text-white text-center lg:text-left">I design with users at the center for their optimal experience, let us make magic together.</p>
              <Link href="https://www.linkedin.com/in/rosemary-nwosu-ihueze/" passHref={true}><button className="text-base font-medium sm:w-full lg:w-auto border-0 rounded-xl py-2 px-6 text-center bg-[#7562E0] text-white hover:bg-[#33296D] focus:outline-none">Connect with me</button></Link>
          </div>
        </div>
        <div>
          <img src="/pix.png" />
        </div>
      </div>
    </div>
	</main>
</div>
</section>






    </>
  );
};


export default Body;