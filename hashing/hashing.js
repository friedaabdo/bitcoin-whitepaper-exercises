"use strict";

var crypto = require("crypto");

// The Power of a Smile
// by Tupac Shakur
var poem = [
	"The power of a gun can kill",
	"and the power of fire can burn",
	"the power of wind can chill",
	"and the power of a mind can learn",
	"the power of anger can rage",
	"inside until it tears u apart",
	"but the power of a smile",
	"especially yours can heal a frozen heart",
];

var Blockchain = {
	blocks: [],
};

// Genesis block is the only block that is hard coded, the rest will be dynamic

Blockchain.blocks.push({
	index: 0,
	hash: "000000",
	data: "",
	timestamp: Date.now(),
});

// TODO: insert each line into blockchain
for (let line of poem) {
	createBlock(line)
}

// create a function called createBlock()
// 'index'
// 'prevHash'
// 'data'
// 'timestamp'
// 'hash'

function createBlock(_data) {
	let block = {
		index: Blockchain.blocks.length,
		prevHash:Blockchain.blocks[Blockchain.blocks.length-1].hash,
		data: _data,
		timestamp: Date.now()
	}

	//hash has to be outside the block obj bc those are the datas that need to be hashed, then we add the hash to obj at the end
	block.hash = blockHash(block) 
	Blockchain.blocks.push(block)
	// console.log(block)
	return block
}

// console.log(`Blockchain is valid: ${verifyChain(Blockchain)}`);


// **********************************

function blockHash(bl) {  


	// you can stringify the block before putting it into the return statement func, or call them via string interpolation below
	// let block = JSON.stringify(bl)

	return crypto.createHash("sha256").update(
		// TODO: use block data to calculate hash
		// block // --> can place the stringified variable block (line 63) instead of string interpolation
		`${bl.index};${bl.prevHash};${bl.data};${bl.timestamp}`
	).digest("hex");
}

console.log(Blockchain.blocks)