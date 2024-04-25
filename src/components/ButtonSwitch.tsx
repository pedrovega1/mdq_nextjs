import React from "react";

function ButtonSwitch() {
  return (
    <div>
      <div className="flex flex-row justify-center ">
        <div className="flex flex-row items-center right-1 ">
          <button className="p-2 flex flex-row items-center border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none">
            <span className="text-md">KK</span>
            <span className="ml-1">
              {" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/1280px-Flag_of_Kazakhstan.svg.png"
                className="w-[20px] h-[14px]"
              />
            </span>
          </button>

          <button className="p-2 flex flex-row items-center border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ">
            <span className="text-md">RU</span>
            <span className="ml-1">
              {" "}
              <img
                src="https://goodies.icons8.com/web/common/header/flags/ru.svg"
                className="w-5 h-5"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ButtonSwitch;
