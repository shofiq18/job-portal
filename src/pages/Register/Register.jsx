import Lottie from "lottie-react";
import registerAnimationLottie from '../../assets/image/register.json.json'
import { useContext, useState } from 'react';
import AuthContext from "../../Context/AuthContext";



const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [passwordError, setPasswordError] = useState("");

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/; // At least one lowercase, one uppercase, and 6 characters long
        if (!passwordRegex.test(password)) {
            setPasswordError("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
            return; // Prevent registration for invalid password
        }

        // Clear the error if password is valid
        setPasswordError("");
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.massage)
        })

        console.log("Registered with:", email, password);
    };

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse mt-6 mb-6 lg:gap-12">
                    <div className="text-center lg:text-left lg:w-[600px]">
                        <Lottie animationData={registerAnimationLottie}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="text-4xl font-bold text-center mt-6">Register now!</h1>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                {passwordError && (
                                    <label className="label">
                                        <span className="label-text-alt text-red-500">{passwordError}</span>
                                    </label>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
