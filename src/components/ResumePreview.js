import React from 'react';

const ResumePreview = ({ data }) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.email}</p>
      <p>{data.phone}</p>
      <h3>Education</h3>
      <p>{data.education}</p>
      <h3>Experience</h3>
      <p>{data.experience}</p>
      <h3>Skills</h3>
      <p>{data.skills}</p>
    </div>
  );
}

export default ResumePreview;
