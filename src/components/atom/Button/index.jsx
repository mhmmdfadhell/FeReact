import React from "react";

export default function Button(props) {
  const { color = "bg-blue-900", children, size } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded md ${color} ${size}  text-white`}
      {...props}
    >
      {children}
    </button>
  );
}
