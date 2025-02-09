import { app, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';
import * as url from "url";
import * as path from "path";


const createWindow = (): void => {
    let currentWindow = new BrowserWindow({
      width: 1300,
      height: 950,
      webPreferences: {
        nodeIntegration: true
      }
    });
    console.log(isDev);

    if (process.env.NODE_ENV === "development") {
      currentWindow.loadURL("http://localhost:9000");
      currentWindow.webContents.openDevTools();
    }
    // otherwise, serve the compile dist folder for render
    else {
      currentWindow.loadURL(
        url.format({
          // allow electron to render a file (html), in our dist folder
          pathname: path.resolve(__dirname, "../dist/index.html"),
          // set type
          protocol: "file:",
          // allow for propper formating of directory name.
          slashes: true,
        })
      );
    }
  }
  

  app.on('ready', createWindow);
