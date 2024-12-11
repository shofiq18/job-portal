import React, { useContext, useState } from 'react';
import Lottie from 'lottie-react';
import loginAnimationLottie from '../../assets/image/login.json.json';
import AuthContext from '../../Context/AuthContext';

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        loginUser(email, password)
        .then(result => {
            console.log( result.user)
        })
        .catch(error => {
            console.log(error.massage)
        })

        // Example password validation (optional)
        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long.');
        } else {
            setPasswordError(null);
            // Perform login logic here
        }
    };

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse mt-6 mb-6 lg:gap-12">
                    <div className="text-center lg:text-left lg:w-[500px]">
                        <Lottie animationData={loginAnimationLottie} />
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="text-4xl font-bold text-center mt-6">Log in now!</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    className="input input-bordered"
                                    required
                                />
                                {passwordError && (
                                    <label className="label">
                                        <span className="label-text-alt text-red-500">{passwordError}</span>
                                    </label>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Log in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
