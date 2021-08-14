import React, { useState } from 'react';
import Head from 'next/head';
import Link from "next/link";
import Tree from '../components/Tree';



const tree = () => {

    const [treeFormData, setTreeFormData] = useState("");
    const [treeJson, setTreeJson] = useState([]);
    const [treeID, setTreeID] = useState("");
    

    if (treeFormData && typeof window === 'object') {

        document.getElementById('import').onclick = function() {
        var files = document.getElementById('selectFiles').files;
        console.log(files);
        if (files.length <= 0) {
        return false;
        }
        
        var fr = new FileReader();
        
        fr.onload = function(e) { 
        console.log(e);

        var result = JSON.parse(e.target.result);

        setTreeJson(result.tree.children);
        setTreeID(result.tree.id);
        
        var formatted = JSON.stringify(result, null, 2);
            //document.getElementById('result').value = formatted;
        }
        
        fr.readAsText(files.item(0));
        };
    }; 



    return (
        <div className="flex flex-col items-center justify-start min-h-screen w-screen px-10 md:px-20">
            <Head>
                <title>Medblocks - Trees</title>
                <meta name="Medblocks" content="HealthCare is a healthcare management app for indians." />
                <link rel="icon" href="/medblocks.png" />
            </Head>

            <div className="flex h-auto py-5 justify-between w-full items-center overflow-hidden">
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
                        <p className="cursor-pointer hover:text-green-600 hover:bg-gray-100 rounded-md px-3 py-1 text-black font-semibold font-sans rounded">List</p>
                    </Link>
                    <Link href='/tree'>
                        <p className="cursor-pointer hover:text-black hover:bg-gray-100 rounded-md px-3 py-1 text-green-600 font-semibold font-sans rounded">Tree</p>
                    </Link>
                    <Link href='https://github.com/johnhollack/medblocks'>
                        <p className="cursor-pointer hover:text-black hover:bg-gray-100 bg-gray-900 rounded-md px-3 py-1 text-white ml-5 font-semibold font-sans rounded">Github</p>
                    </Link>
                </div>

            </div>

            <div className="h-full w-full flex-col items-center justify-center bg-white">
                <div className=" ">
                    <h2 className="mt-10 text-2xl text-center font-semibold text-gray-900">List of trees</h2>       
                </div>

                <div className="flex flex-col justify-start items-start h-full w-full items-center mb-10 ">
                    <div className="w-full">
                        <label className="block font-medium text-gray-700 bg-white">Tree data</label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center bg-white">
                              
                                <svg 
                                    className="mx-auto h-8 w-8"
                                    width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path d="M26.7146 31.5042C25.6375 31.5042 25.0146 32.5271 25.0146 33.8917C25.0146 35.2687 25.6625 36.2375 26.7229 36.2375C27.8 36.2375 28.4146 35.2167 28.4146 33.85C28.4146 32.5917 27.8083 31.5042 26.7146 31.5042V31.5042Z" fill="#059669"/>
                                    <path d="M29.1667 4.16667H12.5C11.3949 4.16667 10.3351 4.60565 9.55372 5.38706C8.77232 6.16846 8.33334 7.22827 8.33334 8.33333V41.6667C8.33334 42.7717 8.77232 43.8315 9.55372 44.6129C10.3351 45.3944 11.3949 45.8333 12.5 45.8333H37.5C38.6051 45.8333 39.6649 45.3944 40.4463 44.6129C41.2277 43.8315 41.6667 42.7717 41.6667 41.6667V16.6667L29.1667 4.16667ZM16.7125 34.8C16.7125 36.8021 15.7521 37.5 14.2125 37.5C13.8458 37.5 13.3667 37.4396 13.0521 37.3333L13.2313 36.0521C13.4479 36.125 13.7292 36.1771 14.0458 36.1771C14.7104 36.1771 15.1292 35.875 15.1292 34.7813V30.3604H16.7146V34.8H16.7125ZM19.7521 37.4896C18.95 37.4896 18.1563 37.2813 17.7625 37.0625L18.0854 35.7479C18.5104 35.9667 19.1708 36.1875 19.8479 36.1875C20.5771 36.1875 20.9604 35.8833 20.9604 35.4271C20.9604 34.9875 20.6292 34.7375 19.7854 34.4354C18.6146 34.0292 17.8542 33.3813 17.8542 32.3604C17.8542 31.1604 18.8563 30.2417 20.5146 30.2417C21.3063 30.2417 21.8875 30.4083 22.3083 30.5979L21.95 31.8792C21.6688 31.7438 21.1688 31.5458 20.4813 31.5458C19.7938 31.5458 19.4583 31.8583 19.4583 32.2229C19.4583 32.6708 19.8542 32.8708 20.7646 33.2146C22.0063 33.6729 22.5896 34.3188 22.5896 35.3104C22.5917 36.4896 21.6813 37.4896 19.7521 37.4896ZM26.6396 37.5C24.5542 37.5 23.3354 35.9271 23.3354 33.925C23.3354 31.8167 24.6813 30.2417 26.7563 30.2417C28.9125 30.2417 30.0917 31.8583 30.0917 33.7979C30.0896 36.1042 28.6937 37.5 26.6396 37.5V37.5ZM36.9458 37.3854H35.275L33.7729 34.6729C33.3236 33.8684 32.9168 33.0409 32.5542 32.1938L32.5208 32.2042C32.5646 33.1313 32.5854 34.1229 32.5854 35.2708V37.3875H31.125V30.3604H32.9812L34.4417 32.9354C34.8583 33.6729 35.275 34.55 35.5917 35.3417H35.6208C35.5167 34.4146 35.4854 33.4667 35.4854 32.4125V30.3604H36.9479V37.3854H36.9458ZM29.1667 18.75H27.0833V8.33333L37.5 18.75H29.1667Z" fill="#059669"/>
                                </svg>

                                <div className="flex text-sm text-gray-600">
                                    <label
                                        htmlFor="selectFiles"
                                        className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                                    >
                                        <span>Upload a json file</span>
                                        <input 
                                            id="selectFiles" 
                                            name="selectFiles" 
                                            type="file" 
                                            className="sr-only" 
                                            value="Import"
                                            value={treeFormData} onChange={(e) => setTreeFormData(e.target.value)}
                                            required
                                        />
                                    </label>
                                    <p className="pl-3">  {treeFormData}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button type="submit" id="import"
                                className="mt-5 ml-auto justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Import
                            </button>
                        </div>
                    </div>

                    <div className="w-full flex flex-col justify-center">

                        {treeJson &&
                            <Tree obj={treeJson} treeID={treeID}/>
                        }

                   </div>
                </div>
          </div>    
  
        </div>    
    )
}

export default tree;

