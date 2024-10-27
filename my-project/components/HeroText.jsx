import React from "react";

const HeroText = () => {
  return (
    // <div className="bg-gray-100 w-screen min-h-96 flex flex-col justify-center items-center">
    //   <div className="text-7xl text-center font-bold">
    //     Explore our growing
    //     <br />
    //     library of integrations
    //   </div>
    //   <div className="text-center mt-4">
    //     Browse through all the integrations you can connect to Clay in seconds
    //     and discover
    //     <br />
    //     what you can do!
    //   </div>
    // </div>
    <section className="bg-gray-100 w-screen min-h-96 flex flex-col justify-center items-center">
      <div className="text-center max-w-screen-lg">
        <h1 className="text-6xl font-bold">
          Explore our growing library of integrations
        </h1>
        <p className="text-xl mt-8">
          Browse through all the integrations you can connect to Clay in seconds
          and discover
          <br />
          what you can do!
        </p>
      </div>
    </section>
  );
};

export default HeroText;
