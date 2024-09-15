import React, { useEffect } from 'react';
import { FaCalculator, FaMoneyBillWave, FaFileInvoice, FaChartLine, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Define animation variants for each card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

function Bookkeeping() {

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="md:mx-48 mx-4 px-4 py-10">
      <h1 className="text-3xl poppins-bold text-gray-800 text-center mb-8">
        Bookkeeping and Accounting
      </h1>

      <p className="text-lg text-gray-600 text-center mb-12 poppins-light">
        Efficient bookkeeping and accounting are crucial for maintaining financial health and ensuring smooth operations in your dental practice.
      </p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Accurate Financial Tracking */}
        <motion.div
          variants={cardVariants}
          className="text-center border border-gray-300 rounded-lg p-4"
        >
          <div className="mb-4 flex justify-center">
            <FaCalculator className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Accurate Financial Tracking</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Implement precise tracking of all financial transactions and expenses to maintain clarity in your practice’s finances.
          </p>
        </motion.div>

        {/* Streamlined Billing and Invoicing */}
        <motion.div
          variants={cardVariants}
          className="text-center border border-gray-300 rounded-lg p-4"
        >
          <div className="mb-4 flex justify-center">
            <FaFileInvoice className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Streamlined Billing and Invoicing</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Simplify your billing and invoicing processes to ensure timely and accurate payments, reducing administrative overhead.
          </p>
        </motion.div>

        {/* Financial Reporting */}
        <motion.div
          variants={cardVariants}
          className="text-center border border-gray-300 rounded-lg p-4"
        >
          <div className="mb-4 flex justify-center">
            <FaChartLine className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Financial Reporting</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Generate detailed financial reports to monitor performance, analyze trends, and make informed business decisions.
          </p>
        </motion.div>

        {/* Revenue Management */}
        <motion.div
          variants={cardVariants}
          className="text-center border border-gray-300 rounded-lg p-4"
        >
          <div className="mb-4 flex justify-center">
            <FaMoneyBillWave className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Revenue Management</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Effectively manage your revenue streams to enhance cash flow and optimize profitability.
          </p>
        </motion.div>

        {/* Staff and Payroll Management */}
        <motion.div
          variants={cardVariants}
          className="text-center border border-gray-300 rounded-lg p-4"
        >
          <div className="mb-4 flex justify-center">
            <FaUsers className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Staff and Payroll Management</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Ensure accurate payroll management and maintain detailed records for all staff to ensure compliance and satisfaction.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Bookkeeping;
