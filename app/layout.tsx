/* eslint-disable @next/next/no-sync-scripts */
import React from 'react';
import '../styles/ui/globals.css';
import { LayoutProps } from '../types';
import Image from 'next/image';

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <html lang="pt-BR">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Bloquinhos de Carnaval</title>
          <script src="https://kit.fontawesome.com/9d3580f763.js" crossOrigin="anonymous"></script>
        </head>
        <body className="bg-purple-400 font-sans">
          <header className="container flex flex-col items-center justify-between mx-auto p-4 bg-purple-400 text-white">
            <Image 
              src={"/header-img.png"}
              alt="Bloquinhos de Carnaval"
              width={200}
              height={100}
            />
            <h1 className="text-3xl font-bold">Bloquinhos de Carnaval</h1>
          </header>
          <main 
            className="flex-1 h-auto"
            style={
              { 
                backgroundImage: 'url(/bg-carnaval.jpeg)',
                backgroundPosition: 'right',
                backgroundRepeat: 'repeat-y',
                backgroundSize: 'cover'
              }
            }
            >{children}</main>
        </body>
      </html>
    </>
  );
};

export default Layout;
