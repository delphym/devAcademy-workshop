export function encode(plaintext) {
  // Encrypt the plaintext using the provided encryption algorithm
  let codedText = ''
  for (let i = 0; i < plaintext.length; i++) {
    let cc = plaintext.charCodeAt(i) + 9 // they'll never figure this out
    codedText += String.fromCharCode(cc)
  }

  // Return the encoded codedText
  return codedText
}

console.log(encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ'))
