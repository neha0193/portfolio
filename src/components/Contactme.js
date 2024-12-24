import React from 'react'
import { useState } from 'react';
import { validateEmail } from "../utils";

const Contactme = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("freelance");
  const [comment, setComment] = useState("");

  const getIsFormValid = () => {
    return (firstName && validateEmail(email) && role !== "" && comment);
  };

  const clearForm = () => { setFirstName(""); setEmail(""); setRole("freelance"); setComment(""); };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (getIsFormValid()) {
      alert ('Thank you for reaching us, we will get back to you soon!')
      clearForm();
    }else if (!validateEmail(email)) {
        alert('Please enter a valid email-id')
    }
    else{
      alert("form Validation failed")
    }   
  };

  return (
    <div className="forms">
      <form onSubmit={handleSubmit} >
        <fieldset>
          <h2>Contact me</h2>
          <div className="Field">
            <label> Name <sup>*</sup></label>
            <input value={firstName} onChange={(e) => { setFirstName(e.target.value); }} placeholder="Name" required />


          </div>
          <div className="Field">
            <label> Email address <sup>*</sup></label>
            <input typeof value={email} onChange={(e) => { setEmail(e.target.value); }} placeholder="Email address" required/>
          </div>
          <div className="Field">
            <label>Type of enquiry <sup>*</sup></label>
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="freelance">freelance project proposal</option>
              <option value="consultancy">open source consultancy session</option>
              <option value="others">others</option>
            </select>
          </div>
          <div className='Field'>
            <label>Your message<sup>*</sup></label>
            <textarea value={comment} class="fixed-width" rows="4" onChange={e => setComment(e.target.value) }  minLength="2" required/>
          </div>
          <button type="submit" > Submit </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Contactme;