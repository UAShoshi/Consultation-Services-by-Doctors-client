import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateServices = () => {
  const service = useLoaderData();
  const {id, providerName, serviceName, price, imgURL} = service;

  const {user} = useContext(AuthContext);

  const handleUpdateServices = event =>{
    event.preventDefault();
    const form = event.target;
    // const serviceName = form.serviceName.value;
    const email = user?.email;
    // const providerName = user?.providerName;
    const providerImage = user?.providerImage;
    const serviceArea = form.serviceArea.value;
    // const price = form.price.value;
    // const imgURL = form.imgURL.value;
    const description = form.description.value;

    const updateServices = {
      service_name: serviceName, 
      email, 
      service_provider_name: providerName, 
      providerImage, 
      serviceArea, 
      price, 
      service_image: imgURL, 
      description
    }
    console.log(updateServices);


      // send data to the server
      fetch(`https://consultation-services-by-doctors-server.vercel.app/manageServices/${id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(updateServices)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Good Luck !!!',
            text: 'Card updated successfully',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        }
      })
  }


  return (
    <div className="bg-[#F4F3F0] p-24">
    <h1 className="text-6xl font-extrabold">Update a Services</h1>
    <form onSubmit={handleUpdateServices}>
      <div className="md:flex gap-3 mb-8">
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text font-bold">Service Name</span>
          </div>
          <input type="text" name="serviceName" defaultValue={user?.serviceName} placeholder="Service Name" className="input w-full" />
        </label>
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text font-bold">Provider Email</span>
          </div>
          <input type="email" name="email"
          defaultValue={user?.email} placeholder="Provider Email" className="input w-full" />
        </label>
      </div>
      <div className="md:flex gap-3 mb-8">
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text font-bold">Provider Name</span>
          </div>
          <input type="text" name="providerName"
          defaultValue={user?.providerName} placeholder="Provider Name" className="input w-full" />
        </label>
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text font-bold">Provider Image</span>
          </div>
          <input type="text" name="providerImage"
          defaultValue={user?.providerImage}
           placeholder="Provider Image" className="input w-full" />
        </label>
      </div>
      <div className="md:flex gap-3 mb-8">
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text font-bold">Service Area</span>
          </div>
          <input type="text" name="serviceArea" placeholder="Service Area" className="input w-full" />
        </label>
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text font-bold">Price</span>
          </div>
          <input type="text" name="price" defaultValue={user?.price} placeholder="Price" className="input w-full" />
        </label>
      </div>
      <div className="md:flex gap-3 mb-8">
      <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text font-bold">ImgURL</span>
          </div>
          <input type="text" name="imgURL" placeholder="imgURL" className="input w-full" />
        </label>
        <label className="form-control md:w-1/2">
          <div className="label">
            <span className="label-text font-bold">Description</span>
          </div>
          <input type="text" name="description" placeholder="Description" className="input w-full" />
        </label>
      </div>
      <input type="submit" value="Update Services" className="btn btn-block bg-info font-bold text-white" />
    </form>
  </div>
  );
};

export default UpdateServices;