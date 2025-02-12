import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Register = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm()

    const { createUser, profileUpdate } = useContext(AuthContext)

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(userInfo => {

                profileUpdate(data.name, data.photoURL)
                .then(user => console.log(user))
                .catch(err => console.log(err))

                navigate(location.state ? location.state : "/")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='max-w-[1140px] mx-auto flex justify-center mt-10'>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Name</span>
                        </div>
                        <input type="text" {...register("name")} placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <div className="label">
                        </div>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Photo URL</span>
                        </div>
                        <input type="text" {...register("photoURL")} placeholder="Photo URL" className="input input-bordered w-full max-w-xs" />
                        <div className="label">
                        </div>
                    </label>
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
                    <input className='btn btn-primary w-full' type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};

export default Register;