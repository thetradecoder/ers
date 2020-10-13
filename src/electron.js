const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require('path');
const isDev = require('electron-is-dev');

var mainWindow;

function createWindown(){
    mainWindow = new BrowserWindow({
        width:768,
        height:500,
        webPreferences:{
            nodeIntegration:true
        }
    });
}