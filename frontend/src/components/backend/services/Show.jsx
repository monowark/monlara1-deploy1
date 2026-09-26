import React, { useEffect, useState } from 'react'
import Header from '../../common/Header'
import Sidebar from '../../common/Sidebar'
import Footer from '../../common/Footer'
import { apiUrl, token } from '../../common/http'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Show = () => {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    const res = await fetch(apiUrl+'services',{
      'method' : 'GET',
      'headers' : {
        'Content-type' : 'application/json',
        'Accept': 'application/json',
        'Authorization' : `Bearer ${token()}`
      }
    });
    const result = await res.json();
    setServices(result.data);
    //console.log(result)
  }

  //Delete Services
  const deleteService = async (id) => {

    if(confirm("Are you sure you want to delete?")) {
        const res = await fetch(apiUrl+'services/'+id,{
        'method' : 'DELETE',
        'headers' : {
          'Content-type' : 'application/json',
          'Accept': 'application/json',
          'Authorization' : `Bearer ${token()}`
        }
      });
      const result = await res.json();      

      if (result.status== true) {
        const newServices = services.filter(service => service.id != id)
        setServices(newServices);
        toast.success(result.message)
      }
      else{
        toast.error(result.message)
      }
    }

    //setServices(result.data);
  }

  // initialize fetchServices
  useEffect (() => {
    fetchServices();
  },[]);

  return (
    //parent tag start-> <>
    <>
            <Header/>
            <main>
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <Sidebar/>
                            {/* at Left side Sidebar */}
                        </div>

                        <div className='col-md-9'> 
                            {/* at Right side Dashboard */}
                            <div className='card shadow border-0'>
                                <div className='card-body p-4 '>
                                  <div className='d-flex justify-content-between'>
                                    <h4 className='h5'>Services </h4>
                                    <Link to="/admin/services/create" className='btn btn-primary'>
                                      Create
                                    </Link>
                                  </div>
                                   <hr/>
                                    <table className='table table-striped'>
                                      <thead>
                                        <tr>
                                          <th>ID</th>
                                          <th>Name</th>
                                          <th>Slug</th>
                                          <th>Status</th>
                                          <th>Action</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {
                                          services && services.map(service => { 
                                            return (
                                              <tr key={`service-${service.id}`}>
                                                <td>{service.id} </td>
                                                <td>{service.title}</td>
                                                <td>{service.slug}</td>
                                                <td>
                                                  {
                                                    (service.status==1)?'Active' : 'Block'
                                                  }</td>
                                                <td>
                                                  <Link to={`/admin/services/edit/${service.id}`} className='btn btn-primary btn-sm'>Edit</Link>
                                                  <Link onClick={() => deleteService(service.id)} to='#' className='btn btn-secondary btn-sm ms-2'>Delete</Link>
                                                </td>
                                              </tr>
                                            )
                                          }) 
                                        }
                                      </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        <Footer/>
    </> //parent tag end-> </>
  )
}
export default Show