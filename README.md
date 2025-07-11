# Solana Custom Wallet Generator

A simple Node.js script that generates a **Solana vanity address** (a custom wallet) that starts and/or ends with a specific string of your choice.

## Features

- Prompts for a desired prefix and suffix.
- Continuously generates new keypairs until a match is found.
- Displays progress in real-time.
- Saves the found public and private keys to the console.

## How to Install

1.  Make sure you have [Node.js](https://nodejs.org/) installed.
2.  Clone this repository:
    ```bash
    git clone https://github.com/fendyart/solana-custom-wallet.git
    cd solana-custom-wallet
    ```
3.  Install the project dependencies:
    ```bash
    npm install
    ```

## How to Use

1.  Run the script from your terminal:
    ```bash
    npm start
    ```
2.  The script will prompt you to enter a **prefix** and a **suffix**. You can leave either one blank to search for only a prefix or only a suffix.

---

**⚠️ SECURITY WARNING**

Generating a vanity address can take a very long time. More importantly, the **private key** is displayed directly in your terminal. **Never share your private key with anyone.** Once you find and save your custom wallet, delete the terminal history and the script's output to prevent unauthorized access.
