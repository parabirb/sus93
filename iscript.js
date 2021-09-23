/*
    installation script
*/

$log("<b>Welcome to the sus93 installer</b>");
$log("sus93 is a package manager for Windows 93.");
$log("Adding sus93 to boot file...");
localStorage["boot/sus93.js"] = bootscript;
localStorage[".sus93/apps"] = JSON.stringify(["sus93"]);
localStorage[".sus93/sus93"] = sus93;
$log("Installing sus93...");
eval(localStorage["boot/sus93.js"]);
setTimeout(() => $log("sus93 was successfully installed."), 5000);