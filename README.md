# sus93
sus93 is a lightweight and shitty package manager for windows 93.

## installation
open a terminal and run `$loader.script("https://raw.githubusercontent.com/parabirb/sus93/main/install.js");`

## writing sus93 modules
writing sus93 modules is easy as 1, 2, 3! sus93 takes all the trivia out of writing a windows 93 package. all you have to write for a sus93 module is the function that runs on execution. example sus93 module:

```
(async function exampleModule() {
    $log("Hello, world!");
})
```

if you put your sus93 module in your own github repo, then create an issue on [the sus93 repo](https://github.com/parabirb/sus93-repo), you can actually get your package added to sus93!