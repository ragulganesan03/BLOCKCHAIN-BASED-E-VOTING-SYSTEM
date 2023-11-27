# BLOCKCHAIN-BASED-E-VOTING-SYSTEM
BLOCK CHAIN BASED E-VOTING SYSTEM using React JS, Solidity, Metamask and Volta Energy Web 

# Decentralized Voting Application

This is a demo application to implement voting in solidity smart contract using ReactJS. 

## Installation

After you cloned the repository, you want to install the packages using

```shell
npm install

```
You first need to compile the contract and upload it to the blockchain network. Run the following commands to compile and upload the contract.
```shell
npx hardhat compile
npx hardhat run --network volta scripts/deploy.js
```

Once the contract is uploaded to the blockchain, copy the contract address and copy it in the .env file. You can also use another blockchain by writing the blockchain's endpoint in hardhat-config.

Once you have pasted your private key and contract address in the .env file, simply run command

```shell
npm start
```
LOGIN PAGE OF THE WEBSITE TO CAST THE VOTING:
![image](https://github.com/ragulganesan03/BLOCKCHAIN-BASED-E-VOTING-SYSTEM/assets/130173143/4a3b42ce-8e57-409d-837c-6319f7441c9f)

AFTER VERIFICATION LOGIN WITH THE METAMASK: 
![image](https://github.com/ragulganesan03/BLOCKCHAIN-BASED-E-VOTING-SYSTEM/assets/130173143/a3889b1f-1e93-4556-b7fc-bddb0b929fbb)

CHOOSING THE DESIRED CANDIDATE AND VOTING: 
![image](https://github.com/ragulganesan03/BLOCKCHAIN-BASED-E-VOTING-SYSTEM/assets/130173143/00c6060f-73c8-4727-81c4-9052f85c1378)

META MASK WALLET TO VERIFY:
![image](https://github.com/ragulganesan03/BLOCKCHAIN-BASED-E-VOTING-SYSTEM/assets/130173143/d3740d04-8132-4be4-9e9b-57b90b39f066)

END OF VOTING PERDIOD: 
![image](https://github.com/ragulganesan03/BLOCKCHAIN-BASED-E-VOTING-SYSTEM/assets/130173143/1005983e-c421-48b1-898c-a33785d60299)

VOTING RESULTS:
![image](https://github.com/ragulganesan03/BLOCKCHAIN-BASED-E-VOTING-SYSTEM/assets/130173143/bc0c046d-eb45-4f52-af88-bca04e6b9e34)
