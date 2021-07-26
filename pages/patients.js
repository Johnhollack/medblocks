import React, {useEffect, useState} from 'react';
import Head from 'next/head';


const patient = [
  {
    name: ['Jane', 'Cooper'],
    gender: 'male',
    birthDate: '24/02/1990',
    telecom: '1234810000',
  },
]


export default function Patients() {

  const [patients, setPatients] = useState([ ]);

  useEffect(() => {
    const patientsData = {
        method: 'GET'
    };
    fetch('http://localhost:8080/fhir/Patient', patientsData)
        .then(response => response.json())
        .then(data => setPatients(data.id));
 
  }, []);



  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Medblocks - Patients</title>
        <meta name="Medblocks" content="HealthCare is a healthcare management app for indians." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col">

        <div className="mb-10">
          <img
            className="mx-auto h-12 w-auto"
            src="/medblocks.png"
            alt="Medblocks"
          />
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">List of patients</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <a href="/" className="font-medium text-green-600 hover:text-green-500">
             Register a patient.
            </a>
          </p>            
        </div>

        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Gender
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date of Birth
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Contact Number
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {patient.map((patient) => (
                    <tr key={patient.email}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">{patient.name[0]} {patient.name[1]}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {patient.gender}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{patient.birthDate}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.telecom}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-green-600 hover:text-green-900">
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      

     </div>
  )
}
