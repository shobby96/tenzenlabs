import React, { useState, useEffect } from 'react';
import { Box, Avatar } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import MedicalInformationRoundedIcon from '@mui/icons-material/MonitorHeartRounded';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';

const CircleNetwork = ({ innerCircleSize = 100, outerCircleSize = 80 }) => {
  const circles = [1, 2, 3, 4, 5];
  const angleStep = (2 * Math.PI) / circles.length;
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [centerHovered, setCenterHovered] = useState(false);
  const controls = useAnimation();

  const centerRadius = innerCircleSize / 2;             // Dynamic center circle radius
  const outerRadiusNormal = outerCircleSize / 2;        // Dynamic outer circle radius
  const outerRadiusHovered = outerRadiusNormal * 1.15;  // Hovered outer circle grows by 15%

  useEffect(() => {
    controls.start({
      rotate: [0, 0],
      transition: {
        repeat: Infinity,
        ease: 'linear',
        duration: 20,
      },
    });
  }, [controls]);

  // Adjust the line to stop at the edge of the outer circle
  const renderLine = (x1, y1, x2, y2, isHovered, delay = 0) => (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={isHovered ? '#673AB7' : '#888'}
        strokeWidth={isHovered ? 7 : 5}
        style={{
          strokeDasharray: '300',
          strokeDashoffset: isHovered ? 0 : 300,
          transition: `stroke-dashoffset 0.5s ease ${delay}s`,
        }}
      />
      
    </svg>
  );

  const iconsList = [
    <MedicalInformationRoundedIcon sx={{ color: 'darkred', width: '60%', height: '60%' }} />,
    <LocalGroceryStoreRoundedIcon sx={{ color: 'darkgrey', width: '60%', height: '60%' }} />,
    <StorefrontRoundedIcon sx={{ color: 'darkorange', width: '60%', height: '60%' }} />,
    <SchoolRoundedIcon sx={{ color: 'gray', width: '60%', height: '60%' }} />,
    <PeopleAltRoundedIcon sx={{ color: 'darkblue', width: '60%', height: '60%' }} />
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        width: '600px',
        height: '600px',
        margin: 'auto',
        overflow: 'hidden',
        willChange: 'transform',
      }}
    >
      {/* Center Circle */}
      <Avatar
        sx={{
          width: `${innerCircleSize}px`,
          height: `${innerCircleSize}px`,
          position: 'absolute',
          bgcolor: 'transparent',
          border: '2px solid #673AB7',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'box-shadow 0.3s',
          boxShadow: centerHovered ? '0 0 20px 8px rgba(103,58,183,0.8)' : 'none',
        }}
        src="https://via.placeholder.com/70"
        alt="center"
        onMouseEnter={() => setCenterHovered(true)}
        onMouseLeave={() => setCenterHovered(false)}
      />

      <motion.div
        animate={controls}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          transformOrigin: 'center center',
        }}
      >
        {circles.map((circle, index) => {
          const angle = index * angleStep - Math.PI / 2;
          const radius = 230; // Distance from center to outer circles
          const centerX = 300;
          const centerY = 300;

          // Adjust outer circle size based on hover state
          const currentOuterRadius = hoveredIndex === index ? outerRadiusHovered : outerRadiusNormal;

          // Start line at the edge of the center circle
          const startX = centerX + (centerRadius + 2) * Math.cos(angle);
          const startY = centerY + (centerRadius + 2) * Math.sin(angle);

          // Stop line at the edge of the outer circle
          const endX = centerX + (radius - currentOuterRadius - 2) * Math.cos(angle);
          const endY = centerY + (radius - currentOuterRadius - 2) * Math.sin(angle);

          const isHovered = hoveredIndex === index || centerHovered;

          return (
            <React.Fragment key={index}>
              {/* Line from center to outer circle */}
              {renderLine(startX, startY, endX, endY, isHovered)}

              {/* Outer Circle */}
              <Avatar
                sx={{
                  width: isHovered ? `${outerRadiusHovered * 2}px` : `${outerRadiusNormal * 2}px`,
                  height: isHovered ? `${outerRadiusHovered * 2}px` : `${outerRadiusNormal * 2}px`,
                  bgcolor: 'transparent',
                  // border: '2px solid #673AB7',
                  position: 'absolute',
                  top: `${centerY + radius * Math.sin(angle)}px`,
                  left: `${centerX + radius * Math.cos(angle)}px`,
                  transform: 'translate(-50%, -50%)',
                  transition: 'box-shadow 0.3s, width 0.3s, height 0.3s',
                  boxShadow: isHovered ? '0 0 20px 8px rgba(103,58,183,0.8)' : 'none',
                  zIndex: isHovered ? 10 : 1,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {iconsList[index]}
              </Avatar>
            </React.Fragment>
          );
        })}
      </motion.div>
    </Box>
  );
};

export default CircleNetwork;
