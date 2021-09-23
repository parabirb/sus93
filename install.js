(() => {
const sus93 = "/*\n    sus93\n    the sussiest package manager on planet earth\n    inspired by pkg93\n*/\n\n(async () => {\n    // introduce ourselves to the user\n    $log(\"sus93 by parabirb\");\n\n    // create files if not present\n    if (localStorage[\".sus93/README.txt\"] === undefined) {\n        localStorage[\".sus93/README.txt\"] = `Hey there!\nThese are sus93 files. Please don't modify them unless you know what you're doing.\nThanks!`;\n    }\n    if (localStorage[\".sus93/repo\"] === undefined) {\n        $log(\"Thanks for using sus93!\");\n        localStorage[\".sus93/repo\"] = \"https://cdn.jsdelivr.net/gh/parabirb/sus93-repo/repo.json\";\n    }\n\n    // load in some things\n    // this is what we use to make sure we don't modify any preexisting applications.\n    // pkg93 has a really dumb way of doing this.\n    let protected = Object.keys(le._apps);\n    protected.splice(protected.indexOf(\"sus93\"), 1);\n\n    $log(this.args);\n})();";
/*
    installation script
*/

const props = `terminal: true, hascli: true`;
localStorage["boot/sus93.js"] = `setTimeout(() => { le._apps.sus93 = { exec: async function() { ${sus93} } }, ${props} }, 5000)`;
eval(`le._apps.sus93 = { exec: async function() { ${sus93} }, ${props} }`);
$alert("sus93 was successfully installed.");
})();