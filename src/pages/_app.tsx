import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global';
import { Container} from '@/styles/pages/app';
import Footer from '@/components/Footer';


globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Component {...pageProps} />
      <Footer/>
    </Container>
  )
}
