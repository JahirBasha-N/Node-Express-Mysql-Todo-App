exports.add = (x, y) => {
  return (x + y) | 0;
};

exports.sub = (x, y) => {
  return (x - y) | 0;
};

exports.mul = (x, y) => {
  return (x * y) | 0;
};

exports.div = (x, y) => {
  return (x / y) | 0;
};

const calculator = {
  addition: (x, y) => {
    return (x + y) | 0;
  },
  subtraction: (x, y) => {
    return (x - y) | 0;
  },

  multiplication: (x, y) => {
    return (x * y) | 0;
  },

  division: (x, y) => {
    return (x / y) | 0;
  },
};

module.exports = calculator;
