import { encode } from './encode.js'
import { decode } from './dencode.js'

// Encrypt the given text using the encode function
const inputForEncoding = document.getElementById('plainTextArea')
const outputForEncoding = document.getElementById('codedText')

inputForEncoding.addEventListener('change', (event) => {
  const plaintext = inputForEncoding.value
  const codedText = encode(plaintext)
  outputForEncoding.textContent = codedText
})

// Decrypt the given text using decode function
const inputForDecoding = document.getElementById('codedTextArea')
const outputForDecoding = document.getElementById('plainText')

inputForDecoding.addEventListener('change', (event) => {
  const codedText = inputForDecoding.value
  const plaintext = decode(codedText)
  outputForDecoding.textContent = plaintext
})
