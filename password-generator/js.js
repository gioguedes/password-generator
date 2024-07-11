const lengthSlider = document.getElementById('length');
        const lengthValue = document.getElementById('lengthValue');
        lengthValue.textContent = lengthSlider.value;
        lengthSlider.addEventListener('input', () => {
            lengthValue.textContent = lengthSlider.value;
        });

        // Gerar senha
        const passwordInput = document.getElementById('password');
        const generateButton = document.getElementById('generate');
        const copyButton = document.getElementById('copy');
        const refreshButton = document.getElementById('refresh');

        const lowercaseCheckbox = document.getElementById('lowercase');
        const numbersCheckbox = document.getElementById('numbers');
        const uppercaseCheckbox = document.getElementById('uppercase');
        const symbolsCheckbox = document.getElementById('symbols');
        const excludeDuplicatesCheckbox = document.getElementById('exclude-duplicates');
        const includeSpacesCheckbox = document.getElementById('include-spaces');

        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

        function generatePassword() {
            let characters = '';
            if (lowercaseCheckbox.checked) {
                characters += lowercase;
            }
            if (uppercaseCheckbox.checked) {
                characters += uppercase;
            }
            if (numbersCheckbox.checked) {
                characters += numbers;
            }
            if (symbolsCheckbox.checked) {
                characters += symbols;
            }
            if (includeSpacesCheckbox.checked) {
                characters += ' ';
            }

            let password = '';
            const length = parseInt(lengthSlider.value);

            for (let i = 0; i < length; i++) {
                let char = characters.charAt(Math.floor(Math.random() * characters.length));
                if (excludeDuplicatesCheckbox.checked) {
                    while (password.includes(char)) {
                        char = characters.charAt(Math.floor(Math.random() * characters.length));
                    }
                }
                password += char;
            }

            passwordInput.value = password;
        }

        generateButton.addEventListener('click', generatePassword);
        refreshButton.addEventListener('click', generatePassword);

        copyButton.addEventListener('click', () => {
            passwordInput.select();
            document.execCommand('copy');
        });

        // Gera a senha inicial ao carregar a página
        generatePassword();

        