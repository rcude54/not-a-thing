'use strict'
var EventEmitter = require('eventemitter3');
const childProc = require('child_process');
const modCheckProc = childProc.spawnSync('npm list --depth=0',['.']);

let consoleMerp = function(){
    console.log("Console Merp");
}

module.exports = function(){
    EventEmitter.on('fetch', consoleMerp);
    modCheckProc.stdout.on('data', (data) => {
        merp(data);
    });
};