import { faFacebook, faInstagram, faLinkedin, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <div className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-10">
        <div>
          <h3 className="text-white font-semibold mb-3">ABOUT US</h3>
          <p className="text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            dolorem minima deserunt quibusdam odio nisi nam, dicta totam harum
            necessitatibus quos odio, illum quo ratione, pariatur recusandae
            alias harum!
          </p>
        </div>

    
        <div>
          <h3 className="text-white font-semibold mb-3">NEWSLETTER</h3>
          <p className="text-sm mb-3">Stay updated with our latest trends</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 w-full rounded-l-md  text-gray-100"
            />
            <button className="bg-yellow-400 px-4 rounded-r-md font-bold">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-3">FOLLOW US</h3>
          <p className="text-sm mb-3">Let us be social</p>
          <div className="flex space-x-5 text-xl">
                    <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTwitter} />        
          <FontAwesomeIcon icon={faFacebook} /> 
          <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
        </div>
      </div>

    
      <div className="bg-black text-gray-300 text-center py-4 text-sm">
        <p>
          Copyright © 2023 All rights reserved | This website is made with ♥ by Athira
        </p>
      </div>
    </div>
  );
}

export default Footer;
