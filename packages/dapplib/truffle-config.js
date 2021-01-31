require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note stick slow guess clock army gate'; 
let testAccounts = [
"0xa758eef9e42ace86fae2085ca9195543f7d12f6e0c7c3bf556515d6739e85f10",
"0x89ef4edf4a30db017173870534605f83eb35c62e808ad019cf5f1933c8355a57",
"0x49cddef4d82ea890b4cbf7d6e55731eae59795e031d761fd176c1df7f8e6acee",
"0xb9c0bfb53661c0b596a942daf3376e0dd3b313708bd025d1b9701e9212680e5b",
"0xdc686a32f61c33f137debd390e17fb4d025ccd198ece4a939f281b1a634d2961",
"0x729ba154b8d73c90795bf588af44c3e249987a994e6da906b1a7b27ecf698aea",
"0xc4c7e42cc4c6b1660f7e8895b4bd5f917bf6f858149bf63d7ad86a4a5547cf1a",
"0x6a2859eea6ba384694fe28a21e570d6edddaf9d39f3f7f4bfd7515197eab9f18",
"0x67e0f7c88f6668777a9d200f81b4bb4cf2d73a26ef929d4d6b6da0393e19c0f1",
"0x9a912dddf4f25974b301adf73200bd8b813ff714c2fc1700a4a0aad7c7d180bc"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
