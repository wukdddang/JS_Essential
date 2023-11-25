/**
 * class: 클래스는 객체지향 프로그래밍에서 특정 객체인 인스턴스를 생성하기 위해
 * 변수와 메서드를 정의하는 일종의 틀이라고 할 수 있다.
 *
 * 실제 데이터를 구현한 것을 객체라고 하고, 데이터를 구현하는 데 일반화 된 정보들을
 * 정리해 둔 것을 클래스라고 부른다.
 *
 * 이 클래스를 객체로 만드는 과정을 인스턴스화 라고 한다.
 *
 * 자바스크립트에서 객체를 만드는 방법에는 class 키워드를 사용하는 방법과 생성자 함수, 오브젝트 리터럴이 있다.
 * 자바스크립트에서 객체는 0개 이상의 프로퍼티로 이루어져 있다.
 * 프로퍼티는 key-value 쌍으로 이루어지고 함수인 프로퍼티를 메서드라고 부른다.
 */

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayName() {
    return `안녕하세요 저는 ${this.name}입니다.`;
  }
}

// 생성자 - constructor

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);

console.log(yuJin.name);
console.log(yuJin.year);
console.log(yuJin.sayName());

const gaEul = new IdolModel("가을", 2002);

const ray = new IdolModel("레이", 2004);

const liz = new IdolModel("리즈", 2004);

const eseo = new IdolModel("이서", 2007);

const wonYoung = new IdolModel("장원영", 2004);

console.log(wonYoung.sayName());

// 클래스는 함수이다.
console.log(typeof IdolModel);
console.log(typeof yuJin);
