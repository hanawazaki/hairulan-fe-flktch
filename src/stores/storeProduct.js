import axios from "axios";
import { defineStore, acceptHMRUpdate } from "pinia";

export const useStoreProduct = defineStore('storeProduct', {
  state: () => {
    return {
      products: [],
    }
  },
  actions: {
    async getProducts(params) {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common.Authorization = `Bearer ${token}`

      let parameters = {
        keyword: params.keyword,
        price_from: params.price_from,
        price_to: params.price_to,
        page: params.page,
        limit: params.limit,
        order: `${params.orderBy},${params.sort}`
      }

      try {
        const res = await axios.get(`https://techtest.folkatech.com/api/product?keyword=${parameters.keyword}&price=${parameters.price_from},${parameters.price_to}&page=${parameters.page}&limit=${parameters.limit}&order=${parameters.order}`, token)
        const result = await res.data.data.list
        console.log("res", res)
        this.products = result
      } catch (error) {
        // console.log(error)
        this.router.push('/login')
      }
    }
  },
  getters: {

  }
})





if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreProduct, import.meta.hot))
}