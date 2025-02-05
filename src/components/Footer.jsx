import { Mail, Phone, MapPin } from "lucide-react";
import Brandlogo from "./LandingPage/Brandlogo";
export default function Footer() {
  return (
    <footer className="bg-white-900 text-black py-10 mt-20 border-t">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <h2>
            <Brandlogo />
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            Your No.1 destination for finding the perfect job. Connect with top
            employers and start your career today!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-purple-400 transition">
                Browse Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition">
                Post a Job
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <ul className="mt-3 space-y-2 text-gray-400 text-sm">
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-purple-400" />
              <span>support@jobportal.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-purple-400" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>123, Bangalore, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-xs mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} JobPortal. All rights reserved.
      </div>
    </footer>
  );
}
