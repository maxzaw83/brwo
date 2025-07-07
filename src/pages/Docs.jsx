import React, { useState } from "react";
import { FileDown, ZoomIn, ZoomOut, RotateCw } from "lucide-react";
import Pdfviewer from "../components/Pdfviewer";

export function Docs() {
  const pdfUrl = "/Burmese Rohingya Welfare Policies Jan 2025.pdf";
  return (
    // This container simulates the light gray background of your page
    <>
      <div className="bg-gray-100 min-h-screen w-full flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="w-full max-w-5xl">
          {/* Header section mimicking your page structure */}

          {/* Themed PDF Viewer Component */}
          <Pdfviewer fileUrl={pdfUrl} />
        </div>
      </div>
    </>
  );
}
