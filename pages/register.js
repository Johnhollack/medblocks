import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import axios from 'axios';
import { toast } from 'react-nextjs-toast';
import Link from "next/link";


export default function Register() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("male");
  const [birthDate, setBirthDate] = useState("");
  const [telecom, setTelecom] = useState("");


  const onPress = (e) => {

    try {
        const patientData = axios.post('http://localhost:8080/fhir/Patient/', {
                "resourceType": "Patient",
                "name": [{
                    "given": [`${firstName}`], 
                    "family": `${lastName}`
                  }],
                "gender": `${gender}`,
                "birthDate": `${birthDate}`,
                "telecom": [{
                      "use": "mobile",
                      "system": "phone",
                      "value": `${telecom}`
                  }],
            })
            .then(function (response) {
                console.log(response.data);
                toast.notify(`Thanks, You've successfully register a new patient!`)
            })
            .catch(function (error) {
                console.log(error);
                toast.notify(`Error in submitting your data!`)
            });
    }catch(e) {
        alert(`error fetching data: ${e}`);
    }
    
  };


  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-screen py-2 overflow-hidden">
      <Head>
        <title>Medblocks - Register</title>
        <meta name="Medblocks" content="HealthCare is a healthcare management app for indians." />
        <link rel="icon" href="/medblocks.png" />
      </Head>

      <div className="flex w-full h-auto py-5 justify-between px-10 md:px-20 items-center overflow-hidden">
        <Link href='/'>
            <div className="flex cursor-pointer justify-center items-center">
                <img src="/medblocks.png" alt="Medblocks-Logo" className="mx-auto h-12 w-auto hover:cursor-pointer"/>
            </div>
        </Link>

        <div className="flex justify-evenly md:justify-evenly items-center w-1/2 lg:w-1/3">
            <Link href='/'>
                <p className="cursor-pointer hover:text-green-600 hover:bg-gray-100 text-sm md:text-base rounded-md px-3 py-1 text-black font-semibold font-sans rounded ">Home</p>
            </Link>
            <Link href='/register'>
                <p className="cursor-pointer hover:text-black hover:bg-gray-100 text-sm md:text-base rounded-md px-3 py-1 text-green-600 font-semibold font-sans rounded">Register</p>
            </Link>
            <Link href='/list'>
                <p className="cursor-pointer hover:text-green-600 hover:bg-gray-100 text-sm md:text-base rounded-md px-3 py-1 text-black font-semibold font-sans rounded ">List</p>
            </Link>
            <Link href='/tree'>
                <p className="cursor-pointer hover:text-green-600 hover:bg-gray-100 text-sm md:text-base rounded-md px-3 py-1 text-black font-semibold font-sans rounded ">Tree</p>
            </Link>
            <Link href='https://github.com/johnhollack/medblocks'>
              <p className="cursor-pointer hover:text-black hover:bg-gray-100 bg-gray-900 rounded-md px-3 py-1 text-white ml-5 font-semibold font-sans rounded">Github</p>
            </Link>
        </div>

      </div>

      <div className="h-full w-full flex items-start justify-center mt-10 bg-white px-10 md:px-20">
        <div className="w-full">
          <div className="">
            <div className="">
              <div className="">
                <div className="">
                  <div className="px-4 sm:px-0 py-5">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">Register a new patient</h3>
                  </div>
                  <form onSubmit={onPress}>
                    <div className="shadow overflow-hidden sm:rounded-md">
                      <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                              First name
                            </label>
                            <input
                              type="text"
                              name="firstNname"
                              id="firstName"
                              autoComplete="givenName"
                              value={firstName} onChange={(e) => setFirstName(e.target.value)}
                              required
                              className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                              Last name
                            </label>
                            <input
                              type="text"
                              name="lastName"
                              id="lastName"
                              autoComplete="familyName"
                              value={lastName} onChange={(e) => setLastName(e.target.value)}
                              className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                              Gender / Sex
                            </label>
                            <select
                              id="gender"
                              name="gender"
                              autoComplete="gender"
                              value={gender} onChange={(e) => setGender(e.target.value)}
                              required
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            >
                              <option>male</option>
                              <option>female</option>
                              <option>others</option>
                              <option>unknown</option>
                            </select>
                          </div>

                          <div className="col-span-6">
                            <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">
                              Date of Birth
                            </label>
                            <input
                              type="date"
                              name="birthDate"
                              id="birthDate"
                              autoComplete="birthDate"
                              value={birthDate} onChange={(e) => setBirthDate(e.target.value)}
                              className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6">
                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                              Contact number
                            </label>
                            <input
                              type="number"
                              name="telecom"
                              id="telecom"
                              autoComplete="telecom"
                              minLength="10"
                              maxLength="10"
                              value={telecom} onChange={(e) => setTelecom(e.target.value)}
                              className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                        </div>
                      </div>
                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
  
    </div>
  )
}
