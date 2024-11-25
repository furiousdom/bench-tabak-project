# bench-tabak-project

:construction: WIP

## Overview
Consume video content in a short form format much like Youtube Shorts. Multiple videos are held in a Reel. This is like a section where users are played video after video, until all videos in a section are watched. After each video is played there is a 5 second delay until the next video is automatically started and the user is given the option to rewatch the video they just watched. Once all videos in a reel are watched, the user is given a chance to add comments to the whole reel, and ask questions. Reels have comments instead of videos, since they are short form format. There can be multiple reels for a given area of choice.

Reel and video management is done on Tailor side. This app is only focused on how the user will consume the videos. This means the admin interface will be dead simple at first as they will only sync content from Tailor. Once the comment section is added, admins need to be able to answer questions.The idea is that admins have a “Unread” section where each new comment is presented as a button in an “navigation drawer” (incapable of being collapsed) on the left hand side. And the full comment tree is presented on the right hand side, from the root comment until the newest one.

### Future Ideas
Some form of metrics/analytics, to track user progression.

Ideas for handling comments:
1. Firebase
2. Web Sockets
3. SSE

### Focus Area
Start with the backend and focus solely on that part for now.

### Interesting technologies
- TypeScript
- Express alternatives: Koa, AdonisJS, NestJS
- Sequelize alternatives: MikroORM, Prisma, Drizzle

### Interesting concepts
- DDD
- Vertical Slice Architecture
- Materialized View? -> For handling comments, but it’s probably overkill

## :blue_book: Dependencies

- Node.js (== 20.13.1)
- npm (>= 10.5.2)
