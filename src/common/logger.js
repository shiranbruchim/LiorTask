import {FileLogger} from 'react-native-file-logger';
class NGLogger {
  init() {
    if (!__DEV__) {
      return;
    }
    this.hijackConsoleLog();

    FileLogger.configure({
      captureConsole: true,
    });

    return this;
  }

  hijackConsoleLog() {
    (function () {
      var oldLog = console.log;
      console.log = function (message) {
        FileLogger.write(0, message);
        oldLog.apply(console, arguments);
      };
    })();
  }
  getLogs() {
    console.log(FileLogger.getLogFilePaths());
    return FileLogger.getLogFilePaths();
  }

  readLog(logId) {
    console.log(logId);
    return this.getLog(logId).then(logFilePath => {
      RNFS = require('react-native-fs');
      return RNFS.readFile(logFilePath, 'utf8');
    });
  }

  async getLog(logId) {
    console.log(logId);
    return this.getLogs().then(logs => {
      return logs[logId];
    });
  }

  removelog() {
    return FileLogger.deleteLogFiles();
  }
}

export default NGLogger;
