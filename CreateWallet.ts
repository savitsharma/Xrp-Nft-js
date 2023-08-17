import { Wallet,Client } from "xrpl";
import ECDSA from "xrpl/dist/npm/ECDSA";



async function CreateWallet() {


    let newWallet = Wallet.generate(ECDSA.ed25519)
    console.log(newWallet);
    
}

    async function fundWallet() {

        
        let wallet = Wallet.fromSeed("sEd716b5piTG9dvBmUMAyvcQiUXUcAK");

        let client = new Client("was://s.altnet.rippletest.net/");

        await client.connect();

        console.log("are we connected? " +client.isConnected());
        let result = await client.fundWallet(wallet);
        console.log(result);

        }
        
        
       // CreateWallet();
     fundWallet();
    
