import React from "react";

export default function Cards({ image, name, url, description }) {
  return (
    <a
      href={url}
      target="_blank"
      className="block w-[285px] h-[395px] rounded-xl overflow-hidden hover:bg-gray-100"
    >
      <div className="relative w-full h-full">
        <img
          src={image}
          alt={`curse-${name}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300 opacity-0 hover:opacity-100">
          <div>
            <h2 className="text-white text-center text-lg font-semibold">
              {name}
            </h2>
            <p className="p-5">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
