const info = require('./os.module')
const url = require('./url.module.mjs')
const path = require('./path.module.cjs')
const { getArgs } = require('./process.module');

const [a, b] = getArgs();
console.log(
    info.getSystemInfo(),
    "\n\nModulo", 
    url.parseUrl(a ?? url.urlStringExample),
    "\n\nModulo Path", 
    path.parsePath(b ?? path.pathStringExample),
    "\n\nArgumentos de Proceso"
);