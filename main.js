require("dotenv").config();

const Web3 = require("web3");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const main = async () => {
  console.log("Starting executiion");
  console.log("WS URL: " + process.env.WS_URL);

  const web3 = new Web3(
    new Web3.providers.WebsocketProvider(process.env.WS_URL)
  );

  const subscription = web3.eth.subscribe("newBlockHeaders");

  subscription.on("data", async (block, error) => {
    console.log(block);
  });

  await sleep(60000);
};

main()
  .then(() => {
    console.log("Execution complete");
  })
  .catch((err) => {
    console.log("Error in execution: " + err);
  });