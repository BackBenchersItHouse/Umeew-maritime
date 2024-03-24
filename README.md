<div id="top"></div>

<div align="center">
  <img src="./src/assets/umeew-logo.svg" width="120px">
</div>

## UMEEW

This app is developed by BackBenchers IT House!!

### ✨ Built With
- React.js
- Tailwind
- React Router Dom for routes

### 💻 Server Side Rendering
- use : <a href="https://react.dev/reference/react-dom/hydrate#hydrate">hydrate</a>
- npm install express
- npm install @babel/register @babel/preset-env @babel/preset-react ignore-styles
<!-- - remove : [ "type": "module" ] form package.json & 'eslint:recommended', // comment form require error -->
- use : import React from 'react';
- After build : node server/index.js (command terminal)

[![Server Side Rendering vs Client Side Rendering | Create a React Project using SSR](https://www.youtube.com/watch?v=ZyeZnBEXn2o)](https://www.youtube.com/watch?v=ZyeZnBEXn2o)

### Colors - text/backgraound
- 🖌  primary   : '#001B21'
- 🖌  secondary : '#FF8C00'
- 🖌  accent      : '#444444' 
- 🖌  neutral    : '#B9B9B9'
- 🖌  Add new color => tailwind.config.js>theme>extend>colors && please add new color above ⤴

### Sizing
- container    : 1440px
- section wide : 1170px

### INSTRUCTIONS
- assets     : img/icons
- components : small items, Like error page, dynamic items etc.
- Layout     : react-router-dom layout
- Pages      : All pages create here
- Routes     : SPA routes setup here