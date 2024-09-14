import React from 'react';
import { FaCalculator, FaMoneyBillWave, FaFileInvoice, FaChartLine, FaUsers } from 'react-icons/fa';

function Bookkeeping() {
  return (
    <div className="md:mx-48 mx-4 px-4 py-10">
      <h1 className="text-3xl poppins-bold text-gray-800 text-center mb-8">
        Bookkeeping and Accounting
      </h1>

      <p className="text-lg text-gray-600 text-center mb-12 poppins-light ">
        Efficient bookkeeping and accounting are crucial for maintaining financial health and ensuring smooth operations in your dental practice.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Accurate Financial Tracking */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaCalculator className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Accurate Financial Tracking</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Implement precise tracking of all financial transactions and expenses to maintain clarity in your practice’s finances.
          </p>
        </div>

        {/* Streamlined Billing and Invoicing */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaFileInvoice className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Streamlined Billing and Invoicing</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Simplify your billing and invoicing processes to ensure timely and accurate payments, reducing administrative overhead.
          </p>
        </div>

        {/* Financial Reporting */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaChartLine className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Financial Reporting</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Generate detailed financial reports to monitor performance, analyze trends, and make informed business decisions.
          </p>
        </div>

        {/* Revenue Management */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaMoneyBillWave className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Revenue Management</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Effectively manage your revenue streams to enhance cash flow and optimize profitability.
          </p>
        </div>

        {/* Staff and Payroll Management */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaUsers className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Staff and Payroll Management</h2>
          <p className="text-gray-600 poppins-light  text-sm">
            Ensure accurate payroll management and maintain detailed records for all staff to ensure compliance and satisfaction.
          </p>
        </div>
      </div>

      <div className="text-center mt-10">
        <button className="text-orange-600 border border-orange-600 py-2 px-6 rounded-full hover:bg-orange-600 hover:text-white transition">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Bookkeeping;
