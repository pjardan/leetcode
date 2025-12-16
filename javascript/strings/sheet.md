## 📊 “String Functions Cheat‑Sheet” – JavaScript for LeetCode  

| # | Function | Description | Example (Input → Output) | Typical LeetCode Problem |
|---|----------|-------------|---------------------------|--------------------------|
| 1 | `str.length` | Number of characters in the string. | `"hello".length ➜ 5` | “Longest Substring Without Repeating Characters” |
| 2 | `str.charAt(index)` | Return character at *index* (0‑based). | `"abc".charAt(1) ➜ "b"` | “Maximum Length of Concatenated String with Unique Characters” |
| 3 | `str[index]` | Same as `charAt`. | `"abc"[2] ➜ "c"` | – |
| 4 | `str.slice(start, end?)` | Substring from *start* up to but not including *end*. | `"leetcode".slice(1,5) ➜ "eetc"` | “Reverse Words in a String” (extract words) |
| 5 | `str.substring(start, end?)` | Similar to `slice`, but negative indices count from the end. | `"abcdef".substring(-3) ➜ "def"` | – |
| 6 | `str.substr(start, length?)` | Substring starting at *start* for *length* chars (deprecated but still used). | `"hello".substr(1,2) ➜ "el"` | – |
| 7 | `str.includes(sub)` | Boolean: does *sub* appear in string? | `"abc".includes("b") ➜ true` | “Find All Numbers Disappeared in an Array” (string search) |
| 8 | `str.startsWith(prefix, pos?)` | Does the string start with *prefix* at optional *pos*? | `"leetcode".startsWith("lee",0) ➜ true` | “Reverse Words in a String II” |
| 9 | `str.endsWith(suffix, pos?)` | Does the string end with *suffix* (up to *pos*)? | `"hello".endsWith("lo") ➜ true` | – |
|10 | `str.indexOf(sub[, fromIndex])` | First index of *sub*, or -1. | `"banana".indexOf("na") ➜ 2` | “Two Sum II – Input array is sorted” (search for complement) |
|11 | `str.lastIndexOf(sub[, fromIndex])` | Last index of *sub*. | `"ababa".lastIndexOf("a") ➜ 4` | – |
|12 | `str.replace(regExpOrSub, newSub)` | Replace first occurrence or all via regex. | `"aaabbb".replace(/b/g,"c") ➜ "aaaCCC"` | “Remove Duplicates from Sorted Array” (string‑based) |
|13 | `str.match(regExp)` | Return array of matches or null. | `"abc123".match(/\d+/) ➜ ["123"]` | “Valid Number” (regex validation) |
|14 | `str.split(delim, limit?)` | Split into array by delimiter. | `"a,b,c".split(",") ➜ ["a","b","c"]` | “Split Strings” |
|15 | `arr.join(sep)` | Join array of strings with *sep*. | `["a","b"].join("-") ➜ "a-b"` | – |
|16 | `str.trim()` | Remove whitespace from both ends. | `"  hello ".trim() ➜ "hello"` | “Trim Spaces” (not an official LeetCode but handy) |
|17 | `str.toUpperCase()` | Convert all to uppercase. | `"abc".toUpperCase() ➜ "ABC"` | “Implement strStr” (case‑insensitive) |
|18 | `str.toLowerCase()` | Convert all to lowercase. | `"ABC".toLowerCase() ➜ "abc"` | – |
|19 | `str.padStart(targetLength, padString?)` | Pad left until length reached. | `"5".padStart(3,"0") ➜ "005"` | “Find Minimum Number” (formatting) |
|20 | `str.padEnd(targetLength, padString?)` | Pad right. | `"9".padEnd(4,"x") ➜ "9xxx"` | – |
|21 | `str.repeat(count)` | Repeat string *count* times. | `"ha".repeat(3) ➜ "hahaha"` | “String Compression” (build compressed string) |
|22 | `str.localeCompare(other, locale?, options?)` | Compare strings lexicographically. | `"a".localeCompare("b") ➜ -1` | – |
|23 | `str.replaceAll(regExpOrSub, newSub)` | Replace **all** occurrences (ES2021). | `"abcabc".replaceAll("a","x") ➜ "xbcxbc"` | – |
|24 | `Array.from(str [, mapFn])` | Convert string to array of chars. | `Array.from("ab") ➜ ["a","b"]` | “String to Binary Tree” (char‑by‑char) |
|25 | `str.codePointAt(index)` | Unicode code point at *index*. | `"𝌆".codePointAt(0) ➜ 119062` | – |
|26 | `String.fromCodePoint(...codePoints)` | Convert code points to string. | `String.fromCodePoint(65,66) ➜ "AB"` | – |
|27 | `str.search(regExp)` | Same as `match`, but returns index or -1. | `"abc".search(/[a-z]/) ➜ 0` | – |
|28 | `Array.prototype.join()` | See #15 | – | – |
|29 | `String.raw(strings, ...substitutions)` | Raw string (escape sequences literal). | ```String.raw\`Line1\nLine2\`` ➜ "Line1\\nLine2"``` | – |
|30 | `str.normalize(form?)` | Unicode normalization. | `"e\u0301".normalize("NFC") ➜ "é"` | “Valid Word Abbreviation” (normalizing accents) |
|31 | `String.fromCharCode(...codes)` | Convert char codes to string. | `String.fromCharCode(97,98) ➜ "ab"` | – |
|32 | `str.matchAll(regExp)` | Iterator of all matches with capture groups. | `"abc".matchAll(/b/)` | – |
|33 | `Array.prototype.includes(value, fromIndex?)` | Check if array contains value (used after `split`). | `["a","b"].includes("b") ➜ true` | “Valid Palindrome” (char array) |
|34 | `str.repeat(count)` | See #21 | – | – |
|35 | `String.raw()` | See #29 | – | – |
|36 | `str.split("").map(c=>c.charCodeAt(0))` | Convert to ASCII codes. | `"abc".split("").map(c=>c.charCodeAt(0)) ➜ [97,98,99]` | “Maximum Length of a Concatenated String with Unique Characters” |
|37 | `str.toString()` | Convert value to string (for numbers). | `(123).toString() ➜ "123"` | – |
|38 | `Array.prototype.join(sep)` | See #15 | – | – |
|39 | `String.fromCharCode(...codes)` | See #31 | – | – |
|40 | `str.includes(sub, fromIndex?)` | Same as #7 (with start). | `"abc".includes("b",2) ➜ false` | – |

---

### Quick Reference Code Snippets

```js
// 1️⃣  Count unique chars in a string
const s = "leetcode";
let seen = new Set();
for (const ch of s) seen.add(ch);
console.log(seen.size);   // 7

// 2️⃣  Reverse words in a sentence
function reverseWords(s){
  return s.split(' ').map(w=>w.split('').reverse().join('')).join(' ');
}
console.log(reverseWords("Let's take LeetCode contest")); // "s'teL ekat edoCteeL tsetnoc"

// 3️⃣  Check if two strings are anagrams
function isAnagram(a,b){
  return [...a].sort().join('') === [...b].sort().join('');
}
console.log(isAnagram("listen","silent")); // true

// 4️⃣  Remove duplicates while preserving order
function removeDup(str){
  const seen = new Set();
  return Array.from(str).filter(ch=>!seen.has(ch) || seen.add(ch)).join('');
}
console.log(removeDup("banana")); // "ban"

// 5️⃣  Palindrome check (ignore case & non‑alphanum)
function isPalindrome(s){
  const cleaned = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
```

---

### How to Use the Spreadsheet

1. **Copy** the table above into a Markdown file or paste it directly into Google Sheets (it auto‑formats).
2. Add your own *Notes* column if you want to remember special edge cases.
3. Save as CSV → Excel for offline use.

Happy coding! 🚀