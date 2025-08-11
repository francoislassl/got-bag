import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-blue-600">Bag Haven</h1>
          <ul className="flex space-x-4">
            <li><a href="#features" className="text-gray-700 hover:text-blue-600 transition duration-300">Features</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-blue-600 transition duration-300">About</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-grow bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Discover Your Perfect Bag</h2>
        <p className="text-lg md:text-xl mb-8">Stylish, functional, and available for every occasion.</p>
        <a href="#features" className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">Explore Now</a>
      </main>

      {/* Features Section */}
      <section id="features" className="container mx-auto py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Our Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="font-semibold text-xl mb-2">Durability</h4>
            <p className="text-gray-700">Made from high-quality materials that last.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="font-semibold text-xl mb-2">Style</h4>
            <p className="text-gray-700">Trendy designs to match your personality.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="font-semibold text-xl mb-2">Functionality</h4>
            <p className="text-gray-700">Designed for ease of use and convenience.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">About Us</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">At Bag Haven, we believe in providing bags that blend style with functionality. Whether you're traveling, going to work, or heading out for a day of fun, we have the perfect companion for you.</p>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-white py-8">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
          <p className="text-gray-700 mb-4">Have questions? We’re here to help!</p>
          <a href="mailto:info@baghaven.com" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">Email Us</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;