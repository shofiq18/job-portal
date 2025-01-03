import React, { useState } from 'react';
import useJobs from './useJobs';
import HotJobCard from '../pages/HotJobCard';

const AllJob = () => {
    const { jobs, loading } = useJobs(sort);
    const [sort, setSort] = useState(false);

    if (loading) {
        return <h1>job is loading.....</h1>;
    }

    // Sort jobs based on the `sort` state
    const sortedJobs = [...jobs].sort((a, b) => {
        if (sort) {
            return a.salary - b.salary; // Sort by salary in ascending order
        }
        return 0; // Original order when `sort` is false
    });

    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-8'>All Job</h1>
            <div className='w-11/12 mx-auto bg-base-100 my-6'>
                <button
                    onClick={() => setSort(!sort)}
                    className={`btn btn-neutral ${sort && "btn-success"}`}>
                    {sort ? 'sorted by salary' : 'Sort by Salary'}
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {sortedJobs.map(job => (
                    <HotJobCard key={job._id} job={job}></HotJobCard>
                ))}
            </div>
        </div>
    );
};

export default AllJob;
