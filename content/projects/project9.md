---
title: "Modeling the Conservation of Florida Manatees"
date: 
tags: 
summary: "Using POMDP Methods"
---


## Overview

This project explores the application of Partially Observable Markov Decision Process (POMDP) models to formulate optimal conservation strategies for Florida Manatee populations. The work demonstrates how decision-making frameworks can address wildlife conservation challenges under uncertainty, providing a simulation-based approach to optimize resource allocation for conservation efforts.

## Problem Context

Florida Manatees are a threatened species facing multiple environmental challenges including:
- Climate change effects on marine ecosystems
- Loss of seagrass food sources
- Unusually cold winters
- Algal bloom outbreaks

The project addresses the resource management challenge of determining optimal conservation strategies under uncertainty, where the exact population state is difficult to observe directly.

## Technical Approach

### POMDP Framework
Partially Observable Markov Decision Processes (POMDPs) are mathematical frameworks for sequential decision-making under uncertainty where:
- The true state of the system is not directly observable
- An agent receives noisy or incomplete observations
- Actions affect future states probabilistically
- The goal is to find an optimal policy that maximizes long-term rewards

This framework is particularly well-suited for conservation problems where population states are uncertain and management decisions must be made based on limited observational data.

### Problem Formulation
Our simulation model defines:
- **States**: [extinct, endangered, threatened]
- **Actions**: [do nothing, survey, rescue, rehabilitate]
- **Observations**: [see nothing, wild carcass, wild living]
- **Initial State**: threatened
- **Discount Factor**: 0.9

*Note: This is a simulation based on available literature and our own problem formulation. Transition probabilities, observation models, and reward structures were designed based on educated assumptions about manatee conservation dynamics.*

### Solution Methods

**Offline Methods:**
- **QMDP**: Simple approximation assuming perfect observability
- **Fast Informed Bound (FIB)**: Tighter upper bound incorporating observations

**Online Methods:**
- **PO-UCT**: Partially Observable Upper Confidence Tree combining Monte Carlo Tree Search with Upper Confidence Trees

## Key Results

- Generated alpha vector visualizations showing optimal action regions based on belief states
- Created ternary plots mapping full belief states to optimal actions
- Demonstrated that rehabilitation is optimal for moderate endangerment probabilities (0.071-0.500 for QMDP)
- Survey actions dominate when endangerment probability is low
- Rescue actions are preferred when endangerment probability is high
- POMDP methods can help as a framework for wildlife conservation decision-making

## Technologies Used

- **Julia** programming language with **Pluto** notebooks for interactive development
- **POMDPs.jl** ecosystem including:
 - QuickPOMDPs.jl
 - QMDP.jl
 - FIB.jl
 - BasicPOMCP.jl
 - D3Trees.jl for visualization


[Paper Link](https://github.com/phalpha/save_the_manatees/blob/main/Paper_Writeup.pdf)

 [Github Link](https://github.com/phalpha/save_the_manatees)
---

*Project completed for CS 238 (Decision Making under Uncertainty) at Stanford University. Collaborated with Rubens Lacouture and Aarya Mecwan.*