<template>
  <div class="w-full h-full flex items-center justify-center">
    <article class="loginbody">
      <div class="loginframe">
        <h2 class="font-display font-medium text-slate-500 dark:text-slate-200 mt-3 mb-1">
          LOGIN
        </h2>
        <h6 class="mb-4 p-0">
          Use a Wallet or Username and Password
        </h6>
        <!-- <WalletMultiButton :dark="dark"/> -->
        <transition
          enter-active-class="transition-all duration-200 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <form
            id="login"
            class="input01 flex flex-col space-y-2 mt-5"
            @submit="onSubmit"
            
          >
            <label for="email-username">
              <input
                id="email-username"
                v-model="user"
                type="text"
                class="login-field w-80 "
                placeholder="Email/Username"
              />
            </label>

            <label for="password">
              <input
                id="password"
                v-model="password"
                type="password"
                class="login-field w-80"
                placeholder="Password"
              >
            </label>

            <div class="flex justify-center p-2.5">
              <button
                form="login"
                class="submit01 w-40 tracking-widest"
              >
                <span v-if="loading" class="spinner-border spinner-border-sm"></span>
                <span>LOGIN</span>
              </button>
            </div>
          </form>
        </transition>

        <router-link
          to="/forgotpass"
          class="font-display tracking-widest text-slate-700
                            hover:text-black mt-3 text-sm
                            dark:text-slate-300 dark:hover:text-slate-50"
        >
          FORGOT PASSWORD?
        </router-link>

        <router-link
          to="/register"
          class=" mt-3 text-lg font-display tracking-widest text-slate-700
                            hover:text-black
                            dark:text-slate-300 dark:hover:text-slate-50"
        >
          REGISTER
        </router-link>
      </div>
    </article>
  </div>
</template>

<style>
.loginbody {
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.4);
    @apply  relative flex w-fit h-fit rounded-2xl p-2
            bg-gradient-to-b from-slate-100 to-slate-300
    }
.loginbody .loginframe {
    @apply  relative flex flex-col w-fit h-fit py-8 px-8 items-center justify-center rounded-lg
            border border-dashed border-slate-400
    }
.swv-dropdown {
    @apply w-full;
}
.swv-button {
    @apply rounded-full w-full;
}
.swv-button-trigger {
    @apply bg-cyan-600 justify-center !important;
}
.swv-dropdown-list {
    @apply top-auto bottom-full md:top-full md:bottom-auto md:left-0 md:right-auto;
}
.swv-dropdown-list-active {
    @apply transform -translate-y-3 md:translate-y-3;
}
</style>

<script lang="ts">
  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '@/stores/auth';
  import router from '@/router';

  export default {
    name: 'Login',
    data(): any {
      return {
        user: '',
        password: '',
      }
    },
    methods: {
      async onSubmit(event: any) {
        event.preventDefault();
        const authStore = useAuthStore();
        // TODO: resolve this https://github.com/vuejs/vue/issues/8625#issuecomment-825863212
        const success = await authStore.authenticateUser((this as any).user, (this as any).password);

        if (success) {
          router.push('/');
        }
      }
    },
    setup(): any {
      const { loading, error } = storeToRefs(useAuthStore());
      return {
        loading,
        error
      }
    }
  }
</script>
