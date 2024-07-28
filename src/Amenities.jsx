import React from 'react';

const amenitiesData = [
  { id: 1, image: 'https://i.ibb.co/X3FCG2D/atomic-habits.jpg', title: 'E-Dahab', description: 'High-speed internet access available in all areas.' },
  { id: 2, image: './src/assets/hormuud.png', title: 'Evc', description: 'This service is ready with us and you can send the money' },
  { id: 3, image: '/src/assets/dahabplus.png', title: 'Dahab-Plus', description: 'This service is ready with us and you can send the money' },
  { id: 4, image: './src/assets/somnet.png', title: 'Jeeb', description: 'This service is ready with us and you can send the money' },
  { id: 5, image: './src/assets/somlink.jpg', title: 'E-bessa', description: 'This service is ready with us and you can send the money' },
  { id: 6, image: './src/assets/waafi.png', title: 'Waafi', description: 'This service is ready with us and you can send the money' },
];

const Amenities = () => {
  return (
    <div className="container mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Our Amenities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {amenitiesData.map((amenity) => (
          <div key={amenity.id} className="flex flex-col items-center p-4 bg-blue-50 rounded-lg shadow-md">
            <img
              src={amenity.image}
              alt={amenity.title}
              className="w-32 h-32 object-cover mb-4 rounded-md"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{amenity.title}</h2>
            <p className="text-gray-700 text-center">{amenity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
