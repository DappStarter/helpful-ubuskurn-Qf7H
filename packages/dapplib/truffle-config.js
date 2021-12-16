require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth stereo exchange inflict forum frame sword'; 
let testAccounts = [
"0x9a013cdd3d5ef7b4d228cf58bdea54573aae423f2e9eceae73a7f693a478a697",
"0x4297c7185eafa4f25c94133ad35cf63184e381bc3a57bfbd6b85d71338e51650",
"0xc46d4d34765f2c20ea592559c18460acb0e07a88355e3d22b295994ec97c5701",
"0x2de6dcc8dd42062306274cb553d1f7a178ad126139765847fd64caccf3e25303",
"0x6b04b8b218a9f21b9d351374dc4e59c119fb9c79b585ddc28281638fa33436af",
"0xbf27f8310a292c1cff2348be25b541d5eba8102de75b852220d4661c69276b23",
"0xa0c993ab41a58fa40e39179ce11728258e0fcb025f2512ccf99f3f173e4728c5",
"0xe6f967d8e3168217d59ac991c475507082eedf6496921b21effb5edc6f508060",
"0xe9d4a77cbb6c8c36699e7183cc622cbcb25a3b536462b7cbc9d0835611a0a5cc",
"0x02b864186da07bd819b13f4b97e96cc14b0ce7adcba0b994dd4f00ee4ba953d5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


