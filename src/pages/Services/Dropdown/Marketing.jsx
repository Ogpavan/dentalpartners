import React, { useEffect } from 'react';
import { FaBullhorn, FaChartPie, FaCogs, FaRegStar } from 'react-icons/fa';
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

function MarketingMaintenance() {

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="md:mx-48 mx-4 px-4 py-10">
      <h1 className="text-3xl poppins-bold text-gray-800 text-center mb-8">
        Marketing & Maintenance
      </h1>

      <p className="text-lg text-gray-600 text-center mb-12 poppins-light">
        Enhance your practice’s visibility and ensure smooth operations with our comprehensive marketing and maintenance services.
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Marketing Strategies */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="text-center border border-gray-300 rounded-lg p-4"
        >
          <div className="mb-4 flex justify-center">
            <FaBullhorn className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Marketing Strategies</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Develop and implement effective marketing strategies to boost your practice’s visibility.
          </p>
        </motion.div>

        {/* Analytics and Reporting */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="text-center border border-gray-300 rounded-lg p-4"
        >
          <div className="mb-4 flex justify-center">
            <FaChartPie className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Analytics and Reporting</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Track and analyze marketing performance to make data-driven decisions.
          </p>
        </motion.div>

        {/* Ongoing Maintenance */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="text-center border border-gray-300 rounded-lg p-4"
        >
          <div className="mb-4 flex justify-center">
            <FaCogs className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Ongoing Maintenance</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Regular updates and maintenance to keep your marketing tools and platforms running smoothly.
          </p>
        </motion.div>

        {/* Customer Feedback */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="text-center border border-gray-300 rounded-lg p-4"
        >
          <div className="mb-4 flex justify-center">
            <FaRegStar className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Customer Feedback</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Gather and analyze customer feedback to continuously improve your services and customer satisfaction.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default MarketingMaintenance;
