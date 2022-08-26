<template>
  <main class="w-full h-full flex items-center justify-center">
    <article class="loginbody">
      <div class="loginframe flex flex-col justify-center w-3">
        <h2 class="font-display text-center font-medium text-slate-500 dark:text-slate-200 mt-3 mb-1">
          FORGOT<br>PASSWORD
        </h2>
        <h6 class="mb-4 p-0 text-center ">
          Enter your e-mail address.<br> We will send you a link to update your password.
        </h6>

        <form
          id="register"
          class="input01 flex flex-col justify-center"
          @submit.prevent="onSubmit"
        >

          <label for="email">
            <input
              id="email"
              required="true"
              v-model="email"
              type="email"
              class="login-field w-96 m-auto mb-2"
              placeholder="E-Mail"
            >
          </label>
          <div class="flex w-96 justify-center m-4">
            <hcaptcha
              sitekey="b6e07540-325c-49b1-b0c9-3b310dc00fcf"
              :theme="theme.getTheme"
            />
          </div>
          <button
            form="register"
            class="submit01 w-80 mx-auto tracking-wider"
          >
            RESET PASSWORD
          </button>
        </form>

        <router-link
          to="/login"
          class="mt-6 mb-4"
        >
          <h5 class="m-2">
            <span class="font-display tracking-wider hover:text-black m-6 text-lg">LOGIN HERE</span>
          </h5>
        </router-link>
      </div>
    </article>
  </main>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { WalletMultiButton, useWallet } from 'solana-wallets-vue';
import { hcaptcha } from '@shubhamranjan/vue-hcaptcha';
import { useTheme } from '../composables/theme';

const theme = useTheme();

const email = ref('');
const user = ref('');
const password = ref('');

const onSubmit = () => {
};
</script>
