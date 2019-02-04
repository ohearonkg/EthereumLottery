const path = require("path");
const fs = require("fs");
const solc = require("solc");

/**
 * Determine path to our
 * contract and read the source
 * file using UTF8
 */
const lotteryPath = path.resolve(__dirname, "contracts", "Lottery.sol");
const lotterySource = fs.readFileSync(lotteryPath, "UTF-8").toString();

const input = {
    language: "Solidity",
    sources: {
        "Lottery.sol": {
            content: lotterySource
        }
    },
    settings: {
        outputSelection: {
            "*": {
                "*": ["*"]
            }
        }
    }
};

/**
 * Compile using solidity compiler
 */
const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
    "Lottery.sol"
]["Lottery"];

const bytecode = output["evm"]["bytecode"]["object"];

const abi = output["abi"];

module.exports = { abi: abi, bytecode: bytecode };
