'use strict';

const Util = {

  sort: (array, sortAsc) => {
    return array.sort((a, b) => {
      if ( sortAsc ) {
        return a - b;
      } else {
        return b - a;
      }
    });
  },

  min: array => {
    const sorted = Util.sort(array, true);
    return sorted[0];
  },

  max: array => {
    const sorted = Util.sort(array);
    return sorted[0];
  },

  avg: array => {
    return Util.sum(array) / array.length;
  },

  sum: array => {
    return array.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
  },

  fmt: num => {
    num = ~~num / 100;
    return num.toLocaleString();
  }
};

module.exports = Util;
