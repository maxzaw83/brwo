import React from "react";

const Logo = ({ w, h }) => {
  return (
    <div>
      <img
        src="/brwo-logo.png"
        alt="Burmese Rohingya Welfare Organization Logo"
        className="object-cover"
        style={{ width: w, height: h }}
      />
    </div>
  );
};

export default Logo;
