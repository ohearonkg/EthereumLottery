pragma solidity ^0.5.3;

contract Lottery {
    /**
    * Person who has created
    * this contract
    */
    address public manager;

    /**
    * List of players who
    * have entered the lottery 
    */
    address payable[] public players;

    /**
    * Determine who created
    * the contract and assign
    * their address
    */
    constructor() public {
        manager = msg.sender;
    }

    /**
    * Player entering the lottery
    * expects the user to place some
    * amount of ether into the
    * lottery pool
    */
    function enter() public payable {

        /**
        * Ensure the sender has sent
        * at least 0.1 ether to the 
        * lottery pool
        */
        require(msg.value >= .01 ether);

        players.push(msg.sender);
    }

    /**
    * Generating pseudo random number
    * for selecting a winner
    */
    function random() private view returns(uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, now, players)));
    }

    function pickWinner() public restrictToManger returns(address) {

        /**
        * Pick winner's address and send their
        * balance of the winner's address
        */
        uint winnerIndex = random() % players.length;
        players[winnerIndex].transfer(address(this).balance);

        /**
        * Reset the array to allow for the lottery
        * to reset
        */
        players = new address payable[](0);
    }

    /**
    * Function to show ALL addresses of players
    * who have entered the lottery
    */
    function getPlayers() public view returns(address payable[] memory){
        return players;  
    }

    /**
    * Ensuring only the manager may
    * perform the desired operation
    */
    modifier restrictToManger() {
        require(msg.sender == manager);
        _;
    }
}
