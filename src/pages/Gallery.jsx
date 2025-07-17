import React, { useState } from "react";
export function Gallery() {
  const galleryImages = [
    { src: "g1.jpg", alt: "Gallery image 1" },
    { src: "g2.jpg", alt: "Gallery image 2" },
    { src: "g3.jpg", alt: "Gallery image 3" },
    { src: "g4.jpg", alt: "Gallery image 4" },
    { src: "g5.jpg", alt: "Gallery image 5" },
    { src: "g6.jpg", alt: "Gallery image 6" },
    { src: "g7.jpg", alt: "Gallery image 7" },
    { src: "g8.jpg", alt: "Gallery image 8" },
    { src: "g9.jpg", alt: "Gallery image 9" },
    { src: "g10.jpg", alt: "Gallery image 10" },
    { src: "g11.jpg", alt: "Gallery image 11" },
    { src: "g12.jpg", alt: "Gallery image 12" },
    { src: "g13.jpg", alt: "Gallery image 13" },
    { src: "g14.jpg", alt: "Gallery image 14" },
    { src: "g15.jpg", alt: "Gallery image 15" },
    { src: "g16.jpg", alt: "Gallery image 16" },
    { src: "g17.jpg", alt: "Gallery image 17" },
    { src: "g18.jpg", alt: "Gallery image 18" },
    { src: "g19.jpg", alt: "Gallery image 19" },
    { src: "g20.jpg", alt: "Gallery image 20" },
    { src: "g21.jpg", alt: "Gallery image 21" },
  ];

  // State to manage the currently selected image for the modal
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open the modal with the clicked image
  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // The base path for images inside the public folder.
  const imageBasePath = "/gallery/";

  return (
    <>
      <div className="px-4 md:px-10 lg:px-40 mb-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Gallery
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore moments and memories from our community and events.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={() => openModal(imageBasePath + image.src)}
              >
                <img
                  src={imageBasePath + image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-80"
                  onError={(e) => {
                    // Fallback in case an image fails to load
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found`;
                  }}
                />
                {/* --- CORRECTED ---
                  The classes for the overlay div have been adjusted.
                  It now starts with a transparent background and only applies the
                  darker background on hover.
              */}
                <div className="absolute inset-0 bg-transparent transition-all duration-300 flex items-center justify-center group-hover:bg-black group-hover:bg-opacity-40">
                  <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Image
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={closeModal} // Close modal on backdrop click
          >
            <div
              className="relative bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Prevent modal close on image click
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 z-10 bg-white bg-opacity-50 text-black rounded-full p-2 hover:bg-opacity-75 transition"
                aria-label="Close image view"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Image */}
              <img
                src={selectedImage}
                alt="Full-size view"
                className="w-full h-auto object-contain max-h-[90vh]"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
