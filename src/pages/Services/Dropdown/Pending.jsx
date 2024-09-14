import React from 'react';
import { FaClock, FaFileAlt, FaExclamationTriangle, FaHandHoldingUsd } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Define animation variants for hover effect
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
  hover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 10,
    },
  },
};

function PendingClaims() {
  return (
    <div className="md:mx-48 mx-4 px-4 py-10">
      <h1 className="text-3xl poppins-bold text-gray-800 text-center mb-8">
        Pending Claim Management
      </h1>

      <p className="text-lg text-gray-600 text-center mb-12 poppins-light">
        Streamline your pending claims process with our comprehensive management solutions to ensure timely resolutions and optimized revenue cycles.
      </p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Monitor Claim Status */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="text-center border border-gray-300 rounded-lg p-4"
        >
          <div className="mb-4 flex justify-center">
            <FaClock className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Monitor Claim Status</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Track the status of your claims in real-time to ensure timely follow-ups and resolutions.
          </p>
        </motion.div>

        {/* Claim Documentation */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="text-center border border-gray-300 rounded-lg p-4"
        >
          <div className="mb-4 flex justify-center">
            <FaFileAlt className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Claim Documentation</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Maintain accurate documentation for each claim to facilitate smooth processing and avoid delays.
          </p>
        </motion.div>

        {/* Dispute Resolution */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="text-center border border-gray-300 rounded-lg p-4"
        >
          <div className="mb-4 flex justify-center">
            <FaExclamationTriangle className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Dispute Resolution</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Efficiently resolve any disputes or issues related to pending claims to ensure accurate reimbursements.
          </p>
        </motion.div>

        {/* Financial Recovery */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="text-center border border-gray-300 rounded-lg p-4"
        >
          <div className="mb-4 flex justify-center">
            <FaHandHoldingUsd className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Financial Recovery</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Maximize financial recovery by optimizing claim submissions and follow-up processes.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default PendingClaims;
