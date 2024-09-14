import React from 'react';
import { FaClock, FaFileAlt, FaExclamationTriangle, FaHandHoldingUsd } from 'react-icons/fa';

function PendingClaims() {
  return (
    <div className="md:mx-48 mx-4 px-4 py-10">
      <h1 className="text-3xl poppins-bold text-gray-800 text-center mb-8">
        Pending Claim Management
      </h1>

      <p className="text-lg text-gray-600 text-center mb-12 poppins-light">
        Streamline your pending claims process with our comprehensive management solutions to ensure timely resolutions and optimized revenue cycles.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Monitor Claim Status */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaClock className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Monitor Claim Status</h2>
          <p className="text-gray-600 poppins-light  text-sm">
            Track the status of your claims in real-time to ensure timely follow-ups and resolutions.
          </p>
        </div>

        {/* Claim Documentation */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaFileAlt className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Claim Documentation</h2>
          <p className="text-gray-600 poppins-light  text-sm">
            Maintain accurate documentation for each claim to facilitate smooth processing and avoid delays.
          </p>
        </div>

        {/* Dispute Resolution */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaExclamationTriangle className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Dispute Resolution</h2>
          <p className="text-gray-600 poppins-light  text-sm">
            Efficiently resolve any disputes or issues related to pending claims to ensure accurate reimbursements.
          </p>
        </div>

        {/* Financial Recovery */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaHandHoldingUsd className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Financial Recovery</h2>
          <p className="text-gray-600 poppins-light  text-sm">
            Maximize financial recovery by optimizing claim submissions and follow-up processes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PendingClaims;
