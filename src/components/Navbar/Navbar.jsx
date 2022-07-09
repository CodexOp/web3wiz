import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [light, setLight] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const pages = ["about", "services", "projects", "contact"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleModal = (value) => setOpenModal(value);

  const handleDarkMode = () => {
    if (light) {
      setLight(false);
      document.querySelector("body").classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      setLight(true);
      document.querySelector("body").classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setLight(true);
      document.querySelector("body").classList.add("light");
    } else if (savedTheme === "dark") {
      setLight(false);
      document.querySelector("body").classList.remove("light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  }, []);

  return (
    <AppBar
      className={styles.navBar}
      position="sticky"
      sx={{
        backgroundColor: "transparent",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: "flex" }}>
          <Box
            sx={{
              height: "auto",
              width: "100%",
              maxWidth: { xs: 60, sm: 80 },
            }}
            component="img"
            alt="Logo"
            src={Logo}
          />
          <Typography
            className={styles.navText}
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex" },
              fontFamily: "Montserrat",
              fontWeight: 600,
              letterSpacing: { xs: ".1rem", sm: ".3rem" },
              fontSize: { xs: "1rem", sm: "1.3rem", m: "1.5rem" },
              textDecoration: "none",
            }}
          >
            MATRIX LABS
          </Typography>
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon
                className={styles.navText}
                sx={{
                  fontSize: { xs: "2rem", sm: "2.3rem" },
                }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              PaperProps={{
                style: {
                  width: "100%",
                  maxWidth: "100%",
                  background: light ? "#f5f5f5" : "#000000",
                },
              }}
              marginThreshold={0}
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    className={styles.navText}
                    component="a"
                    href={`#${page}`}
                    sx={{ textDecoration: "none" }}
                    textAlign="center"
                  >
                    {page.toUpperCase()}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  toggleModal(true);
                }}
              >
                <Typography className={styles.navText} textAlign="center">
                  DAPP
                </Typography>
              </MenuItem>
              <MenuItem>
                {light ? (
                  <WbSunnyIcon
                    sx={{
                      color: "#000000cc",
                      mx: 1,
                      cursor: "pointer",
                    }}
                    onClick={handleDarkMode}
                  />
                ) : (
                  <NightsStayIcon
                    sx={{
                      color: "#ffffffcc",
                      mx: 1,
                      cursor: "pointer",
                    }}
                    onClick={handleDarkMode}
                  />
                )}
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                className={styles.navText}
                component="a"
                href={`#${page}`}
                key={page}
                sx={{
                  my: 2,
                  mx: 1,
                  display: "block",
                  fontFamily: "Montserrat",
                  fontSize: "1rem",
                }}
              >
                {page}
              </Button>
            ))}
            <Button
              sx={{
                my: 2.5,
                mx: 1,
                backgroundColor: "#00D186",
                fontFamily: "Montserrat",
                display: "block",
                fontSize: "1rem",
                padding: "0px 1rem",
                "&:hover": {
                  backgroundColor: "#00D186",
                },
              }}
              onClick={() => setOpenModal(true)}
            >
              DAPP
            </Button>
            {light ? (
              <WbSunnyIcon
                sx={{
                  color: "#000000cc",
                  mx: 1,
                  cursor: "pointer",
                }}
                onClick={handleDarkMode}
              />
            ) : (
              <NightsStayIcon
                sx={{
                  color: "#ffffffcc",
                  mx: 1,
                  cursor: "pointer",
                }}
                onClick={handleDarkMode}
              />
            )}
          </Box>
        </Toolbar>
      </Container>
      <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.dappModal}>
          <Typography
            className={styles.navText}
            variant="h3"
            component="h2"
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 600,
            }}
          >
            Coming Soon
          </Typography>
        </Box>
      </Modal>
    </AppBar>
  );
};

export default Navbar;
