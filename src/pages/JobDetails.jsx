import { FaDollarSign } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const job = useLoaderData();
    console.log(job)
    return (
        <div>
            <div className="card card-compact bg-base-300 max-w-3xl mx-auto my-12  p-2 pt-4  shadow-xl">
                <h1>This is details page </h1>
                <div className="flex  gap-4">
                    <figure>
                        <img
                        className="w-16"
                            src={job.company_logo}
                            alt="Shoes" />
                    </figure>
                    <div>
                        <h4 className="text-xl text-white "> {job.company}</h4>
                        <div className="flex text-sm items-center gap-1">
                        <IoLocationOutline />

                        <p>{job.location}</p>
                        </div>


                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{job.title}</h2>
                    <p>{job.description}</p>
                    <div className="flex flex-wrap gap-2 text-center  mt-2 ">
                        {
                            job.requirements.map(skill => <p className="border border-gray-500 p-1 hover:bg-gray-600 rounded-sm ">{skill}</p>)
                        }
                    </div>
                    <div className="card-actions  justify-end items-center mt-4">
                        <p className="flex  items-center">Salary: <FaDollarSign className="text-gray-400"/>{job.salaryRange.min} - {job.salaryRange.max} {job.currency}</p>
                       <Link to={`/jobApply/${job._id}`}> <button className="btn bg-blue-600 text-black">Apply</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;