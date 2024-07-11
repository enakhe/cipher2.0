$(document).ready(function() {

    // Business Logic
    function firstAndLastCap(firstL, lastL) {
        return firstL.toUpperCase() + lastL.toUpperCase();
    } 

    function reverseFirstAndLastCap(word) {
        return word.split("").reverse().join("");
    }

    function allTogether(sentence) {
        let firstL = sentence.charAt(0);
        let lastL = sentence.charAt(sentence.length - 1);
        let firstAndLast = firstAndLastCap(firstL, lastL)
        let reversedCapitalLetter = reverseFirstAndLastCap(firstAndLast);
        return sentence + reversedCapitalLetter;
    }

    function divideSentence(sentence) {
        let middleNumber = Math.floor(sentence.length / 2);
        let middleChar = sentence.charAt(middleNumber);
        let original = allTogether(sentence);
        return middleChar + original;
    }

    function cipher(sentence) {
        let divide = divideSentence(sentence);
        let cipherSentence = divide.split("").reverse().join("");
        return cipherSentence
    }
    

    // UI Logic
    const sentence = prompt("Enter a sentence");
    const cipherSentence = cipher(sentence);

    $("#img1").click(function() {
        $("#result").text(cipherSentence)
    })

    $("#img2").click(function() {
        $("#result").text(sentence);
    })
})