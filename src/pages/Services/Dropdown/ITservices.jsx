import React, { useEffect } from 'react';
import { FaLaptopCode, FaNetworkWired, FaDatabase, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Define animation variants for each service card
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

function ITServices() {


  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  return (
    <div className="md:mx-48 mx-4 px-4 py-10">
      <h1 className="text-3xl poppins-bold text-gray-800 text-center mb-8">
        Our IT Services
      </h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Software Development */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="text-center border border-gray-300 rounded-lg p-4"
        >
          <div className="mb-4 flex justify-center">
            <FaLaptopCode className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Software Development</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Custom software solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* Network Solutions */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="text-center border border-gray-300 rounded-lg p-4"
        >
          <div className="mb-4 flex justify-center">
            <FaNetworkWired className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Network Solutions</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Reliable and secure network infrastructure setup and maintenance.
          </p>
        </motion.div>

        {/* Database Management */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="text-center border border-gray-300 rounded-lg p-4"
        >
          <div className="mb-4 flex justify-center">
            <FaDatabase className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Database Management</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Efficient database solutions to manage and secure your data.
          </p>
        </motion.div>

        {/* Cybersecurity */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="text-center border border-gray-300 rounded-lg p-4"
        >
          <div className="mb-4 flex justify-center">
            <FaShieldAlt className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Cybersecurity</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Comprehensive security services to protect your digital assets.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ITServices;
