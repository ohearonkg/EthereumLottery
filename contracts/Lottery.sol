pragma solidity ^0.5.3;

contract Lottery {
    address public manager;
    address payable[] public players;

    constructor() public {
        manager = msg.sender;
    }

   function enter() public payable {

        /**
        * Ensure the sender has sent
        * at least 0.1 ether to the 
        * lottery pool
        */
        require(msg.value >= .01 ether);

        players.push(msg.sender);
    }

    function random() private view returns(uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, now, players)));
    }

    function pickWinner() public restrictToManger returns(address) {

        uint winnerIndex = random() % players.length;
        players[winnerIndex].transfer(address(this).balance);

        players = new address payable[](0);
    }

    function getPlayers() public view returns(address payable[] memory){
        return players;  
    }

    modifier restrictToManger() {
        require(msg.sender == manager);
        _;
    }
}
