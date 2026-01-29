---
title: Multi-Player Games improved via Discord
description: Turning millions of Discord messages into actionable game development insights
date: 2025-07-01
client: Layer Licensing
tech:
  - Next.js
  - TypeScript
  - Neon Postgres
  - Azure Databricks
  - Hasura DDN
  - GraphQL
featured: false
draft: false
---

## TL;DR

Contracted for a few weeks to optimize Accord, a product that transforms how game studios handle community feedback.

## The Product Journey

The three founders behind Accord came from gaming tech, and they'd already built something remarkable: **Layer Licensing**, the world's largest IP licensing marketplace for gaming. After Layer got acquired, they turned their attention to another problem they'd seen firsthand in the gaming industry: **community management at scale**.

Community managers at game studios read through **thousands or millions of messages daily** trying to identify patterns, prioritize issues, and surface feedback to development teams.

Accord's solution is elegant: **ingest Discord messages, run them through an ML pipeline, and surface organized insights on a dashboard**. The product turns chaos into clarity. Instead of reading everything, community managers get a high-level view of what their players actually care about.

## My Role

They brought me on as a contractor with a clear brief: **optimize the slow parts**.

### Subtopic Classification

The ML pipeline was already classifying messages by topic (e.g., "Bugs," "Story Feedback," "Feature Requests"). I built the **subtopic layer** on the UI. For example, "Bugs" might break down into subtopics like "UI Issues," "Crash Reports," "Lag/Performance," all ML-generated. Users could edit, merge, or delete topics and subtopics to customize the taxonomy for their game. This gave studios more granular control, not just "people are reporting bugs," but "47% of bug reports are about multiplayer lag."

### Frontend Optimization

The dashboard was handling millions of rows of data (Discord messages from massive gaming communities), and the frontend was **slow**. Really slow.

I optimized queries, improved data fetching patterns, and reduced render times. Working with **Neon Postgres** (serverless PostgreSQL), **Azure Databricks** and **Next.js/TypeScript**, I identified bottlenecks and refactored components to handle large datasets without choking.

### GraphQL Data Layer

One of the key tasks was creating a **unified data access layer** using **Hasura DDN** (Data Delivery Network).

I helped build the integration between Hasura DDN and Neon Postgres via **GraphQL**, giving the app a single, consistent data source. This cleaned up the architecture and made it easier to query data across the ML pipeline, database, and frontend without manual data wrangling.
