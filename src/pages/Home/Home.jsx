import OurTeam from "./OurTeam";
import PopularServices from "./PopularServices";
import Slider from "./Slider";
import WhatWeDo from "./WhatWeDo";



const Home = () => {
  return (
    <div>
     <Slider></Slider> 
     <PopularServices></PopularServices>
     <WhatWeDo></WhatWeDo>
     <OurTeam></OurTeam>
    </div>
  );
};

export default Home;