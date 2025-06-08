import { EnvironmentStore } from '@/store/EnvironmentsStore'
import React, { useContext, useEffect, useState } from 'react'

const WaterBodies = () => {
    const {currEnvironments,getEnvironments}=useContext(EnvironmentStore);
    useEffect(()=>{
        getEnvironments();
    })
  return (
    <section>
    <div className='w-full my-2 text-white p-1'>
    <button className='float-right bg-green-400'>Add Environment</button>
    </div>
    <div className='flex flex-col gap-4 justify-center w-full items-center my-3'>
    {currEnvironments && currEnvironments.map((env)=>{
        return  <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-xl w-3/4 p-8 border border-gray-200 ">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-wide drop-shadow-sm">
          {env.name}
        </h2>

        <div className="space-y-4 text-gray-700">
          <p><span className="font-semibold">Location:</span> {env.location}</p>
          <p><span className="font-semibold">previous Suggestion:</span> <span className="text-green-600 font-medium">{env.recommandations[env.recommandations.length-1]}</span></p>
          <p><span className="font-semibold">Status:</span> <span className="text-green-700 font-bold">{env.status}</span></p>
        </div>

        <div className="mt-8 flex gap-6">
          <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 rounded-xl font-semibold shadow-lg transition-transform transform hover:scale-105">
            View Analytics
          </button>
          <button className="flex-1 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white py-3 rounded-xl font-semibold shadow-lg transition-transform transform hover:scale-105">
            Add Readings
          </button>
        </div>
      </div>
    })}
    </div>
    </section>
  )
}

export default WaterBodies
