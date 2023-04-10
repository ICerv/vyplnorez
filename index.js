const fillcut = (str, len) => {
  if (str.length > len) {
    return str.slice(0, len);
  } else if (str.length < len) {
    return str.padStart(len, '.');
  } else {
    return str;
  }
}

console.log(fillcut('petr', 8));
console.log(fillcut('petr', 3));
console.log(fillcut('petr', 4));
