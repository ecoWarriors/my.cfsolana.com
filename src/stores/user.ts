import {defineStore} from 'pinia';
import {ref} from 'vue';

export enum WalletType {
  PHANTOM,
  SOLFLARE,
  SOLLET,
  SOLLET_EXTENSION,
  TORUS,
  LEDGER,
  SLOPE,
}

export enum VerificationState {
  UNKNOWN,
  ANONYMOUS,
  PARTIAL,
  PENDING,
  REVIEW,
  SUSPENDED,
  VERIFIED,
}

export interface RootState {
  muid: number;
  username: string;
  email?: string;
  icon?: string;
  verification: VerificationState;
  wallet: {
    type: WalletType;
    address: string;
  };
  ecoTokenBalance: number;
}

export const useUserStore = defineStore('user', () => {
  const user = ref<RootState>({
    muid: 0,
    username: 'randalf',
    email: 'test@gmail.com',
    verification: VerificationState.UNKNOWN,
    icon: 'https://cdn.discordapp.com/avatars/891795308437209098/1850175e423cb138994c35b025382bf9.webp?size=80',
    wallet: {
      type: WalletType.PHANTOM,
      address: 'DFpVdfUDDc8Q1mFTQB64UhC3eF4PJeknmFNpBjrqtb7',
    },
    ecoTokenBalance: 190.45,
  });
  return { user };
});
