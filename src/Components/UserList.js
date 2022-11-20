import React, { useState, useEffect } from "react";

//* Axios
import axios from 'axios'
//* baseUrl
import { baseUrl } from "../Shared/baseUrl";


export default function UserList() {

    const [users, setUsers] = useState({
        isLoading: true,
        content: [],
        err: ''
    })

    useEffect(() => {
        axios
        .get(`${baseUrl}/users`)
        .then( res => setUsers({
            ...users,
            isLoading: false,
            content: res.data
        }))
        .catch( err => setUsers({
            ...users,
            isLoading: false,
            err: err.message
        }))
    },[])

    const userList = users.content.map( user => (
        <div key={user.id} className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

            <h2 className="fw-normal">{user.name}</h2>
            <h4 className="fw-normal"> {user.username}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
            <p> {user.address.city} {user.address.suite} {user.address.street} <code>{user.address.zipcode}</code> </p>
            <p><a className="btn btn-secondary" href="#">User details »</a></p>
        </div>
    ))


    return (
        <div className="container marketing">
            {users.isLoading ?
                (<div className='m-5 d-flex justify-content-center'>
                    <div className="spinner-border" role="status"></div>
                </div>)
                : !users.err ? 
                    (<div className="row text-center">
                        {userList}
                    </div>)
                    : 
                        (<div className="alert alert-danger" role="alert">
                        Error : {users.err}
                        </div>)
            }
            
        </div>
    )
}