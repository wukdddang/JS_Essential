const crypto = require("crypto");

/**
 * Closure
 *
 * 클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다.
 * 상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure 라고 한다.
 */

function getNumber() {
  const number = 5;

  function innerGetNumber() {
    return number;
  }

  return innerGetNumber;
}

function getNumber() {
  const number = 5;

  function innerGetNumber() {
    return number;
  }

  return innerGetNumber;
}

// getNumber가 call stack에서 사라진 뒤. => 상위함수보다 하위함수가 더 오래 살아남았다.
const runner = getNumber();

console.log(runner());

/** 1) 데이터 캐싱 */
function cacheFunction() {
  // 계산이 오래 걸리는 부분
  var hash = crypto.createHash("sha256").update("some big data").digest("hex");

  console.log(hash);
  function innerCacheFunction(newNumb) {
    var partialHash = parseInt(hash.substring(0, 5), 16);
    return partialHash * newNumb;
  }

  return innerCacheFunction;
}

const runner2 = cacheFunction();
console.log(runner2(10));
console.log(runner2(300));

/** 2) 값을 변경해야할 때 */

function cacheFunction2() {
  var number = 99;

  function increment() {
    number++;
    return number;
  }

  return increment;
}

const runner3 = cacheFunction2();

console.log(runner3());
console.log(runner3());

/** 3) 정보 은닉 */

function Idol(name, year) {
  this.name = name;

  var _year = year;

  this.sayNameAndYear = function () {
    return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났어요`;
  };
}

const yuJin = new Idol("안유진", 2003);
console.log(yuJin.sayNameAndYear());

console.log(yuJin._year);
