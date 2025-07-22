import { Box, Typography, IconButton, Button } from "@mui/material";
import { motion } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useRouter } from "next/router";

export default function GetInTouch() {

  const router = useRouter()
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        // opacity: '0.5',
        color: "white",
        // padding: "80px 20px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",

        position: "fixed",
        left: "0",
        bottom: "0",
        padding: "0",
        paddingX: '2.5rem',
        paddingBottom: '2rem',
        boxSizing: 'border-box',
        opacity: "1",
      }}
    >
      {/* "Get in Touch" Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button onClick={() => router.push('/contact')}>
          <Typography
            //   variant="20rem"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "3rem", md: "6rem" },
              textAlign: "center",
              background: "linear-gradient(90deg, rgba(106,13,173,1) 0%, rgba(186,85,211,1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0px 0px 15px rgba(106,13,173,0.7)",
            }}
          >
            Get in Touch
          </Typography>
        </Button>
      </motion.div>

      {/* Main Container for Left & Right Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          width: "100%",
          //   maxWidth: "1200px",
          marginTop: "40px",
          //   padding: "20px",
          boxSizing: 'border-box',

        }}
      >
        {/* Left Section: Logo, Address, Socials */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
            
          }}
        >
          {/* Company Name and Logo */}
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              color: "white", marginBottom: "10px",
              fontSize: { xs: "1.5rem", md: "2rem", lg: "2rem" },
              textAlign: 'end'
            }}


          >
            Tenzen Labs
          </Typography>

          {/* Address */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "white",
              marginBottom: "20px",
              fontSize: { xs: "1rem", md: "1rem", lg: "1rem" },
              // justifyContent: { xs: "center", md: "flex-end" }
              textAlign: "end"
            }}
          >
            30 North Gould Street, Ste R, Sheridan
          </Typography>

          {/* Social Icons */}
          <Box sx={{ display: "flex", gap: "15px", justifyContent: { xs: "center", md: "flex-end" } }}>
            <IconButton sx={{ color: "white", "&:hover": { color: "#6A0DAD" } }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "white", "&:hover": { color: "#6A0DAD" } }}>
              <TwitterIcon />
            </IconButton>
            <IconButton sx={{ color: "white", "&:hover": { color: "#6A0DAD" } }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton sx={{ color: "white", "&:hover": { color: "#6A0DAD" } }}>
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Right Section: Placeholder (Add content later)
                <Box sx={{ flex: 1, minHeight: "200px" }}></Box> */}
      </Box>
    </Box>
  );
}
