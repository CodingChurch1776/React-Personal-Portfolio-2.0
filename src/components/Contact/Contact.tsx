import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Background from '../../assets/images/Sunrise.jpg';
import { Link } from 'react-router-dom';

interface Props{
    title: string;
}

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
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
        color: 'white'
    },
    form_main: {
        display: 'inline-block',
        
    },
    master_form_div: {
        display: 'block',
        text_align: 'center'

    },
    form_div: {
        display: 'table-row'
    },

    message_div: {
        width: '500px',
        height: '200px'
    },

    label: {
        display: 'table-cell',
        marginBottom: '10px',
        paddingRight: '10px'
    },
    input: {
        display: 'table-cell',
        marginBottom: '10px',
        
    }
    
})

export const Contact = ( props:Props) => {
    
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
                    <h1>Contact Me</h1>
                    <div className={classes.master_form_div}>
                        <form action="" method="get" className={classes.form_main}>
                            <div className={classes.form_div}>
                                <label htmlFor="name">Enter your name: </label>
                                <input type="text" name="name" id="name" required/>
                            </div>
                            <div className={classes.form_div}>
                                <label htmlFor="email">Enter your email: </label>
                                <input type="email" name="email" id="email" required/>
                            </div>
                            <div className={classes.message_div}>
                                <label htmlFor="message">Message Here: </label>
                                <input className={classes.message_div} type="text" name="message" id="message" required/>
                            </div>
                            <div className={classes.form_div}>
                                <input type="submit" value="Submit!"/>
                            </div>
                        </form>
                    </div>
                    <h1>{ props.title }</h1>
                    <p>Thanks For Reaching Out!</p>
                    <Link to='/resume_projects'> 
                        <Button color='primary' variant="contained">Check Out My Portfolio</Button>
                    </Link>
                    
                </div>
            </main>
        </div>
    )
}