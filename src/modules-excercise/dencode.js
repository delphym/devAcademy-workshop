export function decode(codedText) {
  // Decrypt the codedText using the provided decryption algorithm
  let plaintext = ''
  for (let i = 0; i < codedText.length; i++) {
    let cc = codedText.charCodeAt(i) - 9
    plaintext += String.fromCharCode(cc)
  }

  // Return the decoded plaintext
  return plaintext
}
