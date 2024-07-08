import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
import TextyAnim from "rc-texty";

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap w-11/12 mt-10 lg:mt-0 mb-4">
        <div className="relative flex items-center w-full lg:w-1/2 ">
          <div className="absolute top-0 -left-4 w-52 h-52 md:w-72 md:h-72 bg-purple-300 mix-blend-multiply filter blur-xl opacity-50 rounded-full animate-blob mt-10 z-0"></div>
          <div className="absolute top-0 -right-4 w-52 h-52 md:w-72 md:h-72 bg-yellow-300 mix-blend-multiply filter blur-xl opacity-50 rounded-full animate-blob animation-delay-2000 mt-20 z-0"></div>
          <div className="absolute top-0 -bottom-8 w-52 h-52 md:w-72 md:h-72 bg-pink-300 mix-blend-multiply filter blur-xl opacity-50 rounded-full animate-blob animation-delay-4000 mt-36 z-0"></div>

          <div className="max-w-2xl mb-8 z-10">
            {/* <h1 className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-3xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">
              LEBIH DARI SEKEDAR SOLUSI IT BAGI PERUSAHAAN ANDA.
            </h1> */}
            <TextyAnim className=" z-10 text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-3xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">
            LITTLEINU TOKEN.
            </TextyAnim>
            <p className=" z-20 py-5 text-lg leading-normal text-gray-700 lg:text-lg xl:text-xl dark:text-indigo-50">
              <span className="font-bold">LittleInu</span> is a way to show love and appreciation to the INU family, we love the coins and we love the community, we plan to integrate this token with utility on the NFT space later down the line, but without over promising anything, we hope to build a lovable community with the goal to be one of the top meme coins on Solana, airdrops of custom made NFTs and later on farmable rewards will be implemented, we will also be one of the cross chain meme coins that can be used across all of blockchain (and hopefully the Metaverse).
            </p>

            <div className="flex flex-col items-start space-x-3 space-y-3 sm:space-y-0 sm:items-center sm:flex-row">
              <Link href="https://discord.com/invite/T7xQjjFrEb" passHref>
                <a
                  rel="noopener"
                  className="z-30 px-4 py-2  mt-5 text-base font-medium text-center text-white bg-indigo-600 rounded-md  md:px-8 md:py-4 lg:text-lg hover:translate-y-2 duration-500"
                > DISCORD</a>
              </Link>

              
              
            </div>
            
          </div>
        </div>
        <div className="flex items-top justify-center w-full lg:w-1/2 scale-105 hover:scale-110 duration-700 z-0 -mt-5">
          <div className="hidden lg:block">
            <Image
              src={heroImg}
              width="680"
              height="600"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              // placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
