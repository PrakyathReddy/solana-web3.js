In this repo, I will be exploring the solana web3.js library

1. solana-test-validator in terminal starts a local blockchain
2. solana-keygen-new --force creates a new key
3. take the address produced, and 'cat' into it, to find the private key, a binary, list of digits.
4. Open Phantom and import this wallet to be able to visualize the transactions better.
5. Open Solana explorer, switch from Mainnet to Custom RPC Url for localhost
6. Create a new directory through terminal. 'cd' into it and run 'npm init -y' to initialize node.js project
7. Add typescript to it. run command 'npm i --save-dev typescript'
8. create a file 'tsconfig.json'

From here, we will be doing a bunch of small projects and I would like structure each of these into a different module

1. Airdrop -
   a certain amount of sol into an address
   Define a typescript file inside it. This is where we'll be writing a function where we will airdrop a certain amount of solana, into someone else's wallet. And we'll be exporting this function so that it can be reused inside the modules to come.
   Import the solana/web3.js library with command 'npm i --save @solana/web3.js'. This allows u to interact with an RPC server, allowing us to airdrop solana to ourselves.
   Write the function
   Go to package.json to add a script - "build": "npx tsc" - this will run npx tsc which will compile your typescript code into a javascript file.
   Now, to execute the project run, 'npm run build'
   The compiled code (in JS) can be found at /dist/index.js
   Then, run it 'node /dist/index.js
   Now if u go to sol-explorer you will find updated balance after the airdrop.

2. Show balance given an address

3. TransferSol
   From one account (with both public and private key) to another account (with Public key)
   Create a new wallet here to transfer sol from.
   To avoid overriding existing wallet, run 'solana-keygen new --outfile' ~/.config/solana/id2.json'
   cat into the new address from previous command and copy the secret code, to create a keypair from it.
   For that, first create a new uint8 array from the secret key.
   Then, initialize the keypair by calling the 'from' secret keypair function on the keypair class.
   Define another wallet to send the lamports to.
   Add some Sol to the from keypair.
