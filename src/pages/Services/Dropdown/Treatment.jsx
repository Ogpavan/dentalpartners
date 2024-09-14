import React from 'react';
import { FaCalendarAlt, FaStethoscope, FaHandsHelping, FaChartBar } from 'react-icons/fa';

function Treatment() {
  return (
    <div className="md:mx-48 mx-4 px-4 py-10">
      <h1 className="text-3xl poppins-bold text-gray-800 text-center mb-8">
        Treatment Coordination
      </h1>

      <p className="text-lg text-gray-600 text-center mb-12 poppins-light">
        Seamlessly manage and coordinate patient treatments to ensure optimal care and efficiency.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Scheduling Appointments */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaCalendarAlt className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Scheduling Appointments</h2>
          <p className="text-gray-600 poppins-light  text-sm">
            Efficiently schedule and manage patient appointments to streamline workflow.
          </p>
        </div>

        {/* Treatment Planning */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaStethoscope className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Treatment Planning</h2>
          <p className="text-gray-600 poppins-light  text-sm">
            Develop comprehensive treatment plans to address patient needs effectively.
          </p>
        </div>

        {/* Coordination with Specialists */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaHandsHelping className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Coordination with Specialists</h2>
          <p className="text-gray-600 poppins-light  text-sm">
            Collaborate with specialists to ensure integrated and thorough patient care.
          </p>
        </div>

        {/* Monitoring Progress */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaChartBar className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Monitoring Progress</h2>
          <p className="text-gray-600 poppins-light  text-sm">
            Track patient progress and treatment outcomes to ensure effective results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Treatment;
