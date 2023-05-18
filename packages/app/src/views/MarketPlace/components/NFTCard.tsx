import React,{useState} from 'react'
import styled from "styled-components";
import {
  Badge,
  StyledLinkTitle,
  Title,
  Text,
  Spacer,
  Button
} from "../../../components";
import { theme } from '../../../theme';
import { Link, Redirect, useParams } from "react-router-dom";

import {
	StyledStoreWrapper, StyledStoreHeader, StyledStoreBody, StoreCardsCollection, StoreCardsAside, StorePacksAside, StorePacksCollection 
  } from "../../Store/components";

import MarketPlaceCardAside from './MarketPlaceCardAside';

const NFTCard:React.FC<any> = () => {
	
	const routerParams: any = useParams();
	const [selectedCard, setSelectedCard] = useState(null);
	const [selectedPack, setSelectedPack] = useState(null);

	const itemSelected = (selectedCard && routerParams.marketPlaceState=== "buyNfts") ||
	(selectedCard && routerParams.marketPlaceState === "sellNfts");

	console.log(itemSelected)

	const storeWidth = () =>{
		if (itemSelected) return "calc(60% + .5em)";
		return "100%";
	}
	
	if (!routerParams.marketPlaceState) return <Redirect to="/marketplace/buyNfts"/>
  
	return (
		<div style={{display: 'flex', position: 'relative'}}>
		<StyledStoreWrapper width={storeWidth()} itemSelected={itemSelected}>
		  <StyledStoreHeader>
			<div style={{ display: "flex" }}>
			  <StyledLinkTitle
				isInactive={routerParams.marketPlaceState !== "buyNfts"}
			  >
				<Link to={`/marketplace/buyNfts`}>1. Buy NFTs</Link>
			  </StyledLinkTitle>
			  <StyledLinkTitle
				isInactive={routerParams.marketPlaceState !== "sellNfts"}
			  >
				<Link to={`/marketplace/sellNfts`}>2. Sell NFTs</Link>
			  </StyledLinkTitle>
			
			</div>
		  </StyledStoreHeader>
		  <StyledStoreBody>
			
			{routerParams.marketPlaceState === "buyNfts" && (
			  <>
			

				<Text as="p" font={theme.font.inter} size="m">
				  Experience the thrill of becoming an early adopter in the
				  revolutionary Pepechain Testnet ecosystem! Be among the
				  exclusive few to claim your limited-edition ERC-20 PPBLZ tokens
				  and unlock staking opportunities for earning PPDEX.
				</Text>
				<Spacer size="md" />
			

				<iframe
				 src="https://ipfs.thirdwebcdn.com/ipfs/QmfK9mw9eQKE9vCbtZht9kygpkNWffdwibsJPnCo7MBN4M/erc20.html?contract=0x6516905B4Af10DC036D73A8e627eA49092915D02&chain=%7B%22name%22%3A%22pepechain-testnet%22%2C%22chain%22%3A%22%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fl2-pepechain-testnet-8uk55qlld4.t.conduit.xyz%22%5D%2C%22nativeCurrency%22%3A%7B%22symbol%22%3A%22pepETH%22%2C%22name%22%3A%22pepETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22pepechain-testnet%22%2C%22chainId%22%3A906090%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22pepechain-testnet%22%7D"
				  
				  width="600px"
				  height="600px"
				  style={{ maxWidth: "100%" }}
				  frameBorder="0"
				></iframe>
				
				
				
			  </>
			)}
			{routerParams.marketPlaceState === "sellNfts" && (
			  <>
			  
				<Text as="p" font={theme.font.inter} size="m">
				  Unlock your vibrant, one-of-a-kind Pepemon Badge on the
				  Pepechain Testnet! Effortlessly turn your pepETH into an
				  exclusive, envy-worthy Pepemon NFT that showcases your
				  dedication and unique style.
				</Text>
				<Spacer size="md" />
				<iframe
				  src="https://ipfs.thirdwebcdn.com/ipfs/QmfK9mw9eQKE9vCbtZht9kygpkNWffdwibsJPnCo7MBN4M/erc1155.html?contract=0xa44e4154dDC1ECeDf60d731460D9E06634498765&chain=%7B%22name%22%3A%22pepechain-testnet%22%2C%22chain%22%3A%22%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fl2-pepechain-testnet-8uk55qlld4.t.conduit.xyz%22%5D%2C%22nativeCurrency%22%3A%7B%22symbol%22%3A%22pepETH%22%2C%22name%22%3A%22pepETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22pepechain-testnet%22%2C%22chainId%22%3A906090%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22pepechain-testnet%22%7D&tokenId=0"
				  width="600px"
				  height="600px"
				  style={{ maxWidth: "100%" }}
				  frameBorder="0"
				></iframe>
			
			  </>
			)}
			
		  </StyledStoreBody>
		</StyledStoreWrapper>
		{(selectedCard && routerParams.marketPlaceState  === "buyNfts") && <MarketPlaceCardAside setSelectedCard={setSelectedCard} selectedCard={selectedCard}/> }
		{(selectedCard && routerParams.marketPlaceState === "sellNfts") && <MarketPlaceCardAside setSelectedCard={setSelectedCard} selectedCard={selectedCard}/> }
	  </div>
	);
       
  
}



export default NFTCard