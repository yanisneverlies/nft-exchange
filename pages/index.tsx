import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {BuyModal, ListModal} from "@reservoir0x/reservoir-kit-ui";
import {useState} from "react";

const Home: NextPage = () => {
  const openState = useState(true)
  return (
    <div className={styles.container}>
      <Head>
        <title>RainbowKit App</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <ConnectButton />

        <BuyModal trigger={<button>Buy</button>}   collectionId="0xf5de760f2e916647fd766b4ad9e85ff943ce3a2b"
                  tokenId="0x00000"
                  onPurchaseComplete={(data) => console.log('Purchase Complete')}
                  onPurchaseError={(error, data) => console.log('Transaction Error', error, data)}
                  onClose={(data, stepData, currentStep) => console.log('Modal Closed')} />
        <ListModal
          trigger={
            <button>
              List Item
            </button>
          }
          collectionId="0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
          tokenId="1"
          currencies={[
            {
              contract: '0x0000000000000000000000000000000000000000',
              symbol: 'ETH',
            },
            {
              contract: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
              symbol: 'USDC',
              decimals: 6
            },
          ]}
          openState={openState}
          nativeOnly={false}
          oracleEnabled={false}
          onGoToToken={() => console.log('Awesome!')}
          onListingComplete={(data) => {
            console.log('Listing Complete', data)
          }}
          onListingError={(error, data) => {
            console.log('Transaction Error', error, data)
          }}
          onClose={(data, stepData, currentStep) => {
            console.log('ListModal Closed')
          }}
        />
      </main>

      <footer className={styles.footer}>
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by your frens at 🌈
        </a>
      </footer>
    </div>
  );
};

export default Home;