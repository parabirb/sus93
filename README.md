# sus93
sus93 is a lightweight and shitty package manager for windows 93.

## usage
### installation
import `install.js` into windows 93 and run it in a terminal with `js`.
### updating
if you already have sus93 installed, you can update by running `sus93 install sus93`.
### commands
* `sus93 list` - Lists packages available for installation
* `sus93 repo` - Lists information about the sus93 repository
* `sus93 install (package)` - Installs or upgrades a package
* `sus93 uninstall (package)` - Uninstalls a packaage

## writing sus93 modules
writing sus93 modules is easy as 1, 2, 3! sus93 takes all the trivia out of writing a windows 93 package. all you have to write for a sus93 module is the function that runs on execution. [here](https://github.com/parabirb/example-module) is an example of a sus93 module.

if you put your sus93 module in your own github repo, then create an issue on [the sus93 repo](https://github.com/parabirb/sus93-repo), you can actually get your package added to sus93!
