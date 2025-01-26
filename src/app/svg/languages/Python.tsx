import React from "react";

const PythonLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="128"
    height="128"
  >
    <defs>
      <linearGradient id="blueGradient" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#5A9FD4" />
        <stop offset="100%" stopColor="#306998" />
      </linearGradient>
      <linearGradient id="yellowGradient" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#FFD43B" />
        <stop offset="100%" stopColor="#FFE873" />
      </linearGradient>
    </defs>
    {/* Top Blue Half */}
    <path
      fill="url(#blueGradient)"
      d="M64 0C50 0 40 2 32 5c-8 3-8 10-8 18v10h40v6H24c-10 0-18 6-20 16-2 9-2 15 0 24 2 9 8 16 16 16h12v-16c0-12 10-22 22-22h40c10 0 18-8 18-18V18c0-10-8-18-18-18C84 0 72 0 64 0zM50 16c3 0 6 3 6 6s-3 6-6 6-6-3-6-6 3-6 6-6z"
    />
    {/* Bottom Yellow Half */}
    <path
      fill="url(#yellowGradient)"
      d="M64 128c14 0 24-2 32-5 8-3 8-10 8-18V95H64v-6h40c10 0 18-6 20-16 2-9 2-15 0-24-2-9-8-16-16-16H96v16c0 12-10 22-22 22H34c-10 0-18 8-18 18v16c0 10 8 18 18 18 12 0 24 0 30 0zM78 112c-3 0-6-3-6-6s3-6 6-6 6 3 6 6-3 6-6 6z"
    />
    {/* Circular Eye Details */}
    <circle cx="50" cy="22" r="3" fill="#FFF" />
    <circle cx="78" cy="106" r="3" fill="#FFF" />
  </svg>
);

export default PythonLogo;
