# sus93
sus93 is a lightweight and sussy package manager for windows 93.

**notice: sus93 is now community maintained and is not actively developed. if you want changes made, please make an issue or fix it yourself and make a pull request. thank you.**

## usage
### installation
run `$loader.script("https://cdn.statically.io/gh/parabirb/sus93/main/install.js")` inside a terminal.
### updating
if you already have sus93 installed, you can update by running `sus93 install sus93`.
### commands
* `sus93 list` - Lists packages available for installation
* `sus93 repo` - Lists information about the sus93 repository
* `sus93 installed` - List installed packages
* `sus93 install (package)` - Installs or upgrades a package
* `sus93 uninstall (package)` - Uninstalls a packaage

## writing sus93 modules
writing sus93 modules is easy as 1, 2, 3! sus93 takes all the trivia out of writing a windows 93 package. all you have to write for a sus93 module is the function that runs on execution. [here](https://github.com/parabirb/example-module) is an example of a sus93 module.

if you put your sus93 module in your own github repo, then create an issue on [the sus93 repo](https://github.com/parabirb/sus93-repo), you can actually get your package added to sus93!
