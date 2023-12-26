import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    let navigate= useNavigate()
 
    const [data, setData] = useState({
     
        email: '',
        password: ''

    })

    const ChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const submithandler = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:3001/api/loginuser', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                
                email: data.email,
                password: data.password
            })
          
            
        })
       
        const json = response.json()
        console.log(json)
        if(json.success){
            navigate('/')
        }
   
    }
  return (
    <div>
    <form onSubmit={submithandler}>
     

        <div className="input-group mb-3">
            <input type="email" className="form-control" name='email' value={data.email} onChange={ChangeHandler} placeholder="Recipient's email" aria-label="Recipient's email" aria-describedby="basic-addon2" />

        </div>
        <div className="input-group mb-3">
            <input type="password" className="form-control" name='password' value={data.password} onChange={ChangeHandler} placeholder="Recipient's password" aria-label="Recipient's email" aria-describedby="basic-addon2" />

        </div>


        <div>
            <Button variant="dark" className='mx-auto' type='submit'>Submit</Button>
        </div>
        <Link to="/signup" className='m-3 btn btn-primary'>Not a user?</Link>

    </form>



</div>
  );
}

export default LoginForm;

