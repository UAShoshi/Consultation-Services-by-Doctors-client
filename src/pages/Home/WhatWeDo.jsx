import { RiBox3Fill } from "react-icons/ri";
import { FcVoicePresentation } from "react-icons/fc";
import { GiRingedPlanet } from "react-icons/gi";
import { MdOutlinePriceChange } from "react-icons/md";


const WhatWeDo = () => {
  return (
    <div>
      <h1 className="text-center mt-8 text-2xl font-bold">What We Do</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      <div className="mt-8 card card-compact bg-base-100 shadow-xl">
      <div className="flex flex-col justify-center items-center pt-5">
      <RiBox3Fill></RiBox3Fill>
      </div>
  <div className="card-body text-center flex flex-col items-center">
    <h2 className="card-title">24/7 Access</h2>
    <p>We get insulted by others, lose trust for those We get back.</p>
  </div>
</div>
      <div className="mt-8 card card-compact bg-base-100 shadow-xl">
      <div className="flex flex-col justify-center items-center pt-5">
      <FcVoicePresentation></FcVoicePresentation>
      </div>
  <div className="card-body text-center flex flex-col items-center">
    <h2 className="card-title">Flexible Plans</h2>
    <p>We get insulted by others, lose trust for those We get back.</p>
  </div>
</div>
      <div className="mt-8 card card-compact bg-base-100 shadow-xl">
      <div className="flex flex-col justify-center items-center pt-5">
      <GiRingedPlanet></GiRingedPlanet>
      </div>
  <div className="card-body text-center flex flex-col items-center">
    <h2 className="card-title">Best Doctors</h2>
    <p>We get insulted by others, lose <br /> trust for those We get back.</p>
  </div>
</div>
      <div className="mt-8 card card-compact bg-base-100 shadow-xl">
      <div className="flex flex-col justify-center items-center pt-5">
      <MdOutlinePriceChange></MdOutlinePriceChange>
      </div>
  <div className="card-body text-center flex flex-col items-center">
    <h2 className="card-title">Affordable Prices</h2>
    <p>We get insulted by others, lose <br /> trust for those We get back.</p>
  </div>
</div>
      </div>
      {/*  */}
      <div className="flex flex-col md:flex-row justify-between mt-10">
        <div className="flex-1">
          <img src="https://i.ibb.co/0Z13z5r/photo.jpg" className="shadow border-radius-lg w-96"></img>
        </div>
        <div className="text-center flex-1 md:mt-32">
          <h1 className="text-3xl font-bold">Find the right doctor right at your <br /> fingertips</h1>
          <p>It really matters and then like it really doesn’t matter. What  matters is the people who <br /> are sparked by it. And the people who are like offended by it, it doesn’t matter. Because <br /> it is about motivating the doers. Because I’m here to follow my dreams and inspire other <br />people to follow their dreams, too</p>
        </div>
      </div>

    </div>
  );
};

export default WhatWeDo;