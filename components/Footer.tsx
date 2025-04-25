/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="heading lg:max-w-[45vw] leading-relaxed">
          Prêt à élever votre présence{' '}
          <span className="text-purple">numérique ?</span>
        </h2>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contactez-nous dès aujourd&apos;hui pour discuter de la manière dont
          nous pouvons vous aider à atteindre vos objectifs.
        </p>

        <a href={"/emails"}>
          <MagicButton
            title="Contactez nous"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 WideWeb
        </p>

        <div className="flex py-10 items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.url}  // Utilisez l'URL ici
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-300"
            >
              <img
                src={profile.img}
                width={20}
                height={20}
                alt={String(profile.id)}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
