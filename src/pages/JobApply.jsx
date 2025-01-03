import {  useNavigate, useParams } from "react-router-dom";
import UseAuth from "../Context/UseAuth";
import Swal from "sweetalert2";


const JobApply = () => {
    const {id} = useParams();
    const {user} = UseAuth();
    const navigate = useNavigate();
    
    console.log(id, user)

    const submitJobApplication = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(linkedIn, github, resume);

        const jobApplication = {
            job_id: id,
            application_email: user.email, 
            linkedIn, 
            github, 
            resume,
        }

        fetch('https://job-portal-server-blush.vercel.app/job-applications', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(jobApplication)
        } )
        .then(res => res.json())
        .then(data => {
            if(data.insertedId)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/myApplication');

        })
    }
    return (
        <div>
            <h1>This is apply job </h1>
           
                    
                    <div className="card bg-base-100 w-full my-12  shadow-2xl">
                    <h1 className="text-5xl text-center font-bold p-4">Apply job and Good luck !</h1>
                        <form  onSubmit={submitJobApplication} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">LinkedIn URL</span>
                                </label>
                                <input type="url" name="linkedIn" placeholder="linked url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Github URL</span>
                                </label>
                                <input type="url" name="github" placeholder="github url" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Resume URL</span>
                                </label>
                                <input type="url" name="resume" placeholder="resume url" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Apply</button>
                            </div>
                        </form>
                    </div>
                </div>
            
    );
};

export default JobApply;