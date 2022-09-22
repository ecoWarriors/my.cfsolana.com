import { VerificationState } from '@/utils/user';

const mockUserPreference = {
  id: 1,
  setting: 'test',
  value: 'test',
  createdOn: new Date(),
  modifiedOn: new Date()
}
  
const mockWallet = {
  id: 1,
  name: 'test_wallet',
  description: 'test use wallet 1',
  balance: 100,
  createdOn: new Date(),
  modifiedOn: new Date()
}

const mockUserWallet = {
  id: 1,
  publicKey: '1234567890',
  wallet: mockWallet
}

export const mockUser = {
  id: 1,
  username: 'test_user',
  fistname: 'hello',
  lastname: 'world',
  email: 'helloworld@ecotoken.io',
  lastlogin: new Date(),
  createdOn: new Date(),
  modifiedOn: new Date(),
  preferences: [mockUserPreference],
  wallets: [mockUserWallet],
  verification: VerificationState.VERIFIED
};