const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require('path');
const isDev = require('electron-is-dev');

var mainWindow;
