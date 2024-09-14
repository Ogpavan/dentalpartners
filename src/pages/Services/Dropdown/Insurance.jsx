import React from 'react';
import { FaShieldAlt, FaCheckCircle, FaDollarSign, FaClipboardCheck } from 'react-icons/fa';

function Insurance() {
  return (
    <div className="md:mx-48 mx-4 px-4 py-10">
      <h1 className="text-3xl poppins-bold text-gray-800 text-center mb-8">
        Insurance Eligibility and Benefits Verification
      </h1>

      <p className="text-lg text-gray-600 text-center mb-12 poppins-light">
        Ensure smooth insurance handling with our comprehensive verification process, enabling proper billing, better patient experience, and financial stability for your practice.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Understanding Insurance Eligibility and Benefits Verification */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaShieldAlt className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Understanding Insurance</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Verify insurance coverage and understand policy limitations for accurate treatment planning.
          </p>
        </div>

        {/* Benefits of Insurance Eligibility and Benefits Verification */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaCheckCircle className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Benefits</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Enhance patient experience, increase revenue, and improve office efficiency with accurate verification.
          </p>
        </div>

        {/* Process of Insurance Eligibility and Benefits Verification */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaClipboardCheck className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Process</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Collect patient information, verify coverage, determine benefits, and communicate clearly.
          </p>
        </div>

        {/* Best Practices */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaDollarSign className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Best Practices</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Utilize technology, train staff, and conduct regular audits for effective insurance verification.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Insurance;
