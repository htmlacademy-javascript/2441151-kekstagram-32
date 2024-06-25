const isStringLengthValid = (inputString, maxLength) => inputString.length <= maxLength;

const isPalindrome = (inputString) => {
  const normalizedString = inputString.replaceAll(' ', '').toUpperCase(); //replace(/\s/g, '')

  let reversedString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }
  return normalizedString === reversedString;
};

const extractDigits = (input) => {

  const inputString = input.toString();

  const digits = inputString.match(/\d/g);

  if (!digits) {
    return NaN;
  }

  const result = parseInt(digits.join(''), 10);

  return Number.isNaN(result) ? NaN : result;
};

// console.log(isStringLengthValid('Hello World!', 10));
// console.log(isPalindrome('Лёша на полке клопа нашёл'));
// console.log(extractDigits('1 кефир, 0.5 батона'));

isStringLengthValid('Hello World!', 10);
isPalindrome('Лёша на полке клопа нашёл');
extractDigits('1 кефир, 0.5 батона');
