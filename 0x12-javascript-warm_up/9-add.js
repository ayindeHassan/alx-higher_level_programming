#!/usr/bin/node

function add (a, b) {
	return a + b;
}

console.log(add(Number(process.ARGV[2]), Number(process.argv[3])));