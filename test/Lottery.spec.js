const assert = require("assert");
const Web3 = require("web3");
const ganache = require("ganache-cli");

/**
 * Our instance of web3 attempting
 * to connect to our test network
 * created by ganache
 */
const web3 = new Web3(ganache.provider());

let account;

/**
 * Get a list of all unlocked
 * accounts provided to use via
 * web3 and deploying our contract
 */
beforeEach(async () => {
    const accounts = await web3.eth.getAccounts();
    account = accounts[0];
});

describe("Lottery Contract", () => {
    /**
     * Creating a lottery
     */
    it("Should allow us to create a lottery", () => {});

    /**
     * Deploying Lottery
     */
    it("Should allow us to deploy the lottery", () => {});

    /**
     * Entering the lottery
     */
    it("Should allow a user to enter the lottery should they send > 0.01 ether", () => {});

    it("Should NOT allow a user to enter the lottery should they send <= 0.01 ether", () => {});

    /**
     * Choosing a winner
     */
    it("Should allow the manager to pick a winner", () => {});

    it("Should NOT allow a user whom is not the manager to choose a winner", () => {});

    it("Should send the choosen winner the pool of ether", () => {});
});
