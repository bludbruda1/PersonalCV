import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import Image from 'next/image';
import {memo, useEffect, useState} from 'react';
import ReactLoading from 'react-loading';

import load from '../images/background1.jpg';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {!loaded ? (
        <div className="relative flex h-screen w-screen items-center justify-center">
          <Image
            alt="loading-image"
            layout="fill"
            className="absolute z-0"
            objectFit="cover"
            placeholder="blur"
            priority
            src={load}
          />
          <ReactLoading className="z-10" type="bars" color="#FFFFFF" height={150} width={100} />{' '}
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
});

export default MyApp;
