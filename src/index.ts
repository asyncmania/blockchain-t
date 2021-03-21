import { Blockchain } from "./blockchain";


console.log('Creating genesis block')

const blockchain = new Blockchain()

console.log('Mining Block 1')
blockchain.addBlock('First block')


console.log('Mining Block 2')
blockchain.addBlock('Second block')


console.log(JSON.stringify(blockchain, null, 2))