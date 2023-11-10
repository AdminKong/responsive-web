// import React from 'react'
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <a
          href="/"
          className="w-full text-xl font-bold pl-1 uppercase sm:text-2xl"
        >
          Servite
        </a>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At,
          doloremque rerum! Cum repellat enim expedita aliquid maiores iusto
          fugit neque, vero porro eum nulla velit quasi reprehenderit ut fugiat
          numquam.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <Link to={"https://youtube.com"}>
            <FaFacebookSquare size={30} />
          </Link>
          <Link to={'https://www.instagram.com/erwinjohn.engineer/'}>
            <FaInstagram size={30} />
          </Link>
          <Link to={'https://github.com/AdminKong'}>
            <FaGithubSquare size={30} />
          </Link>
          <Link to={'https://tiktok.com/@kiaru.itto'}>
            <FaTiktok size={30} />
          </Link>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Product</li>
            <li className="py-2 text-sm">Database</li>
            <li className="py-2 text-sm">Framework</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Practicing</li>
            <li className="py-2 text-sm">Documentations</li>
            <li className="py-2 text-sm">Guide</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Careers</li>
            <li className="py-2 text-sm">Press</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
