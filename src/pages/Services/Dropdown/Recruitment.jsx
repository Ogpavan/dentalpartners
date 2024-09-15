import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUsers, FaClipboardCheck, FaUserTie, FaHandshake, FaUserGraduate } from 'react-icons/fa6';

function Recruitment() {
  
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const recruitmentServices = [
    {
      icon: <FaUsers className="text-5xl transition-colors duration-300" />,
      title: 'Talent Sourcing',
      description: 'Identifying and attracting potential candidates for specific job roles using various sourcing strategies.',
    },
    {
      icon: <FaClipboardCheck className="text-5xl transition-colors duration-300" />,
      title: 'Candidate Screening',
      description: 'Evaluating applicants based on their skills, qualifications, and fit for the role, ensuring only the best candidates are considered.',
    },
    {
      icon: <FaUserTie className="text-5xl transition-colors duration-300" />,
      title: 'Executive Recruitment',
      description: 'Focusing on finding top-tier candidates for senior leadership roles, ensuring they align with the company’s vision and strategy.',
    },
    {
      icon: <FaHandshake className="text-5xl transition-colors duration-300" />,
      title: 'Job Offer Management',
      description: 'Handling job offers, negotiations, and ensuring candidates have a seamless onboarding experience.',
    },
    {
      icon: <FaUserGraduate className="text-5xl transition-colors duration-300" />,
      title: 'Graduate Recruitment',
      description: 'Specialized recruitment for fresh graduates, focusing on entry-level roles and career growth opportunities.',
    },
  ];

  // Intersection Observer hook
  const { ref: recruitmentRef, inView: recruitmentInView } = useInView({ triggerOnce: true });

  return (
    <div className="mt-10 p-5">
      <h2 className="text-3xl my-5 font-bold text-center">Recruitment Services</h2>
      <motion.div
        className="mt-5 flex flex-wrap justify-center gap-7 md:px-20 px-4"
        ref={recruitmentRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: recruitmentInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {recruitmentServices.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-5 rounded-lg shadow-lg flex flex-col md:flex-row justify-center items-center md:items-start min-w-[300px] w-[30%] m-4 group transition-colors duration-300 hover:bg-orange-500 hover:text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: recruitmentInView ? 0 : 50, opacity: recruitmentInView ? 1 : 0 }}
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

export default Recruitment;
