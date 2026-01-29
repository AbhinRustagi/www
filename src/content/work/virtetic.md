---
title: Limb-loss recovery through VR
description: Building geo-compliant infrastructure for medical VR at scale
date: 2024-10-01
client: Virtetic
tech:
  - Unity
  - C#
  - Google Cloud
  - Firestore
  - BigQuery
  - Python
featured: false
draft: false
---

## TL;DR

Spent 4 months as a VR Software Developer Intern at Virtetic, a medical startup using custom sensors + VR games to help people recover from limb loss. Built a geo-compliant data gateway that automatically routes patient data to region-specific storage based on location, handles cross-region migrations, and auto-deploys infrastructure when new regions come online. Deep-dived into GCP's distributed architecture and got hands dirty with Unity for good measure.

## The Product

Virtetic was founded by two mechatronics PhDs from the University of Melbourne. They built custom sensors that attach to residual limbs and integrate with VR headsets to gamify rehabilitation. This is medical-grade tech. Which means the data is highly sensitive and heavily regulated.

## The Task

I joined in July 2024 with a specific brief: **build a geo-compliant data gateway**.

Virtetic is setting itself up worldwide - clinics in Sydney, Europe, Asia, everywhere. Each country has different data compliance regulations. A patient in Sydney must have their data stored in Sydney. A patient in Berlin needs their data in the EU. It's legally mandatory for medical data.

But here's the kicker: users sometimes move. Permanently. When that happens, their entire data footprint needs to migrate seamlessly to the new region's storage, stay in sync with the data warehouse, and continue functioning without service interruption. Also, if a new region comes online where we don't have infrastructure yet, the system should auto-deploy everything needed—database instances, BigQuery warehouses, the works.

## The Architecture

Virtetic's backend was fully serverless on **Google Cloud Platform** with services like Cloud Run, Firestore, and more. I had to build a routing layer that sits in front of this architecture and makes all the geo-compliance magic happen.

## Building the Gateway

The gateway needed to do three things:

### 1. Route Data by Location

When a user accesses the product, detect their region and route all database operations to the appropriate Firestore instance. I implemented location detection and built routing logic that maps users to their nearest compliant data center based on GCP's available regions.

### 2. Cross-Region Data Migration

When a user permanently relocates, migrate their data from the old region to the new one without breaking anything.

This meant:

- Copy all user data from source Firestore to destination Firestore
- Update BigQuery warehouse references
- Ensure atomic operations (no partial migrations)
- Keep both regions in sync during transition
- Verify data integrity post-migration

I built migration pipelines in **Python** that handled these operations, with rollback mechanisms in case anything went wrong.

### 3. Auto-Deployment for New Regions

If a user selects a region we haven't deployed to yet, spin up the infrastructure on the fly.

This required:

- Infrastructure-as-code to provision new Firestore instances
- Automated BigQuery dataset creation for the new region
- Dynamic routing table updates
- Health checks to ensure new instances are ready before serving traffic

I wrote deployment scripts that detect missing regions and automatically provision them using GCP's APIs, all without manual intervention.

## The Unity Side Quest

After getting the data gateway working, I wanted to understand the VR side of things. I built a **scores dashboard** in Unity using **C#** and **.NET**.

It was a leaderboard showing user scores across all patients using the platform—gamification to motivate rehabilitation progress. Working with Unity's UI system and integrating real-time Firestore data into a VR interface was fun but a game of patience.
