---
title: "Essential Tremor Measurement and Analysis"
date: 
tags:
summary: "measuring hand movement with a Raspberry Pi"
---


## Project Overview

This project developed a computer sensor network to quantitatively measure and analyze hand tremors in patients with essential tremor, a neurological disorder affecting millions of people worldwide. The system represents a significant advancement over current qualitative assessment methods used in clinical practice.

## Technical Implementation

### Hardware Components
- **Dual ZX Distance and Gesture Sensors**: Infrared-based sensors measuring 3D hand position
- **Arduino Uno**: Microcontroller for data collection and processing
- **Raspberry Pi 3**: Primary computing unit for data analysis
- **TCA9548A I2C Multiplexer**: Enables communication between multiple sensors
- **Custom sensor mounting system**: Perpendicular arrangement for comprehensive 3D tracking

### Software Architecture
The system utilizes a multi-layered software approach:
- **C programming** on Arduino for real-time sensor data acquisition
- **Python scripts** on Raspberry Pi for data logging and analysis
- **I2C protocol** for efficient inter-device communication
- **Matplotlib visualization** for comprehensive data presentation

## Key Features

### Measurement Capabilities
- **Three-dimensional tracking**: Complete x, y, z coordinate mapping
- **High-resolution data**: 1200 samples per second acquisition rate
- **12-inch vertical range** and 6-inch horizontal sensing area
- **Real-time processing** with moving average calculations

### Analysis Functions
- Moving statistical calculations (average, standard deviation, variance, RMS)
- Deviation analysis comparing actual vs. theoretical hand movements
- Multi-dimensional visualization including parametric plots
- Quantitative tremor assessment replacing subjective rating scales

## Testing and Validation

The system underwent comprehensive testing with a control subject performing five standardized movements:

1. **Vertical Motion**: Up-down hand movements
2. **Horizontal Motion**: Left-right linear movements  
3. **Circular Motion**: Clockwise tracing patterns
4. **Wrist Tilting**: Palm orientation changes
5. **Steady Hold**: Static position maintenance

### Results Summary
- Average deviation measurements ranged from 0.114 to 0.239 inches
- Successfully captured natural hand variability in healthy subjects
- Established baseline data for future tremor patient comparisons
- Demonstrated quantitative measurement capabilities

## Conference Submission
- Accepted for submission at the 2017 MIT IEEE Undergraduate Research Conference
- Paper published in the [IEEE Xplore Digital Library](https://ieeexplore.ieee.org/document/8284206/)

---

*I worked on this project at NJ Governor's School for Engineering and Technology.*

*One interesting aspect of this project as that our mentor was for some reason obsessed with the programming language APL, which stands for "A Programming Language". If you haven't heard of it, look it up. Quite an interesting choice for a project about interfacing to an Arduino and measuring movement. His vision was to use APL out of artistic creativity and as a challenge. Well we quickly assessed that this was not a challenge the rest of us were particularly intersted to embark upon, and we chose to move in the more walked-on path.*