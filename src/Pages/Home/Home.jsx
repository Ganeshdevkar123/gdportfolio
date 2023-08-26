import React from 'react'
import Profile from '../../assets/profile.jpg'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'
import { Grid } from '@mui/material';
import './home.css'

const Home = () => {
    return (
        <Grid container className='home'>
            <Grid item xs={12} md={5}>
                <img src={Profile} alt='' className='home__img'></img>
            </Grid>
            <Grid item xs={12} md={7}>
                <div className='home__content'>
                    <div className='home__data'>
                        <p className='text-center'>Web Developer | UI Developer</p>
                        <h1 className='home__title'>
                            Hi, I'm <span>Ganesh Devkar.</span>
                        </h1>
                        <p className='home__description'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi totam repellendus nostrum eaque nihil modi, ab ducimus tenetur magnam recusandae deserunt! Est atque asperiores illum quasi, quos ullam voluptatem quo.
                        </p>
                        <div className='text-center'><Link to="/about" className='button'>
                            More About Me{' '}
                            <span className='button__icon'><FaArrowRight /></span>
                        </Link>
                        </div>
                    </div>
                </div>
            </Grid>
            <div className='color__block'></div>
        </Grid>
    )
}

export default Home