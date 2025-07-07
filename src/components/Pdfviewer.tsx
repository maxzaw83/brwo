import React, { useState } from "react";
import { FileDown, ZoomIn, ZoomOut, RotateCw } from "lucide-react";

const PDFViewer = ({ fileUrl }) => {
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  // Hide the default iframe toolbar
  const iframeSrc = `${fileUrl}#toolbar=0`;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download =
      fileUrl.substring(fileUrl.lastIndexOf("/") + 1) || "document.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Apply CSS transform for zoom and rotation
  const iframeStyle = {
    transform: `scale(${zoom}) rotate(${rotation}deg)`,
    transformOrigin: "center",
    transition: "transform 0.3s ease",
  };

  return (
    // Main container with white background, border, and shadow to match the theme
    <div className="w-full h-full bg-white rounded-md shadow-md border border-gray-200 overflow-hidden flex flex-col">
      {/* Custom Toolbar with light theme */}
      <div className="bg-gray-50 p-2 flex items-center justify-center space-x-2 sm:space-x-4 text-gray-700 border-b border-gray-200">
        <button
          onClick={() => setZoom((prev) => Math.max(0.5, prev - 0.1))}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Zoom Out"
        >
          <ZoomOut size={20} />
        </button>
        <span className="text-sm font-medium w-16 text-center">
          {Math.round(zoom * 100)}%
        </span>
        <button
          onClick={() => setZoom((prev) => Math.min(2.5, prev + 0.1))}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Zoom In"
        >
          <ZoomIn size={20} />
        </button>
        <button
          onClick={() => setRotation((prev) => (prev + 90) % 360)}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Rotate Clockwise"
        >
          <RotateCw size={20} />
        </button>
        {/* Download button styled to match the "SIGN IN" button */}
        <button
          onClick={handleDownload}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
          aria-label="Download PDF"
        >
          <FileDown size={20} />
          <span className="hidden sm:inline">Download</span>
        </button>
      </div>

      {/* PDF Display Area with a slightly off-white background for contrast */}
      <div className="flex-grow w-full h-[85vh] overflow-auto bg-gray-100 p-4">
        <iframe
          src={iframeSrc}
          className="w-full h-full border-none"
          title="PDF Viewer"
          style={iframeStyle}
        >
          <p>
            Your browser does not support iframes. Please download the PDF to
            view it.
          </p>
        </iframe>
      </div>
    </div>
  );
};
export default PDFViewer;
