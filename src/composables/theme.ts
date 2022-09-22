import { usePreferencesStore } from '../stores/preferences';

export enum Theme {
	SYSTEM = 'system', DARK = 'dark', LIGHT = 'light'
}

let lastTheme: Theme;

export const useTheme = () => {
  const preferencesStore = usePreferencesStore();

  if (!lastTheme) {
    lastTheme = preferencesStore.preferences.theme;
  }

  preferencesStore.$subscribe((_mutation, state) => {
    switchColorTheme(state.preferences.theme, lastTheme);
    lastTheme = state.preferences.theme;
  });

  const switchColorTheme = (theme: Theme, lastTheme: Theme) => {
    document.documentElement.classList.remove(lastTheme);
    if (theme === 'system') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add(Theme.DARK);
      } else document.documentElement.classList.add(Theme.LIGHT);
    } else document.documentElement.classList.add(theme);
  };

  const getTheme = (): Theme => preferencesStore.preferences.theme;

  return { switchColorTheme, getTheme };
};
