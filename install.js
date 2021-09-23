(() => {
const sus93 = "/*\n    sus93\n    the sussiest package manager on planet earth\n    inspired by pkg93\n*/\n(async function sus93() {\n    let argv = this.arg.arguments;\n\n    // introduce ourselves to the user\n    $log(\"sus93 by parabirb\");\n\n    // create files if not present\n    if (localStorage[\".sus93/README.txt\"] === undefined) {\n        localStorage[\".sus93/README.txt\"] = `Hey there!\nThese are sus93 files. Please don't modify them unless you know what you're doing.\nThanks!`;\n    }\n    if (localStorage[\".sus93/repo\"] === undefined) {\n        $log(\"Thanks for using sus93!\");\n        localStorage[\".sus93/repo\"] = \"https://raw.githubusercontent.com/parabirb/sus93-repo/main/repo.json\";\n    }\n\n    // load in some things\n    let repoUrl = localStorage[\".sus93/repo\"];\n    let settings = { method: \"GET\", mode: \"cors\", cache: \"no-store\" };\n    $log(\"Fetching repository...\");\n    let repo = await fetch(repoUrl, settings).then(response => response.json());\n    let help = `Help:\nsus93 list - List all packages available.\nsus93 repo - Display repository information.\nsus93 install (package) - Installs (or upgrades) a package.\nsus93 uninstall (package) - Uninstalls a package.`;\n    let apps = JSON.parse(localStorage[\".sus93/apps\"]);\n\n    if (argv.length === 0 || argv.length > 2) {\n        $log(help);\n    }\n    else if (argv.length === 1) {\n        if (argv[0] === \"list\") $log(`Available packages:\n${Object.keys(repo.packages).join(\"\\n\")}`);\n        else if (argv[0] === \"repo\") $log(`Repo URL: ${repoUrl}\nRepo Name: ${repo.name}\nRepo Description: ${repo.description}`);\n        else $log(help);\n    }\n    else if (argv.length === 2) {\n        if (argv[0] === \"install\") {\n            if (repo.packages[argv[1]] === undefined) {\n                $log(\"Error: Can't find the specified package!\");\n            }\n            else {\n                if (apps.indexOf(argv[1]) === -1) {\n                    $log(`Adding ${argv[1]} to apps file...`);\n                    apps.push(argv[1]);\n                }\n                $log(`Downloading ${argv[1]}...`);\n                localStorage[`.sus93/${argv[1]}`] = await fetch(repo.packages[argv[1]], settings).then(response => response.text());\n                $log(\"Writing apps file...\");\n                localStorage[`.sus93/apps`] = JSON.stringify(apps);\n                $log(\"Installing package...\");\n                eval(localStorage[`boot/sus93.js`]);\n                setTimeout(() => $log(\"Installation complete!\"), 5000);\n            }\n        }\n        else if (argv[0] === \"uninstall\") {\n            if (apps.indexOf(argv[1]) === -1) {\n                $log(\"Error: You don't have that package installed!\");\n            }\n            else {\n                $log(`Deleting ${argv[1]}...`);\n                localStorage.removeItem(`.sus93/${argv[1]}`);\n                $log(`Removing ${argv[1]} from apps file...`);\n                apps.splice(apps.indexOf(argv[1]), 1);\n                localStorage[`.sus93/apps`] = JSON.stringify(apps);\n                $log(`Removing package...`);\n                le._apps[argv[1]] = undefined;\n                $log(\"Uninstallation complete!\");\n            }\n        }\n        else $log(help);\n    }\n})";
const bootscript = `setTimeout(() => {
    let apps = JSON.parse(localStorage[".sus93/apps"]);
    for (const app of apps) {
        le._apps[app] = {
            exec: eval(localStorage[".sus93/" + app]),
            terminal: true,
            cli: true
        };
    }
}, 5000);`;
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
})();