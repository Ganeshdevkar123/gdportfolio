import React from 'react'
import parse from 'html-react-parser'
import '../Pages/About/about.css'


const ResumeItem = ({ icon, year, title, desc }) => {
    return (
        <div className='resume__item'>
            <div className="resume__icon">{icon}</div>
            <span className="resume__date">{year}</span>
            <h4 className="resume__subtitle">{parse(title)}</h4>
            <p className="resume__description">{desc}</p>
        </div>
    )
}

export default ResumeItem