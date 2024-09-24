import React from "react"

import { FaUserCircle } from "react-icons/fa";
import { IoMdKey } from "react-icons/io";

export default function Login(){
    
    return(
        <>
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
            <h1 className="boldfont-weight: 700;"><strong>LOGIN</strong></h1>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <FaUserCircle/><span className="label-text">Email/Username</span>
                    <span className="label-text-alt"></span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <div className="label">
                    <span className="label-text-alt">Bottom Left label</span>
                    <span className="label-text-alt">Bottom Right label</span>
                </div>
                </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </>
    )
}
