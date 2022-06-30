/*


A Caesar Cypher is a classic encryption 
technique favored by the ancient Romans.

Define a function, `caesarCypher`, that accepts two arguments:
  1. secret (string) - the string we want to encrypt
  2. shift (num) - the number we want to rotate each 
  letter in the string by

`caesarCypher` should return an encrypted version of 
the string shifted by the number of letters supplied. For 
example, the string 'abc' shifted by 2 should return 'ced'. 
Spaces between words should not be rotated. Note that any 
shifts that exceed the end of the alphabet should wrap 
around. For example, the string 'xyz' shifted by 2 should 
return 'zab', the string 'hello' shifted by 13 should 
return 'urryb'.

You can assume the shift number will be a positive integer. 
Additionally, you may assume that the secret string will 
be entirely lower case



*/
// original version that uses more original functions . works
// convert letter to alphabet position number
function findLetterPosition(letter, array){  // pass in letter and alphabet for array
    for(let i=0; i<array.length; i++){  // iterate through lettersArray
      if (letter === array[i]){ // match letter to alphabet letter
        return i;   // returns letter position in alphabet
      }
    }
};
  
function caesarCypher(string, num){
    const lettersArray = ["a", "b", "c", "d", "e", "f", "g", 
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", 
    "s", "t", "u", "v", "w", "x", "y", "z"];
    let encryptedString ="";  // end result
    
    for (let i=0; i<string.length; i++){ // go through the string
        let currentLetter = string[i];  // store letter in currentLetter
        
        if (currentLetter === " "){   // if theres a space add the space to result
            encryptedString = encryptedString + " ";
            continue;   // continue to rest of loop
        }
        
        // find position of the letter in the alphabet
        let letterPos = findLetterPosition(currentLetter, lettersArray);  // convert the letter of the word to alphabet number
        let encryptedLetterPos = (letterPos +num)%26; // alphabet number + shift aka the encrypted letter
        let encryptedLetter = lettersArray[encryptedLetterPos];  // convert encrypted index to encrypted character
        encryptedString = encryptedString + encryptedLetter;  // concatenate encrypted character to encryptedstring                         
    }
    
    console.log("the encrypted word is "+ encryptedString);
    return encryptedString;
};


/* optional testing here
describe('Caesar Cypher', () => {

  it('is a function?', () => {
    expect(typeof caesarCypher).toEqual('function');
  });

  it('rotates a letter by the number passed in', () => {
    let returnedValue = caesarCypher('a', 2);
    expect(returnedValue).toEqual('c');
  });

  it('rotates every letter in the string by the supplied letter', () => {
    let returnedValue = caesarCypher('doggo', 7);
    expect(returnedValue).toEqual('kvnnv');
  });

  it('wraps around to the beginning of the alphabet when necessary', () => {
    let returnedValue = caesarCypher('hello', 13);
    expect(returnedValue).toEqual('uryyb');
  });

  it('retains spaces between encrypter world', () => {
    let returnedValue = caesarCypher('hello world', 13);
    expect(returnedValue).toEqual('uryyb jbeyq');
  });

});




*/

