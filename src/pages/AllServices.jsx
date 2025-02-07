import AllServicesCard from "./AllServicesCard";
import { useEffect, useState } from "react";


const AllServices = () => {
  const [allServices, setAllServices] = useState([]);

  useEffect(() => {
    fetch('https://consultation-services-by-doctors-server.vercel.app/allServices')
      .then(res => res.json())
      .then(data => setAllServices(data))
  }, [])
  return (
    <div>
      <div className="text-center mt-8 space-y-3">
        <h1 className="text-3xl font-bold">All Services</h1>
        <p className="px-32">Our medical services offer a wide range of comprehensive care to meet diverse health needs. For overall health maintenance, we provide a General Checkup that covers vitals and basic tests.</p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {
          allServices.map(services => <AllServicesCard
            key={services.service_id}
            services={services}
          ></AllServicesCard>)
        }
      </div>
    </div>
  );
};

export default AllServices;