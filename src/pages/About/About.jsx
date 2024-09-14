import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import about from '../../assets/about.jpg';
import getintouch from '../../assets/getintouch.jpg';
  // Replace with actual image paths

function About() {
  return (
    <div className="min-h-screen  ">
      {/* Hero Section */}
      <div className="relative bg-black/90 text-white py-20">
        <div className="absolute inset-0">
          <img
            src={about} // Replace with your hero image URL
            alt="Hero"
            className="w-full h-full object-cover opacity-50 object-top"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl poppins-bold mb-4">About Us</h1>
          <p className="text-lg poppins-light md:px-20">we are dedicated to revolutionizing dental office management by providing comprehensive remote services across the <span className='text-orange-500'>   United States</span>. Our mission is to bridge the gap between dental expertise and administrative excellence, ensuring that dental practices can focus on what they do best—caring for patients.</p> </div>
      </div>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl poppins-bold  text-gray-800 text-center mb-8">Our Story</h2>
        <p className="text-lg text-gray-700 md:px-20 poppins-light">
          We started with a simple vision: to provide exceptional services that make a real difference in people's lives. Our journey began in 2023 with a commitment to excellence and a passion for innovation. Today, we are proud to be leaders in our field, continuously striving to improve and expand our offerings.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 poppins-bold">Mission & Vision</h2>
          <div className="flex flex-col md:flex-row justify-center">
            <div className="md:w-1/2 px-4 mb-8 md:mb-0">
              <h3 className="text-2xl poppins-medium mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 poppins-light">
                To deliver unparalleled quality and innovative solutions that exceed our clients' expectations, fostering long-term relationships based on trust and mutual respect.
              </p>
            </div>
            <div className="md:w-1/2 px-4">
              <h3 className="text-2xl poppins-medium mb-4 ">Our Vision</h3>
              <p className="text-lg text-gray-700 poppins-light">
                To be the leading provider in our industry, recognized for our dedication to excellence, innovation, and customer satisfaction, setting new standards for success.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Testimonials Section */}
      <section className=" py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl poppins-bold text-gray-800 mb-8">What Our Clients Say</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <FaQuoteLeft className="text-2xl text-orange-500 mb-4"/>
                <p className="text-gray-700">
                  "The team provided exceptional service and exceeded our expectations. Their commitment to quality is unmatched."
                </p>
                <FaQuoteRight className="text-2xl text-orange-500 mt-4  "/>
                <p className="mt-2 font-semibold">Alex Johnson</p>
                <p>Client</p>
              </div>
            </div>
            {/* Add more testimonials as needed */}
          </div>
        </div>
      </section>

    
    </div>
  );
}

export default About;
