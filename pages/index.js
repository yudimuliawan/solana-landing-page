import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Container from "../components/container";
import { benefitOne, benefitTwo } from "../components/data";

import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";

import { useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";

export default function Home() {
  let observer = useRef();

  useEffect(() => {
    observer = new IntersectionObserver(callback);

    const targets = document.querySelectorAll(".js-show-on-scroll");
    targets.forEach(function (target) {
      target.classList.add("opacity-0");
      observer.observe(target);
    });
  }, []);

  const callback = function (entries) {
    entries.forEach((entry) => {
      console.log(entry);

      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fadeIn");
      } else {
        entry.target.classList.remove("animate-fadeIn");
      }
    });
  };
  return (
    <>
      <div div className="w-11/12 mx-auto">
        <Head>
          <title>LITTLEINU TOKEN - LINU</title>
          <meta
            name="description"
            content=""
          />
          <link rel="icon" href="/favicon.ico" />
          <script
            data-ad-client="ca-pub-3895410812001823"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
        </Head>

        <Navbar />
        <Hero />
        <Testimonials />
        <SectionTitle
          pretitle=""
          title="R  O  A  D  M  A  P"
        ></SectionTitle>
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
        {/* <Video /> */}
        <SectionTitle
          
          title="1,500,000,000 $LINU"  
          pretitle="Tokenomics"
          
        ></SectionTitle>
       
        <Container>
          <div className="flex flex-col justify-center w-full mt-20 lg:mt-20">
            <Tilt tiltReverse={true} tiltAxis={"y"}>
              <div
                id="service"
                className="flex flex-col sm:flex-row sm:w-full items-center justify-around space-x-4 -mt-24 js-show-on-scroll"
              >
                <div className="flex flex-col bg-indigo-50 items-center justify-center w-full h-full lg:w-4/12 lg:h-50 p-4 shadow-md blur-3 rounded-lg bg-opacity-25 row-span-12 mb-4 hover:shadow-xl lg:hover:-translate-y-12 scale-90 hover:scale-100 md:scale-100 duration-700">
                 
                  <h1 className=" text-center text-md font-bold">
                  40%{" "}
                    <span className="text-pink-900 dark:text-indigo-500">
                    release via Airdrop
                    </span>
                  </h1>
                </div>

                

                <div className="flex flex-col bg-indigo-50 items-center justify-center w-full h-full lg:w-4/12 lg:h-50 p-4 shadow-md blur-3 rounded-lg bg-opacity-25 row-span-12 mb-4 hover:shadow-xl lg:hover:-translate-y-12 scale-90 hover:scale-100 md:scale-100 duration-700 ">
                
                  <h1 className=" text-center text-md font-bold ">
                  30%{" "}
                    <span className="text-pink-900 dark:text-indigo-500">
                    releasing for Liquidity
                    </span>
                  </h1>
                </div>
                <div className="flex flex-col bg-indigo-50 items-center justify-center w-full h-full lg:w-4/12 lg:h-50 p-4 shadow-md blur-3 rounded-lg bg-opacity-25 row-span-12 mb-4 hover:shadow-xl lg:hover:-translate-y-12 scale-90 hover:scale-100 md:scale-100 duration-700">
                 
                  <h1 className=" text-center text-md font-bold">
                  10%{" "}
                    <span className="text-pink-900 dark:text-indigo-500 mt-2">
                    for Roadmap
                    </span>
                  </h1>
                </div>
                <div className="flex flex-col bg-indigo-50 items-center justify-center w-full h-full lg:w-4/12 lg:h-50 p-4 shadow-md blur-3 rounded-lg bg-opacity-25 row-span-12 mb-4 hover:shadow-xl lg:hover:-translate-y-12 scale-90 hover:scale-100 md:scale-100 duration-700">
                 
                  <h1 className=" text-center text-md font-bold">
                  10%{" "}
                    <span className="text-pink-900 dark:text-indigo-500 mt-2">
                    for Partnerships
                    </span>
                  </h1>
                </div>
                <div className="flex flex-col bg-indigo-50 items-center justify-center w-full h-full lg:w-4/12 lg:h-50 p-4 shadow-md blur-3 rounded-lg bg-opacity-25 row-span-12 mb-4 hover:shadow-xl lg:hover:-translate-y-12 scale-90 hover:scale-100 md:scale-100 duration-700">
                
                  <h1 className=" text-center text-md font-bold">
                  10%{" "}
                    <span className="text-pink-900 dark:text-indigo-500 mt-2">
                    for Core Team
                    </span>
                  </h1>
                </div>
              </div>
            </Tilt>
            {/* <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <AmazonLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <VerizonLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <MicrosoftLogo />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <NetflixLogo />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <SonyLogo />
            </div>
          </div> */}
          </div>
        </Container>
        {/* <Faq /> */}
        {/* <Cta /> */}
        <Footer />
        {/* <PopupWidget /> */}
      </div>
    </>
  );
}
