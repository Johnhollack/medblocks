import Head from 'next/head';
import { LockClosedIcon } from '@heroicons/react/solid'


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Medblocks - HealthCare</title>
        <meta name="Medblocks" content="HealthCare is a healthcare management app for indians." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="/medblocks.png"
              alt="Medblocks"
            />
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Register a patient</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="patients" className="font-medium text-green-600 hover:text-green-500">
                Check the list of Patients registered
              </a>
            </p>
            
          </div>
          <form className="mt-8 space-y-6 w-full" action="#" method="POST">
            <div className="mt-10 sm:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <div className="px-4 sm:px-0 py-5">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                    <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                  </div>
                  <form action="http://localhost:8080/fhir/Patient" method="POST">
                    <div className="shadow overflow-hidden sm:rounded-md">
                      <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                              First name
                            </label>
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              required
                              className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                              Last name
                            </label>
                            <input
                              type="text"
                              name="last-name"
                              id="last-name"
                              autoComplete="family-name"
                              className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                              Gender / Sex
                            </label>
                            <select
                              id="gender"
                              name="gender"
                              autoComplete="gender"
                              required
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            >
                              <option>Male</option>
                              <option>Female</option>
                              <option>Others</option>
                            </select>
                          </div>

                          <div className="col-span-6">
                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                              Date of Birth
                            </label>
                            <input
                              type="date"
                              name="date-of-birth"
                              id="date-of-birth"
                              autoComplete="date-of-birth"
                              className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>

                          <div className="col-span-6">
                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                              Contact number
                            </label>
                            <input
                              type="number"
                              name="contact-number"
                              id="contact-number"
                              autoComplete="contact-number"
                              minlength="10"
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

          </form>
        </div>
      </div>
  
    </div>
  )
}
