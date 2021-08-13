import React from 'react';
import Head from 'next/head';
import Link from "next/link";



export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen py-2">
      <Head>
        <title>Medblocks - HealthCare</title>
        <meta name="Medblocks" content="HealthCare is a healthcare management app for indians." />
        <link rel="icon" href="/medblocks.png"/>
      </Head>


      <div className="flex w-screen h-auto py-5 justify-between px-10 md:px-20 items-center overflow-hidden">
        <Link href='/'>
            <div className="flex cursor-pointer justify-center items-center">
                <img src="/medblocks.png" alt="Medblocks-Logo" className="mx-auto h-12 w-auto hover:cursor-pointer"/>
            </div>
        </Link>

        <div className="flex justify-evenly md:justify-evenly items-center w-2/3 lg:w-1/3">
            <Link href='/'>
                <p className="cursor-pointer hover:text-black hover:bg-gray-100 rounded-md px-3 py-1 text-green-600 font-semibold font-sans rounded">Home</p>
            </Link>
            <Link href='/register'>
                <p className="cursor-pointer hover:text-green-600 hover:bg-gray-100 rounded-md px-3 py-1 text-black font-semibold font-sans rounded ">Register</p>
            </Link>
            <Link href='/list'>
                <p className="cursor-pointer hover:text-green-600 hover:bg-gray-100 rounded-md px-3 py-1 text-black font-semibold font-sans rounded ">List</p>
            </Link>
            <Link href='/tree'>
                <p className="cursor-pointer hover:text-green-600 hover:bg-gray-100 rounded-md px-3 py-1 text-black font-semibold font-sans rounded ">Tree</p>
            </Link>
            <Link href='https://github.com/johnhollack/medblocks'>
              <p className="cursor-pointer hover:text-black hover:bg-gray-100 bg-gray-900 rounded-md px-3 py-1 text-white ml-5 font-semibold font-sans rounded">Github</p>
            </Link>
        </div>

      </div>

      <div className="flex h-full w-full items-center justify-start bg-white py-12 px-4 sm:px-6 lg:px-20">
        <div className="md:w-2/3">
          <p className="text-black font-semibold text-xl pb-3 rounded-md font-sans">Welcome to</p>
          <p className="text-black font-semibold text-3xl md:text-5xl rounded-md font-sans">Medblocks HealthCare</p>

          <div className="flex flex-row w-full mt-12">
            <p className="mr-5">
              <a href="/register" 
                className="hover:bg-gray-700 font-medium bg-gray-900 rounded-md px-5 py-3 text-white">
                Register a patient
              </a>
            </p>

            <p className="mr-5">
              <a href="/list" 
                className="hover:bg-green-500 font-medium bg-green-600 rounded-md px-5 py-3 text-white">
                List of patients
              </a>
            </p>

            <p className="">
              <a href="/tree" 
                className="hover:text-green-500 font-medium border border-green-600 border-2 rounded-md px-5 py-3 text-black">
                List of trees
              </a>
            </p>
          </div>
        </div>

        <div className="flex h-0 py-5 md:py-0 md:h-full w-0 md:w-1/3 justify-center items-center">
          <img src="/health.png" alt=" " className=" h-full w-full object-contain"/>
        </div>
      </div>
    </div>
  )
}
