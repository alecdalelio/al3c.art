import { getContractConfigByAddress } from "utils/contractInfoHelper";

interface Props {
  contractAddress: string
  tokenId: string
  width: number
  height: number
}

const TokenImage = ({contractAddress, tokenId, width, height}: Props) => {
  const contractConfig = getContractConfigByAddress(contractAddress)

  // be sure to remove "staging" from this URL once your projects are live on mainnet
  return (
    <img
      src={`https://media-proxy-staging.artblocks.io/${contractAddress}/thumb/${tokenId}.png`}
      alt={tokenId}
      width={width}
      height={height}
    />
  )
}

export default TokenImage
