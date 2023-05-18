import React,{useState} from 'react'
import { DefaultPage,  } from '../../components'
import NFTCard from './components/NFTCard'

export const marketPlaceMeta = {
	title: 'Pepemon! MarketPlace',
	description: 'Use Pepemon NFT cards. All the cards are created by upcoming artists all over the world. You can become the very best by dueling with your NFTs in a web3 card game!'
}

const MarketPlace:React.FC<any> = () => {
    const [activeSeries, setActiveSeries] = useState<any>({
        title: "Buy NFTs",
      });
  return (
    <DefaultPage title='Market Place'>
       <NFTCard/>
    </DefaultPage>
  )
}

export default MarketPlace
