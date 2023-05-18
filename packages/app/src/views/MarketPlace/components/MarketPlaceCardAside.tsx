import React from 'react'
import { Button, ExternalLink, Title, Text, Spacer, StyledSpacer } from '../../../components';

import { cardback_normal, coin } from '../../../assets';
import { useModal, useAllowance, useTokenBalance, useRedeemCard, useApprove } from "../../../hooks";
import { theme } from '../../../theme';

import { StyledPepemonCardPrice,StoreAside, StyledStoreBody, StyledPepemonCardMeta, } from '../../Store/components';

const MarketPlaceCardAside:React.FC<any> = ({setSelectedCard, selectedCard: { cardId, cardPrice, cardMeta = null, cardBalance = null }}) => {
  return (
    <StoreAside close={() => setSelectedCard("")} title="Selected Card">
			<StyledStoreBody>
				<Title as="h2" font={theme.font.neometric} size='m'>{cardMeta ? cardMeta.name : 'Loading card'}</Title>
				<Spacer size="sm"/>
				<Text as="p" font={theme.font.inter} size='s' lineHeight={1.3} color={theme.color.gray[600]}>{cardMeta && cardMeta.description}</Text>
				<Spacer size="sm"/>
				<img loading="lazy" src={cardMeta ? cardMeta.image : cardback_normal} alt={cardMeta ? cardMeta.name : 'Loading card'} style={{width: "100%"}}/>
				<Spacer size='md'/>
				<StyledPepemonCardMeta>
					<dt>Rarity:</dt>
					<dd>{cardMeta && cardMeta.attributes.find((trait) => trait.trait_type === 'Rarity').value}</dd>
				</StyledPepemonCardMeta>
				<Spacer size='sm'/>
				<StyledSpacer bg={theme.color.gray[100]} size={2}/>
				<StyledPepemonCardMeta>
					<dt>Type:</dt>
					<dd>{cardMeta && cardMeta.attributes.find((trait) => trait.trait_type === 'Type').value}</dd>
				</StyledPepemonCardMeta>
				<Spacer size='sm'/>
				<StyledSpacer bg={theme.color.gray[100]} size={2}/>
				<StyledPepemonCardMeta>
					<dt>Set:</dt>
					<dd>{cardMeta && cardMeta.attributes.find((trait) => trait.trait_type === 'Set').value}</dd>
				</StyledPepemonCardMeta>
				<Spacer size='sm'/>
				<StyledSpacer bg={theme.color.gray[100]} size={2}/>
				<StyledPepemonCardMeta>
					<dt>Artist:</dt>
					<dd>{cardMeta && cardMeta.attributes.find((trait) => trait.trait_type === 'Artist').value}</dd>
				</StyledPepemonCardMeta>
				<Spacer size='sm'/>
				<StyledSpacer bg={theme.color.gray[100]} size={2}/>
				<StyledPepemonCardMeta>
					<dt>Price:</dt>
					<dd>
						<StyledPepemonCardPrice styling="alt">
							<img loading="lazy" src={coin} alt="coin"/>
							
						</StyledPepemonCardPrice>
					</dd>
				</StyledPepemonCardMeta>
				<Spacer size='md'/>
				<ExternalLink style={{ width: '100%' }}>
                    <Button width="100%" styling="purple">View on OpenSea</Button>
				</ExternalLink>
				<Spacer size='md'/>
				<Button width="100%" styling="purple"
					>
					Buyfgchcgh
				</Button>
			</StyledStoreBody>
		</StoreAside>
  )
}

export default MarketPlaceCardAside