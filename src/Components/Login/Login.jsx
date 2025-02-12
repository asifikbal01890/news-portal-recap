import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()

     const { register, handleSubmit } = useForm()

     const {signIn} = useContext(AuthContext)
        
     const onSubmit = (data) => {
            signIn(data.email, data.password)
            .then(userInfo => {
                console.log(userInfo)
                navigate(location.state? location.state : "/")
            })
            .catch( err => console.log(err))
        }

    return (
        <div className='max-w-[1140px] mx-auto flex justify-center mt-10'>
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Email</span>
                    </div>
                    <input type="email" {...register("email")} placeholder="Enter your Email" className="input input-bordered w-full max-w-xs" />
                    <div className="label">
                    </div>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text"> Password</span>
                    </div>
                    <input type="password" {...register("password")} placeholder="Enter your Password" className="input input-bordered w-full max-w-xs" />
                    <div className="label">
                    </div>
                </label>
                <input className='btn btn-primary w-full' type="submit" value="Login" />
            </form>
            <Link state={location.state} to="/register">Create new Account</Link>
        </div>
    </div>
    );
};

export default Login;