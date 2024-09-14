import React from 'react';
import { FaCalendarAlt, FaStethoscope, FaHandsHelping, FaChartBar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Treatment() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="md:mx-48 mx-4 px-4 py-10">
      <h1 className="text-3xl poppins-bold text-gray-800 text-center mb-8">
        Treatment Coordination
      </h1>

      <p className="text-lg text-gray-600 text-center mb-12 poppins-light">
        Seamlessly manage and coordinate patient treatments to ensure optimal care and efficiency.
      </p>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Scheduling Appointments */}
        <motion.div
          className="text-center border border-gray-300 rounded-lg p-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="mb-4 flex justify-center">
            <FaCalendarAlt className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Scheduling Appointments</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Efficiently schedule and manage patient appointments to streamline workflow.
          </p>
        </motion.div>

        {/* Treatment Planning */}
        <motion.div
          className="text-center border border-gray-300 rounded-lg p-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-4 flex justify-center">
            <FaStethoscope className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Treatment Planning</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Develop comprehensive treatment plans to address patient needs effectively.
          </p>
        </motion.div>

        {/* Coordination with Specialists */}
        <motion.div
          className="text-center border border-gray-300 rounded-lg p-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="mb-4 flex justify-center">
            <FaHandsHelping className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Coordination with Specialists</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Collaborate with specialists to ensure integrated and thorough patient care.
          </p>
        </motion.div>

        {/* Monitoring Progress */}
        <motion.div
          className="text-center border border-gray-300 rounded-lg p-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="mb-4 flex justify-center">
            <FaChartBar className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Monitoring Progress</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Track patient progress and treatment outcomes to ensure effective results.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Treatment;
