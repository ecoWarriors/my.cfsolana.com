<template>
  <div class="frame">
    <div class="cards">

      <h2 class="uppercase">
        Account Settings
      </h2>

      <article class="card24 dataentry relative items-start h-fit input01">

        <div class="absolute flex justify-center items-center right-4 top-20 w-36 h-36 p-4 border-2 border-dashed border-slate-300 rounded-md">
          <div class="flex justify-center w-16 h-16 p-4 rounded-full bg-slate-200">
            <font-awesome-icon
                icon="user"
                class="cursor-pointer items-center text-3xl text-slate-100"/>
          </div>
        </div>

        <h3 class="w-full">PERSONAL INFO</h3>

        <hr>

        <h6>Username</h6>
        <h5>randalf</h5>

        <h6>User ID</h6>
        <h5>123456</h5>

        <h6>NAME</h6>
        <h5>Randy William Christie</h5>

        <h6>date of birth</h6>
        <h5>February 11, 1961</h5>

        <hr>

        <h3 class="w-full font-euroext">CONTACT INFO</h3>

        <h6>Phone number</h6>
        <h5>+1 778 385 3412</h5>

        <h6>EMAIL ADDRESS</h6>
        <h5>randy@eco-token.io</h5>

        <h6>Billing Address</h6>
        <h5>68, 7850 King George Blvd, Surrey, BC V3W 5B2, Canada </h5>

        <h6>Occupation</h6>
        <h5>Self Employed, Ecotoken System Inc.</h5>

        <hr>

        <h3 class="w-full font-euroext">ACCOUNT INFO</h3>

        <h6>Account Type</h6>
        <h5>Individual (Corporate)</h5>

        <h5 class="my-4  text-base">
          <b class="inline-block h-8 px-8 py-0.5 mr-2 bg-green-500 rounded-2xl text-white">VERIFIED</b>
           Until June 2023
        </h5>

        <h5 class="my-4 text-sm">
           In order to change your Account Type or email address, you'll need to contact our Support Team 
        </h5>
      </article>

      <!-- PREFERENCES -->

      <article class="card24 dataentry relative items-start h-fit input01">
        <h3 class="w-full">Preferences</h3>
        <hr>
          <h4>
            <img
src="https://secure.mycms.ca/sb4images/icons/wallet_phantom.png"
                  alt="CAD"
                  class="w-6 mx-2 float-left">
            Phantom Wallet Address
          </h4>

          <div class="input01 w-full my-2">
            <label for="phantom">
              <input
                id="phantom"
                type="text" 
                name="phantom" 
                value="JDXGT4g9J2wgt1aSzcxx5sfN8yv2YMETtnSw4U5KHeXU" 
                class="w-full bg-white"
              />
            </label>
          </div>
        <hr>

        <h4>Default Currency</h4>

          <div class="pickimg w-full pb-4">
            <ul class="defcrcy mt-2">
              <li>
                <input id="crcy-aud" type="radio" name="defcrcy" value="AUD" />
                <label for="crcy-aud" style="background: url('https://www.eco-token.io/images/blocks/flag_AUD.svg');">
                  <span>AUD</span>
                </label>
              </li>
              <li>
                <input id="crcy-cad" type="radio" name="defcrcy" value="CAD" checked />
                <label for="crcy-cad" style="background: url('https://www.eco-token.io/images/blocks/flag_CAD.svg');">
                  <span>CAD</span>
                </label>
              </li>
              <li>
                <label for="crcy-eur" style="background: url('https://www.eco-token.io/images/blocks/flag_EUR.svg');">
                  <input id="crcy-eur" type="radio" name="defcrcy" value="EUR" />
                  <span>EURO</span>
                </label>
              </li>
              <li>
                <input id="crcy-usd" type="radio" name="defcrcy" value="USD" />
                <label for="crcy-usd" style="background: url('https://www.eco-token.io/images/blocks/flag_USD.svg');">
                  <span>USD</span>
                </label>
              </li>
            </ul>
          </div>

        <hr>

          <h4>Language</h4>

          <div class="radio01">
            <ul class="language">
              <li>
                <input id="pref-lang-en" type="radio" name="language" value="EN" v-model="preferencesStore.preferences.language" />
                <label for="pref-lang-en">
                  <span>English</span>
                </label>
              </li>
              <li>
                <input id="pref-lang-fr" type="radio" name="language" value="FR" v-model="preferencesStore.preferences.language" />
                <label for="pref-lang-fr">
                  <span>French</span>
                </label>
              </li>
              <li>
                <input id="pref-lang-de" type="radio" name="language" value="DE" v-model="preferencesStore.preferences.language" />
                <label for="pref-lang-de">
                  <span>German</span>
                </label>
              </li>
            </ul>
          </div>

        <hr>

          <h4>Theme</h4>

          <div class="radio-toggle flex w-[124px]">
            <input id="theme-system" type="radio" name="darkmode" value="system" v-model="preferencesStore.preferences.theme" />
            <label for="theme-system" class="toggle toggle-yes">
              <font-awesome-icon
                    icon="display"
                    class=""
                  />
            </label>

            <input id="theme-light" checked type="radio" name="darkmode" value="light" class="ml-0" v-model="preferencesStore.preferences.theme" />
            <label for="theme-light" class="toggle toggle-yes left-[2px]">
              <font-awesome-icon
                    icon="sun"
                    class=""
                  />
            </label>

            <input id="theme-dark" type="radio" name="darkmode" value="dark" class="ml-0" v-model="preferencesStore.preferences.theme" />
            <label for="theme-dark" class="toggle toggle-yes left-[5px]">
              <font-awesome-icon
                    icon="moon"
                    class=""
                  />
            </label>
            <span></span>  
          </div>

        <hr>

        <h4>Two-Factor Authentication</h4>
          <div class="toggle flex w-full file: my-6">
            <label class="" for="2fa">
              <input type="checkbox" id="2fa" />
              <div class="slider round"></div>
            </label>
            <span class="dark:text-slate-300">Two-Factor Authentication</span>
          </div>

        <hr>

        <h4>Change Password</h4>

        <h5 class="my-4 text-sm">
          Please click the button below to change your password.<br>
          An email with instructions will be emailed to you.
          <input
type="submit" name="changepassword" value="CHANGE PASSWORD" 
            class="bg-ecogreen-500 rounded w-full h-8 my-3 text-lg font-medium text-white
                   hover:bg-ecogreen-700">
        </h5>

        <hr>

        <h4>CLOSE ACCOUNT</h4>

        <h5 class="my-4 text-sm">
          Before you close your account, please ensure you withdraw all the funds off the <i></i>ecoSystem.
          <input
type="submit" name="closeaccount" value="CLOSE ACCOUNT" 
            class="bg-red-500 rounded w-full h-8 my-3 text-lg font-medium text-white
                   hover:bg-red-700">
        </h5>

      </article>

    </div>
  </div>
</template>

<script lang="ts" setup>
  import { usePreferencesStore } from '../stores/preferences';
  const preferencesStore = usePreferencesStore();

  const log = () => {
    console.log(preferencesStore.preferences.theme);
  }
</script>

<style scoped>

  .radio-toggle {
    @apply inline-block relative bg-slate-300 h-10 p-0.5 rounded-full 
    }
  .radio-toggle input[type=radio] {
    @apply absolute w-9 h-9 cursor-pointer opacity-0 z-20
    }
  .radio-toggle input[type=radio] + label {
    @apply relative inline-block w-9 h-9 text-center text-slate-500 text-xl pt-1 pr-0.5 mr-1 z-10
    }
  .radio-toggle input[type=radio]:checked + label {
    @apply text-white z-10
    }
  .radio-toggle span {
    transition:all 0.3s ease-in-out;
    @apply absolute block h-9 w-9 bg-lime-500 rounded-full left-[22px] top-[2px]
    }
  .radio-toggle input[value="system"]:checked ~ span {
    left: 2px;
    }
  .radio-toggle input[value="light"]:checked ~ span {
    left: 43px;
    }
  .radio-toggle input[value="dark"]:checked ~ span {
    left: 86px;
    }

  .dataentry h3 {
    @apply w-full text-lg font-euroext uppercase font-light
    }

  .dataentry h4 {
      @apply w-full font-jura text-lg text-slate-700
      dark:text-slate-300;
  }
  .dataentry h5 {
      @apply w-full text-slate-700
      dark:text-slate-300;
  }
  .dataentry h6 {
      @apply w-full text-sm font-jura text-slate-700 uppercase mt-5
      dark:text-slate-300;
  }

  .dataentry hr {
      @apply w-full border-t border-solid my-4 border-slate-400;
  }

/* radio or checkbox image */
.pickimg ul {
  @apply w-full h-16;
  }
.pickimg li {
  @apply float-left mr-2;
  }
.pickimg input[type="radio"] , 
.pickimg input[type="checkbox"] {
  @apply hidden ;
  }
.pickimg input[type="radio"] + label, 
.pickimg input[type=checkbox] + label {
  @apply relative block w-16 h-16 p-0 m-0 bg-white grayscale bg-cover bg-no-repeat opacity-50 drop-shadow-lg;
  }
.pickimg input[type=radio]+ label:hover, 
.pickimg input[type=checkbox]+ label:hover,
.pickimg input[type=radio]:checked + label,
.pickimg input[type=checkbox]:checked + label {
  @apply grayscale-0 opacity-100
  }
.pickimg label span {
    @apply hidden absolute font-jura font-medium text-xl text-slate-700 top-[62px] z-50 w-16 h-4 text-center;
    }
.pickimg label:hover span {
    @apply block;
    }


  /* 
  .dataentry .amount { @apply bg-fuchsia-600/40; }
  .dataentry h2 { @apply bg-indigo-300; }
  .dataentry h3 { @apply bg-sky-200; }
  .dataentry h4 { @apply bg-lime-200; }
  .dataentry h5 { @apply bg-yellow-200; }
  .dataentry h6 { @apply bg-amber-300; }
   */
  .radio01 li {
    @apply mt-1 p-0 w-32 h-9 float-left ;
    }


</style>
