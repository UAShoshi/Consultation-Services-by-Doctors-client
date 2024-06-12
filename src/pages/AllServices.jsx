import { useLoaderData } from "react-router-dom";
import AllServicesCard from "./AllServicesCard";


const AllServices = () => {
  const allServices = useLoaderData()
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