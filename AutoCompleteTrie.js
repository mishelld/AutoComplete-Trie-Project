class AutoCompleteTrie {
  constructor(value = null) {
    this.value = value;
    this.children = {};
    this.endOfWord = false;
  }
  addWord(word) {
    let node = this;
    let i = 0;
    while (i < word.length) {
      if (!node.children[word[i]]) {
        const new_node = new AutoCompleteTrie(word[i]);
        node.children[word[i]] = new_node;
        node = new_node;
      } else {
        node = node.children[word[i]];
      }
      i++;
    }
    node.endOfWord = true;
  }
}
let trie = new AutoCompleteTrie();
trie.addWord("run");
trie.addWord("rick");

trie.addWord("running");
console.log(trie.findWord("rick"));

//trie.print();
