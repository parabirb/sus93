# sus93
sus93 is a lightweight and shitty package manager for windows 93.

## installation
import the script `install.js` into windows 93 and then run it in a terminal. you're done!

## updating
if you already have sus93 installed, you can update by running `sus93 install sus93`.

## writing sus93 modules
writing sus93 modules is easy as 1, 2, 3! sus93 takes all the trivia out of writing a windows 93 package. all you have to write for a sus93 module is the function that runs on execution. example sus93 module:

```
(async function exampleModule() {
    $log("Hello, world!");
})
```

if you put your sus93 module in your own github repo, then create an issue on [the sus93 repo](https://github.com/parabirb/sus93-repo), you can actually get your package added to sus93!