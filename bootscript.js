setTimeout(() => {
    let apps = JSON.parse(localStorage[".sus93/apps"]);
    for (const app of apps) {
        le._apps[app] = {
            exec: eval(localStorage[".sus93/" + app]),
            terminal: true,
            cli: true
        };
    }
}, 5000);