/**
 * callback
 */

// function waitAndRun() {
//   setTimeout(() => {
//     console.log("끝");
//   }, 2000);
// }

// waitAndRun();

// // 좋지않은 코드 작성법
// function waitAndRun2() {
//   setTimeout(() => {
//     console.log("1번 콜백 끝");
//     setTimeout(() => {
//       console.log("2번 콜백 끝");
//       setTimeout(() => {
//         console.log("3번 콜백 끝");
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }

// waitAndRun2();

/**
 * Promise
 */

const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("완료");
  }, 2000);
});

// resolve가 실행되면, then이 실행된다.
// timeoutPromise.then((res) => {
//   console.log("---then---");
//   console.log(res);
// });

const getPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("완료");
      // reject("에러");
    }, seconds * 1000);
  });

// resolve

// getPromise(1)
//   .then((res) => {
//     console.log("--- first then ---");
//     console.log(res);

//     return getPromise(1);
//   })
//   .then((res) => {
//     console.log("--- second then ---");
//     console.log(res);

//     return getPromise(4);
//   })
//   .then((res) => {
//     console.log("--- third then ---");
//     console.log(res);
//   });

// reject

// getPromise(1)
//   .then((res) => {
//     console.log("--- first then ---");
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log("--- first catch ---");
//     console.log(res);
//   })
//   .finally(() => {
//     console.log("--- finally ---");
//   });

// 가장 느린 함수를 기준으로 then, catch가 불린다.
Promise.all([getPromise(1), getPromise(2), getPromise(3)]).then((res) => {
  console.log(res);
});
