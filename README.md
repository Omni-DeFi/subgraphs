# AstraDeFi Subgraphs

This repository contains the subgraph configurations and deployment scripts for the AstraDeFi platform, which tracks key data from the platform’s smart contracts across multiple networks. Subgraphs are used to efficiently index and query blockchain data, allowing for real-time data retrieval, such as staking balances, rewards, liquidity pool data, and more.

## 🛠️ Tech Stack

- **The Graph**: A decentralized protocol for indexing blockchain data.
- **Graph CLI**: Command-line tool for managing subgraph projects.
- **Graph Node**: Handles indexing and querying.
- **PostgreSQL**: Used for storing indexed data.
- **Docker**: For containerizing the services and dependencies.

## 🚀 Key Features

- **Real-time Data**: The subgraph continuously indexes new blocks to reflect real-time data for staking, rewards, liquidity provision, and AMM activities.
- **Multiple Contract Support**: Easily add and track new contracts in the subgraph.
- **Cross-Chain Support**: The subgraph tracks contract data across multiple blockchains and testnets, including Ethereum, Base, Polygon, Optimism, and more.

## 📦 Useful Commands

1. **Clean Environment**:
   - Reset Docker, hardhat network, and clean deployment files:
     `Clean all deployment-related data: remove networks from MetaMask, reset activity data from the advanced settings, and run the necessary commands to clean the environment.`

2. **Compile Contracts**:
   - Compile all smart contracts using hardhat:
     ``npx hardhat compile``

3. **Start Local Blockchain Node**:
   - Run a local blockchain node with hardhat:
     ``npx hardhat node``

4. **Deploy Contracts**:
   - Deploy the staking contract (or other contracts):
     ``npx hardhat run scripts/deploy.ts --network localhost``

5. **Start PostgreSQL**:
   - Start the PostgreSQL server:
     ``sudo service postgresql start``

6. **Run Graph Node**:
   - Navigate to the graph-node directory and start the graph node with Docker:
     `cd graph-node && cd docker && docker-compose up`

7. **Clean and Redeploy Subgraph**:
   - Remove and redeploy the local subgraph after starting the graph node:
     - ``yarn remove-local``
     - ``yarn create-local``
     - ``yarn deploy-local``

8. **EVM Mining Interval**:
   - Set an interval for block mining in a local hardhat network to avoid stale data:
     ``await network.provider.send("evm_setIntervalMining", [5000]);``

## 🔧 Graph Setup and Management

### Initializing a New Subgraph

To initialize a new subgraph from a smart contract:
``graph init --from-contract 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0 --network localhost --abi ./abis/Staking.json staking_graph``

### Adding Additional Contracts to the Subgraph

To add more contracts to the existing subgraph:
``graph add 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512 --abi ../abis/RewardToken.json --contract-name RewardToken``

### Deploying Contracts via Hardhat Scripts

To run a hardhat deploy script:
``npx hardhat run scripts/deploy.ts --network localhost``

## 📜 Scripts Available

Here are the most important scripts defined in the `package.json`:

- **codegen**: Generates TypeScript types from the GraphQL schema.
  ``yarn codegen``

- **build**: Builds the subgraph and prepares it for deployment.
  ``yarn build``

- **deploy**: Deploys the subgraph to the hosted service.
  ``yarn deploy``

- **create-local**: Creates a new local subgraph.
  ``yarn create-local``

- **remove-local**: Removes the local subgraph.
  ``yarn remove-local``

- **deploy-local**: Deploys the subgraph to the local graph node.
  ``yarn deploy-local``

- **test**: Runs tests for the subgraph.
  ``yarn test``

## 🧪 Testing

To test the subgraph with local data:
1. Run the local blockchain and deploy the contracts.
2. Start the graph node and index the contracts.
3. Execute tests with:
   ``yarn test``

## 📝 License

This repository is licensed under the UNLICENSED license. Feel free to modify and improve the code as per your requirements.
