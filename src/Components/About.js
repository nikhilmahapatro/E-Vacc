import React from 'react'
import './style.css';
function About() {
  return (
    <div>
      <section className="about" id="about">
        <h1 className="heading"><span>about</span> us</h1>
        <div className="row">
            <div className="image">
                <img src="https://cdn.who.int/media/images/default-source/2021-dha-images/the-survey-team-interviews-migrant-workers-for-the-survey-on-covid-19-vaccine-for-myanmar-migrant-workers-in-maesot-tak-17-november-2021-who-anat-duangjan.jpg?sfvrsn=5227af5c_6" alt=""/>
            </div>
            <div className="content">
                <h3>we take care of your healthy life</h3>
                <p>We, the eVACC family, want to express our heartfelt appreciation to each and every one of you for taking the first step towards securing a healthy life for your child. We understand that every child is special, and that's why our platform is dedicated to serving you from the moment your child is born until they reach the age of five.

At eVACC, we believe that every child deserves to have their basic needs met and to live a healthy lifestyle that will shape their future. Our vision is to provide the essential care and support that will lay a strong foundation for your child's well-being.

We warmly welcome you all to join us on this incredible journey. As a proud member of our country, you can rest assured that eVACC is here to serve one of our most valuable assets – our children. Together, let's work towards ensuring a healthy and prosperous future for the next generation.

If you have any questions or need further information, please don't hesitate to reach out. We're here to support you every step of the way.</p>
                <a href="#" className="btn">learn more <span className="fas fa-chevron-right"></span> </a>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About
