/*
    installation script
*/

(async () => {
    $log("<b>Welcome to the sus93 installer</b>");
    $log("sus93 is a package manager for Windows 93.");
    $log("Adding sus93 to boot file...");
    const settings = { method: "GET", mode: "cors", cache: "reload" };
    localStorage["boot/sus93.js"] = await fetch("https://raw.githubusercontent.com/parabirb/sus93/main/bootscript.js", settings).then(response => response.text());
    $log("Writing to apps file...");
    localStorage[".sus93/apps"] = JSON.stringify(["sus93"]);
    $log("Downloading sus93...");
    localStorage[".sus93/sus93"] = await fetch("https://raw.githubusercontent.com/parabirb/sus93/main/sus93.js", settings).then(response => response.text());
    $log("Installing sus93...");
    eval(localStorage["boot/sus93.js"]);
    setTimeout(() => $log("sus93 was successfully installed."), 5000);
})();