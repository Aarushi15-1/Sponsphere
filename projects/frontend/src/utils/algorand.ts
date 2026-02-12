import algosdk from "algosdk"

const algodClient = new algosdk.Algodv2(
  "",
  "https://testnet-api.algonode.cloud",
  ""
)

export const createCampaignTransaction = async (
  sender: string,
  goal: number
) => {
  const suggestedParams = await algodClient.getTransactionParams().do()

  const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    sender: sender,
    receiver: sender,
    amount: 0,
    suggestedParams,
    note: new TextEncoder().encode(`Campaign Goal: ${goal}`),
  })

  return txn
}

export const fundCampaignTransaction = async (
  sender: string,
  receiver: string,
  amount: number
) => {
  const suggestedParams = await algodClient.getTransactionParams().do()

  const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    sender: sender,
    receiver: receiver,
    amount: algosdk.algosToMicroalgos(amount),
    suggestedParams,
  })

  return txn
}
