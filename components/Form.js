import React from "react";

function Form({ formData }) {
  return (
    <>
      {formData.map((data, index) => {
        return (
          <div key={index}>
            <p className="text-left font-light mb-3 text-[13px]">
              {data.lable}
            </p>
            <input
              className="py-4 px-6 rounded-lg w-full focus:outline-0 text-gray-900 text-[12px]"
              placeholder={data.placeholder}
            />
          </div>
        );
      })}
    </>
  );
}

export default Form;
