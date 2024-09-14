import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCogs } from "react-icons/fa";
import { FaChartLine, FaDatabase, FaRegChartBar,   FaLightbulb } from 'react-icons/fa6';

function Business() {
  // Array of business analytics services with icon, title, and description
  const analyticsServices = [
    {
      icon: <FaChartLine className="text-5xl transition-colors duration-300" />,
      title: 'Data Analytics',
      description: 'Analyzing and interpreting raw data to make informed business decisions, optimize processes, and identify trends.',
    },
    {
      icon: <FaDatabase className="text-5xl transition-colors duration-300" />,
      title: 'Data Warehousing',
      description: 'Storing and managing large volumes of structured and unstructured data in centralized systems for easy access and analysis.',
    },
    {
      icon: <FaRegChartBar className="text-5xl transition-colors duration-300" />,
      title: 'Business Intelligence',
      description: 'Transforming raw data into meaningful insights and actionable strategies through reporting and visualization tools.',
    },
    {
      icon: <FaCogs className="text-5xl transition-colors duration-300" />,
      title: 'Process Optimization',
      description: 'Using data to identify inefficiencies and improve workflows, reducing costs and increasing productivity.',
    },
    {
      icon: <FaLightbulb className="text-5xl transition-colors duration-300" />,
      title: 'Predictive Analytics',
      description: 'Leveraging historical data and machine learning models to forecast future trends, helping businesses anticipate opportunities and challenges.',
    },
  ];

  // Intersection Observer hook
  const { ref: analyticsRef, inView: analyticsInView } = useInView({ triggerOnce: true });

  return (
    <div className="mt-10 p-5">
      <h2 className="text-3xl my-5 font-bold text-center">Business Analytics</h2>
      <motion.div
        className="mt-5 flex flex-wrap justify-center gap-7 md:px-20 px-4"
        ref={analyticsRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: analyticsInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {analyticsServices.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-5 rounded-lg shadow-lg flex flex-col md:flex-row justify-center items-center md:items-start min-w-[300px] w-[30%] m-4 group transition-colors duration-300 hover:bg-orange-500 hover:text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: analyticsInView ? 0 : 50, opacity: analyticsInView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Icon Column */}
            <div className="mr-4 group-hover:text-white transition-colors duration-100 text-orange-500">
              {service.icon}
            </div>
            {/* Text Column */}
            <div>
              <h3 className="text-md font-bold group-hover:text-white transition-colors duration-300 text-center md:text-left">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-200 transition-colors duration-300 text-center md:text-left">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Business;
