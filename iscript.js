/*
    installation script
*/

const props = `terminal: true, hascli: true`;
localStorage["boot/sus93.js"] = `setTimeout(() => { le._apps.sus93 = { exec: async function() { ${sus93} } }, ${props} }, 5000)`;
eval(`le._apps.sus93 = { exec: async function() { ${sus93} }, ${props} }`);
$alert("sus93 was successfully installed.");