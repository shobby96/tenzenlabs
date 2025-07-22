import { useState, useRef } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Popper, Paper, Drawer, IconButton, List, ListItem, ListItemText, Divider } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useRouter } from "next/router"; // Import Next.js router

const servicesList = [
  { title: "Discovery", description: "Finalize product vision & prepare for development." },
  { title: "MVP Development", description: "Create your app & quickly launch." },
  { title: "UI/UX Design", description: "Compelling UI and brilliant UX." },
  { title: "Product Team", description: "Value-packed product development service." },
  { title: "UX Audit", description: "Dramatically boost your conversion." },
  { title: "Team Augmentation", description: "Hire tech team for years to come." },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const servicesRef = useRef(null);
  const popperRef = useRef(null);
  const router = useRouter(); // Initialize router

  // Toggle Side Drawer
  const toggleDrawer = (open) => (event) => {
    if (event?.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setMobileOpen(open);
  };

  const handleHover = () => {
    setOpen(true);
  };

  const handleLeave = (event) => {
    if (
      !servicesRef.current?.contains(event?.relatedTarget) &&
      !popperRef.current?.contains(event?.relatedTarget)
    ) {
      setOpen(false);
    }
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "rgba(10, 10, 10, 0.4)",
          backdropFilter: "blur(6px)",
          padding: { xs: "0 1rem", md: "0 2rem" },
          marginBottom: "5rem",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Button variant="h6" sx={{ fontWeight: "bold", color: "white" }} onClick={() => router.push('/')}>
            Tenzen Labs
          </Button>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "1.5rem", alignItems: "center" }}>
            {/* <Button color="inherit">Projects</Button> */}

            {/* Services Section */}

            <Button color="inherit" onClick={() => router.push("/service-custom-development")}>Services</Button>
            {/* <Box
                            sx={{ display: "flex", alignItems: "center", position: "relative" }}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleLeave}
                        >
                            <Typography
                                ref={servicesRef}
                                sx={{
                                    cursor: "pointer",
                                    color: "white",
                                    fontWeight: "bold",
                                    position: "relative",
                                }}
                            >
                                Services ⌄
                            </Typography>

                       
                            <Popper
                                open={open}
                                anchorEl={servicesRef.current}
                                placement="bottom-start"
                                disablePortal
                                modifiers={[
                                    { name: "preventOverflow", options: { boundary: "window" } },
                                    { name: "flip", options: { fallbackPlacements: ["bottom"] } },
                                ]}
                                style={{ zIndex: 10, width: "auto", minWidth: "500px" }}
                            >
                                <AnimatePresence>
                                    {open && (
                                        <motion.div
                                            ref={popperRef}
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            onMouseEnter={handleHover}
                                            onMouseLeave={handleLeave}
                                            style={{
                                                width: "100%",
                                                display: "flex",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Paper
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 2,
                                                    width: "500px",
                                                    background: "rgba(255, 255, 255, 0.05)",
                                                    backdropFilter: "blur(10px)",
                                                    borderRadius: "12px",
                                                    padding: "20px",
                                                    color: "white",
                                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
                                                }}
                                            >
                                            
                                                <Box sx={{ flex: "0 0 120px" }}>
                                                    <img
                                                        src="/pizza.svg"
                                                        alt="All services"
                                                        style={{ width: "100%", height: "auto", opacity: 0.8 }}
                                                    />
                                                    <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
                                                        All Services
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ opacity: 0.7 }}>
                                                        Custom development & design
                                                    </Typography>
                                                </Box>

                                              
                                                <Box sx={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                                                    {servicesList.map((service, index) => (
                                                        <Box key={index}>
                                                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                                                {service.title}
                                                            </Typography>
                                                            <Typography variant="body2" sx={{ opacity: 0.7 }}>
                                                                {service.description}
                                                            </Typography>
                                                        </Box>
                                                    ))}
                                                </Box>
                                            </Paper>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </Popper>
                        </Box> */}

            <Button color="inherit" onClick={() => router.push('/contact')}>About Us</Button>
          </Box>

          {/* Mobile Hamburger Menu */}
          <IconButton sx={{ display: { xs: "flex", md: "none" }, color: "white" }} onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Sidebar Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 280,
            backgroundColor: "#1A1A1A",
            height: "100vh",
            color: "white",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          {/* Close Button */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={toggleDrawer(false)} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Menu Items */}
          <List>
            {/* <ListItem button>
              <ListItemText primary="Projects" />
            </ListItem>
            <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }} /> */}

            {/* Services with Dropdown */}
            {/* <ListItem button onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}>
              <ListItemText primary="Services" />
              <ArrowDropDownIcon />
            </ListItem>
            {servicesDropdownOpen &&
              servicesList.map((service, index) => (
                <ListItem key={index} sx={{ pl: 4 }}>
                  <ListItemText primary={service.title} />
                </ListItem>
              ))} */}
            <ListItem button>
              <ListItemText primary="Services" onClick={() => router.push('/service-custom-development')} />
            </ListItem>
            <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }} />
            <ListItem button>
              <ListItemText primary="About Us" onClick={() => router.push('/contact')} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
