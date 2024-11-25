"use client"

import 'katex/dist/katex.min.css';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import 'mathlive/dist/mathlive-fonts.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
