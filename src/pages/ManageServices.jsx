import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
// import { IoPencilOutline } from "react-icons/io5";


const ManageServices = () => {

  const { user } = useContext(AuthContext);
  const [manageServices, setManageServices] = useState([]);

  const url = `/manageServices?email=${user?.email}`;
  useEffect(() => {

  fetch(url, {credentials: 'include'})
      .then(res => res.json())
      .then(data => setManageServices(data))
  }, [url]);

      const handleDelete = id =>{
        // console.log(id);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
      
            fetch(`http://localhost:5000/manageServices/${id}`, {
              method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
              // console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire({
              title: "Deleted!",
              text: "Your Services has been deleted.",
              icon: "success"
            }); 
            const remaining = manageServices.filter(user => user._id !== id);
            setManageServices(remaining);        
              }
            })
          }
        });
      }



       // send data to the server
  const handlemanageServicesConfirm = id =>{
    fetch(`http://localhost:5000/manageServices/${id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({status: 'pending'})
  })
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    if (data.modifiedCount > 0) {
      Swal.fire({
        title: 'Good Luck !!!',
        text: 'Services updated successfully',
        icon: 'success',
        confirmButtonText: 'OK'
      })
      const remaining = manageServices.filter(user => user._id !== id);
      const updated = manageServices.find(user => user._id === id);
      updated.status = 'pending'
      const newManageServices = [updated, ...remaining];
      setManageServices(newManageServices);
    }
  });
}



  return (
    <div>
      <h1 className="text-4xl">Your Manage Services: {manageServices.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>service image</th>
              <th>service name</th>
              <th>service price</th>
              <th>service provider name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {
              manageServices.map(manageService =>
                <tr key={manageService._id}>
                  <th><button onClick={() => handleDelete(manageService._id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button></th>
                  <td><div className="avatar"><div className="w-24 rounded-xl">
                    {
                    manageService.imgURL && <img src={manageService.imgURL} alt="Avatar Tailwind CSS Component" />
                    }
                  </div></div></td>
                  <td>{manageService.serviceName}</td>
                  <td>${manageService.price}</td>
                  <td>{manageService.providerName}</td>
                  <td>
                    {
                    manageService.status === 'pending' ? <span className="font-bold text-green-500 border border-green-500 rounded-lg p-3">Approved</span>:
                    <button onClick={() => handlemanageServicesConfirm(manageService._id)} className="btn btn-error text-white">pending</button>
                    }
                    </td>
                </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageServices;