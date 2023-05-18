import React from "react";
import styled from "styled-components";
import {
  Accordion,
  Spacer,
  Title,
  Text,
  ContentColumns,
  ContentColumn,
} from "../../../../components";
import { theme } from "../../../../theme";
import {
  pepechu1stanniversarycard,
  pepemander1stanniversarycard,
  pepertle1stanniversarycard,
  pepesaur1stanniversarycard,
} from "../../../../assets";
import { CardToClaim } from "./CardToClaim";

const PepemonOneAnniversarySet: React.FC<any> = () => {
  return (
    <Accordion title="1st Anniversary set" isOpen={false}>
      <div>
        <ContentColumns>
          <ContentColumn width="50%">
            <Title as="h3" size="xl" weight={900} font={theme.font.neometric}>
              1st Anniversary set
            </Title>
            <Spacer size="sm" />
            <Text as="p" size="s" lineHeight={1.125}>
              Celebrating a full year of Pepemon with an awesome birthday set.
            </Text>
            <Text as="p" size="s" lineHeight={1.125}>
              To be eligible for these cards you must have qualified for each
              task before 14th October 2021.
            </Text>
          </ContentColumn>
        </ContentColumns>
        <Spacer size="lg" />
        <ContentColumns>
          <CardContentColumn width="25%" space="3.5em">
            <CardToClaim
              title="Pepechu"
              text="Provide PPBLZ liquidity to receive this card"
              img={{
                url: pepechu1stanniversarycard,
                title: "Pepechu anniversary",
              }}
              tokenId={75}
            />
          </CardContentColumn>
          <CardContentColumn width="25%" space="3.5em">
            <CardToClaim
              title="Pepemander"
              text="Provide PPDEX liquidity to receive this card"
              img={{
                url: pepemander1stanniversarycard,
                title: "Pepemander anniversary",
              }}
              tokenId={76}
            />
          </CardContentColumn>
          <CardContentColumn width="25%" space="3.5em">
            <CardToClaim
              title="Pepertle"
              text="Own any Pepemon NFT to receive this card"
              img={{
                url: pepertle1stanniversarycard,
                title: "Pepertle anniversary",
              }}
              tokenId={77}
            />
          </CardContentColumn>
          <CardContentColumn width="25%" space="3.5em">
            <CardToClaim
              title="Pepesaur"
              text="Having donated to Gitcoin Grants to receive this card"
              img={{
                url: pepesaur1stanniversarycard,
                title: "Pepesaur anniversary",
              }}
              tokenId={78}
            />
          </CardContentColumn>
        </ContentColumns>
      </div>
    </Accordion>
  );
};

const CardContentColumn = styled(ContentColumn)`
  margin-bottom: 2em;
`;

export default PepemonOneAnniversarySet;
