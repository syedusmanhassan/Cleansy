import React, { useState } from 'react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zip: '',
    discountCode: 'FRC75'
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Here you would typically send this data to your backend
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        zip: '',
        discountCode: 'FRC75'
      });
    }, 3000);
  };

  return (
    <div className="p-8 md:p-10">
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-4">Quick Online Quote</h2>
      
      <div className="text-sm text-gray-600 mb-6">
        <p className="mb-2 text-center">
          For immediate service, call <a href="tel:8883025582" className="text-blue-500 hover:underline">(888) 302-5582</a>. 
          Our office is open Monday-Friday, 8am – 5pm.
        </p>
        
        <p className="text-center">
          Use Discount Code <span className="text-blue-500 font-medium">FRC75</span> to get $75 off your Initial Cleaning when you schedule recurring services.
        </p>
      </div>
      
      <div className="space-y-4">
        <input 
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First name*"
          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
        />
        
        <input 
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last name*"
          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
        />
        
        <input 
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email*"
          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
        />
        
        <input 
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone*"
          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
        />
        
        <input 
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          placeholder="Zip*"
          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none transition"
        />
        
        <button 
          onClick={handleSubmit}
          disabled={formSubmitted}
          className={`w-full ${formSubmitted ? 'bg-green-500' : 'bg-teal-500 hover:bg-teal-600'} text-white font-medium py-3 px-4 rounded-lg transition`}
        >
          {formSubmitted ? 'Request Sent!' : 'Request Estimate'}
        </button>
      </div>
    </div>
  );
};

export default QuoteForm;