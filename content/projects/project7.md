---
title: "Health Indices and Satellites"
date: 
tags: 
summary: "maternal and child health prediction using satellite imagery"
---

# Maternal and Child Health Prediction Using Satellite Imagery

## Project Overview

This data science project explores the use of machine learning with satellite imagery and publicly available geotagged data to estimate key maternal and child health (MCH) indicators in low- and middle-income countries (LMICs). The research addresses the challenge of limited, expensive, and outdated MCH data by leveraging satellite-derived features as predictors.

## Problem Statement

Traditional MCH indicator collection faces several limitations:
- Death registers are unreliable in most LMICs
- Demographic and Health Surveys (DHS) are expensive and nationally representative but sample only <2% of villages/neighborhoods
- Survey estimates are often outdated due to infrequent collection cycles
- Low spatial and temporal resolution limits granular insights

## Data Sources

### Ground Truth Data
- **USAID Demographic and Health Surveys (DHS)**: 114,113 surveys collected between 1986-2019 with up to 7 indicators per survey
- **Target MCH Indicators**:
  - Mean/Median BMI
  - Under Five Mortality Rate
  - Unmet Need Rate
  - Skilled Birth Attendant Rate
  - Stunted Growth Rate

### Feature Datasets

#### 1. Google Earth Engine Dataset
- 120,985 data points × 11,945 features
- Satellite-derived geo-tagged variables collected through Google Earth Engine API

#### 2. MOSAIKS Dataset
- 100,960 data points × 4,000 features
- Spatial encodings collected through MOSAIKS API from UC Berkeley project

#### 3. Landsat Image Dataset
- Raw satellite imagery from NASA and U.S. Geological Survey (USGS)
- 75,000 examples × 11 features
- 8 spectral channels (bands) + 3 scalar features

## Methodology

### Extracted Feature Analysis
**Regression Models:**
- Microsoft Azure AutoML for automated model selection and training
- Stack and Voting Ensembles combining multiple algorithms:
  - XGBoostRegressor
  - LightGBM
  - ExtremeRandomTrees
  - RandomForest
  - ElasticNet

**Classification Models:**
- K-means discretization (k=5 clusters) of continuous health indicators
- AutoML with Deep Learning using Stack Ensemble:
  - LightGBM
  - XGBoostClassifier

### Raw Image Analysis
- Custom machine learning models for Landsat imagery
- **Convolutional Neural Networks (CNN)**: Base model architecture
- **Vision Transformers (ViT)**: Advanced transformer-based approach

## Results

### Regression Performance (R² Scores)

| Health Indicator | GEE Dataset | MOSAIKS Dataset | Combined Dataset |
|------------------|-------------|-----------------|------------------|
| Median BMI | 0.623 | 0.450 | 0.627 |
| Unmet Need Rate | 0.561 | 0.280 | 0.566 |
| Under Five Mortality Rate | 0.503 | 0.251 | 0.468 |
| Skilled Birth Attendant Rate | 0.657 | 0.310 | **0.668** |
| Stunted Rate | 0.324 | 0.194 | 0.335 |

### Classification Accuracy

| Health Indicator | GEE Dataset | MOSAIKS Dataset |
|------------------|-------------|-----------------|
| Median BMI | 52% | 53% |
| Unmet Need Rate | 50% | 48% |
| Under Five Mortality Rate | 48% | 45% |
| Skilled Birth Attendant Rate | **68%** | 55% |

### Raw Image vs. Extracted Features Comparison
- **Skilled Birth Attendant Rate**:
  - Raw Image Base Model: R² = 0.583
  - Vision Transformer Model: R² = 0.414
  - Extracted Feature Model: R² = 0.668

## Key Findings

1. **Dataset Combination Benefits**: Combining Google Earth Engine and MOSAIKS datasets improved performance over individual datasets
2. **Indicator-Specific Performance**: Certain health indicators (Median BMI, Skilled Birth Attendant Rate) showed better predictability from satellite data
3. **Classification Limitations**: Reformulating as classification was disadvantageous without careful discretization consideration
4. **Feature Engineering Advantage**: Extracted features outperformed raw image analysis, suggesting the importance of domain-specific feature engineering

## Technical Validation

The model underwent sanity checking through urban/rural location classification, demonstrating the ability to capture meaningful spatial patterns from satellite imagery.

## Future Directions

- **Data Expansion**: Incorporate Living Standard Measurement Studies (LSMS) for additional ground truth
- **Feature Engineering**: Improve featurization and address missing data sources
- **Model Architecture**: Explore deeper networks and time-variation modeling
- **Temporal Analysis**: Consider temporal changes in satellite imagery for improved predictions

## Impact and Applications

This research demonstrates the potential for satellite imagery to augment traditional survey data for MCH monitoring, offering:
- Cost-effective large-scale health monitoring
- Higher spatial resolution insights
- More timely indicator updates
- Support for targeted public health interventions in underserved areas

The project establishes a foundation for using remote sensing technology to address critical gaps in global health data collection, particularly benefiting resource-constrained settings where traditional survey methods are challenging to implement.

---

*I was funded to work on this project alongside Emily Wiesel and Mac Ya through the Stanford Data Science for Social Good Fellowship. Our mentor was postdoctoral fellow Haojie Wang.*

