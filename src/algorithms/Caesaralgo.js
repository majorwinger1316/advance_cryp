export const encryptCaesarCipher = (plaintext, shift) => {
    let ciphertext = '';

    for (let i = 0; i < plaintext.length; i++) {
        let charCode = plaintext.charCodeAt(i);
        let encryptedCharCode;

        if (charCode >= 65 && charCode <= 90) { // Uppercase letters
            encryptedCharCode = ((charCode - 65 + shift) % 26 + 26) % 26 + 65;
        } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
            encryptedCharCode = ((charCode - 97 + shift) % 26 + 26) % 26 + 97;
        } else {
            encryptedCharCode = charCode; // Leave non-alphabetic characters unchanged
        }

        ciphertext += String.fromCharCode(encryptedCharCode);
    }

    return ciphertext;
};

export const decryptCaesarCipher = (ciphertext, shift) => {
    let plaintext = '';

    for (let i = 0; i < ciphertext.length; i++) {
        let charCode = ciphertext.charCodeAt(i);
        let decryptedCharCode;

        if (charCode >= 65 && charCode <= 90) { // Uppercase letters
            decryptedCharCode = ((charCode - 65 - shift) % 26 + 26) % 26 + 65;
        } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
            decryptedCharCode = ((charCode - 97 - shift) % 26 + 26) % 26 + 97;
        } else {
            decryptedCharCode = charCode; // Leave non-alphabetic characters unchanged
        }

        plaintext += String.fromCharCode(decryptedCharCode);
    }

    return plaintext;
};
