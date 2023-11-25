const hello = {
  hi: function () {
    return this;
  },
  hi2: () => {
    return this;
  },
};

console.log(hello.hi());
console.log(hello.hi2());
