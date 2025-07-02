---
title: "Digital Distance"
date: 
tags: 
summary: "measuring distances by just moving your phone"
---

*Accurate distance measurement using only smartphone sensors*

## Overview
Digital Distance is an innovative web application that measures physical distances without conventional measuring tools. By leveraging smartphones' native sensors (accelerometer, gyroscope, and gravity axes), it calculates distances through precise motion tracking algorithms. This project won **Best Sensor Hack** and **2nd Best Use of Scriptr API** at Space Apps NYC 2016.


## Key Features
- **Contactless Measurement**: Calculate distances without physical tools
- **Smartphone Sensor Utilization**: Uses built-in accelerometer, gyroscope, and gravity sensors
- **Real-time Calculation**: Processes measurements instantly
- **Data Visualization**: Provides clear measurement results
- **Cross-platform**: Works on any smartphone with a modern browser
	
## Sensor Data Processing
1. Capture raw sensor data from accelerometer and gyroscope
2. Calculate velocity through integration of acceleration
3. Compute distance through integration of velocity
4. Apply calibration and noise reduction
5. Return precise distance measurement

## Scriptr Implementation
Digital Distance leverages Scriptr.io for backend processing:
- **Sensor Data Handling**: Processes raw data from mobile sensors
- **API Integration**: Connects smartphone sensors to calculation logic
- **Server-side Execution**: Runs computationally intensive algorithms
- **File Processing**: Handles data uploads from mobile devices

`

## Technical Challenges
- **Sensor Noise**: Filtering inconsistent sensor readings
- **Integration Drift**: Minimizing error accumulation over time
- **Device Variability**: Accounting for different smartphone sensor qualities
- **Motion Calibration**: Handling different movement patterns
- **Real-time Processing**: Optimizing for mobile performance

## Awards & Recognition
**Best Sensor Hack** - Space Apps NYC 2016  
 **2nd Best Use of Scriptr API** - Space Apps NYC 2016


## Technology Stack
- Javascript
- Scriptr
- Mobile Sensors




---

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?logo=github)](https://github.com/asp3/DigitalDistance)

[Blog Post by Scriptr](https://web.archive.org/web/20170516214754/https://blog.scriptr.io/innovation-at-nasa-space-apps-hackathon-sponsored-by-scriptr-io/)

*Developed for NASA Space Apps Challenge 2016 - New York City, with Abhishek Patel and Kunal Adhia*