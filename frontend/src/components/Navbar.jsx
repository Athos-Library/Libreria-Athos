import React, {useState} from "react";
import { Link as LinkS } from "react-scroll";
import { AiFillAudio } from "react-icons/ai";
import { BrowserRouter, Route, Link as LinkS1, Redirect } from "react-router-dom";
import { AppBar, makeStyles, Toolbar, Hidden, IconButton, Link } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";

/*function App(){
  const commands = [
    {
      command: ["Ir a *", "Abrir *"],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState("");
}*/

const useStyles = makeStyles((theme)=>({
  offset: theme.mixins.toolbar,
  navbar:{
    backgroundColor: '#1f5979',
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  navLogo:{
    display: 'flex',
    marginLeft: '1em',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexGrow: 1,
    fontSize: '30px',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      marginRight: '1em',
      justifyContent: 'flex-end',
      flexDirection: 'row',
      flexGrow: 1,
      fontSize: '24px',
    },
  },
  navMenu:{    
    fontSize: '18px',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 4,
    justifyContent: 'flex-end',  
    height: '24px',  
  },
  submenu:{
    margin: '0 1.5em',
    '&:hover': {
      color:'#C0B3A0',
      cursor:'pointer',
    }
  },
}));

const Navbar = (props) => {

  const classes = useStyles();

  return (
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.navbar}>
          <Hidden smUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={()=>props.openDrawer()}
              className={classes.menuButton}
            >
              <MenuIcon />
          </IconButton>          
          <div className={classes.navLogo}><span>Athos</span></div>
          </Hidden>
          <Hidden xsDown>              
            <div className={classes.navMenu}>

              <button> 
              <AiFillAudio/></button>
              <LinkS className={classes.submenu}
                    to="home-slider"
                    spy= {true}
                    smooth={true}
                    offset={-64}
                    duration={1000}>
              Inicio</LinkS>
              <LinkS className={classes.submenu}
                    to="home-what-is-athos"
                    spy= {true}
                    smooth={true}
                    offset={-64}
                    duration={1000}>
              Variedad</LinkS> 
              <LinkS className={classes.submenu}
                    to="home-services"
                    spy= {true}
                    smooth={true}
                    offset={-64}
                    duration={1000}>
              Características</LinkS>                   
              <Link href="/login" color="inherit"  underline="none" className={classes.submenu}>Ingresar</Link>   
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
  );
};

export default Navbar;
