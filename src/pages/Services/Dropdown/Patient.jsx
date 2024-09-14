import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaUser, FaPhoneAlt, FaClipboardList, FaEnvelope, FaGoogle } from 'react-icons/fa';

function Patient() {
  return (
    <div className="md:mx-48 mx-4 px-4 py-10">
      <h1 className="text-3xl poppins-bold text-gray-800 text-center mb-8">
        Patient Coordination
      </h1>

      <p className="text-lg text-gray-600 text-center mb-12 poppins-light">
        We ensure seamless coordination to enhance your experience from scheduling appointments to post-visit care.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Efficient Appointment Scheduling */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaCalendarAlt className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Appointment Scheduling</h2>
          <p className="text-gray-600 poppins-light   text-sm">
            Faster scheduling with specialized teams for new patient appointments.
          </p>
        </div>

        {/* Location Details */}
        <div className="text-center border border-gray-300 rounded-lg p-4 ">
          <div className="mb-4 flex justify-center">
            <FaMapMarkerAlt className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Location Details</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Clear guidance on public transport, parking, and landmarks for easy access.
          </p>
        </div>

        {/* Accurate Patient Demographics */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaUser className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Patient Demographics</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Capture accurate patient information to personalize their experience.
          </p>
        </div>

        {/* Track Patient Referrals */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaClipboardList className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Patient Referrals</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Track referrals to improve marketing and patient base growth.
          </p>
        </div>
      </div>
      
      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {/* Insurance Information */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaPhoneAlt className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Insurance Information</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Gather insurance details before the appointment for smooth processing.
          </p>
        </div>

        {/* Confirmation Calls */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaEnvelope className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Confirmation Calls</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Send reminders via text, email, and phone to reduce no-shows.
          </p>
        </div>

        {/* Prescription Management */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaClipboardList className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Prescription Management</h2>
          <p className="text-gray-600 poppins-light text-sm">
            Manage prescriptions digitally for timely fulfillment.
          </p>
        </div>

        {/* Google Chats and Emails */}
        <div className="text-center border border-gray-300 rounded-lg p-4">
          <div className="mb-4 flex justify-center">
            <FaGoogle className="text-4xl text-orange-500" />
          </div>
          <h2 className="text-xl poppins-medium text-gray-800 mb-2">Google Chats & Emails</h2>
          <p className="text-gray-600 poppins-light text-sm ">
            Respond promptly to chats and emails with accurate information.
          </p>
        </div>
      </div>

      <div className="text-center mt-10">
        <button className="text-orange-600 border border-orange-600 py-2 px-6 rounded-full hover:bg-orange-600 hover:text-white transition">
          Book Your Appointment
        </button>
      </div>
    </div>
  );
}

export default Patient;
