import * as crypto from 'crypto';

export function generateRandomNumber(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomEmail() {
  const randomUsername = crypto.randomBytes(9).toString('hex');
  const randomDomainName = crypto.randomBytes(4).toString('hex');
  const randomDomainZone = generateRandomAlphaString(5);
  return `${randomUsername}@${randomDomainName}.${randomDomainZone}`;
}

export function generateRandomNumericString(length: number) {
  let temp: Array<number> = [];
  for (let i = 0; i < length; i++) {
    temp.push(generateRandomNumber(0, 9));
  }
  return temp.join('');
}

export function generateRandomAlphaString(length: number) {
  let temp: Array<string> = [];
  const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    temp.push(symbols.charAt(generateRandomNumber(0, symbols.length - 1)));
  }
  return temp.join('');
}

export function generateRandomString(length: number) {
  return crypto.randomBytes(length).toString('base64');
}

export function generateRandomDate() {
  const randomDay = generateRandomNumber(1, 28).toString();
  const randomMonth = generateRandomNumber(1, 12).toString();
  const year = generateRandomNumber(1990, 2022).toString();
  const day = randomDay.length !== 2 ? `0${randomDay}` : randomDay;
  const month = randomMonth.length !== 2 ? `0${randomMonth}` : randomMonth;
  return {
    day,
    month,
    year,
  };
}
