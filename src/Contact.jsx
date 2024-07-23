import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    fromEmail: '',
    toEmail: 'abdinasiralimohamed2005@gamil.com', // Predefined recipient email
    name: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation for email fields
    if (!validateEmail(formData.fromEmail) || !validateEmail(formData.toEmail)) {
      setStatusMessage('Please enter valid email addresses.');
      return;
    }

    setIsSending(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.fromEmail,
      to_email: formData.toEmail,
      message: formData.message
    };

    emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_user_id')
      .then((result) => {
        setStatusMessage('Your message has been sent successfully!');
        setFormData({ fromEmail: '', toEmail: 'xuseencadde32@gmail.com', name: '', message: '' });
        setIsSending(false);
      }, (error) => {
        console.error('EmailJS error:', error);  // Log the error to the console
        setStatusMessage('There was an error sending your message. Please try again later.');
        setIsSending(false);
      });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
        {statusMessage && (
          <div className={`mb-4 p-2 text-center ${statusMessage.includes('error') ? 'text-red-600' : 'text-green-600'}`}>
            {statusMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fromEmail" className="block text-sm font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              id="fromEmail"
              name="fromEmail"
              value={formData.fromEmail}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="toEmail" className="block text-sm font-medium text-gray-700">Recipient's Email</label>
            <input
              type="email"
              id="toEmail"
              name="toEmail"
              value={formData.toEmail}
              onChange={handleChange}
              disabled
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-200 cursor-not-allowed"
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-400"
          >
            {isSending ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
