const prompt = require("prompt-sync")();
const AutoCompleteTrie = require("./AutoCompleteTrie");
const trie = new AutoCompleteTrie();

const run = function () {
  while (true) {
    const input = prompt("> ");
    const [command, word] = input.trim().split(" ");
    switch (command) {
      case "add":
        trie.addWord(word);
        break;
      case "complete":
        const words = trie.predictWords(word);
        break;
      case "find":
        const wasFound = trie.findWord(word);
        break;
      case "help":
        break;
      case "exit":
        break;
    }
  }
};

run();
