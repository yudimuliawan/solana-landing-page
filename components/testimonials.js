import React from "react";
import Container from "./container";
import Link from "next/link";

export default function Cta() {
  return (
    <Container className="js-show-on-scroll">
      <div
        id="kontak"
        className="flex flex-wrap  text-center w-full max-w-4xl gap-5 text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl hover:shadow-2xl scale-100 hover:scale-105 duration-700 mx-auto "
      >
        <div className="flex-grow text-center lg:text-left">
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
          MINT ADDRESS  : 41TWWURTUV4K8TUFXP1VFFYP9NOMBHXQTSCSE8XLM26V
          </p>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
          TOKEN NAME    : LITTLEINU TOKEN
          </p>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
          TOKEN SYMBOL  : LINU
          </p>
        </div>
      </div>
    </Container>
  );
}
