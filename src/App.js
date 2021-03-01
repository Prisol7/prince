import './App.css';
import BNavBar from './components/bottomNavBar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Typography,AppBar, Toolbar, IconButton,} from '@material-ui/core';
import Album_pic from './album_pic.jpg';
import PrinceVal from './princeVal.png';
import Anime from './anime_wallpaper.jpg';
import EmblaCarousel from "./components/Carousel";


const SLIDE_COUNT = 4;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const useStyles = makeStyles({
    nav: {
        height: '5vw',
    }, 
    grow: {
        flexGrow: 1,
    },
    logo: {
        width: '2em',
        height:'2em',
    },
    toolbar: {
        height: '5vw',
    },
    firstPhoto: {
        backgroundImage: `url(${Anime})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        height: '30vw',
        width: '100%',
        backgroundAttachment: 'fixed',
    },
    secondPhoto: {
        backgroundImage: `url(${Album_pic})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        height: '35vw',
        width: '100%',
        backgroundAttachment: 'fixed',
    },
    grid1: {
        backgroundImage: `url(${Anime})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        height: '35vw',
        width: '100%',
        display: 'flex',
       
    },
    grid: {
        height: '35vw',
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
    },
    grid3: {
        height: 'auto',
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        minHeight: '35vw',
    },
    paper: {
        height: '100%',
        width: '25%',
    },
    font: {
        fontFamily: 'Montserrat',
        paddingTop: '40px',
        fontSize: '2em',
        height: '50%',
    },
 
});



function App() {
    const classes = useStyles();
    return (
        <div className='App'>
            <AppBar position="static">
                <Toolbar variant="dense" className={classes.toolbar}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <img src={PrinceVal} />
                    </IconButton>
                   
                </Toolbar>
            </AppBar>

            <Grid conatiner justify='center'>
                <Grid Item xs={12} className={classes.firstPhoto}>
                    
                </Grid>
                <Grid Conatiner Item xs={12} className={classes.grid1} spacing={3} justify="space-evenly" alignItems="stretch">
                    <Grid item xs={12} md={6} lassName={classes.grid}><EmblaCarousel slides={slides}/></Grid>
                    
                </Grid>
                <Grid Item xs={12} className={classes.firstPhoto}>

                </Grid>
                <Grid Item xs={12} className={classes.secondPhoto}>

                </Grid>
                <Grid Container Item xs={12} className={classes.grid3} justify="space-evenly" spacing={3}>
                    <Grid item xs={8} md={5}>
                        <Typography variant='h3' className={classes.font}>Album now out</Typography>
                    </Grid>
                    <Grid item xs={8} md={5}><Typography variant='h5' className={classes.font}>I am Prince Valentine, an upcoming rapper from Stockton, California.
                    If your are intrested in collaborating then message me on Instagram. Otherwise enjoy, follow, and like!
                        </Typography></Grid>

                </Grid>
                <Grid Item xs={12} className={classes.secondPhoto}>

                </Grid>
            </Grid>
          
          <BNavBar />

      </div>
  );
}

export default App;

/*<a href="https://www.youtube.com/channel/UCjILPeEpb7DX2U81Tlww8nA" />
 <a href="https://www.instagram.com/princevalentine209/">
 <a href="https://open.spotify.com/artist/4owReAr0XidcWfBgOSEcsz?si=LAlEBJD8QnWk1tNvYykcIg" />
 */