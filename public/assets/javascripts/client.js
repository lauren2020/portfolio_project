// import React from "react";
// import ReactDOM from "react-dom";

// import Layout from "./components/layout";

// const app = document.getElementById('app');
// ReactDOM.render(<Layout />, app);

var ciphers = [
    "Affine Ciper",
    "Shift Cipher",
    "Permutate"
]

var selectedCipher = "none"

var emptyStandardAlphabetCounts = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var standardAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var standardAlphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var standardFrequencys = [0.0663,0.0116,0.0263,0.0316,0.1284,0.0211,0.0232,0.0368,0.0684,0.0011,0.0095,0.0326,0.0337,0.0747,0.0895,0.0137,0.0021,0.0547,0.0842,0.0979,0.0421,0.0063,0.0189,0.0032,0.0200,0.0021]
var standardFrequencysSorted = [0.1284,0.0979,0.0895,0.0842,0.0747,0.0684,0.0663,0.0547,0.0421,0.0368,0.0337,0.0326,0.0316,0.0263,0.0232,0.0211,0.0200,0.0189,0.0137,0.0116,0.0095,0.0063,0.0032,0.0021,0.0021,0.0011]
var standardAlphabetSorted = ["E","T","O","S","N","I","A","R","U","H","M","L","D","C","G","F","Y","W","P","B","K","V","X","Z","Q","J"]
var frequencyHolderMessage = " (: "

var aRow = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var bRow = ["B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A"]
var cRow = ["C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B"]
var dRow = ["D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C"]
var eRow = ["E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D"]
var fRow = ["F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E"]
var gRow = ["G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F"]
var hRow = ["H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G"]
var iRow = ["I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H"]
var jRow = ["J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I"]
var kRow = ["K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J"]
var lRow = ["L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K"]
var mRow = ["M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L"]
var nRow = ["N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M"]
var oRow = ["O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N"]
var pRow = ["P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"]
var qRow = ["Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"]
var rRow = ["R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q"]
var sRow = ["S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R"]
var tRow = ["T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S"]
var uRow = ["U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"]
var vRow = ["V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U"]
var wRow = ["W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V"]
var xRow = ["X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W"]
var yRow = ["Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X"]
var zRow = ["Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y"]
var vigenereSquare = [aRow, bRow, cRow, dRow, eRow, fRow, gRow, hRow, iRow, jRow, kRow, lRow, mRow, nRow, oRow, pRow, qRow, rRow, sRow, tRow, uRow, vRow, wRow, xRow, yRow, zRow]

function decipher() {
    var cipherText = document.getElementById("cipherTextField").value.toUpperCase()

    var numberOfLettersInCipherText = getMessageLength(cipherText)
    var counts = getCountOfLettersInText(cipherText)
    var frequencys = calculateFrequencys(counts, numberOfLettersInCipherText)
    var orderedFrequencys = orderFrequencysArray(frequencys)
    console.log(orderedFrequencys)
}

function createSignature() {

}

function getEmptyStandardAlphabetCounts() {
    return [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
}

function getFrequencyCount() {
    var cipherText = document.getElementById("cipherTextField").value.toUpperCase()
    var numberOfLettersInCipherText = getMessageLength(cipherText)

    var counts = getCountOfLettersInText(cipherText)

    var frequencys = calculateFrequencys(counts, numberOfLettersInCipherText)

    var displayMessage = orderFrequencys(frequencys)
    console.log(displayMessage);
    document.getElementById("frequencyHolder").innerHTML = displayMessage;
}

function calculateFrequencys(counts, totalCharacterCount) {
    var frequencys = []
    var indexInAlphabet = 0;

    frequencys = [(counts[0] / totalCharacterCount) * 1]
    for(indexInAlphabet = 1; indexInAlphabet < standardAlphabet.length; indexInAlphabet++) {
        var occurenceRate = (counts[indexInAlphabet] / totalCharacterCount) * 1
        frequencys.push(occurenceRate)
    }

    return frequencys;
}

function getCountOfLettersInText(text) {
    var counts = getEmptyStandardAlphabetCounts();
    var indexInText = 0;
    var indexInAlphabet = 0;
    for(indexInText = 0; indexInText < text.length; indexInText++) {
        var letterAtIndexInText = text[indexInText]
        for(indexInAlphabet = 0; indexInAlphabet < standardAlphabet.length; indexInAlphabet++) {
            var letterAtIndexInAlphabet = standardAlphabet[indexInAlphabet]
            if (letterAtIndexInText == letterAtIndexInAlphabet) {
                counts[indexInAlphabet] = counts[indexInAlphabet] + 1
                break
            }
        }
    }

    return counts;
}

function getCharachterArrayOfText(text) {
    var charachters = []
    var indexInText = 0

    for(indexInText = 0; indexInText < text.length; indexInText++) {
        var charc = text[indexInText].toUpperCase()
        if(charachterIsUpperLetter(charc)) {
            charachters.push(charc)
        }
    }

    return charachters
}

function printCosetsOfLength() {
    var cipherText = document.getElementById("cipherTextField").value.toUpperCase()
    var cipherArray = getCharachterArrayOfText(cipherText)
    var cosets = createCoset(4, cipherArray)
    var indexOfCosets = 0
    for(indexOfCosets = 0; indexOfCosets < cosets.length; indexOfCosets++) {
        console.log(cosets[indexOfCosets])
    }
}

function frequencyCountCosetsOfLength() {
    var cipherText = document.getElementById("cipherTextField").value.toUpperCase()
    var cipherArray = getCharachterArrayOfText(cipherText)
    var cosets = createCoset(4, cipherArray)
    var indexOfCosets = 0
    for(indexOfCosets = 0; indexOfCosets < cosets.length; indexOfCosets++) {
        var numberOfLettersInCipherText = getMessageLength(cipherText)
        var counts = getCountOfLettersInText(cipherText)
        var frequencys = calculateFrequencys(counts, numberOfLettersInCipherText)

        var displayMessage = orderFrequencys(frequencys)
        console.log(displayMessage)
    }
}

function shiftDecipherOfAlength() {
    var cipherText = document.getElementById("cipherTextField").value.toUpperCase()
    var cipherArray = getCharachterArrayOfText(cipherText)
    var plainText = ""
    var alphabetIndex = 0
    var textIndex = 0
    var shift = parseInt(document.getElementById("aTextField").value)
    var shiftedAlphabet = shiftArray(standardAlphabet, shift)
    for(textIndex = 0; textIndex < cipherArray.length; textIndex++) {
        for(alphabetIndex = 0; alphabetIndex < standardAlphabet.length; alphabetIndex++) {
            if(shiftedAlphabet[alphabetIndex] == cipherArray[textIndex]) {
                plainText += standardAlphabet[alphabetIndex]
            }
        }
    }
    console.log(plainText)
    document.getElementById("plainTextField").innerHTML = plainText
}

function vigenereDecipherWithDotProductKnownLength(keyLength, cipherArray) {
    // var cipherText = document.getElementById("cipherTextField").value.toUpperCase()
    // var cipherArray = getCharachterArrayOfText(cipherText)
    var keywordLength = keyLength
    console.log(keywordLength)
    var cosets = createCoset(keywordLength, cipherArray)
    var keywordValues = []
    var keyword = ""
    var indexInCosets = 0
    var indexInDotProduct = 0
    var indexInKeyword = 0

    console.log("Cosets: " + cosets + " Length " + cosets.length)

    for(indexInCosets = 0; indexInCosets < cosets.length; indexInCosets++) {
        var cosetLetterCount = getCountOfLettersInText(cosets[indexInCosets])
        var cosetFrequencys = calculateFrequencys(cosetLetterCount, cosets[indexInCosets].length)
        var a = cosetFrequencys
        //English Language frequencys
        var b = [0.08167, 0.01492, 0.02782, 0.04253, 0.12702, 0.02228, 0.02015, 0.06094, 0.06966, 0.00153, 0.00772, 0.04025, 0.02406, 0.06749, 0.07507, 0.01929, 0.00095, 0.05987, 0.06327, 0.09056, 0.02758, 0.00978, 0.02360, 0.00150, 0.01974, 0.00074]
        var highIndex = 0
        ///
        var dotProduct = []
        var dotProductIndex = 0
        console.log("A = " + a)
        for(dotProductIndex = 0; dotProductIndex < a.length; dotProductIndex++) {
            var ai = shiftArray(a, dotProductIndex)
            console.log("Ai = " + ai)
            var aiDotb = aDotb(ai, b)
            dotProduct.push(aiDotb)
        }
        ///
        console.log("Products:")
        for(indexInDotProduct = 1; indexInDotProduct < dotProduct.length; indexInDotProduct++) {
            console.log(dotProduct[indexInDotProduct])
            if(dotProduct[indexInDotProduct] > dotProduct[highIndex]) {
                highIndex = indexInDotProduct
            }
        }
        keywordValues.push(highIndex)
    }

    for(indexInKeyword = 0; indexInKeyword < keywordValues.length; indexInKeyword++) {
        keyword += convertValueToLetter(keywordValues[indexInKeyword])
    }

    console.log("Final Keyword: " + keyword)
    document.getElementById("keywordGuessHolder").innerHTML = keyword
    var plainText = vigenereDecipherWithKeyword(keyword, cipherArray)
    console.log("Plain Text: " + plainText)
    document.getElementById("plainTextField").innerHTML = plainText
}

function vigenereDecipher() {
    var cipherText = document.getElementById("cipherTextField").value.toUpperCase()
    var cipherArray = getCharachterArrayOfText(cipherText)
    var keywordLength = estimateVigenereKeywordLength(cipherText)

    vigenereDecipherWithDotProductKnownLength(keywordLength, cipherArray)
}

function vigenereDecipherWithA() {
    var cipherText = document.getElementById("cipherTextField").value.toUpperCase()
    var cipherArray = getCharachterArrayOfText(cipherText)
    var keywordLength = parseInt(document.getElementById("aTextField").value)
    
    vigenereDecipherWithDotProductKnownLength(keywordLength, cipherArray)
}

// function vigenereDecipherWithDotProduct() {
//     var cipherText = document.getElementById("cipherTextField").value.toUpperCase()
//     var cipherArray = getCharachterArrayOfText(cipherText)
//     var allFrequencys = calculateFrequencys(getCountOfLettersInText(cipherArray), cipherArray.length)

//     var keywordLength = estimateVigenereKeywordLength(cipherText)
//     var cosets = createCoset(keywordLength, cipherArray)
//     var keywordValues = []
//     var keyword = ""
//     var indexInCosets = 0
//     var indexInDotProduct = 0
//     var indexInKeyword = 0

//     for(indexInCosets = 0; indexInCosets < cosets.length; indexInCosets++) {
//         var cosetLetterCount = getCountOfLettersInText(cosets[indexInCosets])
//         var cosetFrequencys = calculateFrequencys(cosetLetterCount, cosets[indexInCosets].length)
//         var a = cosetFrequencys
//         var b = allFrequencys
//         var dotProduct = []//aDotb(a, b)
//         var dotProductIndex = 0
//         console.log("A = " + a)
//         for(dotProductIndex = 0; dotProductIndex < a.length; dotProductIndex++) {
//             var ai = shiftArray(a, dotProductIndex)
//             console.log("Ai = " + ai)
//             var aiDotb = aDotb(ai, b)
//             dotProduct.push(aiDotb)
//         }
//         var highIndex = 0
//         for(indexInDotProduct = 1; indexInDotProduct < dotProduct.length; indexInDotProduct) {
//             if(dotProduct[indexInDotProduct] > dotProduct[highIndex]) {
//                 highIndex = indexInDotProduct
//             }
//         }
//         keywordValues.push(highIndex)
//     }

//     for(indexInKeyword = 0; indexInKeyword < keyworValues.length; indexInKeyword++) {
//         keyword += convertValueToLetter(keyworValues[indexInKeyword])
//     }

//     console.log(keyword)
// ///////////
//     var plainText = vigenereDecipherWithKeyword(keyword, cipherArray)
//     console.log(plainText)
//     document.getElementById("plainTextField").innerHTML = plainText
// }

function shiftArray(array, shift) {
    var shiftIndex = 0
    var shiftedArray = []
    for(shiftIndex = shift; shiftIndex < array.length; shiftIndex++) {
        shiftedArray.push(array[shiftIndex])
    }
    for(shiftIndex = 0; shiftIndex < shift; shiftIndex++) {
        shiftedArray.push(array[shiftIndex])
    }
    return shiftedArray
}

function vigenereDecipherWithKnownKeyword() {
    var cipherText = document.getElementById("cipherTextField").value.toUpperCase()
    var cipherArray = getCharachterArrayOfText(cipherText)
    var keyword = document.getElementById("keywordTextField").value.toUpperCase()
    var plainText = vigenereDecipherWithKeyword(keyword, cipherArray)
    console.log(plainText)
    document.getElementById("plainTextField").innerHTML = plainText
}

function vigenereDecipherWithKeyword(keyword, cipherText) {
    var plainText = ""
    var indexInText = 0
    var indexInKeyword = 0
    for(indexInText = 0; indexInText < cipherText.length; indexInText++) {
        var cipherLetter = cipherText[indexInText]
        var keywordLetter = keyword[indexInKeyword]

        var plainLetter = findPlainLetterFromVigenere(cipherLetter, keywordLetter)
        plainText += plainLetter

        if(indexInKeyword < keyword.length - 1) {
            indexInKeyword++
        } else {
            indexInKeyword = 0
        }
    }
    return plainText
}

function findPlainLetterFromVigenere(cipherLetter, keywordLetter) {
    var keywordValue = convertLetterToValue(keywordLetter)
    var row = vigenereSquare[keywordValue]
    var plainValue = -1
    var indexInRow = 0
    for(indexInRow = 0; indexInRow < row.length; indexInRow++) {
        if(row[indexInRow] == cipherLetter.toUpperCase()) {
            plainValue = indexInRow
        }
    }

    var plainLetter = convertValueToLetter(plainValue)
    return plainLetter
}

function convertValueToLetter(value) {
    var letter = "-"
    if(value == 0) {
        letter = "A"
    } else if (value == 1) {
        letter = "B"
    } else if (value == 2) {
        letter = "C"
    } else if (value == 3) {
        letter = "D"
    } else if (value == 4) {
        letter = "E"
    } else if (value == 5) {
        letter = "F"
    } else if (value == 6) {
        letter = "G"
    } else if (value == 7) {
        letter = "H"
    } else if (value == 8) {
        letter = "I"
    } else if (value == 9) {
        letter = "J"
    } else if (value == 10) {
        letter = "K"
    } else if (value == 11) {
        letter = "L"
    } else if (value == 12) {
        letter = "M"
    } else if (value == 13) {
        letter = "N"
    } else if (value == 14) {
        letter = "O"
    } else if (value == 15) {
        letter = "P"
    } else if (value == 16) {
        letter = "Q"
    } else if (value == 17) {
        letter = "R"
    } else if (value == 18) {
        letter = "S"
    } else if (value == 19) {
        letter = "T"
    } else if (value == 20) {
        letter = "U"
    } else if (value == 21) {
        letter = "V"
    } else if (value == 22) {
        letter = "W"
    } else if (value == 23) {
        letter = "X"
    } else if (value == 24) {
        letter = "Y"
    } else if (value == 25) {
        letter = "Z"
    }
    return letter
}

function convertLetterToValue(letter) {
    var value = -1
    if (letter == "A") {
        value = 0
    } else if (letter == "B") {
        value = 1
    } else if (letter == "C") {
        value = 2
    } else if (letter == "D") {
        value = 3
    } else if (letter == "E") {
        value = 4
    } else if (letter == "F") {
        value = 5
    } else if (letter == "G") {
        value = 6
    } else if (letter == "H") {
        value = 7
    } else if (letter == "I") {
        value = 8
    } else if (letter == "J") {
        value = 9
    } else if (letter == "K") {
        value = 10
    } else if (letter == "L") {
        value = 11
    } else if (letter == "M") {
        value = 12
    } else if (letter == "N") {
        value = 13
    } else if (letter == "O") {
        value = 14
    } else if (letter == "P") {
        value = 15
    } else if (letter == "Q") {
        value = 16
    } else if (letter == "R") {
        value = 17
    } else if (letter == "S") {
        value = 18
    } else if (letter == "T") {
        value = 19
    } else if (letter == "U") {
        value = 20
    } else if (letter == "V") {
        value = 21
    } else if (letter == "W") {
        value = 22
    } else if (letter == "X") {
        value = 23
    } else if (letter == "Y") {
        value = 24
    } else if (letter == "Z") {
        value = 25
    }
    return value
}

function estimateVigenereKeywordLength(text) {
    var textArray = getCharachterArrayOfText(text)
    var lQuantity = textArray.length
    var indexInLQuantity = 0
    var Al = []
    for(indexInLQuantity = 1; indexInLQuantity < lQuantity; indexInLQuantity++) {
        var AindexInL = A(indexInLQuantity, textArray)
        Al.push(AindexInL)
    }

    var indexInAl = 0
    var previous = 0
    var next = 0
    var localMax = 0
    for(indexInAl = 1; indexInAl < Al.length - 1; indexInAl++) {
        next = Al[indexInAl + 1]
        previous = Al[indexInAl - 1]
        //console.log(Al[indexInAl])
        if(Al[indexInAl] > previous && Al[indexInAl] > next) {
            localMax = indexInAl + 1
            break
        }
    }

    return localMax
}

function aDotb(a, b) {
    var dotProducts = []
    var dotProduct = 0
    var index = 0

    for(index = 0; index < a.length; index++) {
        if (b.length > index) {
            dotProducts.push(a[index] * b[index])
        }
    }

    for(index = 0; index < a.length; index++) {
        dotProduct += dotProducts[index]
    }

    return dotProduct
}

function createCoset(length, text) {
    var indexInText = 0
    var cosetIndex = 0
    var currentCoset = []
    var cosets = []

    for(cosetIndex = 0; cosetIndex < length; cosetIndex++) {
        for(indexInText = cosetIndex; indexInText < text.length; indexInText += length) {
            currentCoset.push(text[indexInText])
        }
        cosets.push(currentCoset)
        currentCoset = []
    }

    return cosets
}

function A(l, textArray) {
    var sum = 0
    var cosets = createCoset(l, textArray)
    var j = 0

    for(j = 0; j < l; j++) {
        sum += V(cosets[j])
    }
    return (1 / l) * sum
}

function V(j) {
    var sum1 = 0
    var sum2 = 0

    var numberOfLettersInCipherText = getMessageLength(j)
    var counts = getCountOfLettersInText(j)
    var jFrequencys = calculateFrequencys(counts, numberOfLettersInCipherText)
    jFrequencys = orderFrequencysArray(jFrequencys)
    
    var i = 0
    for(i = 13; i < 26; i++) {
        //fij + fi-1,j
        // Assuming ordered frequency
        sum1 += jFrequencys[i] + jFrequencys[i - 1]
    }

    for(i = 1; i < 13; i++) {
        //fij + fi-1,j
        // Assuming ordered frequency
        sum2 += jFrequencys[i] + jFrequencys[i - 1]
    }
    return (1 / 2) * (sum1 - sum2)
}

function getMessageLength(message) {
    var indexInMessage = 0
    var count = 0
    for(indexInMessage = 0; indexInMessage < message.length; indexInMessage++) {
        var charc = message[indexInMessage].toUpperCase()
        if(charachterIsUpperLetter(charc)) {
            count++
        }
    }
    return count
}

function charachterIsUpperLetter(charc) {
    if(charc == "A" || charc == "B" || charc == "C" || charc == "D" || charc == "E" || charc == "F" || charc == "G" || charc == "H" || charc == "I" || charc == "J" || charc == "K" || charc == "L" || charc == "M" || charc == "N" || charc == "O" || charc == "P" || charc == "Q" || charc == "R" || charc == "S" || charc == "T" || charc == "U" || charc == "V" || charc == "W" || charc == "X" || charc == "Y" || charc == "Z") {
        return true;
    } else {
        return false;
    }
}

function orderFrequencys(frequencys) {
    var displayMessage = ""
    var alphabet = standardAlphabet
    var n = frequencys.length; 
    var frequencysCount = 0
    var indexInFrequencys = 0
    //Bubble Sort Frequencys
        for (frequencysCount = 0; frequencysCount < n-1; frequencysCount++) { 
            for (indexInFrequencys = 0; indexInFrequencys < n-frequencysCount-1; indexInFrequencys++) {
                if (frequencys[indexInFrequencys] < frequencys[indexInFrequencys+1]) { 
                    var temp = frequencys[indexInFrequencys]; 
                    frequencys[indexInFrequencys] = frequencys[indexInFrequencys+1]; 
                    frequencys[indexInFrequencys+1] = temp; 

                    var temp2 = alphabet[indexInFrequencys]; 
                    alphabet[indexInFrequencys] = alphabet[indexInFrequencys+1]; 
                    alphabet[indexInFrequencys+1] = temp2; 
                } 
            }
        }
        //Create message for display
        for(j = 0; j < alphabet.length; j++) {
            displayMessage += alphabet[j] + ": " + frequencys[j].toString() + " | " + standardAlphabetSorted[j] + "\n"
        }
    
        return displayMessage
}

function orderFrequencysSwapText(frequencys, text) {
    var displayMessage = ""
    var alphabet = standardAlphabet
    var n = frequencys.length; 
    var frequencysCount = 0
    var indexInFrequencys = 0
    //Bubble Sort Frequencys
        for (frequencysCount = 0; frequencysCount < n-1; frequencysCount++) { 
            for (indexInFrequencys = 0; indexInFrequencys < n-frequencysCount-1; indexInFrequencys++) {
                if (frequencys[indexInFrequencys] < frequencys[indexInFrequencys+1]) { 
                    var temp = frequencys[indexInFrequencys]; 
                    frequencys[indexInFrequencys] = frequencys[indexInFrequencys+1]; 
                    frequencys[indexInFrequencys+1] = temp; 

                    var temp2 = alphabet[indexInFrequencys]; 
                    alphabet[indexInFrequencys] = alphabet[indexInFrequencys+1]; 
                    alphabet[indexInFrequencys+1] = temp2; 
                } 
            }
        }
        //Create message for display
        for(j = 0; j < alphabet.length; j++) {
            displayMessage += alphabet[j] + ": " + frequencys[j].toString() + " | " + standardAlphabetSorted[j] + "\n"
        }

        var swapedText = ""
        var indexInText = 0
        var indexInFrequencyAlphabet = 0
        for(indexInText = 0; indexInText < text.length; indexInText++) {
            for(indexInFrequencyAlphabet = 0; indexInFrequencyAlphabet < alphabet.length; indexInFrequencyAlphabet++) {
                if(text[indexInText] == alphabet[indexInFrequencyAlphabet]) {
                    swapedText += standardAlphabetSorted[indexInFrequencyAlphabet]
                }
            }
        }

        console.log(swapedText)
        document.getElementById("frequencyAssociationHolder").innerHTML = swapedText

        console.log(displayMessage)
}

function orderFrequencysArray(frequencys) {
    var displayMessage = ""
    var alphabet = standardAlphabet
    var n = frequencys.length; 
    var frequencysCount = 0
    var indexInFrequencys = 0
    //Bubble Sort Frequencys
        for (frequencysCount = 0; frequencysCount < n-1; frequencysCount++) { 
            for (indexInFrequencys = 0; indexInFrequencys < n-frequencysCount-1; indexInFrequencys++) {
                if (frequencys[indexInFrequencys] < frequencys[indexInFrequencys+1]) { 
                    var temp = frequencys[indexInFrequencys]; 
                    frequencys[indexInFrequencys] = frequencys[indexInFrequencys+1]; 
                    frequencys[indexInFrequencys+1] = temp; 

                    var temp2 = alphabet[indexInFrequencys]; 
                    alphabet[indexInFrequencys] = alphabet[indexInFrequencys+1]; 
                    alphabet[indexInFrequencys+1] = temp2; 
                } 
            }
        }
    
        return frequencys
}

function getKeywordLength() {
    var I = calculateIndexOfCoincidence()
    var n = document.getElementById("cipherTextField").value.length
    var K = (0.0265*n) / ((.065 - I) + n*(I  - .0385))
    document.getElementById("keywordLengthHolder").innerHTML = K
    return K
}

function getAlphabetType() {
    var result = calculateIndexOfCoincidence()
    if(result < .07 && result > .06) {
        document.getElementById("alphabetTypeHolder").innerHTML = "Monoalphabetic"
    } else if(result < .04 && result > .03) {
        document.getElementById("alphabetTypeHolder").innerHTML = "Polyalphabetic"
    } else {
        document.getElementById("alphabetTypeHolder").innerHTML = "Non Conclusive"
    }
}

function calculateIndexOfCoincidence() {
    var i;
    var N = 0;
    var sum = 0.0;
    var total = 0.0;
    var s = document.getElementById("cipherTextField").value
    
    var values = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    var j = 0;
    for(i = 0; i < s.length; i++) {
        for(j = 0; j < standardAlphabet.length; j++) {
            if (s[i].toUpperCase() == standardAlphabet[j]) {
                values[j] = values[j] + 1
                N++
                break
            }
        }
    }
    console.log(values)
    
    //calculate the sum of each frequency
    var ch = 0
    for(i = 0; i < 26; i++){
        ch = values[i];
        sum = sum + (ch * (ch-1));
        }
    
    total = sum/(N*(N-1));
    
    console.log(total)
    document.getElementById("indexOfCoincidenceHolder").innerHTML = total
    return total
}

function affineCipher() {
}

function affineDecipher1() {
    console.log("Affine Decipher1")
    var a = parseInt(document.getElementById("aTextField").value)
    console.log("a: " + a)
    var b = parseInt(document.getElementById("bTextField").value)
    console.log("b: " + b)
    var cipherText = document.getElementById("cipherTextField").value

    var plainText = affineCipherDecrypt(a, b, cipherText)
    console.log(plainText)
    document.getElementById("plainTextField").innerHTML = plainText
}

function affineCipherDecrypt(a, b, cipheredText) {
    var cipherArray = getCharachterArrayOfText(cipheredText)
    var decryption = ""
    var textIndex = 0
    var inverseIndex = 0
    var flag = 0
    var a_inv = 0
    for (inverseIndex = 0; inverseIndex < 26; inverseIndex++) { 
        flag = (a * inverseIndex) % 26; 
          
        //Check if (a*i)%26 == 1 ,then i will be the multiplicative inverse of a 
        if (flag == 1) {  
            a_inv = inverseIndex; 
        } 
    } 
    for(textIndex = 0; textIndex < cipherArray.length; textIndex++) {
        var charachter = cipherArray[textIndex]
        var y = convertLetterToValue(charachter)
        if (y != -1) {
            var num = a_inv * (y - b)
            var x = num % 26
            if (x < 0) {
                x = -x
            }
            decryption += convertValueToLetter(x)
        }
    }
    return decryption
}

function columnarTransposition() {

}

function shiftCipher() {
}

function permeate() {
    var cipherText = document.getElementById("cipherTextField").value.toUpperCase()

}

function analyzeAlphabetType() {
}

function analyzeKeywordLength() {
    getKeywordLength()
    var cipherText = document.getElementById("cipherTextField").value.toUpperCase()
    var cipherArray = getCharachterArrayOfText(cipherText)
    console.log("Cipher Array: " + cipherArray)
    var keywordLength = estimateVigenereKeywordLength(cipherArray)
    console.log("Keyword Length: " + keywordLength)
}

function frequencyAnalysis() {
    getFrequencyCount()

    var cipherText = document.getElementById("cipherTextField").value.toUpperCase()
    var counts = getCountOfLettersInText(cipherText)
    var totalCharachters = getCharachterArrayOfText(cipherText).length
    var frequencys = calculateFrequencys(counts, totalCharachters)
    orderFrequencysSwapText(frequencys, cipherText)
}

function myFunction() {
    document.getElementById("cipherTypeDropdown").classList.toggle("show");
}

function generateAllNLetterCombinations(n) {
    var words = []
    var index = 0
    var j = 0
    for(index = 0; index < n; index++) {
        for(j = 0; j < standardAlphabet; j++) {

        }
        var word = ""
        words.push(word)
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("cipher-dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                console.log("inIf: " + openDropdown.value + " " + i)
            }
            //electedCipher = openDropdown.id
            console.log("OPen: " + openDropdown.id + " " + i)
        }
    }
}

