import { onMounted, onUnmounted } from 'vue';

export const useEventListener = <K extends keyof HTMLElementEventMap>(target: HTMLElement, type: K,
  callback: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any) => {
  onMounted(() => target.addEventListener(type, callback));
  onUnmounted(() => target.removeEventListener(type, callback));
};
