<template>
  <main class="w-full h-full flex items-center justify-center">
    <article class="loginbody">
      <div class="loginframe flex flex-col justify-center">
        <h1 class="font-display font-medium text-slate-500 dark:text-slate-200 tracking-wider mt-4 mb-8">
          REGISTER
        </h1>

        <form
          id="register"
          class="input01 flex flex-col mt-4"
          @submit.prevent="onSubmit"
        >
          <label for="email">
            <input
              id-="email"
              required="true"
              v-model="email"
              type="email"
              class="login-field w-96 mb-2"
              placeholder="E-Mail"
            />
          </label>

          <label for="username">
            <input
              id="username"
              required="true"
              v-model="user"
              type="text"
              class="login-field w-96 mb-2"
              placeholder="Username"
            />
          </label>

          <label for="password">
            <input
              id="password"
              required="true"
              v-model="password"
              type="password"
              class="login-fieldd w-96 mb-4"
              placeholder="Password"
            />
          </label>

          <div
            class="checkbox01 relative inline-block w-96 h-fit mb-4 pl-7 text-sm font-normal text-slate-700 dark:text-slate-200"
          >
            <ul class="">
              <li class="extlink mb-2">
                <input
                  type="checkbox"
                  name="agreeterms"
                  value="1"
                  class="absolute left-0"
                >
                I have read and agree with with the
                <a
                  href="https://www.eco-token.io/page/useragreement.html"
                  target="_blank"
                >User Agreement</a>,
                <a
                  href="https://www.eco-token.io/page/riskdisclosure.html"
                  target="_blank"
                >Risk Disclosure Statement</a>,
                <a
                  href="https://www.eco-token.io/page/privacypolicy.html"
                  target="_blank"
                >Privacy Policy</a> and
                <a
                  href="https://www.eco-token.io/page/cookiepolicy.html"
                  target="_blank"
                >Cookies Policy</a>,
                including the disclosure of certain personal information about me by third parties for
                the purposes of identity verification.
              </li>
              <li class="mb-2">
                <input
                  type="checkbox"
                  name="confirmage"
                  value="1"
                  class="absolute left-0"
                >
                I confirm that I am 18 years of age or older.
              </li>
            </ul>
          </div>

          <div class="flex w-96 justify-center mb-4">
            <hcaptcha
              sitekey="b6e07540-325c-49b1-b0c9-3b310dc00fcf"
              :theme="theme.getTheme()"
            />
          </div>
          <button
            form="register"
            class="submit01 w-64 mx-auto tracking-wider"
          >
            REGISTER
          </button>
        </form>

        <router-link
          to="/login"
          class="mt-6 mb-4"
        >
          <h5 class="m-2">
            Already have an Account?<br>
            <span class="font-display tracking-widest hover:text-black m-6 text-lg">LOGIN HERE</span>
          </h5>
        </router-link>
      </div>
    </article>
  </main>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { WalletMultiButton, useWallet } from 'solana-wallets-vue';
import { hcaptcha } from '@shubhamranjan/vue-hcaptcha';
import { useTheme } from '../composables/theme';

const email = ref('');
const user = ref('');
const password = ref('');
const theme = useTheme();

const onSubmit = () => {

};
</script>
