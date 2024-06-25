import {  useParams } from "react-router-dom";


const ServicesDetail = () => {
  
  const { service_id } = useParams();
  console.log(service_id);

  return (
    <div className="lg:flex lg:col-span-3 gap-6 space-y-4 m-8">
    <div className="flex-2">
    <p className="font-bold py-5">Services Detail: {service_id}<span className="rounded-md px-2">{}</span></p>
    <h1 className="text-4xl font-bold italic">{service_id}</h1>
    <h1 className="font-bold my-3">{}</h1>
    <hr />
    <p><span className="bg-base-300 px-2 rounded-md">{}</span></p>
    <h1 className="flex items-center text-[#C69145] text-4xl my-5 font-bold">{}</h1>
    <p className="py-3">{service_id}</p>
    <p className="py-3">{}</p>
    <p className="py-3">{}</p>
    <hr />
    </div>
    <div>
    <img src="" alt="" />
    </div>
    <p className="flex-1"><span className="font-bold"></span> {}</p>
    </div>
  );
};

export default ServicesDetail;