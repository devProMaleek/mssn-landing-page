"use client";
import Link from "next/link";
import Logo from "./components/Logo";
import Image from "next/image";

import HeroImage from "../public/hero-image.png";
import Benchmark from "../public/benchmark.svg";
import Arabic from "../public/arabic.png";
import MssnLogo from "../public/mssn-logo.png";
import OrganizerImage from "../public/organizers.png";
import SmallArabic from "../public/arabic-small.png";
import Origami from "../public/origami.svg";
import Divider from "../public/divider.svg";
import BigLogo from "../public/big-logo.svg";
import AppLogo from "../public/yellow-appLogo.svg";
import MssnLogoVector from "../public/mssn-logo.svg";
import Delimiter from "../public/delimiter.svg";
import { useEffect, useState } from "react";

type Countdown = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

export default function HomePage() {
  const [countdown, setCountdown] = useState<Countdown>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const calculateCountdown = (endDate: Date) => {
    const diffInSeconds = Math.floor((endDate.getTime() - Date.now()) / 1000);

    const days = Math.floor(diffInSeconds / 86400);
    const hours = Math.floor((diffInSeconds % 86400) / 3600);
    const minutes = Math.floor((diffInSeconds % 3600) / 60);
    const seconds = diffInSeconds % 60;

    const paddedDays = days.toString().padStart(2, "0");
    const paddedHours = hours.toString().padStart(2, "0");
    const paddedMinutes = minutes.toString().padStart(2, "0");
    const paddedSeconds = seconds.toString().padStart(2, "0");

    setCountdown({
      days: paddedDays,
      hours: paddedHours,
      minutes: paddedMinutes,
      seconds: paddedSeconds,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      calculateCountdown(new Date("2023-12-22"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <main className="relative">
        <header className="mb-10">
          <div className="">
            <div className="bg-none md:bg-[url('./images/navbar-background.svg')] md:h-52 -z-50 bg-no-repeat bg-[50%_100%] bg-origin-border bg-clip-border">
              <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 shadow-md start-0">
                <div className="px-4 lg:px-6 dark:bg-gray-800">
                  <div className="flex flex-wrap items-center justify-between p-4 mx-auto max-w-screen-2xl">
                    <div className="">
                      <Link href="/">
                        <div className="flex items-center space-x-2">
                          <div className="">
                            <Logo />
                          </div>
                          <div className="text-[8px] md:text-xl w-10 font-bold">
                            <span className="text-black block m-0 p-0 leading-[8px] md:leading-5">
                              113th
                            </span>
                            <span className="text-primary block m-0 p-0 leading-[8px] md:leading-5">
                              Islamic
                            </span>
                            <span className="text-primary block m-0 p-0 leading-[8px] md:leading-5">
                              Vacation
                            </span>
                            <span className="text-primary block m-0 p-0 leading-[8px] md:leading-5">
                              Course
                            </span>
                          </div>
                        </div>
                        <div className="">
                          <p className="text-black text-[8px] md:text-base font-bold tracking-normal">
                            organised by MSSN Lagos
                          </p>
                        </div>
                      </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="block text-xs font-bold leading-8 tracking-normal sm:hidden md:text-2xl text-success-800">
                        <span className="">New User?</span>
                        <span className="ml-2 underline">Register</span>
                      </div>
                      <div className="">
                        <button
                          data-collapse-toggle="navbar-default"
                          type="button"
                          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          aria-controls="navbar-default"
                          aria-expanded="false"
                        >
                          <span className="sr-only">Open main menu</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 1h15M1 7h15M1 13h15"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div
                      className="hidden w-full md:block md:w-auto"
                      id="navbar-default"
                    >
                      <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 md:items-center bg-gray-50 md:flex-row md:space-x-12 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                          <Link href="https://camp.mssnlagos.net">
                            <div className="text-xl font-bold leading-8 tracking-normal md:text-2xl text-success-800">
                              <span className="">New User?</span>
                              <span className="ml-2 underline">Register</span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://camp.mssnlagos.net/existingmember">
                            <button
                              type="button"
                              className="px-8 py-2 text-xl font-medium text-center text-white rounded-full cursor-pointer bg-primary hover:bg-success-700 focus:outline-none focus:ring-4 focus:ring-green-300 md:text-2xl dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                              Existing Users
                            </button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div className="absolute left-8 -top-10 uppercase text-center text-[150px] font-black opacity-10 tracking-tighter">
                ISLAMIC VACATION COURSE
              </div> */}
              </nav>
            </div>

            <section className="bg-[url('./images/hero-section-background.png')] h-screen bg-no-repeat bg-bottom md:bg-[50%_100%] bg-auto bg-clip-content">
              <div className="items-center gap-8 px-4 pt-32 mx-auto mb-4 md:pt-0 max-w-screen-2xl md:grid md:grid-cols-2 lg:px-6">
                <div className="mt-8 md:mt-0">
                  <div className="relative hidden md:block">
                    <Image
                      src={Arabic}
                      alt="Arabic Svg"
                      sizes="100vw"
                      className="absolute right-24 -top-16 "
                    />
                    <Image src={Benchmark} alt="Benchmark Svg" />
                  </div>
                  <div className="relative block md:hidden">
                    <Image
                      src={SmallArabic}
                      alt="Arabic Svg"
                      sizes="100vw"
                      className="absolute right-0 -top-24 "
                    />
                    <Image src={Benchmark} alt="Benchmark Svg" />
                  </div>
                  <div className="">
                    <div className="my-8">
                      <p className="text-2xl font-normal leading-8 tracking-wider text-slate-400 md:text-3xl md:leading-10 md:tracking-normal">
                        It’s going to be yet another soul-inspiring{" "}
                        <span className="text-primary">&</span> informative
                        journey.
                      </p>
                    </div>
                    <div className="">
                      <div className="flex flex-col space-y-6 md:flex-row md:items-center md:space-y-0 md:space-x-6">
                        <div className="">
                          <button
                            type="button"
                            className="w-full text-white border-t border-r border-b-[6px] border-l-[6px] border-solid border-[#C1DC01] hover:border-primary bg-primary hover:bg-white hover:text-primary cursor-pointer focus:outline-none focus:ring-4 focus:ring-green-300 font-semibold rounded-full text-xl md:text-2xl px-10 py-4 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                          >
                            For Support & donations
                          </button>
                        </div>
                        <div className="">
                          <button
                            type="button"
                            className="w-full text-primary border-t border-r border-b-[6px] border-l-[6px] border-solid border-primary hover:border-[#C1DC01] bg-white hover:bg-primary hover:text-white cursor-pointer focus:outline-none focus:ring-4 focus:ring-green-300 font-semibold rounded-full text-xl md:text-2xl px-10 py-4 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                          >
                            Buy PINs
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <Image src={HeroImage} alt="Hero Image" />
                </div>
              </div>
              <div className="px-4 mx-auto mt-10 max-w-screen-2xl lg:px-6 md:mt-28">
                <div className="bg-[#f1f1f1] h-44 rounded-lg flex items-center justify-center">
                  <div className="flex flex-col w-4/5 mx-auto space-y-6 md:flex-row md:items-center md:space-y-0 md:justify-between">
                    <div className="">
                      <p className="text-xl font-extrabold leading-normal tracking-normal text-center md:text-3xl md:text-left text-success-800">
                        COUNTDOWN <span className="font-normal">TO</span> 113th
                        IVC
                      </p>
                    </div>
                    <div className="flex items-center space-x-1 md:space-x-2">
                      <div className="">
                        <div className="relative flex items-center justify-center w-16 rounded-md h-14 md:h-24 md:w-28 bg-success-500">
                          <Image
                            src={Divider}
                            alt="Benchmark Svg"
                            className="absolute"
                          />
                          <p className="text-2xl text-white font-shareTech md:text-8xl">
                            {countdown.days}
                          </p>
                        </div>
                        <p className="text-sm font-normal leading-normal tracking-normal text-center text-black uppercase font-shareTech md:text-lg">
                          Days
                        </p>
                      </div>
                      <div className="">
                        <Image
                          src={Delimiter}
                          alt="Delimiter Svg"
                          className="md:-mt-6"
                        />
                      </div>
                      <div className="">
                        <div className="relative flex items-center justify-center w-16 rounded-md h-14 md:h-24 md:w-28 bg-success-500">
                          <Image
                            src={Divider}
                            alt="Benchmark Svg"
                            className="absolute "
                          />
                          <p className="text-2xl text-white font-shareTech md:text-8xl">
                            {countdown.hours}
                          </p>
                        </div>
                        <p className="text-sm font-normal leading-normal tracking-normal text-center text-black uppercase font-shareTech md:text-lg">
                          Hours
                        </p>
                      </div>
                      <div className="">
                        <Image
                          src={Delimiter}
                          alt="Delimiter Svg"
                          className="w-4 h-8 md:-mt-6"
                        />
                      </div>
                      <div className="">
                        <div className="relative flex items-center justify-center w-16 rounded-md h-14 md:h-24 md:w-28 bg-success-500">
                          <Image
                            src={Divider}
                            alt="Benchmark Svg"
                            className="absolute "
                          />
                          <p className="text-2xl text-white font-shareTech md:text-8xl">
                            {countdown.minutes}
                          </p>
                        </div>
                        <p className="text-sm font-normal leading-normal tracking-normal text-center text-black uppercase font-shareTech md:text-lg">
                          Minutes
                        </p>
                      </div>
                      <div className="">
                        <Image
                          src={Delimiter}
                          alt="Delimiter Svg"
                          className="md:-mt-6"
                        />
                      </div>
                      <div className="">
                        <div className="relative flex items-center justify-center w-16 rounded-md h-14 md:h-24 md:w-28 bg-success-500">
                          <Image
                            src={Divider}
                            alt="Benchmark Svg"
                            className="absolute "
                          />
                          <p className="text-2xl text-white font-shareTech md:text-8xl">
                            {countdown.seconds}
                          </p>
                        </div>
                        <p className="text-sm font-normal leading-normal tracking-normal text-center text-black uppercase font-shareTech md:text-lg">
                          Seconds
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-h-content bg-white md:bg-transparent md:bg-gradient-to-b mb-10 md:from-transparent md:from-2% md:to-white md:to-10%">
                <div className="px-4 mx-auto max-w-screen-2xl lg:px-6">
                  <div className="md:w-[55%] w-full mx-auto pt-20">
                    <div className="grid items-center grid-cols-2">
                      <div className="">
                        <Image
                          src={BigLogo}
                          sizes="100vw"
                          className="h-24 w-28 md:w-72 md:h-60"
                          alt="Logo svg"
                        />
                      </div>
                      <div className="">
                        <div className="">
                          <div className="uppercase bg-[#E5FF2D] px-6 rounded-full max-w-max text-xs leading-6 md:text-lg tracking-wider md:tracking-widest py-1">
                            <span className="font-medium">About</span>{" "}
                            <span className="font-bold">113th ivc</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-base font-normal leading-6 tracking-normal md:text-xl md:leading-8">
                            MSSNLagos State Area Unit presents her annual
                            Islamic Vacation Course (IVC) for youths. The 113th
                            edition event holds this
                            <span className="font-extrabold text-success-700 dark:text-white">
                              {" "}
                              December at EPE, Naforija.{" "}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </header>

        <section className="pt-16 bg-white dark:bg-gray-900 mt-28">
          <div className="px-4 pt-24 pb-16 mx-auto max-w-screen-2xl sm:pt-32 sm:pb-24 lg:px-6">
            <div className="max-w-screen-md">
              <h2 className="max-w-lg mt-10 mb-4 text-3xl font-extrabold md:mb-6 md:text-5xl md:tracking-wider md:leading-10 text-success-700 dark:text-white mt-md-0">
                Some speakers you would see
              </h2>
            </div>
            <div className="flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-center">
              <div className="">
                <p className="max-w-xl font-normal md:text-xl md:tracking-normal md:leading-7">
                  Some of our amazing speakers that will be around.
                </p>
              </div>
              <div className="">
                <button
                  type="button"
                  className="text-white border-t border-r border-b-[6px] border-l-[6px] border-solid border-[#C1DC01] hover:border-primary bg-primary hover:bg-white hover:text-primary cursor-pointer focus:outline-none focus:ring-4 focus:ring-green-300 font-semibold rounded-full text-xl md:text-2xl px-10 py-4 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  See all
                </button>
              </div>
            </div>

            <div className="my-6 md:my-10">
              <div className="overflow-auto scrollbar-hide">
                <div className="flex items-center mr-10 space-x-8">
                  <div className="">
                    <div className="relative">
                      <div className="w-56 h-48 md:w-[400px] md:h-[340px] bg-[url('./images/male.png')] rounded-xl bg-center bg-[#C4C4C4]/50 mix-blend-luminosity bg-no-repeat bg-cover"></div>
                      <div className="absolute md:left-6 md:top-6 top-2 left-2 text-center py-2 md:px-8 px-6 bg-[#E5FF2D] rounded-full">
                        <p className="text-sm font-semibold leading-4 tracking-normal md:text-base md:leading-6">
                          USTADH
                        </p>
                      </div>
                      <div className="mt-3 md:mt-5">
                        <p className="text-sm font-normal leading-4 tracking-normal uppercase md:text-base md:leading-8">
                          Speaker
                        </p>
                        <h4 className="text-2xl font-normal leading-8 tracking-normal md:text-4xl md:mb-2">
                          Mallam
                        </h4>
                        <p className="text-sm font-normal tracking-wide md:text-lg md:leading-8">
                          Mallam
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="relative">
                      <div className="w-56 h-48 md:w-[400px] md:h-[340px] bg-[url('./images/female.png')] rounded-xl bg-center bg-[#C4C4C4]/50 mix-blend-luminosity bg-no-repeat bg-cover"></div>
                      <div className="absolute px-6 py-2 text-center rounded-full md:left-6 md:top-6 top-2 left-2 md:px-8 bg-success-500">
                        <p className="text-sm font-semibold md:text-base md:leading-6 md:tracking-normal">
                          IMAM
                        </p>
                      </div>
                      <div className="mt-3 md:mt-5">
                        <p className="text-sm font-normal leading-4 tracking-normal uppercase md:text-base md:leading-8">
                          Speaker
                        </p>
                        <h4 className="text-2xl font-normal leading-8 tracking-normal md:text-4xl md:mb-2">
                          Mallam
                        </h4>
                        <p className="text-sm font-normal tracking-wide md:text-lg md:leading-8">
                          Scholar
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="relative">
                      <div className="w-56 h-48 md:w-[400px] md:h-[340px] bg-[url('./images/Asset-24x.png')] rounded-xl bg-center bg-[#C4C4C4]/50 mix-blend-luminosity bg-no-repeat bg-cover"></div>
                      <div className="absolute md:left-6 md:top-6 top-2 left-2 text-center py-2 md:px-8 px-6 bg-[#E5FF2D] rounded-full">
                        <p className="text-sm font-semibold md:text-base md:leading-6 md:tracking-normal">
                          USTADH
                        </p>
                      </div>
                      <div className="mt-3 md:mt-5">
                        <p className="text-sm font-normal leading-4 tracking-normal uppercase md:text-base md:leading-8">
                          Speaker
                        </p>
                        <h4 className="text-2xl font-normal leading-8 tracking-normal md:text-4xl md:mb-2">
                          Mallam
                        </h4>
                        <p className="text-sm font-normal tracking-wide md:text-lg md:leading-8">
                          Marital
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="relative">
                      <div className="w-56 h-48 md:w-[400px] md:h-[340px] bg-[url('./images/Asset-24x.png')] rounded-xl bg-center bg-[#C4C4C4]/50 mix-blend-luminosity bg-no-repeat bg-cover"></div>
                      <div className="absolute px-6 py-2 text-center rounded-full md:left-6 md:top-6 top-2 left-2 md:px-8 bg-success-500">
                        <p className="text-sm font-semibold md:text-base md:leading-6 md:tracking-normal">
                          USTADH
                        </p>
                      </div>
                      <div className="mt-3 md:mt-5">
                        <p className="text-sm font-normal leading-4 tracking-normal uppercase md:text-base md:leading-8">
                          Speaker
                        </p>
                        <h4 className="text-2xl font-normal leading-8 tracking-normal md:text-4xl md:mb-2">
                          Mallam
                        </h4>
                        <p className="text-sm font-normal tracking-wide md:text-lg md:leading-8">
                          Scholar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="items-center gap-8 px-4 pt-4 pb-8 mx-auto max-w-screen-2xl xl:gap-16 md:grid md:grid-cols-2 sm:pt-8 sm:pb-16 lg:px-6">
            <div className="">
              <Image src={OrganizerImage} alt="Organizers Image" className="" />
            </div>
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 md:mb-6 text-3xl md:text-5xl max-w-xs md:max-w-sm tracking-wider md:tracking-normal leading-10 md:leading-[48px] font-extrabold text-success-800 dark:text-white">
                About the organizers
              </h2>
              <p className="mb-6 text-base font-light tracking-wider text-gray-500 md:max-w-xl md:leading-7 md:text-xl md:tracking-wide dark:text-gray-400">
                The society, Muslim Students Society of Nigeria, is the meeting
                point for all Muslim Students in all Higher Institutions,
                Secondary Schools in most part (if not all), graduate and Post
                Graduates as well as Muslims who attend technical
                institution,...
              </p>
              <Link
                href="https://mssnlagos.net"
                className="inline-flex items-center text-sm font-bold leading-5 underline rounded-lg text-success-500 focus:ring-4 focus:ring-primary-300 md:text-base dark:focus:ring-primary-900"
              >
                Learn more
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="items-center gap-8 px-4 mx-auto py-14 max-w-screen-2xl md:grid md:grid-cols-2 sm:py-32 lg:px-6">
            <div className="self-start">
              <h2 className="mb-4 md:mb-6 text-3xl md:text-5xl w-72 md:max-w-sm tracking-widest md:tracking-normal leading-10 md:leading-[48px] font-extrabold text-success-800 dark:text-white">
                Camp Schedule
              </h2>
              <div className="max-w-md">
                <p className="text-base font-light tracking-wide text-gray-500 md:leading-7 md:text-xl dark:text-gray-400">
                  The Camp will be held in two phases
                </p>
                <ul className="ml-6 list-disc list-outside md:ml-8">
                  <li className="text-base font-light tracking-wide text-gray-500 md:leading-7 md:text-xl dark:text-gray-400">
                    Secondary School
                  </li>
                  <li className="text-base font-light tracking-wide text-gray-500 md:leading-7 md:text-xl dark:text-gray-400">
                    School leavers, Undergraduate, & Others
                  </li>
                  <li className="text-base font-light tracking-wide text-gray-500 text-start md:leading-7 md:text-xl dark:text-gray-400">
                    Both phases will hold at Human Capital Development Center
                    (HCDC), Noforija, Epe, Lagos
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 md:mt-8 mb-72 md:mb-0 md:self-start">
              <div className="flex flex-col space-x-0 md:flex-row space-y-96 md:space-y-0 md:space-x-96">
                <div className="my-8 md:my-0">
                  <div className="relative">
                    <div className="absolute -top-8 w-28 h-20 bg-[#00913E] rounded-lg z-10">
                      <p className="pt-1 text-base font-medium tracking-wide text-center text-white md:pt-2 md:leading-4">
                        Phase 1:
                      </p>
                    </div>
                    <div className="absolute w-full md:w-[345px] h-[345px] bg-[#C1DC01] rounded-[20px] z-40 px-8 py-10">
                      <div className="">
                        <div className="flex items-center space-x-8">
                          <div className="flex flex-col space-y-2 md:space-y-4">
                            <div className="">
                              <p className="text-base text-[#00913E] font-bold leading-4">
                                Secondary School
                              </p>
                            </div>
                            <div className="">
                              <p className="text-2xl font-bold text-[#0D5239] md:leading-4 tracking-wide">
                                22nd - 27th
                              </p>
                              <span className="text-base font-bold text-[#333] md:leading-4 tracking-wide">
                                December, 2023
                              </span>
                            </div>
                            <div className="">
                              <p className="text-2xl font-bold text-[#0D5239] md:leading-4 tracking-wide">
                                9th - 14th
                              </p>
                              <span className="text-base font-bold text-[#333] md:leading-4 tracking-wide">
                                Jum’ Thanni, 1445
                              </span>
                            </div>
                          </div>
                          <div className="">
                            <Image
                              src={Origami}
                              className="w-[72px] h-[72px]"
                              alt="Origami"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-72 h-[86px] rounded-lg my-4 bg-white opacity-60 py-auto">
                        <div className="px-6 py-2 text-[#00913E] text-2xl md:tracking-normal">
                          <div className="">
                            <span className="">Camp Fee:</span>{" "}
                            <span className="text-base font-bold">
                              Early Bird
                            </span>
                          </div>
                          <div className="">
                            <span className="font-extrabold md:leading-8">
                              N7,000
                            </span>{" "}
                            <span className="font-semibold">(1000 slots)</span>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <Link
                          href="#"
                          className="inline-flex items-center text-[#00913E] focus:ring-4 leading-5 focus:ring-primary-300 font-extrabold underline rounded-lg text-base dark:focus:ring-primary-900"
                        >
                          Get Ticket
                          <svg
                            className="w-5 h-5 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-8 md:mb-0">
                  <div className="relative">
                    <div className="absolute -top-8 w-28 h-20 bg-[#C1DC01] rounded-md z-10">
                      <p className="text-center pt-1 md:pt-2 text-[#0D5239] font-medium md:leading-4 tracking-wide md:text-base">
                        Phase 2:
                      </p>
                    </div>
                    <div className="absolute w-full md:w-[345px] h-[345px] bg-[#00913E] rounded-[20px] z-40 px-8 py-10">
                      <div className="">
                        <div className="flex items-center space-x-6 md:space-x-8">
                          <div className="flex flex-col space-y-2 md:space-y-4">
                            <div className="">
                              <p className="text-sm font-bold text-white md:leading-4">
                                Undergraduate & Others
                              </p>
                            </div>
                            <div className="">
                              <p className="text-2xl font-bold text-[#C1DC01] md:leading-4 tracking-wide">
                                22nd - 27th
                              </p>
                              <span className="text-base font-bold tracking-wide text-white md:leading-4">
                                December, 2023
                              </span>
                            </div>
                            <div className="">
                              <p className="text-2xl font-bold text-[#C1DC01] md:leading-4 tracking-wide">
                                9th - 14th
                              </p>
                              <span className="text-base font-bold tracking-wide text-white md:leading-4">
                                Jum’ Thanni, 1445
                              </span>
                            </div>
                          </div>
                          <div className="">
                            <Image
                              src={Origami}
                              className="w-[72px] h-[72px]"
                              alt="Origami"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-72 h-[86px] rounded-lg my-4 bg-white opacity-60 py-auto">
                        <div className="px-6 py-2 text-[#00913E] text-2xl md:tracking-normal">
                          <div className="">
                            <span className="">Camp Fee:</span>{" "}
                            <span className="text-base font-bold">
                              Early Bird
                            </span>
                          </div>
                          <div className="">
                            <span className="font-extrabold md:leading-8">
                              N10,000
                            </span>{" "}
                            <span className="font-semibold">(300 slots)</span>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <Link
                          href="#"
                          className="inline-flex items-center text-[#E5FF2D] focus:ring-4 leading-5 focus:ring-primary-300 font-extrabold underline rounded-lg text-sm md:text-base dark:focus:ring-primary-900"
                        >
                          Get Ticket
                          <svg
                            className="w-5 h-5 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="items-center gap-8 px-4 mx-auto py-14 max-w-screen-2xl md:grid md:grid-cols-2 sm:py-32 lg:px-6">
            <div className="self-start">
              <h2 className="mb-4 md:mb-6 text-3xl md:text-5xl w-72 md:max-w-sm tracking-widest md:tracking-normal leading-10 md:leading-[48px] font-extrabold text-success-800 dark:text-white">
                Become a Sponsor
              </h2>
              <p className="max-w-sm mb-6 text-base font-light tracking-wide text-gray-500 md:leading-7 md:text-xl dark:text-gray-400">
                Help us make this camp a memorable one for thousands of Muslims
                students’ in Lagos
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-bold leading-5 underline rounded-lg text-success-500 focus:ring-4 focus:ring-primary-300 md:text-base dark:focus:ring-primary-900"
              >
                Contact us
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-10">
                <div>
                  <Image
                    src={MssnLogo}
                    alt="Mssn Logo"
                    className="w-40 h-28 md:w-56 md:h-40"
                  />
                </div>
                <div className="w-40 border border-black rounded-lg h-28 md:w-56 md:h-40"></div>
                <div className="w-40 border border-black rounded-lg h-28 md:w-56 md:h-40"></div>
                <div className="w-40 border border-black rounded-lg h-28 md:w-56 md:h-40"></div>
                <div className="w-40 border border-black rounded-lg h-28 md:w-56 md:h-40"></div>
                <div className="w-40 border border-black rounded-lg h-28 md:w-56 md:h-40"></div>
                <div className="hidden w-40 border border-black rounded-lg md:block h-28 md:w-56 md:h-40"></div>
                <div className="hidden w-40 border border-black rounded-lg md:block h-28 md:w-56 md:h-40"></div>
                <div className="hidden w-40 border border-black rounded-lg md:block h-28 md:w-56 md:h-40"></div>
              </div>
            </div>
          </div>
        </section>

        <footer className="p-4 pb-24 bg-[#0D5239] sm:p-6 dark:bg-gray-800">
          <div className="pt-4 mx-auto md:pt-8 max-w-screen-2xl">
            <div className="md:flex md:justify-between">
              <div className="mt-6 mb-16 md:mt-0 md:mb-0">
                <div className="flex items-center">
                  <div className="">
                    <Link href="/">
                      <div className="flex items-center space-x-2">
                        <div className="">
                          <Image
                            src={AppLogo}
                            sizes="100vw"
                            alt="Application Logo"
                            className="w-20 h-16 md:w-24 md:h-20"
                          />
                        </div>
                        <div className="w-10 text-lg font-bold md:text-xl">
                          <span className="block p-0 m-0 leading-4 text-white md:leading-5">
                            113th
                          </span>
                          <span className="text-[#E5FF2D] block m-0 p-0 leading-4 md:leading-5">
                            Islamic
                          </span>
                          <span className="text-[#E5FF2D] block m-0 p-0 leading-4 md:leading-5">
                            Vacation
                          </span>
                          <span className="text-[#E5FF2D] block m-0 p-0 leading-4 md:leading-5">
                            Course
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="w-0.5 h-20 ml-14 mr-4 md:ml-24 md:mr-16 bg-[#E5FF2D]"></div>
                  <div className="">
                    <div className="flex items-center space-x-3">
                      <div className="w-20 text-end">
                        <span className="block p-0 m-0 text-xl font-bold leading-4 tracking-widest text-white md:text-2xl md:leading-5">
                          MSSN
                        </span>
                        <span className="block p-0 m-0 text-xs font-semibold leading-4 text-white md:text-sm md:leading-5">
                          Lagos State
                        </span>
                        <span className="block p-0 m-0 text-xs font-semibold leading-4 text-white md:text-sm md:leading-5">
                          Area Unit
                        </span>
                      </div>
                      <div className="w-20 h-20 bg-[#E5FF2D] rounded-xl flex justify-center items-center">
                        <Image
                          src={MssnLogoVector}
                          alt="Mssn Logo Vector"
                          className="md:w-16 md:h-16"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:gap-16 sm:grid-cols-2">
                <div>
                  <ul className="text-white dark:text-gray-400">
                    <li className="mb-2">
                      <Link
                        href="/"
                        className="text-xl font-normal md:leading-9 md:tracking-wide hover:underline"
                      >
                        About IVC
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href="/"
                        className="text-xl font-normal md:leading-9 md:tracking-wide hover:underline"
                      >
                        Organizers
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href="/"
                        className="text-xl font-normal md:leading-9 md:tracking-wide hover:underline"
                      >
                        Past Event
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="text-white dark:text-gray-400">
                    <li className="mb-2">
                      <Link
                        href="/"
                        className="text-xl font-normal md:leading-9 md:tracking-wide hover:underline "
                      >
                        Speakers
                      </Link>
                    </li>
                    <li className="mb-2">
                      <a
                        href="/"
                        className="text-xl font-normal md:leading-9 md:tracking-wide hover:underline"
                      >
                        Sponsorship
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <div>
                  <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-6">
                      <Link
                        href="#"
                        className="inline-flex items-center text-[#E5FF2D] focus:ring-4 leading-5 md:leading-7 md:tracking-wide focus:ring-primary-300 font-bold underline rounded-lg text-2xl md:text-3xl dark:focus:ring-primary-900"
                      >
                        Get Ticket
                        <svg
                          className="ml-2 -mr-1 w-7 h-7"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link
                        href="#"
                        className="inline-flex items-center text-[#E5FF2D] focus:ring-4 leading-5 md:leading-7 md:tracking-wide focus:ring-primary-300 font-bold underline rounded-lg text-2xl md:text-3xl dark:focus:ring-primary-900"
                      >
                        Donate
                        <svg
                          className="ml-2 -mr-1 w-7 h-7"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-base font-normal text-white md:leading-7 md:tracking-widest sm:text-center dark:text-gray-400">
                © Copyright. All Rights Reserved IVC 2023
              </span>
              <div className="flex mt-10 space-x-6 sm:justify-center sm:mt-0">
                <Link
                  href="https://instagram.com/mssnlagos"
                  className="text-white hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/mssnlagos"
                  className="text-white hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                      clip-rule="evenodd"
                    />
                    <path d="M3 5.012H0V15h3V5.012Z" />
                  </svg>
                </Link>
                <Link
                  href="https://twitter.com/mssnlagos"
                  className="text-white hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
