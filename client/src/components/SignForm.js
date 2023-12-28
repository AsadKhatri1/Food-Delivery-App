import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from "axios"

import { Link, useNavigate } from 'react-router-dom';

const SignForm = () => {
    let navigate = useNavigate()
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''

    })

    const ChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const submithandler = async (e) => {
        e.preventDefault()
   

        axios.post("http://localhost:8000/api/users", {
            name: data.name,
            email: data.email,
            password: data.password
        }).then((result)=>{
            console.log(result)
         navigate('/login')

        }).catch((err)=>{

            console.log(err)
        })
    }
    return (
        <div>
            <form onSubmit={submithandler}>
                <div className="input-group mb-3">

                    <input type="text" className="form-control" name='name' value={data.name} onChange={ChangeHandler} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3">
                    <input type="email" className="form-control" name='email' value={data.email} onChange={ChangeHandler} placeholder="Recipient's email" aria-label="Recipient's email" aria-describedby="basic-addon2" />

                </div>
                <div className="input-group mb-3">
                    <input type="password" className="form-control" name='password' value={data.password} onChange={ChangeHandler} placeholder="Recipient's password" aria-label="Recipient's email" aria-describedby="basic-addon2" />

                </div>


                <div>
                    <Button variant="dark" className='mx-auto' type='submit'>Submit</Button>
                </div>
                <Link to="/login" className='m-3 btn btn-primary'>Already a user?</Link>

            </form>



        </div>
    );
}

export default SignForm;
