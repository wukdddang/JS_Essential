/**
 * extensible
 */

const user = {
  name: "changuk",
  year: 1998,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - this.age;
  },
};

console.log(Object.isExtensible(user)); // true

user["good"] = true;

console.log(Object.getOwnPropertyDescriptors(user));

Object.preventExtensions(user);

console.log(Object.isExtensible(user));

console.log(Object.getOwnPropertyDescriptors(user));

const yuJin = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

/**
 * Seal
 */

console.log(Object.isSealed(yuJin));

Object.seal(yuJin);

console.log(Object.isSealed(yuJin));

console.log(Object.getOwnPropertyDescriptor(yuJin, "name"));
Object.defineProperty(yuJin, "name", {
  writable: false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin, "name"));

/**
 * Freeze
 */

const yuJin2 = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(Object.isFrozen(yuJin2));

Object.freeze(yuJin2);

console.log(Object.isFrozen(yuJin2));

console.log(Object.getOwnPropertyDescriptors(yuJin2));

Object.defineProperty(yuJin2, "name", {
  value: "우창욱",
});
