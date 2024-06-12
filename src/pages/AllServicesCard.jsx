import { Link } from "react-router-dom";


const AllServicesCard = ({services}) => {
  const {service_id, service_image, service_name, service_description, service_provider_image, service_provider_name, service_price} = services;
  return (
    <div className="card bg-base-100 shadow-xl">
    <figure><img src={service_image} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{service_name}</h2>
      <p>{service_description}</p>
      <div className="flex">
        <div><img className="w-24" src={service_provider_image} alt="" /></div>
        <div className="text-center mt-7">
        <h1><span className="font-bold">Provider_name</span>: {service_provider_name}</h1>
        <p><span className="font-bold">service_price</span>: {service_price}</p>
        </div>
      </div>
      <div className="card-actions justify-center">
      <Link to={`/services/${service_id}`}><button className="btn btn-info font-bold">View Detail</button></Link>
      <Link to={`/addServices/${service_id}`}>
    <button className="btn btn-info font-bold">Add Services</button>
    </Link>
      </div>
    </div>
  </div>
  );
};

export default AllServicesCard;