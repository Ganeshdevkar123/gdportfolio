import React from 'react'
import { personalInfo } from '../data'

const Info = () => {
    return (
        <div>
            {personalInfo.map(({ title, description }, index) => {
                return (
                    <li className='info__item' key={index}>
                        <span className='info__title'><b>{title}</b></span>
                        <span className='info__desciption'>{description}</span>
                    </li>
                )
            })}
        </div>
    )
}

export default Info