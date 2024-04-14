import React from "react";

const FaqHero = () => {
  return (
    <div className=" overflow-hidden w-full bg-bggradient justify-center items-center relative lg:h-[50vh] lg:pb-28 lg:pt-10 py-9 ">
      <img
        src="\Images\bgservices.png"
        alt=""
        className=" absolute z-0 bottom-0 opacity-5"
      />
      <div className=" w-[80%] flex h-full lg:flex-row mx-auto lg:justify-end z-10 flex-col lg:items-center">
        <div className=" gap-2 lg:w-[65%]  flex flex-col z-10">
          <div className=" lg:w-[660px]">
            {/* <h3 className=" text-[24px] text-[#003E6F] font-medium text-end">
                شركة
              </h3> */}
            <h1 className=" lg:text-[50px] text-4xl text-[#003E6F] text-end font-bold">
              الخدمات
            </h1>
          </div>
          <div className=" lg:w-[660px] justify-end text-end">
            <p className=" text-end text-[20px] leading-10 font-normal">
              شركة المحامي فواز محمد الداهش للمحاماة والاستشارات القانونية
            </p>
          </div>
        </div>
      </div>
      {/* hereeeeeeeeeeeeeeeeeeeee */}
    </div>
  );
};

export default FaqHero;