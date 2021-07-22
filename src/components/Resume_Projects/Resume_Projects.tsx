import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Background from '../../assets/images/Sunrise.jpg';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { sizing } from '@material-ui/system';


interface Props{
    title: string;
}

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0',
        flexGrow: 1
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo:{
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'black'
    },
    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Background});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
    },
    buttons: {
        backgroundColor: '#4351cc',
        color: 'white',
        height: '40px',
    }

 
})

export const Resume_Projects = ( props:Props) => {
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/*New and Updated HTML Code */}
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={ `${classes.logo} `}>
                        <a href="#" className={ `${classes.logo_a} ${classes.logo_navigation}` }>Nicholas Walker</a>
                    </h1>
                    <ul className={ `${classes.navigation} ${classes.logo_navigation}` }>
                        <li>
                            <a href="/" className={classes.nav_a}>Home</a>
                        </li>
                        <li>
                            <a href="/contact" className={classes.nav_a}>Contact</a>
                        </li>
                        <li>
                            <a href="/resume_projects" className={classes.nav_a}>Resume/Projects</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>
                <div className={classes.main_text}>
                    <h1>Resume</h1>
                    <h1>&</h1>
                    <h1>Current_Projects</h1>
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                            <Button className={classes.buttons} href="https://docs.google.com/document/d/1O0F371emYkoW-czs57_ZzFB1jFOwno4tmJpEqWZBdEg/edit?usp=sharing">Resume</Button>
                            </Grid>
                            <Grid item xs={6}>
                            <Button className={classes.buttons} href="https://github.com/CodingChurch1776/Board_Game_Capstone.git" >MeeplePerson Boardgame Site</Button>
                            </Grid>
                            <Grid item xs={6}>
                            <Button className={classes.buttons} href="https://github.com/CodingChurch1776/NZA-Law-React-App.git">React Lawfirm Recreation</Button>
                            </Grid>
                            <Grid item xs={6}>
                            <Button className={classes.buttons} href="https://car-inventory-nkw.web.app/">React Car Inventory</Button>
                            </Grid>
                            <Grid item xs={6}>
                            <Button className={classes.buttons} href="https://car-inventory1776.herokuapp.com/">Flask Car Inventory</Button>
                            </Grid>
                            {/* <div>
                             <Grid item xs={6}>
                            <button className={classes.buttons}>Resume</button>
                            </Grid>
                            <Grid item xs={6}>
                            <button className={classes.buttons}>Resume</button>
                            </Grid>   
                            </div> */}
                        </Grid>
                    </div>
                    <p>Thank You For Taking A Look!</p>
                    <Link to='/Contact'> 
                        <Button color='primary' variant="contained">Reach Out and Message Me!</Button>
                    </Link>
                </div>
            </main>
        </div>
    )
}