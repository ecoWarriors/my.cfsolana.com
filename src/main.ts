import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronDown,
  faChevronLeft,
  faCircleQuestion,
  faClockRotateLeft,
  faCode,
  faComment,
  faDisplay,
  faExternalLink,
  faGear,
  faGift,
  faGrip,
  faHouse,
  faImage,
  faLeaf,
  faMoon,
  faPalette,
  faRuler,
  faSun,
  faFont,
  faUser,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import './index.css';
import { createPinia } from 'pinia';
import piniaPersistedState from 'pinia-plugin-persistedstate';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import 'solana-wallets-vue/styles.css';
import {
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import SolanaWallets from 'solana-wallets-vue';
const walletOptions = {
  wallets: [
    new PhantomWalletAdapter(),
    new SlopeWalletAdapter(),
    new SolflareWalletAdapter({ network: WalletAdapterNetwork.Devnet }),
  ],
  autoconnect: true,
};

library.add(
  faChevronDown,
  faChevronLeft,
  faCircleQuestion,
  faClockRotateLeft,
  faCode,
  faComment,
  faDisplay,
  faExternalLink,
  faGear,
  faGift,
  faGrip,
  faHouse,
  faImage,
  faLeaf,
  faMoon,
  faPalette,
  faRuler,
  faSun,
  faFont,
  faUser,
  faWallet,
);

const pinia = createPinia();
pinia.use(piniaPersistedState);


createApp(App)
  .use(SolanaWallets, walletOptions)
  .use(pinia)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
