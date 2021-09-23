/*
    sus93
    the sussiest package manager on planet earth
    inspired by pkg93
*/
(async function sus93() {
    let argv = this.arg.arguments;

    // introduce ourselves to the user
    $log("sus93 by parabirb");

    // create files if not present
    if (localStorage[".sus93/README.txt"] === undefined) {
        localStorage[".sus93/README.txt"] = `Hey there!
These are sus93 files. Please don't modify them unless you know what you're doing.
Thanks!`;
    }
    if (localStorage[".sus93/repo"] === undefined) {
        $log("Thanks for using sus93!");
        localStorage[".sus93/repo"] = "https://raw.githubusercontent.com/parabirb/sus93-repo/main/repo.json";
    }

    // load in some things
    let repoUrl = localStorage[".sus93/repo"];
    let settings = { method: "GET", mode: "cors", cache: "no-store" };
    $log("Fetching repository...");
    let repo = await fetch(repoUrl, settings).then(response => response.json());
    let help = `Help:
sus93 list - List all packages available.
sus93 repo - Display repository information.
sus93 install (package) - Installs (or upgrades) a package.
sus93 uninstall (package) - Uninstalls a package.`;
    let apps = JSON.parse(localStorage[".sus93/apps"]);

    if (argv.length === 0 || argv.length > 2) {
        $log(help);
    }
    else if (argv.length === 1) {
        if (argv[0] === "list") $log(`Available packages:
${Object.keys(repo.packages).join("\n")}`);
        else if (argv[0] === "repo") $log(`Repo URL: ${repoUrl}
Repo Name: ${repo.name}
Repo Description: ${repo.description}`);
        else $log(help);
    }
    else if (argv.length === 2) {
        if (argv[0] === "install") {
            if (repo.packages[argv[1]] === undefined) {
                $log("Error: Can't find the specified package!");
            }
            else {
                if (apps.indexOf(argv[1]) === -1) {
                    $log(`Adding ${argv[1]} to apps file...`);
                    apps.push(argv[1]);
                }
                $log(`Downloading ${argv[1]}...`);
                localStorage[`.sus93/${argv[1]}`] = await fetch(repo.packages[argv[1]], settings).then(response => response.text());
                $log("Writing apps file...");
                localStorage[`.sus93/apps`] = JSON.stringify(apps);
                $log("Installing package...");
                eval(localStorage[`boot/sus93.js`]);
                setTimeout(() => $log("Installation complete!"), 5000);
            }
        }
        else if (argv[0] === "uninstall") {
            if (apps.indexOf(argv[1]) === -1) {
                $log("Error: You don't have that package installed!");
            }
            else {
                $log(`Deleting ${argv[1]}...`);
                localStorage.removeItem(`.sus93/${argv[1]}`);
                $log(`Removing ${argv[1]} from apps file...`);
                apps.splice(apps.indexOf(argv[1]), 1);
                localStorage[`.sus93/apps`] = JSON.stringify(apps);
                $log(`Removing package...`);
                le._apps[argv[1]] = undefined;
                $log("Uninstallation complete!");
            }
        }
        else $log(help);
    }
})