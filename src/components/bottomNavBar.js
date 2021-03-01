import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, AppBar, Toolbar, IconButton } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import Spotify_Icon_RGB_Green from '../Spotify_Icon_RGB_Green.png';

const useStyles = makeStyles({
    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
    toolbar: {
        textAlign: "center",
        justifyContent: 'center',
    },
    spotify: {
        padding: '5px',
        width: '1em',
    },
    bnitems: {
        width: '10em',
        height: '8em',
        margin: '0',
        padding: '0',
        bottom: '0',
    },
    grow: {
        flexGrow: .1,
    },


});

function BNavBar() {
    const classes = useStyles();
    return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar className={classes.toolbar} >
                <a href="https://www.instagram.com/princevalentine209/">
                <IconButton color="inherit" aria-label="open drawer">
                    <InstagramIcon/>
                    </IconButton>
                </a>
                <div className={classes.grow} />
                <a href="https://www.youtube.com/channel/UCjILPeEpb7DX2U81Tlww8nA">
                <IconButton color="inherit" aria-label="open drawer">
                    <YouTubeIcon />
                </IconButton>
                </a>
                <div className={classes.grow} />
                <a href="https://open.spotify.com/artist/4owReAr0XidcWfBgOSEcsz?si=LAlEBJD8QnWk1tNvYykcIg" >
                <IconButton color="inherit">
                    <img className={classes.spotify} src={Spotify_Icon_RGB_Green} />
                </IconButton>
                </a>

            </Toolbar>
        </AppBar>
    );
}

export default BNavBar;
