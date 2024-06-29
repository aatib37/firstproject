import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import './App.css';

const App = () => {
  const [resumeData, setResumeData] = useState(null);

  const handleFormSubmit = (data) => {
    setResumeData(data);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <ResumeForm onSubmit={handleFormSubmit} />
        {resumeData && <ResumePreview data={resumeData} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
