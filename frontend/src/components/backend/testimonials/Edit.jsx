import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from '../../common/Header'
import Sidebar from '../../common/Sidebar'
import Footer from '../../common/Footer'
import { useForm } from 'react-hook-form'
import { apiUrl, fileUrl, token } from '../../common/http'
import { toast } from 'react-toastify'

const Edit = () => {

    const [isDisable, setIsDisable] = useState(false);
    const [imageId, setImageId] = useState(null);
    const [testimonial, setTestimonial] = useState([]);
    const params = useParams();

    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
     } = useForm({
        defaultValues: async () => {
        const res = await fetch(apiUrl+'testimonials/'+params.id,{
                'method' : 'GET',
                'headers' : {
                  'Content-type' : 'application/json',
                  'Accept': 'application/json',
                  'Authorization' : `Bearer ${token()}`
                }
              });
              const result = await res.json();
              //setContent(result.data.content);
              setTestimonial(result.data);
              return{
                testimonial: result.data.testimonial,
                citation: result.data.citation,
                designation: result.data.designation,
                status: result.data.status,
              }
        }
      });

    const navigate = useNavigate();

    const onSubmit = async(data) => {
        const newData = { ...data, "imageId": imageId}
        const res = await fetch(apiUrl+'testimonials/'+params.id,{
          'method' : 'PUT',
          'headers' : {
            'Content-type' : 'application/json',
            'Accept': 'application/json',
            'Authorization' : `Bearer ${token()}`
          },
          body: JSON.stringify(newData)
        });
        const result = await res.json();
        if(result.status == true) {
            toast.success(result.message);
            navigate('/admin/testimonials');
        } else {
            toast.errors(result.message);
        }
        //console.log(result);
    }

    const handleFile = async (e) => {
        const formData = new FormData();
        const file = e.target.files[0];
        formData.append("image",file);
        setIsDisable(true);// to disable the Submit button

        await fetch(apiUrl+'temp-images',{
          'method' : 'POST',
          'headers' : {
            'Accept': 'application/json',
            'Authorization' : `Bearer ${token()}`
          },
          body: formData
        })
        .then(response => response.json())
        .then(result =>{
            setIsDisable(false);//here set the Submit button enable again
            if(result.status == false){
                toast.error(result.errors.image[0])
            }
            else{
                setImageId(result.data.id)
            }
        });
    }

  return (
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
                                    <h4 className='h5'>Testimonials/ Edit </h4>
                                    <Link to="/admin/testimonials" className='btn btn-primary'>
                                      Back
                                    </Link>
                                  </div>
                                   <hr/>
                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <div className='mb-3'>
                                            <label className='form-label'>Testimonials</label>
                                            <textarea
                                            placeholder='Testimonials'
                                            {
                                                ... register('testimonial',{
                                                    required : "The testimonial field is required"
                                                })
                                            }
                                            className={`form-control ${errors.testimonial && 'is-invalid'}` }
                                            rows={5}></textarea>
                                            {
                                                errors.testimonial && <p className='invalid-feedback'>{errors.testimonial?.message}</p>
                                            }
                                        </div>

                                        <div className='mb-3'>
                                            <label className='form-label'>Citation</label>
                                            <input type="text"
                                            placeholder='citation' 
                                            {
                                                ... register('citation',{
                                                    required : "The citation field is required"
                                                })
                                            }
                                            className={`form-control ${errors.citation && 'is-invalid'}` }
                                            />
                                            {
                                                errors.citation && <p className='invalid-feedback'>{errors.citation?.message}</p>
                                            }
                                        </div>

                                        <div className='mb-3'>
                                            <label className='form-label'>Designation</label>
                                            <input type="text"
                                            placeholder='designation' 
                                            {
                                                ... register('designation')
                                            }
                                            className={`form-control`}
                                            />
                                        </div>

                                        <div className='mb-3'>
                                            <label className='form-label'>Image</label>
                                            <br />
                                            <input onChange={handleFile} type="file" />
                                        </div>
                                        <div className='pb-3'>
                                            {
                                                testimonial.image && <img src={fileUrl+'uploads/testimonials/'+testimonial.image} alt="" />
                                            }
                                        </div>
                                        <div className='mb-3'>
                                            <label className='form-label'>Status</label>
                                            <select className='form-control'
                                            {
                                                ... register('status')
                                            }
                                            > 
                                                <option value="1">Active</option>
                                                <option value="0">Block</option>
                                            </select>
                                        </div>
                                        <button disabled={isDisable} className='btn btn-primary'>Update</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        <Footer/>
    </>
  )
}

export default Edit