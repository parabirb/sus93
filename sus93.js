/*
    sus93
    the sussiest package manager on planet earth
    inspired by pkg93
*/

(async () => {
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
    // this is what we use to make sure we don't modify any preexisting applications.
    // pkg93 has a really dumb way of doing this.
    let protected = Object.keys(le._apps);
    protected.splice(protected.indexOf("sus93"), 1);

    $log(this.args);
})();