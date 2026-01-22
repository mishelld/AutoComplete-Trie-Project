const helpMessage = `
Commands:
  add <word>        - Add word to dictionary
  find <word>       - Check if word exists
  complete <prefix> - Get completions
  help              - Show this message
  exit              - Quit program
`;

const printResult = function (command, word, arr = []) {
  switch (command) {
    case "add":
      return `✓ Added '${word}' to dictionary`;
    case "complete":
      return `Suggestions for '${word}':${arr}`;
    case "find":
      `✓ ${word} exists in dictionary`;
    case "help":
      return helpMessage;
    case "exit":
      return `Goodbye!`;
  }
};
