---
title: Gamifying Video Content for creators
description: Building a custom engine for interactive video with node-based editing
date: 2025-11-01
client: SemiReal
tech:
  - Vanilla JS
  - TypeScript
  - Elysia
  - Bun
  - Google Cloud
  - Cloudflare
featured: true
draft: false
---

## TL;DR

Building the core editor and player engine for SemiReal, a platform that lets creators make interactive, gamified video content. Presented the platform at South by Southwest Sydney 2025.

## The Whole Truth

The founder brought 20+ years of film industry experience—director, editor, content creator—and a clear observation: **interactive video content hasn't been figured out yet**. Netflix tried with their Black Mirror "Bandersnatch" episode. It flopped. The interaction felt forced, the UX was clunky, and it didn't unlock the creative potential of what interactive storytelling could be. SemiReal's bet is that the problem isn't the concept but it's the tooling. Creators need a platform that makes building interactive video as intuitive as editing a regular video. Not just "choose your own adventure" button clicks, but actual game-like mechanics embedded in video.

## The Product

SemiReal is a platform where creators upload videos and turn them into interactive experiences using a **node-based editor**.

Here's how it works:

- **Drag and drop videos** → each becomes a node in a visual graph
- **Draw clickable areas inside the video** → link regions to different videos or outcomes
- **Conditional branching** → "If the user visited Video A, only then can they access Video B"
- **Backpack system** → users collect items (like in games) that unlock paths or trigger events (e.g., "You need the phone in your backpack to call for help")
- **Audio layers** → background music, voiceovers triggered by user interactions
- **Dynamic interactions** → different parts of the video respond to clicks, revealing new paths

Imagine a documentary where clicking on an object in the frame takes you deeper into that topic. Or a training video where employees collect tools in their backpack and apply them in later scenarios. Or a filmmaker creating a narrative where your choices genuinely shape the story. The B2B angle was particularly strong—businesses were impressed by the potential for interactive training, onboarding, and product demos.

I joined in July 2025, and my main job was contributing to the **custom editor and player engine** in **vanilla TypeScript**.

Why vanilla? We needed full control. Off-the-shelf video libraries couldn't handle the complexity we were building—conditional logic, backpack state management, multi-layered interactions, real-time node graph updates. We had to build from scratch.

The **editor** let creators:

- Construct node graphs visually
- Draw interactive regions frame-by-frame
- Set conditions and triggers
- Preview the interactive experience in real-time

The **player** handled:

- Rendering videos with interactive overlays
- Tracking user state (which videos they've seen, what's in their backpack)
- Branching logic and seamless transitions between nodes
- Audio mixing for background music + triggered voiceovers

It was technically challenging—managing video playback state, synchronizing interactions with precise timestamps, handling edge cases in branching logic but that's what made it interesting.

## The Compression Pipeline

The other major piece I helped with was the **pub-sub scalable video compression engine on Google Cloud**.

When creators upload videos, they can be massive, raw footage or high-res exports. We needed to compress them for efficient storage and streaming without making creators wait forever.

I built a pipeline that:

- Uses **pub-sub messaging** to queue compression jobs as videos upload
- Spins up workers dynamically to process videos in parallel
- Compresses in minimal time (optimized for speed + quality balance)
- Handles failures gracefully and retries

This kept the platform fast and scalable even as more creators uploaded larger files.

## South by Southwest Sydney 2025

In October, I was flown to Sydney to present SemiReal at **South by Southwest Sydney 2025** with the founders for a week.

SXSW is where media, tech, and entertainment intersect, we got overwhelmingly positive feedback—filmmakers, content creators, and businesses all saw potential. We made connections with documentary makers interested in interactive storytelling and companies exploring interactive training content.

It was validating to see people react to the product and understand the vision immediately.
