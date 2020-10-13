const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require('path');
// const isDev = require('electron-is-dev');

var mainWindow;

// setup a new window to create itself whereever we need

function createWindow(){
    mainWindow = new BrowserWindow({
        width:768,
        height:500,
        webPreferences:{
            nodeIntegration:true
        }
    });
    mainWindow.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
    mainWindow.on('closed', ()=>mainWindow=null);
}

// create a new window on start

app.on('ready', createWindow)

// quit the app when all window is closed
app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
})