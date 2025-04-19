import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-primary">HUFSI</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/mission" className="text-gray-700 hover:text-primary transition-colors">
                Mission
              </Link>
              <Link href="/team" className="text-gray-700 hover:text-primary transition-colors">
                Team
              </Link>
              <Link href="/initiatives" className="text-gray-700 hover:text-primary transition-colors">
                Initiatives
              </Link>
              <Link href="/get-involved" className="text-gray-700 hover:text-primary transition-colors">
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>

      <footer className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold">Harvard Undergraduate Food Security Initiative</h3>
              <p className="mt-2">Advocating for food and nutrition security for the Harvard community and beyond</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">Contact Us</a>
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 