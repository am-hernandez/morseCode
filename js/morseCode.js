// codices
let morseToCodex = {
    ".-":      "A",    "-.":     "N",    ".----":  "1",    "---...":    ":",
    "-...":    "B",    "---":    "O",    "..---":  "2",    "-.-.-.":    ";",
    "-.-.":    "C",    ".--.":   "P",    "...--":  "3",    "-....-":    "-",
    "-..":     "D",    "--.-":   "Q",    "....-":  "4",    "-..-.":     "/",
    ".":       "E",    ".-.":    "R",    ".....":  "5",    ".-..-.":    '"',
    "..-.":    "F",    "...":    "S",    "-....":  "6",    ".----.":    "'",
    "--.":     "G",    "-":      "T",    "--...":  "7",    "-.--.":     "(",
    "....":    "H",    "..-":    "U",    "---..":  "8",    "-.--.-":    ")",
    "..":      "I",    "...-":   "V",    "----.":  "9",    "-...-":     "=",
    ".---":    "J",    ".--":    "W",    "-----":  "0",    ".-.-.":     "+",
    "-.-":     "K",    "-..-":   "X",    ".-.-.-": ".",    "...-..-":   "$",
    ".-..":    "L",    "-.--":   "Y",    "--..--": ",",    ".-.-..":    "¶",
    "--":      "M",    "--..":   "Z",    "..--..": "?",    "..--.-":    "_",
    "-.-.--.": "!",    ".-...":  "&",    ".--.-.": "@",    "...---...": "SOS",
};

let morseFromCodex = {
    A:   ".-",        N:   "-.",       "1": ".----",     ":": "---...",
    B:   "-...",      O:   "---",      "2": "..---",     ";": "-.-.-.",
    C:   "-.-.",      P:   ".--.",     "3": "...--",     "-": "-....-",
    D:   "-..",       Q:   "--.-",     "4": "....-",     "/": "-..-.",
    E:   ".",         R:   ".-.",      "5": ".....",     '"': ".-..-.",
    F:   "..-.",      S:   "...",      "6": "-....",     "'": ".----.",
    G:   "--.",       T:   "-",        "7": "--...",     "(": "-.--.",
    H:   "....",      U:   "..-",      "8": "---..",     ")": "-.--.-",
    I:   "..",        V:   "...-",     "9": "----.",     "=": "-...-",
    J:   ".---",      W:   ".--",      "0": "-----",     "+": ".-.-.",
    K:   "-.-",       X:   "-..-",     ".": ".-.-.-",    "$": "...-..-",
    L:   ".-..",      Y:   "-.--",     ",": "--..--",    "¶": ".-.-..",
    M:   "--",        Z:   "--..",     "?": "..--..",    _:   "..--.-",
    "!": "-.-.--.",   "&": ".-...",    "@": ".--.-.",    SOS: "...---...",
};

// submit buttons
let encodeSubmit = document.getElementById("encode_message");
let decodeSubmit = document.getElementById("decode_message");
// get the elements that will display encrypted and decrypted messages
let encodedArea = document.getElementById("encoded");
let decodedArea = document.getElementById("decoded");


// encoding the message to Morse
encodeSubmit.addEventListener("click", function(){
    let messageVal = document.getElementById("message").value;
    let encodedMsg = codeToMorse(messageVal);
    encodedArea.innerText = encodedMsg;
});

// decoding the Morse message
decodeSubmit.addEventListener("click", function(){
    let morseVal = document.getElementById("morse").value;
    let decodedMsg = decodeMorse(morseVal);
    decodedArea.innerText = decodedMsg;
});

// functions below
// encode
codeToMorse = function(message){
    let encoded = "";
    if(typeof message !== "string"){
      message = String(message);
    }
    message = message.toUpperCase();
    let wordsArray = message.split(" ");
    for(let i=0; i<wordsArray.length; i++){
        let word = wordsArray[i];
        for(let j=0; j<word.length; j++){
            let char = word[j];
            encoded += morseFromCodex[char];
            if(j !== word.length-1 && word.length > 1){
                encoded += " ";
            }
        }
      if(i !== wordsArray.length-1 && wordsArray.length > 1){
        encoded += "   ";
      }
    }
    return encoded;
};

// decode
decodeMorse = function(morseCode){
    let decoded = "";
    let wordArray = morseCode.split("   ");
    for (let i=0; i<wordArray.length; i++){
        let word = wordArray[i];
        let chArray = word.split(" ");
        for(let j=0; j<chArray.length; j++){
            let char = chArray[j];
            decoded += morseToCodex[char];
        }
        if(i !== wordArray.length-1 && wordArray.length > 1){
            decoded += " ";
        }
    }
    return decoded;
};
