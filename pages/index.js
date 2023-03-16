import Head from 'next/head';
import { HiSparkles } from 'react-icons/hi';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import devellie from "../public/EllieAI.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ellie Trullinger Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">developedbyellie</h1>
            <ul className="flex items-center">
              <li>
                <HiSparkles className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a className="bg-gradient-to-r from-slate-500 to-slate-300 text-white px-4 rounded-md ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-slate-600 font-medium">
              Ellie Trullinger
            </h2>
            <h3 className="text-2xl py-2">Software Engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">Software Engineer with 4.5 years of experience working in the tech industry with venture-backed, high-growth startups.</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-slate-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={devellie} />
          </div>
        </section>

      </main>
    </div>
  );
};
