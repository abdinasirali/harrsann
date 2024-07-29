import { useState, useEffect } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Mock data for the example with direct image URLs
        const mockData = [
          {
            id: 1,
            url: 'https://i.ibb.co/QMGQ8d9/hawaale-waran.jpg',
            title: 'Image 1'
          },
          {
            id: 2,
            url: 'https://i.ibb.co/QMGQ8d9/hawaale-waran.jpg',
            title: 'Image 2'
          },
          {
            id: 3,
            url: 'https://i.ibb.co/myShs96/You-can-win.jpg',
            title: 'Image 3'
          },
          {
            id: 4,
            url: 'https://i.ibb.co/MsK6f6y/ku-raaxayso-noloshaada.jpg',
            title: 'Image 4'
          },
          {
            id: 5,
            url: 'https://i.ibb.co/fnN8bjb/hooyomacaan.webp',
            title: 'Image 5'
          },
          {
            id: 6,
            url: 'https://i.ibb.co/hsBxzyw/sirta-goaan-qaadashada.jpg',
            title: 'Image 6'
          },
          {
            id: 7,
            url: 'https://i.ibb.co/CsVxzZ0/eat-that-frog.jpg',
            title: 'Image 7'
          },
          {
            id: 8,
            url: 'https://i.ibb.co/QFrDZRJ/aabe-qani-aabe-faqiir.jpg',
            title: 'Image 8'
          },
          {
            id: 9,
            url: 'https://i.ibb.co/n7Drpgj/daawada-murugada.webp',
            title: 'Image 9'
          }
        ];
        setImages(mockData);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Gallery</h1>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex justify-center">
            <img
              src={image.url}
              alt={image.title}
              className="object-cover h-64 w-64 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
              style={{ width: '400px', height: '200px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
