const { printResult } = require("./ui");

describe("printResult function", () => {
  test("should return correct message for 'add' command", () => {
    const result = printResult("add", "cat");
    expect(result).toBe("✓ Added 'cat' to dictionary");
  });

  test("should return correct message for 'complete' command", () => {
    const result = printResult("complete", "ca", ["cat", "car"]);
    expect(result).toBe("Suggestions for 'ca': cat, car");
  });

  test("should return found message for 'find' command when word exists", () => {
    const result = printResult("find", "cat", [], true);
    expect(result).toBe("✓ cat exists in dictionary");
  });

  test("should return not found message for 'find' command when word does not exist", () => {
    const result = printResult("find", "dog", [], false);
    expect(result).toBe("✗ dog not found in dictionary");
  });

  test("should return help message for 'help' command", () => {
    const result = printResult("help");
    expect(result).toContain("Commands:");
    expect(result).toContain("add <word>");
  });

  test("should return goodbye message for 'exit' command", () => {
    const result = printResult("exit");
    expect(result).toBe("Goodbye!");
  });
});
