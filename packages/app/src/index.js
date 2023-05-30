import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import LogRocket from 'logrocket';
// import './i18n';

// LogRocket.init('h4pvlb/pepemon');

import { ThirdwebProvider } from '@thirdweb-dev/react';



document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    ReactDOM.render(
     <ThirdwebProvider
			activeChain={{
			chainId:906090,
			rpc:["https://l2-pepechain-testnet-8uk55qlld4.t.conduit.xyz"],
			nativeCurrency:{
				name:"pepechain-testnet",
				symbol:"PEPETH",
				decimals:18,
			},
			slug:"conduit:pepechain-testnet-8uk55qlld4",
			testnet:true,
			chain:"pepechain-testnet",
		}}>
        <App/>
        </ThirdwebProvider>,

      document.getElementById("root")
    );
  }
};
