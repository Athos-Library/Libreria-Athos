import React from "react";
import { getCurrentUser } from "../services/LoginService";
import { useHistory } from "react-router-dom";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";

import {
  Button,
  Container,
  Hidden,
  List,
  ListItem,
  Drawer,
  Divider,
  ListItemText,
  Box,
  Grid,
} from "@material-ui/core";

import Fade from "react-reveal/Fade";

// Importamos imagenes
import personBook from "../assets/libros.png";
import lector from "../assets/Collage.jpg";

// Importamos los principales componentes
import Navbar from "./Navbar";
import Footer from "./Footer";

// Importamos los estilos de color del boton
import theme from "../ThemeConfig";

export const HomeWithoutLogin = () => {
  const history = useHistory();

  const state = {
    currentUser: getCurrentUser(),
  };

  const { currentUser } = state;
  // Sección para personalizar componentes UI

  const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    root: {
      display: "flex",
    },
    botonPersonalizado: {
      margin: theme.spacing(1),
      backgroundImage: "none",
      textTransform: "none",
    },
    drawer: {
      [theme.breakpoints.down("sm")]: {
        width: 240,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      [theme.breakpoints.down("sm")]: {
        width: 240,
        flexShrink: 0,
        color: "#FFF",
        background: "hsl(222, 13%, 15%)",
      },
    },
    content: {
      flexGrow: 1,
    },
    submenu: {
      padding: "8px 40px",
      "&:active": {
        color: "#C0B3A0",
      },
    },
  }));

  const classes = useStyles();

  // Funciones para abrir y cerrar el menu responsive
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    console.log(mobileOpen);
  };

  // Menu resposive
  const handleMenu = (event)=> {
    if (event.target.textContent === "¿Qué es Athos?") {
      whatis();
    } else if (event.target.textContent === "Ingresar") {
      history.push("/login");
    }
  }
  
  var Scroll = require('react-scroll');
  var scroll    = Scroll.animateScroll;

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  var Element  = Scroll.Element;
  var scroller = Scroll.scroller;

  const whatis = ()=>{
    scroller.scrollTo('hwir', {
      spy: true,
      smooth: true,
      offset: -56,
      duration: 1000,
    })
  }

  const services = ()=>{
    scroller.scrollTo('hs', {
      spy: true,
      smooth: true,
      offset: -56,
      duration: 1000,
    })
  }

  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      {!currentUser ? (
        <div className={classes.root}>
          <Navbar openDrawer={handleDrawerToggle} />
          {/* Esta parte es del menu responsive */}
          <Hidden smUp>
            <Drawer
              className={classes.drawer}
              variant="temporary"
              classes={{ paper: classes.drawerPaper }}
              open={mobileOpen}
              onClose={handleDrawerToggle}
            >
              <div className={classes.offset}></div>
              <Divider></Divider>
              <List component="nav">
                <ListItem button onClick={scrollToTop} className={classes.submenu}>
                  <ListItemText>
                    Inicio
                  </ListItemText>
                </ListItem>
              </List>
            </Drawer>
          </Hidden>
          {/* Cuerpo de la página */}
          <main className={classes.content}>
            <div className={classes.offset}></div>
            <div className="home-slider" id="home-slider">
              <div className="home-slider-welcome">
                <h1
                  className="home-slider-welcome--title animate__animated animate__fadeIn animate__slower"
                  anchor="left"
                >
                  Athos
                </h1>
                <p className="home-slider-welcome--phrase animate__animated animate__backInLeft animate__slow">
                  La nueva plataforma donde podras encontrar de forma libre tus libros, articulos, comics, mangas, 
                  novelas y mucho más. 
                </p>
                <div className="home-slider-welcome--button animate__animated animate__fadeInDown animate__slow">
                  <ThemeProvider theme={theme}>
                    <Button
                      variant="contained"
                      color="secondary"
                      href="/register"
                      size="large"
                      className={classes.botonPersonalizado}
                    >
                      ÚNETE
                    </Button>
                  </ThemeProvider>
                </div>
              </div>
              <Hidden xsDown>
                <div className="home-slider-image">
                  <img
                    className="animate__animated animate__fadeIn animate__slower"
                    src={personBook}
                    alt="Biblioteca virtual"
                  />
                </div>
              </Hidden>
            </div>
            <Fade cascade>  
                  <div className="home-what-is-athos-image">
                    <img
                      className="home-what-is-athos-image__img"
                      src={lector}
                      alt="Tablet"
                    />
                  </div>
                </Fade>
            <Container
              maxWidth="xl"
              component="section"
              id="home-what-is-athos"
            >
              <Element name="hwir">
                <div className="home-what-is-athos">
                  <Fade cascade>
                    <div className="home-what-is-athos-text">
                      <h2>Sorpréndete con la variedad de nuestro catálogo</h2>
                      <p className="home-what-is-athos-text">
                        Mientras tu tengas la intención de leer, no importa el género de lo que quieras leer,
                        Athos te dará toda la facilidad que necesites ya que implementamos un sistema de búsqueda 
                        simple para que no pierdas tiempos buscando tu novela, libro, articulo, comic favorito y 
                        pases mas tiempo leyendo con nosotros.
                      </p>
                    </div>
                  </Fade>
                </div>
              </Element>
            </Container>
            <Element name="hs">
              <Container maxWidth="xl" component="section" id="home-services">
                <div className="home-services">
                  <div className="home-services__text">
                    <h2>
                      <Fade cascade>Caracteristicas de Athos</Fade>
                    </h2>
                  </div>
                  <div className="home-services__containers">
                    <Grid container direction="row" justify="space-around">
                      <Grid item xs={12} sm={6} lg={4}>
                        <Fade cascade>
                          <Box
                            bgcolor="#1f5979"
                            borderRadius="30px"
                            width="250px"
                            height="70px"
                            color="#FFF"
                            padding="20px"
                            margin="2em auto"
                            boxShadow="0 0 6px hsl(266, 23%, 12%)"
                          >
                            <h3>Biblioteca Virtual</h3>
                          </Box>
                        </Fade>
                      </Grid>
                      <Grid item xs={12} sm={6} lg={4}>
                        <Fade cascade>
                          <Box
                            bgcolor="#1f5979"
                            borderRadius="30px"
                            width="250px"
                            height="70px"
                            color="#FFF"
                            padding="20px"
                            margin="2em auto"
                            boxShadow="0 0 6px hsl(266, 23%, 12%)"
                          >
                            <h3>Registro de Lectura</h3>
                          </Box>
                        </Fade>
                      </Grid>
                      <Grid item xs={12} sm={6} lg={4}>
                        <Fade cascade>
                          <Box
                            bgcolor="#1f5979"
                            borderRadius="30px"
                            width="250px"
                            height="70px"
                            color="#FFF"
                            padding="20px"
                            margin="2em auto"
                            boxShadow="0 0 6px hsl(266, 23%, 12%)"
                          >
                            <h3>Recomendación de libros</h3>
                          </Box>
                        </Fade>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Container>
            </Element>
            <Footer />
          </main>
        </div>
      ) : (
        history.push("/home")
      )}
    </>
  );
};
