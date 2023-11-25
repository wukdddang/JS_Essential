/**
 * Static Keyword
 */

// class IdolModel {
//   name;
//   year;
//   static groupName = "아이브";
//   // 인스턴스에는 static 키워드가 없지만, 클래스가 가지고 있게 된다. (클래스 자체에 귀속이 된다.)

//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }

//   static returnGroupName() {
//     return this.groupName;
//   }
// }

// const yuJin = new IdolModel("안유진", 2003);
// console.log(yuJin);

// console.log(IdolModel.groupName);
// console.log(IdolModel.returnGroupName());

/**
 * static 키워드를 어디다 쓰나?
 * factory constructor라는 개념에 많이 쓰인다.
 */

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  // static method
  // factory constructor를 만든다.
  // object로부터 클래스의 인스턴스를 만들겠다는 의미이다.
  static fromObject(object) {
    return new IdolModel(object.name, object.year);
  }

  // static method
  // list로부터 클래스의 인스턴스를 만들겠다는 의미이다.
  static fromList(list) {
    return new IdolModel(list[0], list[1]);
  }
}

const yuJin2 = IdolModel.fromObject({
  name: "안유진",
  year: 2003,
});

const wonYoung = IdolModel.fromList(["장원영", 2004]);

console.log(yuJin2);
console.log(wonYoung);
