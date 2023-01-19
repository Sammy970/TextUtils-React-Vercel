import { useForm } from "react-hook-form";
import React, { useState } from 'react'
import "./Login.css"

export default function Login() {

    const { register, handleSubmit, errors } = useForm();

    const [userInfo, setUserInfo] = useState();

    const onSubmit = (data) => {
        setUserInfo(data);
        console.log(data);
    }

    return (
        <>
            <div className="body">
                <div className='container'>

                    <pre>
                        {JSON.stringify(userInfo, undefined, 2)}
                    </pre>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Registeration Form</h1>
                        <div className="ui divider"></div>
                        <div className="ui form">
                            <div className="field">
                                <label>Username</label>
                                {/* <p>{errors.username.message}</p> */}
                                <input type="text" name="username" placeholder='Username' {...register('username', { required: true })} />
                            </div>
                            <div className="field">
                                <label>Email</label>
                                {/* <p>{errors.email.message}</p> */}
                                <input type="email" name="email" placeholder='example@gmail.com' {...register('email', { required: true })} />
                            </div>
                            <div className="field">
                                <label>Password</label>
                                {/* <p>{errors.password?.message}</p> */}
                                <input type="password" name="password" placeholder='Password' {...register('password', { required: true })} />
                            </div>
                            <button className="fluid ui button blue">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
