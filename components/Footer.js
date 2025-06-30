import Link from 'next/link';
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[18vh]">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2 space-x-6">
            <Link href="/privacy" className="text-gray-100 hover:text-gray-700 dark:hover:text-gray-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-100 hover:text-gray-700 dark:hover:text-gray-300">
              Terms
            </Link>
            <Link href="/contact" className="text-gray-100 hover:text-gray-700 dark:hover:text-gray-300">
              Contact
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-gray-100  text-sm">
              &copy; {currentYear} LinkShortener. All rights reserved.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-100 text-xs">
          <p>Free URL shortener tool to create perfect short links</p>
        </div>
      </div>
      <div>
        <section className='bg-purple-1000 flex justify-center items-center space-x-10 h-[8vh]'>

            <Link href="mailto:fauwazamethi@gmail.com" target="_blank"><BiLogoGmail color="white" style={{fontSize:"1rem", height: "1rem"}}/>

            
            </Link>

            <Link href="https://www.linkedin.com/in/fauwaz-ahmed/"><FaLinkedin color='white' />
            
            </Link>
        </section>
      </div>
    </footer>
  );
}