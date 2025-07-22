import { useState } from "react";
import { Box, Typography, Button, Grid, Card } from "@mui/material";
import { motion } from "framer-motion";

const services = [
    {
        title: "Website Development",
        description: "We build responsive and high-performing websites for businesses.",
        image: "/icons/website-dev.svg",
    },
    {
        title: "Product Development",
        description: "Build scalable products with robust architecture.",
        image: "/icons/product-dev.svg",
    },
    {
        title: "Cloud Development",
        description: "Leverage cloud technologies for scalability and performance.",
        image: "/icons/cloud-dev.svg",
    },
    {
        title: "Mobile Development",
        description: "Create seamless mobile applications for iOS and Android.",
        image: "/icons/mobile-dev.svg",
    },
    {
        title: "UI UX Design",
        description: "We engineer a custom and intuitive user experience wrapped in an equally creative design.",
        image: "/icons/uiux-design.svg",
    },
];

export default function ServicesSection() {
    const [selectedService, setSelectedService] = useState(services[0]); // Default selected

    return (
        <Box
            sx={{
                backgroundColor: "transparent",
                color: "white",
                padding: "80px 20px",
                textAlign: "center",
                width: "100%",
                boxSizing: 'border-box',
                paddingX: '10rem'
            }}
        >
            {/* Title */}
            <Typography variant="h2" fontWeight="bold">
                What we do?
            </Typography>
            <Box
                sx={{
                    width: "80px",
                    height: "3px",
                    backgroundColor: "#6A0DAD", // Deep Purple Underline
                    margin: "10px auto 30px",
                }}
            />

            {/* First Row: Service Cards (1, 2) + Selected Service Panel */}
            <Grid container spacing={3} justifyContent="center" alignItems="stretch">
                <Grid item xs={12} sm={4}>
                    {renderServiceCard(services[0], selectedService, setSelectedService)}
                </Grid>
                <Grid item xs={12} sm={4}>
                    {renderServiceCard(services[1], selectedService, setSelectedService)}
                </Grid>
                <Grid item xs={12} sm={4}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}

                    // style={{ height: "100%" }} // Ensures same height as cards
                    >
                        <Box
                            sx={{
                                padding: "30px",
                                borderRadius: "12px",
                                height: "100%", // Same height as cards
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                background: 'transparent',
                                boxShadow: '0 0 20px 4px rgba(103, 58, 183, 0.7)', 
                                // boxShadow: "0px 4px 15px rgba(106, 13, 173, 0.3)",
                            }}
                        >
                            <Typography variant="h5" fontWeight="bold" color="#6A0DAD">
                                {selectedService.title}
                            </Typography>
                            <Typography sx={{ color: "#B0B0B0", margin: "10px 0" }}>
                                {selectedService.description}
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#6A0DAD",
                                    color: "#FFF",
                                    "&:hover": { backgroundColor: "#5A0DA0" },
                                }}
                            >
                                Learn More
                            </Button>
                        </Box>
                    </motion.div>
                </Grid>
            </Grid>

            {/* Second Row: Service Cards (3, 4, 5) */}
            <Grid container spacing={3} justifyContent="center" sx={{ marginTop: "20px" }}>
                <Grid item xs={12} sm={4}>
                    {renderServiceCard(services[2], selectedService, setSelectedService)}
                </Grid>
                <Grid item xs={12} sm={4}>
                    {renderServiceCard(services[3], selectedService, setSelectedService)}
                </Grid>
                <Grid item xs={12} sm={4}>
                    {renderServiceCard(services[4], selectedService, setSelectedService)}
                </Grid>
            </Grid>
        </Box>
    );
}

// Utility function to render service cards
const renderServiceCard = (service, selectedService, setSelectedService) => (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} key={service.title}>
        <Card
            onClick={() => setSelectedService(service)}
            sx={getCardStyles(selectedService.title === service.title)}
        >
            <Box>
                <img src={service.image} alt={service.title} width="60" />
                <Typography fontWeight="bold" fontSize="18px" mt={2}>
                    {service.title}
                </Typography>
            </Box>
        </Card>
    </motion.div>
);

// Card Styles Function
const getCardStyles = (isSelected) => ({
    cursor: "pointer",
    background: isSelected
        ? "rgba(106, 13, 173, 0.8)" // Highlighted deep purple
        : "linear-gradient(135deg, rgba(30,30,30,0.8) 0%, rgba(0,0,0,0.8) 100%)",
    backdropFilter: "blur(3px)",
    padding: "30px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "12px",
    transition: "all 0.3s ease-in-out",
    // width: "200px", // Ensures square shape
    height: "100%",
    "&:hover": { boxShadow: "0px 0px 15px rgba(106, 13, 173, 0.5)" },
});
