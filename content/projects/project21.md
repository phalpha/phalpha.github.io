---
title: "Glyde"
date: 
tags: 
summary: "like swype but more fun"
---


## Inspiration
At PennApps XVII - 2017, my team was inspired to create something that would accelerate the extent of technology in the future. We noticed how often we utilized the finger-gliding method on our phone keyboards to type words quickly by gliding across characters rather than pressing them individually. We decided to implement this method with a tangible keyboard using hardware and software.

## What it does
Glyde traces the movement of a user's finger while wearing a special glove over a physical keyboard. The system:
1. Detects keyboard placement via pressure sensor
2. Tracks finger movement across letters
3. Interprets intended words through motion tracking
4. Uses AI-powered spell-checking for accuracy
5. Outputs text to any application

Users can 'swipe' words like 'read' by tracing their finger over the letters r-e-a-d. The system works even with imperfect movements thanks to our intelligent word prediction.

## How we built it
**Hardware Setup:**
- Custom stand made with metal beams, plexiglass, and duct tape
- Logitech 720p camera mounted on an arch
- Pressure sensor for keyboard detection
- Special tracking glove for finger recognition

**Software Stack:**
- Python for core functionality
- OpenCV for computer vision (contour detection and object tracking)
- Arduino for sensor integration
- Custom spell-check algorithm using:
  - Large text datasets for training
  - Hamming distance calculations
  - English word frequency analysis

## Difficulties
1. Designing a stand that reliably positions the camera to recognize individual keys
2. Finger tracking accuracy across different keyboard layouts
3. Connecting laptop data to Arduino microcontroller
4. Processing data for real-time LCD display
5. Handling ambiguous swipe patterns

## Accomplishments
- Creating a smooth, reliable keyboard system requiring no physical key presses
- Developing a functional prototype in hackathon timeframe
- Implementing accurate finger tracking with OpenCV
- Building an intelligent spell-checker that handles imperfect inputs
- Achieving seamless hardware-software integration

## Lessons
- Advanced OpenCV techniques (contour detection, object tracking)
- Serial communication between Arduino and computers
- String manipulation and natural language processing
- Hardware prototyping and rapid fabrication
- Camera calibration and perspective correction


## Learn More

[Devpost](https://devpost.com/software/swipe-hype)
[GitHub Repository](https://github.com/your-username/glyde-project)  

---

*Created for PennApps XVII - 2017 with Zarir Hamza, Abhishek Patel, and Kunal Adhia*