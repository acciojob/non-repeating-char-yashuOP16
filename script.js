function firstNonRepeatedChar(text) {
    let str = text.trim();

    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);

        if (str.indexOf(ch) === str.lastIndexOf(ch)) {
            return ch;
        }
    }
    return null;
}

// Do not change the code below
const text = prompt("Enter text:");
alert(firstNonRepeatedChar(text));
