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
        "Lotter.sol": {
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
module.exports = solc.compile(JSON.stringify(input))[":Lottery"];
