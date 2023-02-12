// add the game address here and update the contract name if necessary
// Game1 contract address
// const gameAddr = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
// const contractName = "Game1";

// Game2 contract address
// const gameAddr = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
// const contractName = "Game2";

// const gameAddr = "0x0165878A594ca255338adfa4d48449f69242Eb8F";
// const contractName = "Game3";

// const gameAddr = "0x0B306BF915C4d645ff596e518fAf3F9669b97016";
// const contractName = "Game4";

const gameAddr = "0x3Aa5ebB10DC797CAC828524e59A333d0A371443c";
const contractName = "Game5";

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  // do whatever you need to do to win the game here:
  // // game1:
  // const tx = await game.win();

  // // game2:
  // await game.setX(30);
  // await game.setY(20);
  // const tx = await game.win();

  // // game3:
  // const tx = await game.win(45);

  // // game4:
  // const tx = await game.win(56);

  // // game5:
  await game.giveMeAllowance(100001);
  await game.mint(10001);
  const tx = await game.win();

  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array
  const receipt = await tx.wait();
  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
