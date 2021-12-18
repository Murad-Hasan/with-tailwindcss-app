import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();
  return (
    <div className="relative text-white w-screen h-screen">
      <div className="flex flex-col absolute z-50 h-full w-full items-center justify-center space-y-2 backdrop-blur-sm">
        {/* LOGO for Metaverse */}
        <Image
          src="/unnamed.gif"
          className="object-cover rounded-full"
          height={200}
          width={200}
        />
        {/* Button For Login */}
        <button
          onClick={authenticate}
          className="bg-rose-500 py-4 px-4 rounded-lg hover:scale-105 transition duration-700 ease-in-out"
        >
          Login With METAVERSE
        </button>
      </div>
      <div className="">
        <Image
          src="/bg.jpg"
          layout="fill"
          className="object-cover lg:object-fill"
        />
      </div>
    </div>
  );
};

export default Login;
