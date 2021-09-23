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
        localStorage[".sus93/repo"] = "https://cdn.jsdelivr.net/gh/parabirb/sus93-repo/repo.json";
    }

    // load in some things
    let repoUrl = localStorage[".sus93/repo"];
    $log("Fetching repository...");
    let repo = await fetch(repoUrl, { method: "GET", mode: "cors", cache: "no-store" }).then(response => response.json());
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
                return;
            }
            else {
                if (apps.indexOf(argv[1]) === -1) {
                    $log(`Adding ${argv[1]} to apps file...`);
                    apps.push(argv[1]);
                }
                $log(`Downloading ${argv[1]}...`);
                localStorage[`.sus93/${argv[1]}`] = await fetch(repo.packages[argv[1]]).then(response => response.text());
                $log("Writing apps file...");
                localStorage[`.sus93/apps`] = JSON.stringify(apps);
                $log("Installing package...");
                eval(localStorage[`boot/sus93.js`]);
                setTimeout(() => $log("Installation complete!"), 5000);
            }
        }
        else $log(help);
    }
})