const solanaWeb3 = require('@solana/web3.js');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Main function to find a custom Solana address with a prefix and suffix.
 */
async function findCustomWallet() {
  rl.question('Enter your desired prefix for the Solana address (e.g., 123): ', (prefix) => {
    rl.question('Enter your desired suffix for the Solana address (e.g., ABC): ', async (suffix) => {
      
      if (!prefix && !suffix) {
        console.log('You must enter at least a prefix or a suffix.');
        rl.close();
        return;
      }
      if ((prefix.length + suffix.length) > 44) {
        console.log(`The combined length of your prefix and suffix (${prefix.length + suffix.length}) is too long. A Solana address is only 44 characters.`);
        rl.close();
        return;
      }

      console.log(`\nStarting search for an address that starts with: '${prefix}' and ends with: '${suffix}'`);
      console.log('Process is running... Please be patient.\n');
      
      let keypair;
      let address;
      let attempts = 0;

      // Loop indefinitely until a matching address is found
      while (true) {
        attempts++;
        
        // Display progress every 1,000 attempts
        if (attempts % 1000 === 0) {
          process.stdout.write(`\rAttempts: ${attempts.toLocaleString()}`);
        }

        // Generate a new keypair
        keypair = solanaWeb3.Keypair.generate();
        address = keypair.publicKey.toBase58();

        // Check if the address matches both conditions
        if (address.startsWith(prefix) && address.endsWith(suffix)) {
          break; // Stop the loop if a match is found
        }
      }

      // Display the result
      console.log('\n--- CUSTOM WALLET FOUND! ---');
      console.log(`\nTotal attempts: ${attempts.toLocaleString()}`);
      console.log(`✅ Public Address: ${address}`);
      console.log(`🤫 Private Key (Base64): ${Buffer.from(keypair.secretKey).toString('base64')}`);
      console.log('\n!!! WARNING: STORE YOUR PRIVATE KEY EXTREMELY SECURELY !!!');

      rl.close();
    });
  });
}

// Run the main function
findCustomWallet();
