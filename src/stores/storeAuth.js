import { defineStore, acceptHMRUpdate } from "pinia";
import axios from "axios";

export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return {
      user: {},
      isTokenAvailable: false
    }
  },
  actions: {
    async register(formRegister) {
      try {
        let formattedForm = {
          name: `${formRegister.first_name} ${formRegister.last_name}`,
          email: formRegister.email,
          phone: formRegister.phone,
          password: formRegister.password
        }
        // console.log("formattedForm", formattedForm)
        await axios.post("https://techtest.folkatech.com/api/register", formattedForm)
        this.router.push('/login')
      } catch (error) {
        console.log("error", error)
      }
    },
    async login(formLogin) {
      try {
        const res = await axios.post("https://techtest.folkatech.com/api/login", formLogin)
        if (res.data.code === 200) {
          localStorage.setItem("token", res.data.data.token)
          this.router.push('/')
        }
      } catch (error) {
        console.log("error", error)
      }
    },
    logout() {
      localStorage.removeItem("token");
      this.isTokenAvailable = false;
      this.router.push("/login");
    },
    checkTokenAvailability() {
      const token = localStorage.getItem("token");
      this.isTokenAvailable = !!token;
    }
  },
  getters: {

  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreAuth, import.meta.hot))
}