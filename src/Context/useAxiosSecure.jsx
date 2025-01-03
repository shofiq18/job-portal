import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";


const axiosInstance = axios.create({
    baseURL:'https://job-portal-server-blush.vercel.app',
    withCredentials: true
}) 

const useAxiosSecure = () => {
    const {logOutUser} = UseAuth();
    const navigate = useNavigate();

    useEffect( () => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            if(error.status === 401 || error.status === 403) {
                logOutUser()
                .then(() => {
                    navigate('/login')
                })
                .catch(err => console.log(err))

            }
            return Promise.reject(error)
        }
    )
    }, [])



    return axiosInstance;
};

export default useAxiosSecure;