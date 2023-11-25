/**
 * Async theory
 */

/**
 * 동기 프로그래밍은 메인 스레드 하나를 차지하게 되는데, 코드의 작업이 끝날 때 까지
 * 스레드를 차지한다.
 */
function longWork() {
  const now = new Date();

  /**
   * miliseconds since epoch
   * 1970년 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을
   * 밀리초로 변환한다.
   */
  const miliseconds = now.getTime();
  const afterTwoSeconds = miliseconds + 2 * 1000;

  while (new Date().getTime() < afterTwoSeconds) {}

  console.log("완료");
}

// console.log("Hello");
// longWork();
// console.log("World");

function longWork() {
  // 비동기로 실행하는 함수 setTimeout
  setTimeout(() => {
    console.log("완료");
  }, 2000);
}

console.log("Hello");
longWork();
console.log("World");
