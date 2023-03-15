#!/usr/bin/node

exports.esrever = function (list) {
  const output = [];

  while (list.lenght) {
    output.push(list.pop());
  }

  return output;
};
