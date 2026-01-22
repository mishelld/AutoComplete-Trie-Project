const prompt = require("prompt-sync")();
const AutoCompleteTrie = require("./AutoCompleteTrie");
const ui = require("./ui");

const trie = new AutoCompleteTrie();

const run = function () {
  while (true) {
    const input = prompt("> ");
    const [command, word] = input.trim().split(" ");
    switch (command) {
      case "add":
        trie.addWord(word);
        console.log(ui.printResult(command, word));
        break;
      case "complete":
        const words = trie.predictWords(word);
        console.log(ui.printResult(command, word, words));
        break;
      case "find":
        const wasFound = trie.findWord(word);
        console.log(ui.printResult(command, word, [], wasFound));
        break;
      case "help":
        console.log(ui.printResult(command));
        break;
      case "exit":
        console.log(ui.printResult(command));
        return false;
    }
  }
};

run();
