import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
export default function App({ Component, pageProps }: AppProps) {
  return(
  <>
  <AnimatePresence mode="wait" initial={false}>
  <script type="text/javascript" dangerouslySetInnerHTML={{__html:`window.$crisp=[];window.CRISP_WEBSITE_ID="fbacb122-c10d-49a3-8a87-77415b4c724f";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,}}/>
  <Component {...pageProps} />
  </AnimatePresence>
  </>)
  
}
