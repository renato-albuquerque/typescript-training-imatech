// Enum
var languages;
(function (languages) {
    languages[languages["Java"] = 0] = "Java";
    languages[languages["C#"] = 1] = "C#";
    languages[languages["Python"] = 2] = "Python";
    languages[languages["JavaScript"] = 3] = "JavaScript";
    languages[languages["TypeScript"] = 4] = "TypeScript";
})(languages || (languages = {}));
// Test Enum
console.log(languages.JavaScript);
