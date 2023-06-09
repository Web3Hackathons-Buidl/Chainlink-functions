import { formatAmount, shorten } from '@did-network/dapp-sdk'
import { Button } from 'uno-ui/src/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'uno-ui/src/components/ui/card'
import { useToast } from 'uno-ui/src/components/ui/use-toast'
import { useAccount } from 'wagmi'

import { Header } from '@/components/layout/Header'
import { NetworkSwitcher } from '@/components/SwitchNetworks'
import { WalletModal } from '@/components/WalletModal'
import { useWagmi } from '@/hooks'
import { useCopyToClipboard } from '@/hooks/useCopy'

import { useState, useCallback } from 'react';
import { useCopyToClipboard, useToast } from 'your-toast-library';
import { useAccount } from 'your-account-library';
import { shorten } from 'your-utility-library';
import Header from 'your-header-component';
import NetworkSwitcher from 'your-network-switcher-component';
import WalletModal from 'your-wallet-modal-component';
import Button from 'your-button-component';
import Card from 'your-card-component';
import CardHeader from 'your-card-header-component';
import CardTitle from 'your-card-title-component';
import CardDescription from 'your-card-description-component';
import CardContent from 'your-card-content-component';

const Home = () => {
  const { address } = useAccount();

  const [show, setShow] = useState(false);

  const toggleModal = (e) => {
    setShow(e);
  };

  const [_, copy] = useCopyToClipboard();
  const { toast } = useToast();

  const copyHandler = useCallback(() => {
    copy('pnpm dlx fisand');

    toast({
      title: 'Copied success!',
    });
  }, [copy, toast]);

  return (
    <>
      <Header
        action={
          <>
            <NetworkSwitcher />
            <WalletModal open={show} onOpenChange={toggleModal} close={() => setShow(false)}>
              {({ isLoading }) => (
                <Button className="flex items-center h-8 mr-4" size="sm">
                  {isLoading && (
                    <span className="i-line-md:loading-twotone-loop inline-flex mr-1 w-4 h-4 text-white"></span>
                  )}{' '}
                  {address ? shorten(address) : 'Connect Wallet'}
                </Button>
              )}
            </WalletModal>
          </>
        }
      />
      <div className="relative max-w-6xl min-h-[calc(100vh-8rem)] m-auto pt-16 flex-col-center justify-start">
        <p
          className="font-bold bg-clip-text text-4xl lt-sm:text-2xl"
          style={{
            backgroundImage: 'linear-gradient(270deg, #B4EAA1 0%, #F8D07A 100%)',
            display: 'inline-block',
            lineHeight: 1,
            WebkitTextFillColor: 'transparent',
          }}
        >
          Unoi Dapp Template
        </p>
        <p className="mt-3 text-5xl text-center font-bold lt-sm:text-3xl">The better template to launch a Web3 dapp</p>
        <p className="mt-3 text-3xl text-center lt-sm:text-xl group">
          Designed for everyone. Built with wagmi{' '}
          <span className="i-logos:vitejs inline-flex w-5 h-5 -group-hover:rotate-30 transition-all" />{' '}
          <span className="i-logos:unocss inline-flex w-5 h-5 group-hover:rotate-23 transition-all" />.
        </p>
        <div className="mt-8 flex-center">
          <div className="m-auto py-2 px-8 flex-center bg-#666 rounded-full text-white">
            pnpm dlx fisand
            <span className="i-carbon:copy ml-6 cursor-pointer active:scale-95" onClick={copyHandler} />
          </div>
        </div>
        <div className="mt-16 max-w-6xl m-auto px-4 flex gap-8 flex-wrap items-stretch justify-center">

export default Home

function Item() {
  const { status } = useWagmi()

  return <span></span>
}
