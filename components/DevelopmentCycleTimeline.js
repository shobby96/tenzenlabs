import React, { useEffect, useState, useRef, useCallback, useLayoutEffect } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

const steps = [
    {
        title: "Product Scope",
        description:
            "The Product Scope is an intensive, 15-day, structured process. It all starts with an immersive focus session where you’ll sit down with product experts and ex-startup founders to dive into the product vision from a business standpoint.",
        deliverables: ["User Stories", "Sitemap", "UX Personas", "Key BPMN", "Tech Spike", "Stakeholder Analysis"],
    },
    {
        title: "UX & UI Design",
        description:
            "Create wireframes, prototypes, and design stunning visuals that align with your brand identity and user needs.",
        deliverables: ["Wireframes", "Prototypes", "UI Kit"],
    },
    {
        title: "Development",
        description:
            "Build a scalable, secure, and high-performance application that brings your vision to life.",
        deliverables: ["Frontend", "Backend", "Database Integration"],
    },
    {
        title: "Testing & QA",
        description:
            "Ensure a flawless user experience by conducting extensive testing and quality assurance.",
        deliverables: ["Unit Testing", "Integration Testing", "Performance Testing"],
    },
    {
        title: "Launch & Maintenance",
        description:
            "Deploy your product and ensure smooth post-launch operation with regular updates and support.",
        deliverables: ["Deployment", "Monitoring", "Support"],
    },
];

const DevelopmentCycleTimeline = () => {
    const [progress, setProgress] = useState(0);
    const timelineRef = useRef(null);
    const [timelineHeight, setTimelineHeight] = useState(0);
    const animationFrameRef = useRef();

    // Function to update timeline height dynamically
    const updateTimelineHeight = useCallback(() => {
        if (timelineRef.current) {
            setTimelineHeight(timelineRef.current.scrollHeight);
        }
    }, []);

    useLayoutEffect(() => {
        updateTimelineHeight();

        // ResizeObserver to detect content changes dynamically
        const resizeObserver = new ResizeObserver(() => updateTimelineHeight());
        if (timelineRef.current) {
            resizeObserver.observe(timelineRef.current);
        }

        return () => resizeObserver.disconnect();
    }, [updateTimelineHeight]);

    // Optimized scroll event handler (throttled)
    const handleScroll = useCallback(() => {
        if (!timelineRef.current || timelineHeight === 0) return;

        const timelineTop = timelineRef.current.getBoundingClientRect().top + window.scrollY;
        const scrollY = window.scrollY + window.innerHeight / 2;

        let progressValue = (scrollY - timelineTop) / timelineHeight;
        progressValue = Math.max(0, Math.min(1, progressValue)); // Clamp between 0 and 1

        // Only update state if progress has changed significantly
        if (Math.abs(progress - progressValue) > 0.005) {
            setProgress(progressValue);
        }
    }, [timelineHeight, progress]);

    useEffect(() => {
        const throttledScroll = () => {
            if (animationFrameRef.current) return;
            animationFrameRef.current = requestAnimationFrame(() => {
                handleScroll();
                animationFrameRef.current = null;
            });
        };

        window.addEventListener("scroll", throttledScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", throttledScroll);
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        };
    }, [handleScroll]);

    return (
        <Box
            ref={timelineRef}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "120vh",
                minWidth: "100%",
                flexDirection: "row",
                gap: "50px",
                position: "relative",
                marginBottom: '4rem'
            }}
        >
            {/* Zig-Zag Progress Bar */}
            {timelineHeight > 0 && (
                <Box
                    role="progressbar"
                    aria-label="Development Timeline Progress"
                    sx={{
                        position: "absolute",
                        left: "3%", // Adjust for correct placement
                        transform: "translateX(-50%)",
                        height: `${timelineHeight}px`,
                        width: "60px", // Adjusted width for better visibility
                        overflow: "visible",
                    }}
                >
                    <svg width="100%" height="100%">
                        {/* Background Zig-Zag Line */}
                        <polyline
                            points={Array.from({ length: Math.ceil(timelineHeight / 50) }, (_, i) =>
                                i % 2 === 0
                                    ? `10,${i * 50} 50,${i * 50 + 25}`
                                    : `50,${i * 50} 10,${i * 50 + 25}`
                            ).join(" ")}
                            stroke="#ddd"
                            strokeWidth="4"
                            fill="none"
                        />

                        {/* Animated Progress Zig-Zag */}
                        <motion.polyline
                            points={Array.from({ length: Math.ceil((progress * timelineHeight) / 50) }, (_, i) =>
                                i % 2 === 0
                                    ? `10,${i * 50} 50,${i * 50 + 25}`
                                    : `50,${i * 50} 10,${i * 50 + 25}`
                            ).join(" ")}
                            stroke="#6a0dad"
                            strokeWidth="4"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: Math.min(progress + 0.5, 1) }} // Progress always slightly ahead
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                    </svg>
                </Box>
            )}

            {/* Timeline Steps */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "80px", width: "80%" }}>
                {steps.map((step, index) => (
                    <Box key={index} sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
                        {/* Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ width: "100%" }}
                        >
                            <Card
                                sx={{
                                    width: { xs: "100%", md: "800px", lg: "1200px" },
                                    background: "linear-gradient(135deg, rgba(30,30,30,0.8) 0%, rgba(0,0,0,0.8) 100%)",
                                    backdropFilter: "blur(3px)",
                                    borderRadius: "16px",
                                    padding: "24px",
                                    minHeight: "300px",
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
                                    transition: "box-shadow 0.3s ease, transform 0.3s ease",
                                    cursor: "pointer",
                                    "&:hover": {
                                        boxShadow: "0 0 20px 4px rgba(103, 58, 183, 0.7)",
                                        transform: "translateY(-5px)",
                                    },
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                                        {step.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ mb: 2 }}>
                                        {step.description}
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
                                        Phase deliverables:
                                    </Typography>
                                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                        {step.deliverables.map((item, i) => (
                                            <Typography key={i} variant="body2" sx={{ flex: "1 1 45%" }}>
                                                • {item}
                                            </Typography>
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default DevelopmentCycleTimeline;
