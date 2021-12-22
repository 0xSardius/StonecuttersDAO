import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x06f040B7b2f6D1315fCD62961B2E5ad18a6EE731",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Stonecutters badge",
        description: "This grants access to the shadowy cabal of super coders, The Stonecutters. Rest easy knowing we will build together and profit share off world changing web3 dapps!",
        image: readFileSync("scripts/assets/membership.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
