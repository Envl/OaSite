import {jdUrl} from './Helpers'

export const postList = [
  {
    title: 'CyberCards',
    coverUrl: jdUrl('cards.jpg'),
    url: 'https://toys.gnimoay.com/#/card',
    brief: '数字生活名片夹.',
    tags: ['Web', 'UX', 'Mobile', 'WIP', '2020'],
    time: 'April, 2020',
    type: 'Personal Project',
    role: ['Development', 'Design'],
  },
  {
    title: '方块日记',
    coverUrl: jdUrl('square.jpg'),
    url: 'https://toys.gnimoay.com/#/square',
    brief: '一键生成彩色背景的文字卡片.',
    tags: ['Web', 'UX', 'Mobile', '2020'],
    time: 'April, 2020',
    type: 'Personal Project',
    role: ['Development', 'Design'],
  },
  {
    title: 'STKM',
    coverUrl: jdUrl('stkm.jpg'),
    url: 'https://stkm.now.sh/',
    brief:
      'An online camera which allows you to take stacked photos with captions.',
    tags: ['Web', 'UX', 'Mobile', '2020'],
    time: 'Mar, 2020 - Now',
    type: 'Personal Project',
    role: ['Development', 'Design'],
  },
  {
    title: 'Sketch Calculator',
    coverUrl: jdUrl('calc.png'),
    url: 'https://observablehq.com/@gnimoay/sketch-calculator',
    brief: 'Learn basics of ML by create ur own sketch calculator.',
    tags: ['Web', 'Machine Learning', 'kNN', '2020'],
    time: 'Feb, 2020',
    type: 'Course Project',
    role: ['Development', 'Design'],
  },
  {
    title: '小瓶子',
    coverUrl: jdUrl('bottle.jpg'),
    url: 'https://observablehq.com/@gnimoay/untitled/3',
    brief: '在线创建你的小瓶子, 然后填满它.',
    tags: ['Web', 'Interaction', 'Mobile', '2020'],
    time: 'Feb, 2020',
    type: 'Personal Project',
    role: ['Development', 'Design'],
  },
  {
    title: 'Bitcoin Visualization',
    coverUrl: jdUrl('btc.png'),
    url: 'https://observablehq.com/@gnimoay/bitcoin-viz',
    brief:
      'Visualization on news about BTC to find their influence on the price.',
    tags: ['Web', 'Visualization', '2019'],
    time: 'Dec, 2019 - Feb, 2020',
    type: 'Course Project',
    role: ['Development', 'Design'],
  },
  {
    title: 'Rugbeats',
    coverUrl: jdUrl('rugbeats.png'),
    // url: 'https://github.com/Envl/Rugbeats',
    brief:
      'A rhythm action rugby game where two players have to get the "ball" into another player\'s home.',
    tags: ['Game', 'Java', '2019'],
    time: 'Nov, 2019',
  },

  {
    title: 'OaPack',
    coverUrl: jdUrl('oapack.png'),
    brief:
      'A playful React UI library I design & developed for this website :)',
    tags: ['Web', 'Design', 'WIP', '2019'],
    time: 'Nov, 2019 - Now',
  },
  {
    title: 'ShopWalker',
    coverUrl: jdUrl('shopwalker.jpg'),
    tags: ['Mobile', 'UX', 'Evaluation', '2018'],
    brief:
      'The design and evaluation of an application which targets to facilitate daily work of a very special group – shopwalkers.',
    time: 'Oct, 2018 - Dec, 2018',
  },
  {
    title: 'BOOKIO',
    coverUrl: jdUrl('bookio.jpg'),
    url: 'https://bookio-5c798.firebaseapp.com/',
    brief: 'A free book sharing platform created using React.js.',
    tags: ['UX', 'Web', '2019'],
    time: 'Nov, 2018 - Mar, 2019',
    type: 'Course Project',
    role: ['Development', 'UX'],
  },
  {
    title: 'Tetris.Dual',
    coverUrl: jdUrl('tetris.jpg'),
    url: 'https://github.com/Envl/Tetris.dual',
    brief: 'Dual player Tetris game on Android that uses Bluetooth to connect.',
    tags: ['Game', 'Android', '2016'],
    time: '2016',
  },
  {
    title: 'SEIM',
    coverUrl: jdUrl('seim.png'),
    url: 'https://www.youtube.com/watch?v=v6LTm7YHiJU',
    brief:
      'An interactive music installation that involves projection mapping, tangible interaction, generative animation, etc.',
    tags: ['Tangible Interaction', 'Installation', 'Kinect', '2017'],
    time: 'Dec, 2016 - Jun, 2017',
  },
  {
    title: 'Boccaro',
    coverUrl: jdUrl('boccaro.jpg'),
    url: 'https://github.com/Envl/Boccaro',
    brief:
      'An app to introduce traditional Chinese culture about Bocarro, built with Unity3D.',
    tags: ['Unity3D', 'Mobile', '2016'],
    time: '2016',
  },
  {
    title: 'sPomo',
    coverUrl: jdUrl('spomo.png'),
    brief: 'Simple Pomodoro software on windows, built with AutoHotKey.',
    tags: ['Productivity Tool', 'AHK', '2019'],
    url: 'https://github.com/Envl/sPomo',
    time: 'Mar, 2019',
  },
  {
    title: 'Circular Clear',
    coverUrl: jdUrl('circularclear.jpg'),
    brief:
      'A match-three puzzle game inspired by Spirograph, built with Unity3D.',
    tags: ['Game', 2016],
    time: '2016',
  },
  {
    title: 'StyleBox',
    coverUrl: jdUrl('stylebox.jpg'),
    brief:
      'It borrows the concept of class and the idea of CSS from coding to create a tool that makes styling shapes in design software easier.',
    tags: ['Interaction Design', '2019'],
    time: 'Oct, 2019',
  },
  {
    title: 'Bagroutte',
    coverUrl: jdUrl('bagroutte.jpg'),
    brief:
      'A design concept derives from StyleBox into a map App, which facilitate the edit, manipulationg and reuse of route.',
    tags: ['Interaction Design', '2019'],
    time: 'Nov, 2019',
  },
  {
    title: 'Tangible X',
    coverUrl: jdUrl('tangibleX.jpg'),
    brief:
      'A exploration on tangible interaction for browser and gaming using Kinect.',
    tags: ['Tangible Interaction', 'Kinect', '2015'],
    url: 'https://youtu.be/YkSXkH7YLoE',
    time: '2015',
  },
  {
    title: 'Digi Cemetery',
    coverUrl: jdUrl('digicemetery.png'),
    brief: 'A website includes memorable products that died in recent years.',
    tags: ['UX', 'Web', 'Abandoned', '2019'],
    url: 'https://cemetery.netlify.com',
    time: 'Oct, 2019 - Dec, 2019',
  },
  {
    title: 'Spotioid',
    coverUrl: jdUrl('spoti.jpg'),
    brief:
      'Info Visualization of data from Spotify, including genre, user distribution, trending, etc.',
    tags: ['UX', 'Visualization', 'Web', 'WIP', '2019'],
    url: 'https://spotioid.now.sh/',
    time: 'Oct, 2019 - Now',
  },
  {
    title: 'Year Meter',
    coverUrl: jdUrl('yearmeter.png'),
    brief:
      'A screen saver that counts the progress of this year and that of today.',
    tags: ['Design', 'Win32', '2014'],
    url: 'https://github.com/Envl/WhatColorIsIt-ScreenSaver-Win32',
    time: '2014, 2019',
  },
  {
    title: 'BulletGO',
    coverUrl: jdUrl('bullet.png'),
    brief:
      'A comprehensive bullet comment solution through Wechat, PyQt and Node.js.',
    tags: ['Python', 'Node.js', '2015'],
    url: 'https://github.com/Envl/BulletGo',
    time: '2015',
  },
  {
    title: 'Da Vinci Code',
    url: 'https://github.com/Envl/Da_Vinci_Code',
    coverUrl: jdUrl('davinci.jpg'),
    brief:
      'A online multiplayer version of the board game Da Vinci Code, built with Unity3D.',
    tags: ['Game', 'Unity3D', '2016'],
    time: '2016',
  },
  {
    title: 'Seety',
    url: 'https://loving-mayer-0afa5d.netlify.com/catalogue',
    coverUrl: jdUrl('seety.jpg'),
    brief: 'A city guide with audio stories.',
    tags: ['UX', 'Web', 'WIP', '2019'],
    time: 'Jun, 2019 - Now',
  },
]
