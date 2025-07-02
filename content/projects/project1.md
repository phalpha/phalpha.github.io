---
title: "Indoor Positioning System"
date: 
tags: 
summary: "Coordinating Cameras and Computer Vision for Positioning"
image: "images/projects/my-project.jpg" # Optional featured image
---

## Introduction
- GPS is unreliable indoors (7.8m accuracy worst-case).  
- Existing solutions (WiFi/RSSI: 5-15m accuracy; BLE beacons) require user devices and infrastructure.  
- This system uses computer vision to achieve:  
  - Sub-meter positioning accuracy  
  - user identification  
- Applications: Indoor navigation (malls/airports), consumer analytics, human-robot interaction.

## System Overview
**Hardware:**  
- Two Axis M1054 network cameras  
- 1280×800 resolution, 84° FOV, 25 FPS  
- Mounted 6ft apart on ceiling at 21° downward tilt  

**Software:**  
- Ubuntu OS, Python/C++  
- OpenCV (core processing)  
- NumPy (matrix operations)  
- MATLAB (data filtering/visualization)  

**Workflow:**  
1. Video stream capture →  
2. Image processing →  
3. Parallel identification & location calculation →  
4. Data synthesis →  
5. Server publishing  

## Image Processing
1. **Background Subtraction**  
   Isolates moving objects (people) from static background  
2. **Noise Reduction**  
   Erosion/dilation filters remove artifacts  
3. **Contour Detection**  
   Creates bounding polygons around subjects  
   Output: Bounding rectangles for identification/location  

## User Identification

1. **Feature Extraction**  
   SURF algorithm detects edges/textures (e.g., clothing patterns)  
2. **Input Standardization**  
   K-means clustering converts variable features → fixed-size neural net input  
3. **Classification**  
   OpenCV's neural network matches features to identities  
   **Accuracy: >95%** (paper-reported)  

## Calculating Location

**Method:** Stereoscopic triangulation  
1. Horizontal angle calculation:  
   `angle = (pixel_offset_from_center) × (0.0656°/pixel)`  
   (Derived from 84° FOV / 1280 pixels)  
2. **ASA Triangle Solving:**  
   - Uses camera spacing (6ft) and dual-camera angles  
   - Projects calculations onto floor plane (accounts for 21° tilt)  
3. **Coordinate System:**  
   - Origin (0,0) = midpoint between cameras projected on floor  
   - Output format: (x_feet_right, y_feet_forward)  
   **Accuracy:** ≤1 ft near frame center (decreases toward edges due to lens distortion)  

## References
1. NASA GPS history documentation  
2. OpenCV technical docs (Background Subtraction, K-means, Neural Nets)  
3. SURF algorithm licensing notes  
4. Axis M1054 camera specifications  
5. Stereoscopy fundamentals  

## Outcome
This paper and poster was accepted for review and presentation at the MIT IEEE Undergraduate Research Conference. 
At the conference, I received the Second Best Paper award. 

This award-winning paper was published in the IEEE Xplore Library, linked below:
[Paper](https://ieeexplore.ieee.org/document/8284091)

[Poster](https://nj01911694.schoolwires.net/cms/lib/NJ01911694/Centricity/Domain/14/Poojit%20poster.pdf)

[Github Link](https://github.com/phalpha/IPS)