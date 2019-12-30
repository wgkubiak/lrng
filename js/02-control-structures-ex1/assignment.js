const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
    alert(randomNumber.toFixed(1));
}

const arr = [1, 2, 3, 5, 6, 7, 2, 3, 12, 32];

console.log("---- for ----");

for (let i = arr.length -1; i >= 0; --i) {
    console.log(arr[i]);
}

console.log("---- for-of ----");

for (const el of arr) {
    console.log(el);
}

console.log("---- for-of ----");

const _randomNumber = Math.random();

console.log(randomNumber.toFixed(1), _randomNumber.toFixed(1));

if ((_randomNumber > 0.7 && randomNumber > 0.7) || (_randomNumber < 0.2 || randomNumber < 0.2)) {
    alert(`${randomNumber.toFixed(1)}, ${_randomNumber.toFixed(1)}`);
}