const AutoCompleteTrie = require("./AutoCompleteTrie");
const trie = new AutoCompleteTrie();

describe("addWord function", () => {
  test("should add 'cat' and find it in the trie", () => {
    trie.addWord("cat");
    const result = trie.findWord("cat");
    expect(result).toBe(true);
  });

  test("should add 'car' and find it in the trie", () => {
    trie.addWord("car");
    const result = trie.findWord("car");
    expect(result).toBe(true);
  });
});

describe("findWord function", () => {
  test("should return false for a word 'fish' not added to the trie", () => {
    trie.addWord("dog");
    const result = trie.findWord("fish");
    expect(result).toBe(false);
  });

  test("should return false for a word 'monkey' not added to the trie", () => {
    trie.addWord("tiger");
    const result = trie.findWord("monkey");
    expect(result).toBe(false);
  });
});

describe("_getRemainingTree function", () => {
  test("should return the node corresponding to the last letter of 'dog'", () => {
    const result_node = trie._getRemainingTree("dog", trie);
    expect(result_node.value).toBe("g");
  });

  test("should return the node corresponding to the last letter of 'cat'", () => {
    const result_node = trie._getRemainingTree("cat", trie);
    expect(result_node.value).toBe("t");
  });

  test("should return null for a prefix 'mon' that does not exist", () => {
    const result_node = trie._getRemainingTree("mon", trie);
    if (result_node) {
      expect(result_node.value).toBe(null);
    } else {
      expect(result_node).toBe(null);
    }
  });
});

describe("_allWordsHelper function", () => {
  test("should collect all words starting with prefix 'd'", () => {
    trie.addWord("door");
    trie.addWord("doll");
    const prefix = "d";
    const result_node = trie._getRemainingTree(prefix, trie);
    let result_arr = [];
    trie._allWordsHelper(prefix, result_node, result_arr);
    expect(result_arr).toEqual(["dog", "door", "doll"]);
  });
});

describe("predictWords function", () => {
  test("should return all words starting with prefix 'd'", () => {
    const prefix = "d";
    const result_arr = trie.predictWords(prefix);
    expect(result_arr).toEqual(["dog", "door", "doll"]);
  });
});
