/*
    this script prepares the installer
*/
const fs = require("fs");
const iscript = fs.readFileSync("iscript.js").toString();
const sus93 = fs.readFileSync("sus93.js").toString();

fs.writeFileSync("install.js", `const sus93 = ${JSON.stringify(sus93)};

${iscript}`);