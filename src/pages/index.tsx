import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Harvard Undergraduate Food Security Initiative
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8"
            >
              Advocating for food and nutrition security for the Harvard community and beyond
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Get Involved
            </motion.button>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700">
              We are the first student organization at Harvard University dedicated to advancing food security on our campus and in the Greater Boston area. Our ultimate goal is to establish a permanent food pantry on campus open to all Harvard affiliates.
            </p>
          </div>
        </section>

        {/* Initiatives */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Initiatives</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary mb-4">Food Pantry</h3>
                <p className="text-gray-700">
                  Ensuring fresh, nutritious food is accessible to any student who needs it through collaborations with existing campus food pantries, local community fridges, and food recovery programs.
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary mb-4">Community Service</h3>
                <p className="text-gray-700">
                  Assisting residents experiencing food insecurity in Cambridge and the broader Boston area through volunteer and education efforts.
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-primary mb-4">Food Policy</h3>
                <p className="text-gray-700">
                  Identifying gaps in food access and promoting policies that make a food-secure future a reality through research, mapping, and advocacy.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-lg mb-8">
              Let's bring food justice to Harvard and beyond. Join our team and let's make real change together.
            </p>
            <button className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors">
              Get Involved
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home; 