/*
  Upload a file to the FullStack.cash IPFS server.
*/

// Change this string to the File ID associated with your file.
const FILE_ID = '5f1c50ad62c0761b9473f0c5'

// bch-js-examples require code from the main bch-js repo
const BCHJS = require('@psf/bch-js')
const bchjs = new BCHJS()

// Get the balance of the wallet.
async function checkFileStatus () {
  try {
    const result = await bchjs.IPFS.getStatus(FILE_ID)

    // Calculate the cost in BCH.
    const bchCost = bchjs.BitcoinCash.toBitcoinCash(result.satCost)
    result.bchCost = bchCost

    console.log(`File status: ${JSON.stringify(result, null, 2)}`)
  } catch (err) {
    console.error('Error in checkFileStatus: ', err)
    // throw err
  }
}
checkFileStatus()
