let count = 0;

function f1() {
  console.log(count);
  console.log(this);
  this.textContent = count;
  count++;
}

document.querySelector(".b-1").addEventListener("click", f1);

// const f2 = () => {
//   console.log(count);
//   console.log(this);
//   this.textContent = count;
//   count++;
// };

// document.querySelector(".b-2").addEventListener("click", f2);

f1.call(document.querySelector(".b-1"));
// f1.call(document.querySelector(".b-1"));
// f1.call(document.querySelector(".b-2"));

document.querySelector(".b-1").addEventListener("click", () => {
  f1.call(document.querySelector(".b-1"));
});

f1.call(document.querySelector(".b-1"));
// f1.call(document.querySelector(".b-1"));
// f1.call(document.querySelector(".b-2"));

document.querySelector(".b-1").addEventListener("click", () => {
  f1.call(document.querySelector(".b-2"));
});

function f3(count) {
  console.log(count);
  console.log(this);
  this.textContent = count;
  count++;
}
document.querySelector(".b-3").addEventListener("click", () => {
  count++;
  f1.call(document.querySelector(".b-2"), count);
});

function sum1(a, b) {
  this.innerHTML = a + b;
}

document.querySelector(".b-2").addEventListener("click", () => {
  sum1.call(document.querySelector(".out-3"), 14, 4);
  sum1.apply(document.querySelector(".out-4"), [14, 4]);
});

const f4 = sum1.bind(document.querySelector(".out-5"));
f1(4);

document.querySelector(".b-5").addEventListener("click", f4);

const sum2 = sum1.bind(document.querySelector(".out-6"));
sum2(11, 45);

function sum3(a, b, c) {
  console.log(arguments);
  this.innerHTML = a + b + c;
}

const sum4 = sum3.bind(document.querySelector(".b-6"), 100);

document.querySelector(".b-6").addEventListener("click", () => {
  sum4(3, 4, 5);
});

function sum7(a, b, c) {
  return a + b + c;
}

const sum8 = sum7.bind(100, 500);

document.querySelector(".b-7").addEventListener("çlick", () => {
  document.querySelector(".out-7").textContent = sum8(5);
});
//  вытягивание обьектов
const validate = {
  password: " himahai lhjuhojh  ",
  email: "pupkin@de",
  isValid: false,
  sayHi() {
    console.log(this);
    return this.password.length > 6 ? true : false;
  },
};

console.log(validate.sayHi());

const obj = { password: "hello" };
const validatePassword = validate.sayHi.bind(obj);

console.log(validatePassword());
