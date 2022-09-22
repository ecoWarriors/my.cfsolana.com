import { defineStore } from 'pinia';
import { AxiosRequestHeaders, AxiosResponse } from 'axios';
import http from '@/utils/network';
import { UserProfile } from '@/models/user/user.profile';
import { mockUser } from '@/utils/mock/user';

export type AuthState = {
  user: UserProfile | null;
  token: any | null;
  loading: boolean;
  error: string | null;
};

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: '',
    loading: false,
    error: ''
  }),
  persist: true,

  getters: {
    isAuthenticated: (state) => {
      return (state.user === null) ? false : (!!state.token);
    },
  },

  actions: {
    async authenticateUser(username: string, password: string) {
      this.user = null;
      this.token = null;
      this.loading = true;

      try {
        await http.post(`/cbapi/v1/login?username=${username}&password=${password}`)
          .then(response => {
            // capture the JWT token from the response
            this.token = this.handleResponse(response).data;
            this.user = mockUser;
          })

          this.loading = false;
          return true;

      } catch(error) {
        console.log(error);
        this.loading = false;
        // this.error = error;
      }
    },

    async fetchUserPreferences(id: number) {
      this.loading = true;

      try {
        await http.get( `/cbapi/v1/user/${id}/preference`)
        .then( response => {
          this.user!.preferences = this.handleResponse(response).data;
        });
      } catch(error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },

    async fetchUserWallets(id: number) {
      this.loading = true;

      try {
        await http.get(`/cbapi/v1/user/${id}/wallet`)
        .then(response => {
          this.user!.wallets = this.handleResponse(response).data;
        });
      } catch(error) {
        console.log(error);
      } finally {
        this.loading = false
      }
    },

    async updateUser(id: number, data: UserProfile) {
      this.loading = true;

      try {
        await http.put(`/cbapi/v1/user/${id}`, data)
        .then(response => {
          this.user = this.handleResponse(response).data;
        });
      } catch(error) {
        console.log( error );
      } finally {
        this.loading = false
      }
    },

    async deleteUser(id: number) {
      this.loading = true;

      try {
        await http.delete(`/cbapi/v1/user/${id}`)
        .then( response => {
          this.user = this.handleResponse(response).data;
        });
      } catch(error) {
        console.log(error);
      } finally {
        this.loading = false
      }
    },

    async fetchWalletBalance(key: string) {
      this.loading = true;

      try {
        await http.get(`/api/solana/account/balance/${key}`)
        .then(response => {
          return this.handleResponse(response).data;
        });
      } catch(error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },

    async logout() {
      try {
        await http.post(`/cbapi/v1/logout`)
        .then(response => {
          // remove the user and token from the store
          this.user = null;
          this.token = null;
        })

        this.loading = false;
        return true;
      } catch(error) {
        console.log(error);
        this.loading = false;
      }
    },
    
    handleResponse(response: AxiosResponse) {
      const data = response.data;

      if(response.statusText !== 'OK') {
        if (response.status === 401){
          this.logout();
          location.reload();
        }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }

      return data;
    }
  }
});
