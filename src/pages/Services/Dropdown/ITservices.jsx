import React from 'react';
import { FaLaptopCode, FaNetworkWired, FaDatabase, FaShieldAlt } from 'react-icons/fa';

function ITServices() {
  return (
    <div className="md:mx-48 mx-4 px-4 py-10">
      <h1 className="text-3xl poppins-bold text-gray-800 text-center mb-8">
        Our IT Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Service 1 */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaLaptopCode className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Software Development</h2>
          <p className="text-gray-600 poppins-light  text-sm">
            Custom software solutions tailored to your business needs.
          </p>
        </div>

        {/* Service 2 */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaNetworkWired className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Network Solutions</h2>
          <p className="text-gray-600 poppins-light  text-sm">
            Reliable and secure network infrastructure setup and maintenance.
          </p>
        </div>

        {/* Service 3 */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaDatabase className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Database Management</h2>
          <p className="text-gray-600 poppins-light  text-sm">
            Efficient database solutions to manage and secure your data.
          </p>
        </div>

        {/* Service 4 */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaShieldAlt className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Cybersecurity</h2>
          <p className="text-gray-600 poppins-light  text-sm">
            Comprehensive security services to protect your digital assets.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ITServices;
