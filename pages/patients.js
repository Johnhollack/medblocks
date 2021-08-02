import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import axios from 'axios';



export default function PatientList() {

  const [patients, setPatients] = useState([ ]);

  useEffect(() => {
    const fetchPatient = async () => {

        try {

          const patientsData = await axios.get('http://localhost:8080/fhir/Patient/')
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

  // console.log("id", patients[0]?.resource?.id);
  // console.log("birthDate", patients[0]?.resource?.birthDate);
  // console.log("gender", patients[0]?.resource?.gender);
  // console.log("lastName", patients[0]?.resource?.name[0]?.family);
  // console.log("firstName", patients[0]?.resource?.name[0]?.given[0]);
  // console.log("telecom", patients[0]?.resource?.telecom[0]?.value);


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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient?.resource?.telecom[0]?.value}</td>
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
