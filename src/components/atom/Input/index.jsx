import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="text-sm border rounded-md w-full py-2 px-3 placeholder:text-slate-400"
      placeholder={placeholder}
      name={name}
      id={name}
      ref={ref}
    />
  );
});
export default Input;
