import Head from 'next/head';
import { HiSparkles, HiSun } from 'react-icons/hi';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import devellie from "../public/EllieAI.jpg";
import trello from "../public/Trell-O.png";
import pawshop from "../public/PawShop.png";
import tachigame from "../public/TachiGame.png";
import bookshelf from "../public/Bookshelf.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ellie Trullinger Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-slate-600">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl dark:text-slate-100">developedbyellie</h1>
            <ul className="flex items-center">
              <li>
                {!darkMode ? 
                  <HiSparkles onClick={() => setDarkMode(true)} className="cursor-pointer text-2xl" /> : 
                  <HiSun onClick={() => setDarkMode(false)} className="cursor-pointer text-2xl text-slate-200" />
                }
              </li>
              <li>
                <a 
                  className="bg-gradient-to-r from-slate-500 to-slate-300 text-white px-4 rounded-md ml-5"
                  href="mailto:ellietrullinger@gmail.com"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-slate-600 font-medium dark:text-slate-100">
              Ellie Trullinger
            </h2>
            <h3 className="text-2xl py-2 dark:text-slate-400">Software Engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 max-w-xl mx-auto dark:text-gray-100">Software Engineer with 4.5 years of experience working in the tech industry with venture-backed, high-growth startups.</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-100">
            <a href="https://www.linkedin.com/in/etrullinger/" target="_blank">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/etrullinger" target="_blank">
              <AiFillGithub />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-slate-500 rounded-full w-80 h-80 mt-10 overflow-hidden shadow-lg shadow-slate-500 md:h-96 md:w-96 dark:shadow-slate-300">
            <Image src={devellie} alt="ai_photo_of_ellie" />
          </div>
        </section>

        <section className="mt-10">
          <div className="text-center bg-gradient-to-r from-slate-500 to-slate-300 px-4 mb-5 rounded-md">
            <h3 className="text-3xl py-1 text-gray-700 dark:text-gray-200">Portfolio</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 shadow-lg p-10 rounded-xl mb-10 shadow-slate-600 dark:shadow-slate-300">
              <a href="https://trell-o.herokuapp.com/" target="_blank">
                <Image 
                  src={trello}
                  alt="trell-o_preview"
                  className="rounded-lg object-cover"
                  width={'100%'}
                  height={'100%'}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 shadow-lg p-10 rounded-xl mb-10 shadow-slate-600 dark:shadow-slate-300">
              <a href="https://paw-shop.herokuapp.com/" target="_blank">
                <Image 
                  src={pawshop}
                  alt="pawshop_preview"
                  className="rounded-lg object-cover"
                  width={'100%'}
                  height={'100%'}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 shadow-lg p-10 rounded-xl mb-10 shadow-slate-600 dark:shadow-slate-300">
              <a href="https://tachi-game.herokuapp.com/" target="_blank">
                <Image 
                  src={tachigame}
                  alt="tachigame_preview"
                  className="rounded-lg object-cover"
                  width={'100%'}
                  height={'100%'}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 shadow-lg p-10 rounded-xl mb-10 shadow-slate-600 dark:shadow-slate-300">
              <a href="https://startling-faun-2fecee.netlify.app/" target="_blank">
                <Image 
                  src={bookshelf}
                  alt="bookshelf_preview"
                  className="rounded-lg object-cover"
                  width={'100%'}
                  height={'100%'}
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
