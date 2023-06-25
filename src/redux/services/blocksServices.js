// import axios from "axios";
const { ethers } = require("ethers");

const INFURA_ID =
  "https://mainnet.infura.io/v3/1831522c8b60409f9c00d9d9ca52ef04";
const provider = new ethers.providers.JsonRpcProvider(INFURA_ID);

const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",

  "event Transfer(address indexed from, address indexed to, uint amount)",
];

const address = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; // DAI Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const all_blocks = async (address) => {
  const blocks = await provider.getBlockNumber();

  //   const blockInfo = await provider.getBlock(blocks);

  //   const { transactions } = await provider.getBlockWithTransactions(blocks);

  const transferEvent = await contract.queryFilter(
    "Transfer",
    blocks - 5,
    blocks
  );
  console.log(transferEvent);
  return transferEvent;
};

const blocksServices = {
  all_blocks,
};

export default blocksServices;
