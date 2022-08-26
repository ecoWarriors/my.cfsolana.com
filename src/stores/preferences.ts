import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Theme } from '../composables/theme';

export interface RootState {
  language: string,
  currency: string,
  theme: Theme;
}

export const usePreferencesStore = defineStore('preferences', () => {
  const preferences = ref<RootState>({
    language: 'DE',
    currency: 'USD',
    theme: Theme.LIGHT,
  });
  return { preferences };
});
