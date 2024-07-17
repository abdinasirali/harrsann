import React, { useState } from 'react';
import Galery from './Galery';


import './index.css';



const App = () => {
  const [open, setOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleMenuClick = (title) => {
    setSelectedMenu(title.toLowerCase());
    setOpen(true);
  };

  const handleLogin = () => {
    if (username === 'nasir' && password === '123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const Menus = [
    { title: 'Dashboard', src: 'Chart_fill' },
    { title: 'About', src: 'about' },
    { title: 'Galery', src: 'galery'},
 

  ];

  return (
    <div className="flex">
      {!isLoggedIn ? (
        <div className="w-full h-screen flex justify-center items-center">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleLogin}
              >
               Sign In
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={` ${open ? 'w-72' : 'w-20'} bg-dark-purple h-screen p-5  pt-8 relative duration-300`}>
          <img
            src="./src/assets/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full  ${!open && 'rotate-180'}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img src="./src/assets/logo.png" className={`cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`} />
            <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && 'scale-0'}`}>
            
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                onClick={() => handleMenuClick(Menu.title)}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${
                  Menu.gap ? 'mt-9' : 'mt-2'
                } ${index === 0 && 'bg-light-white'}`}
              >
                <img src={`./src/assets/${Menu.src}.png`} alt={Menu.title} />
                <span className={`${!open && 'hidden'} origin-left duration-200`}>{Menu.title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {isLoggedIn && (
        <div className="h-screen flex-1 p-7">
          {selectedMenu === 'dashboard' ? (
                <div className="h-screen flex-1 p-7">
                <div className='container1'>
                <p><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></p>
                <div className='cont11'>
                
            
                </div>
                </div>
                </div>
              
          ) : selectedMenu === 'about' ? (

            <div className="container mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-500 rounded-full h-24 w-24 flex items-center justify-center">
                <span className="text-white text-3xl font-bold"><img src="./src/assets/logo2.jpg" alt="" /></span>
              </div>
            </div>
            <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">About Us</h1>
            <p className="text-gray-700 text-xl leading-relaxed mb-6">
              Welcome to our website! We are dedicated to providing the best service and products to our customers. Our mission is to deliver high-quality solutions that meet and exceed your expectations. Whether you are looking for innovative products, exceptional customer service, or reliable support, we are here to help. Thank you for choosing us as your trusted partner.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded">
                <h2 className="text-3xl font-semibold text-gray-800 mb-2">Our Mission</h2>
                <p className="text-gray-700 text-lg">
                  Our mission is to deliver top-notch products and services that improve the lives of our customers. We strive for excellence in everything we do, from product development to customer support.
                </p>
              </div>
              <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded">
                <h2 className="text-3xl font-semibold text-gray-800 mb-2">Our Vision</h2>
                <p className="text-gray-700 text-lg">
                  Our vision is to be a leader in our industry, setting the standard for quality and innovation. We aim to create lasting value for our customers, employees, and stakeholders.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
              <ul className="list-none">
                <li className="text-gray-700 text-lg mb-2">Integrity</li>
                <li className="text-gray-700 text-lg mb-2">Innovation</li>
                <li className="text-gray-700 text-lg mb-2">Customer Satisfaction</li>
                <li className="text-gray-700 text-lg mb-2">Excellence</li>
              </ul>
            </div>
          </div>
            
          ) :  selectedMenu === 'galery' ? (
            <Galery/>
          ) :  null}
        </div>
      )}
    </div>
  );
};

export default App;