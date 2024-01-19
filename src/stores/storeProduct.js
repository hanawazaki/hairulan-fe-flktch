import axios from "axios";
import { defineStore, acceptHMRUpdate } from "pinia";

export const useStoreProduct = defineStore('storeProduct', {
  state: () => {
    return {
      products: [],
      loading: false,
      product_detail: {}
    }
  },
  actions: {
    async getProducts(params) {
      this.loading = true
      const token = localStorage.getItem("token");
      axios.defaults.headers.common.Authorization = `Bearer ${token}`

      let parameters = {
        keyword: params.keyword,
        price: params.price,
        page: params.page,
        limit: params.limit,
        order: params.order
      }

      try {
        const res = await axios.get(`https://techtest.folkatech.com/api/product?keyword=${parameters.keyword}&price=${parameters.price}&page=${parameters.page}&limit=${parameters.limit}&order=${parameters.order}`, token)
        const result = await res.data.data
        console.log("res", res)
        console.log("result", result)
        this.products = result
        this.loading = false

      } catch (error) {
        console.log(error)
        this.loading = false
        this.router.push('/login')
      }
    },
    async getProductDetail(id) {
      this.loading = true
      const token = localStorage.getItem("token");
      axios.defaults.headers.common.Authorization = `Bearer ${token}`

      try {
        const res = await axios.get(`https://techtest.folkatech.com/api/product?keyword=&price=&page=1&limit=10&order=product_name,ASC`, token)
        const result = await res.data.data.list
        console.log(result)
        if (res.status === 200) {
          const detail = await result.filter((product) => parseInt(product.id) === parseInt(id))[0]
          this.product_detail = detail
        }
        this.loading = false

      } catch (error) {
        console.log(error)
        this.loading = false
      }
    }
  },
  getters: {
    formatPrice: () => {
      return (price) => {
        return `${parseInt(price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }).replace('/\s/g', '')}`;
      }
    },
  }
})





if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreProduct, import.meta.hot))
}