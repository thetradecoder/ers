# Electron React SQLite App
Desktop app with database access

## Install react 
`npx create-react-app ers`

Go to ers folder `cd ers` , 
Run the react app `npm start`

## Install electron and electron-builder as devDependency
`npm install electron --save-dev`

`npm install electron-builder --save-dev`

## Install SQLite3 database
`npm install sqlite3`

## Install other necessary dev tools
`npm install concurrently electron-is-dev wait-on `

***
The app is currntly running the react default app. Need to change this to run eletron 

Clear the unnecessary contents from the index.html in public folder, but do not delete this part `<div id="root"></div>` . Also change the title in `<title> </title>` of index.html

## Let's work on electron
Create a new file `electron.js` in `src` folder \ 
Then add necessary scripts (see the electron.js file in src folder of this project)









