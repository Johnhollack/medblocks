import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import axios from 'axios';
import Link from "next/link";



export default function PatientList() {

  const [patients, setPatients] = useState([ ]);

  useEffect(() => {
    const fetchPatient = async () => {

        try {

          const patientsData = await axios.get('http://fhir:8080/fhir/Patient/',{
            headers: {
              'Cache-Control': 'no-cache'
            }
          })
            .then((response) => {
              console.log(response.data.entry);
              setPatients(response.data.entry)
            });     
    
        } catch (error) {
            console.log("Error fetching patients" , error)
        } 
    }
    fetchPatient();
}, []);


  return (
    <div className="flex flex-col items-center justify-center h-screen py-2">
      <Head>
        <title>Medblocks - Patients</title>
        <meta name="Medblocks" content="HealthCare is a healthcare management app for indians." />
        <link rel="icon" href="/medblocks.png" />
      </Head>

      
      <div className="flex w-screen h-auto py-5 justify-between px-10 md:px-20 items-center overflow-hidden">
        <Link href='/'>
            <div className="flex cursor-pointer justify-center items-center">
                <img src="/medblocks.png" alt="Medblocks-Logo" className="mx-auto h-12 w-auto hover:cursor-pointer"/>
            </div>
        </Link>

        <div className="flex justify-evenly md:justify-evenly items-center w-2/3 lg:w-1/3">
            <Link href='/'>
                <p className="cursor-pointer hover:text-green-600 hover:bg-gray-100 rounded-md px-3 py-1 text-black font-semibold font-sans rounded ">Home</p>
            </Link>
            <Link href='/register'>
                <p className="cursor-pointer hover:text-green-600 hover:bg-gray-100 rounded-md px-3 py-1 text-black font-semibold font-sans rounded">Register</p>
            </Link>
            <Link href='/list'>
                <p className="cursor-pointer hover:text-black hover:bg-gray-100 rounded-md px-3 py-1 text-green-600 font-semibold font-sans rounded">List</p>
            </Link>
            <Link href='/tree'>
                <p className="cursor-pointer hover:text-green-600 hover:bg-gray-100 rounded-md px-3 py-1 text-black font-semibold font-sans rounded ">Tree</p>
            </Link>
            <Link href='https://github.com/johnhollack/medblocks'>
              <p className="cursor-pointer hover:text-black hover:bg-gray-100 bg-gray-900 rounded-md px-3 py-1 text-white ml-5 font-semibold font-sans rounded">Github</p>
            </Link>
        </div>

      </div>

      <div className="flex flex-col w-full h-full px-20">

        <div className="mb-6 ">
          <h2 className="mt-16 text-2xl text-center font-semibold text-gray-900">List of patients</h2>       
        </div>

        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                      Gender
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                      Date of Birth
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                      Contact Number
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  { patients.map(patient => (
                    <tr key={patient?.resource?.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">{patient?.resource?.name[0]?.given[0]} {patient?.resource?.name[0]?.family}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {patient?.resource?.gender}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{patient?.resource?.birthDate}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{patient?.resource?.telecom[0]?.value}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-green-600 hover:text-green-900">
                          Edit
                        </a>
                      </td>
                    </tr>
                  )) }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      

     </div>
  )
}
