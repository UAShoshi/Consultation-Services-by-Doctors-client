import { useEffect, useState } from "react";
import PopularCard from "./PopularCard";


const PopularServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/popularServices')
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])
  return (
    <div className="mt-4">
      <div className="text-center space-y-3">
        <h1 className="font-bold text-3xl">Popular Services</h1>
        <p className="">Professional plumbing services for installations, repairs, and maintenance. Handles leaks, blockages, and system upgrades with expertise and efficiency</p>
      </div>
      
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-evenly mt-8">
    {
      services.map(service => <PopularCard 
        key={service.service_id}
      service={service}
      ></PopularCard>)
    }
  </div>
    </div>
  );
};

export default PopularServices;