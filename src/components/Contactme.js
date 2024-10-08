import React from 'react'
import { useState } from 'react';
import { validateEmail } from "../utils";


const Contactme = () => {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("freelance");
    const [comment,setComment] = useState ("");

    const getIsFormValid = () => {
      return (firstName && validateEmail(email) && role !== "" && comment);
    };

    const clearForm = () => {setFirstName(""); setEmail(""); setRole(""); setComment ("");};

    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Thank you for reaching us, we will get back to you soon !!");
      clearForm();
    };

    return (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2>Contact me</h2>
            <div className="Field">
              <label> Name <sup>*</sup></label>
              <input value={firstName} onChange={(e) => {setFirstName(e.target.value);}} placeholder="Name" required/>
            </div>
            <div className="Field">
              <label> Email address <sup>*</sup></label>
              <input value={email} onChange={(e) => {setEmail(e.target.value);}} placeholder="Email address" required/>
            </div>
            <div className="Field">
              <label>Type of enquiry <sup>*</sup></label>
              <select value="freelance" onChange={(e) => setRole(e.target.value)} required>
                <option value="freelance">freelance project proposal</option>
                <option value="consultancy">open source consultancy session</option>
                <option value="others">others</option>
              </select>
            </div>
            <div className='Field'>
            <label>Your message<sup>*</sup></label><br/>
            <textarea value={comment} onChange={e=> setComment(e.target.value)} required/>
          </div>
            <button type="submit" > Submit </button>
          </fieldset>
        </form>
      </div>
    );
  }

export default Contactme;