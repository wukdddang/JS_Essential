function IdolModel(name, year) {
  if (!new.target) {
    return new IdolModel(name, year);
  }

  this.name = name;
  this.year = year;
}

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);

const yuJin2 = IdolModel("안유진", 2003);

console.log(yuJin2.name, yuJin2.year);

const IdolModelArrow = (name, year) => {
  this.name = name;
  this.year = year;
};

const yuJin3 = new IdolModelArrow("안유진", 2003);
