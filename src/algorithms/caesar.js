// Function to encrypt a message using the Caesar cipher
function caesarCipherEncrypt(message, shift) {
  let encryptedMessage = '';

  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    
    // Encrypt uppercase letters
    if (char >= 'A' && char <= 'Z') {
      encryptedMessage += String.fromCharCode((char.charCodeAt(0) - 65 + shift) % 26 + 65);
    }
    // Encrypt lowercase letters
    else if (char >= 'a' && char <= 'z') {
      encryptedMessage += String.fromCharCode((char.charCodeAt(0) - 97 + shift) % 26 + 97);
    }
    // Keep non-alphabetic characters unchanged
    else {
      encryptedMessage += char;
    }
  }

  return encryptedMessage;
}

// Function to decrypt a message using the Caesar cipher
function caesarCipherDecrypt(message, shift) {
  // Decryption is essentially encryption with a negative shift
  return caesarCipherEncrypt(message, -shift);
}

// Function to prompt the user for input
function getUserInput() {
  const plaintext = prompt("Enter the plaintext message:");
  let key;

  while (true) {
    key = parseInt(prompt("Enter the key (a number between 1 and 25):"));

    if (!isNaN(key) && key >= 1 && key <= 25) {
      break;
    } else {
      alert("Invalid key! Key must be a number between 1 and 25.");
    }
  }

  return { plaintext, key };
}

// Main function
function main() {
  const userInput = getUserInput();
  if (userInput) {
    const { plaintext, key } = userInput;
    const encryptedMessage = caesarCipherEncrypt(plaintext, key);
    const decryptedMessage = caesarCipherDecrypt(encryptedMessage, key);

    console.log("Plaintext:", plaintext);
    console.log("Encrypted:", encryptedMessage);
    console.log("Decrypted:", decryptedMessage);
  }
}

// Run the main function
main();
