document.getElementById('generate-btn').addEventListener('click', function() {
    const length = document.getElementById('length').value;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSymbols = document.getElementById('include-symbols').checked;
    
    const password = generatePassword(length, includeNumbers, includeSymbols);
    document.getElementById('password').value = password;
});

function generatePassword(length, includeNumbers, includeSymbols) {
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_-+=<>?/{}[]|';

    let characters = lowerCaseChars + upperCaseChars;

    if (includeNumbers) {
        characters += numbers;
    }
    
    if (includeSymbols) {
        characters += symbols;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    
    return password;
}
