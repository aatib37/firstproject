import React, { useState } from 'react';

const ResumeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    skills: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
      <textarea name="education" placeholder="Education" onChange={handleChange} required />
      <textarea name="experience" placeholder="Experience" onChange={handleChange} required />
      <textarea name="skills" placeholder="Skills" onChange={handleChange} required />
      <button type="submit">Generate Resume</button>
    </form>
  );
}

export default ResumeForm;
