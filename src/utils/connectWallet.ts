import { ethers } from "ethers";
import { formatAddress } from "./formatWalletAddress";
import { MetaMaskInpageProvider } from "@metamask/providers";


export async function connectWallet(): Promise<string> {
  const { ethereum } = window;
  let signer = null;
  let walletAddress= '';

  let provider;
  if (ethereum == null) {
    // If MetaMask is not installed, we use the default provider,
    // which is backed by a variety of third-party services (such
    // as INFURA). They do not have private keys installed so are
    // only have read-only access
    console.log("MetaMask not installed; using read-only defaults");
    provider = ethers.getDefaultProvider("ethereum");
  }
  // Connect to the MetaMask EIP-1193 object. This is a standard
  // protocol that allows Ethers access to make all read-only
  // requests through MetaMask.
  provider = new ethers.BrowserProvider(ethereum as MetaMaskInpageProvider);

  // It also provides an opportunity to request access to write
  // operations, which will be performed by the private key
  // that MetaMask manages for the user.
  signer = await provider.getSigner();
  walletAddress = await provider._getAddress(signer);
  // let blah = await ethereum.

  return formatAddress(walletAddress);
}

