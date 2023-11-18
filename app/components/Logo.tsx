"use client";

import Image from "next/image";
import AppLogo from "../../public/logo.svg";
import SmallScreenLogo from "../../public/logo.svg";

export default function Logo() {
  return (
    <>
      <div className="">
        <Image
          src={AppLogo}
          sizes="100vw"
          alt="Application Logo"
          className="md:w-24 md:h-20 w-10 h-8"
        />
      </div>
    </>
  );
}
