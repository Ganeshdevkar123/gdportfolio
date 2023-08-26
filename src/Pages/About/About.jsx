import React from 'react'
import Info from '../../Components/Info';
import { FaDownload } from 'react-icons/fa'
import Cv from "../../assets/steve-Cv.pdf"
import Skills from '../../Components/Skills';
import { resume } from '../../data';
import ResumeItem from '../../Components/ResumeItem';

import './about.css'

const About = () => {
  return (
    <main className='section container'>
      <section className='about'>
        <h2 className='section__title'>
          About <span> Me </span>
        </h2>
        <div className='about__conatiner grid'>
          <div className='about__info'>
            <h2 className="about__subtitle">
              Personal Information
            </h2>
            <ul className="info__list grid">
              <Info />
            </ul>
            <a href={Cv} className='button'>Download Cv<span className='button__icon'><FaDownload /></span></a>
          </div>
          <div className='skills'>
            <h2 className="section__subtitle subtitle__center">
              My Skills
            </h2>
            <ul className="skill-conatiner grid">
              <Skills />
            </ul>
          </div>
        </div>
      </section>
      <hr />
      <section className='resume'>
        <h2 className='section__subtitle subtitle__center'> Experience & Education</h2>
        <div className='resume__container grid'>
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "experience") {
                return (
                  <ResumeItem key={val.id} {...val} />
                )
              }
            })}
          </div>
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "education") {
                return (
                  <ResumeItem key={val.id} {...val} />
                )
              }
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About