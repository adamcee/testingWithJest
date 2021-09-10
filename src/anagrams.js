
function isAnagram(word1, word2) {
  function sortString(word) {
    const lowerCaseWord = word.toLowerCase()  // hello
    // Example: 'Hello'
    return lowerCaseWord
            .toLowerCase()  // hello
            .split('')      // ['h', 'e', 'l', 'l', 'o']
            .sort()         // ['e', 'h', 'l', 'l']
            .join('');      // 'ehllo'

  }

  return sortString(word1) === sortString(word2); 
}

/**
 * @param {Array<String>} wordPair 
 * @returns {boolean}
 */
function testIsAnagram(wordPair, expectedResult) {
  const result = isAnagram(wordPair[0], wordPair[1])

  if(expectedResult !== result) {
    console.log('----TEST FAILURE----');
    console.log(`Expect isAnagram() to be ${expectedResult} for ${wordPair} BUT actual result is: ${result}`);

  } else {
    console.log(`Expect isAnagram() to be ${expectedResult} for ${wordPair}, actual result is: ${result}`);
  }
}

// test data
const notAnagramPair1 = ['cat', 'hat'];
const notAnagramPair2 = ['cat', 'banana'];

const potentialAnagrams = [
  { wordPair: ['cat', 'hat'], isAnagram: false},
  { wordPair: ['cat', 'banana'], isAnagram: false},
  { wordPair: ['cat', 'treetop'], isAnagram: false},
  { wordPair: ['evil', 'vile'], isAnagram: true},
];


potentialAnagrams.forEach(pa => testIsAnagram(pa.wordPair, pa.isAnagram));