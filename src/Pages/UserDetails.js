import React, { useState, useEffect } from "react";

//* Axios
import axios from 'axios'
//* baseUrl
import { baseUrl } from "../Shared/baseUrl";


export default function UserDetails(props) {

    const [userDetails, setUserDetails] = useState({
        isLoading: true,
        content: {},
        err: ''
    })

    useEffect(() => {
        axios
        .get(`${baseUrl}/users`,
            {
                params: {
                    id: props.id
                }
            }
        )
        .then( res => setUserDetails({
            ...userDetails,
            isLoading: false,
            content: res.data[0]
        }))
        .catch( err => setUserDetails({
            ...userDetails,
            isLoading: false,
            err: err.message
        }))
    },[])

    console.log(userDetails.content)


    return (
        <>
            {userDetails.isLoading ?
                <div className='m-5 mt-5 d-flex justify-content-center'>
                    <div className="spinner-border" role="status">
                    </div>
                </div>
                : !userDetails.err ?
                    <div className="container pt-5">
                        <div className="row mb-2 mt-5 justify-content-center">
                            <div className="col-md-6">
                                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static">
                                        <strong className="d-inline-block mb-2 text-primary">{userDetails.content.name}'s Details</strong>
                                        <h3 className="mb-0">Full Name: {userDetails.content.name}</h3>
                                        <div className="mb-1 text-muted">User Name: {userDetails.content.username}</div>
                                        <p className="card-text mb-auto">
                                            Company: {userDetails.content.company.name}, {userDetails.content.company.catchPhrase}, {userDetails.content.company.bs}
                                        </p>
                                        <p className="card-text mb-auto">
                                            Personal website: <a href="#" className="stretched-link">{userDetails.content.website}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                        <div className="alert alert-danger" role="alert">
                            Error : {userDetails.err}
                        </div>
            }
        </>
    )
}