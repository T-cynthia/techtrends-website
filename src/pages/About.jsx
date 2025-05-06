import React from 'react';
import '../pages/about.css';

const About = () => {
  return (
    <section className="about container">
      <div className="about-content">
        <h2>About TechTrends Ltd</h2>
        <p>TechTrends Ltd is based in Kigali City and specializes in modern electronic gadgets.</p>

        <div className="map-container">
          <iframe
            title="TechTrends Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.881088842398!2d30.061885914762657!3d-1.9440723985827936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6b4763f8aa7%3A0x45c50c6807bd0d17!2sKigali%20City!5e0!3m2!1sen!2srw!4v1617774491589!5m2!1sen!2srw"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default About;
