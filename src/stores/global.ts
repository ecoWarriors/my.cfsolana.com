import {defineStore} from 'pinia';
import {ref} from 'vue';

export interface RootState {
  loggedIn: boolean;
}

export const useGlobalStore = defineStore('global', () => {
  const global = ref<RootState>({
    loggedIn: false,
  });
  return {global};
});
