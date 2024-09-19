import React from 'react';
 
 

function Footer() {
  return (
    <footer className="  py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg  poppins-medium">About Us</h2>
            <p className="mt-4 text-sm text-gray-400 poppins-light">
              We provide a seamless way for dentists to manage their appointments and focus on delivering the best care to patients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg poppins-medium">Quick Links</h2>
            <ul className="mt-4 space-y-2 poppins-light">
              <li><a href="/" className="text-gray-400 hover:text-orange-500">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-orange-500">About Us</a></li>
             
              <li><a href="/contact" className="text-gray-400 hover:text-orange-500">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg poppins-medium">Contact Us</h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-400 poppins-light">
              <li>Email:  <a href="mailto:contact@dentalcareconnects.com" className='hover:text-orange-500 hover:underline'>
             contact@dentalcareconnects.com </a></li>
              <li>Phone: +91 9917962571</li>
             
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        {/* <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-orange-500">
          <ImFacebook2 />
        </a>
          <a href="#" className="text-gray-400 hover:text-orange-500">
          <GrInstagram /> </a>
          <a href="#" className="text-gray-400 hover:text-orange-500">
          <FaLinkedin /></a>
        </div> */}

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-gray-400 poppins-light">
          © 2024 Dental Care Connects. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
