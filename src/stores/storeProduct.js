import axios from "axios";
import { defineStore, acceptHMRUpdate } from "pinia";

export const useStoreProduct = defineStore('storeProduct', {
  state: () => {
    return {
      products: [],
      loading: false,
      product_list: [
        {
          id: 1,
          name: "APEL MALANG ESPRESSO Finca Yudhistira Natural",
          price: "120000",
          description:
            "An awesome lot from a farm which belong to a family of our best friend, Yudistira. This is the family’s first move into specialty coffee industry but no one should never be underestimated their first move. A \\nlivestock farm turn into coffee farm, located at Gunung Arjuna (1100 MASL) Malang, yields enough proof that coffee grown and harvested there is indeed a great coffee. The whole family involvement in processing the coffee resulting a floral, sweet and very clean coffee beyond average coffee from Indonesia. The coffee inside is a natural process went through sundried for 5 weeks and rest for 1 month prior to delivery. Started in the year of 2017, this is more than a coffee with Love",
          short_description: "APEL MALANG ESPRESSO",
          slug: "apel-malang-246",
          min_order: 0,
          is_merchant_discount: 0,
          discount_amount: 0,
          product_type_id: 1,
          is_active: 1,
          is_deleted: 0,
          created_at: "2023-06-19T04:35:36.000000Z",
          updated_at: "2023-06-19T04:35:36.000000Z",
          product_type: {
            id: 1,
            name: "Roasted Bean",
            slug: "roasted-bean-2",
            is_deleted: 0,
            created_at: "2023-06-19T04:31:00.000000Z",
            updated_at: "2023-06-19T04:31:00.000000Z",
          },
          images: [
            {
              id: 1,
              product_id: 1,
              image_url:
                "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021111/2021-01-08T12_29_49.591Z_wr0uul.png",
              is_primary: 1,
              is_deleted: 0,
              created_at: "2023-06-19T04:35:36.000000Z",
              updated_at: "2023-06-19T04:35:36.000000Z",
            },
            {
              id: 2,
              product_id: 1,
              image_url:
                "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021111/2021-01-08T12_29_49.591Z_wr0uul.png",
              is_primary: 0,
              is_deleted: 0,
              created_at: "2023-06-19T04:35:36.000000Z",
              updated_at: "2023-06-19T04:35:36.000000Z",
            },
          ],
        },
        {
          id: 2,
          name: "APEL MALANG Finca Yudhistira Natural",
          price: "120000",
          description:
            "Microlot coffee renowned for clean with loud and clear flavour. Handled by respective family with amazing sortation! This coffee is a natural processed, a new  processed for this family! Highlighted with huge green apple flavor yet we call this coffee as Apel Malang, great for filter coffee",
          short_description: "APEL MALANG",
          slug: "apel-malang-245",
          min_order: 0,
          is_merchant_discount: 0,
          discount_amount: 0,
          product_type_id: 1,
          is_active: 1,
          is_deleted: 0,
          created_at: "2023-06-19T04:35:36.000000Z",
          updated_at: "2023-06-19T04:35:36.000000Z",
          product_type: {
            id: 1,
            name: "Roasted Bean",
            slug: "roasted-bean-2",
            is_deleted: 0,
            created_at: "2023-06-19T04:31:00.000000Z",
            updated_at: "2023-06-19T04:31:00.000000Z",
          },
          images: [
            {
              id: 3,
              product_id: 2,
              image_url:
                "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021242/2021-01-08T12_21_24.133Z_memuoh.png",
              is_primary: 1,
              is_deleted: 0,
              created_at: "2023-06-19T04:35:36.000000Z",
              updated_at: "2023-06-19T04:35:36.000000Z",
            },
            {
              id: 4,
              product_id: 2,
              image_url:
                "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021258/2021-01-08T12_21_26.405Z_seaf8r.png",
              is_primary: 0,
              is_deleted: 0,
              created_at: "2023-06-19T04:35:36.000000Z",
              updated_at: "2023-06-19T04:35:36.000000Z",
            },
          ],
        },
        {
          id: 3,
          name: "APEL Bandung",
          price: "50000",
          description:
            "Microlot coffee renowned for clean with loud and clear flavour. Handled by respective family with amazing sortation! This coffee is a natural processed, a new  processed for this family! Highlighted with huge green apple flavor yet we call this coffee as Apel Malang, great for filter coffee",
          short_description: "APEL MALANG",
          slug: "apel-malang-245",
          min_order: 0,
          is_merchant_discount: 0,
          discount_amount: 0,
          product_type_id: 1,
          is_active: 1,
          is_deleted: 0,
          created_at: "2023-06-19T04:35:36.000000Z",
          updated_at: "2023-06-19T04:35:36.000000Z",
          product_type: {
            id: 1,
            name: "Roasted Bean",
            slug: "roasted-bean-2",
            is_deleted: 0,
            created_at: "2023-06-19T04:31:00.000000Z",
            updated_at: "2023-06-19T04:31:00.000000Z",
          },
          images: [
            {
              id: 3,
              product_id: 2,
              image_url:
                "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021242/2021-01-08T12_21_24.133Z_memuoh.png",
              is_primary: 1,
              is_deleted: 0,
              created_at: "2023-06-19T04:35:36.000000Z",
              updated_at: "2023-06-19T04:35:36.000000Z",
            },
            {
              id: 4,
              product_id: 2,
              image_url:
                "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021258/2021-01-08T12_21_26.405Z_seaf8r.png",
              is_primary: 0,
              is_deleted: 0,
              created_at: "2023-06-19T04:35:36.000000Z",
              updated_at: "2023-06-19T04:35:36.000000Z",
            },
          ],
        },
        {
          id: 3,
          name: "APEL Bandung",
          price: "50000",
          description:
            "Microlot coffee renowned for clean with loud and clear flavour. Handled by respective family with amazing sortation! This coffee is a natural processed, a new  processed for this family! Highlighted with huge green apple flavor yet we call this coffee as Apel Malang, great for filter coffee",
          short_description: "APEL MALANG",
          slug: "apel-malang-245",
          min_order: 0,
          is_merchant_discount: 0,
          discount_amount: 0,
          product_type_id: 1,
          is_active: 1,
          is_deleted: 0,
          created_at: "2023-06-19T04:35:36.000000Z",
          updated_at: "2023-06-19T04:35:36.000000Z",
          product_type: {
            id: 1,
            name: "Roasted Bean",
            slug: "roasted-bean-2",
            is_deleted: 0,
            created_at: "2023-06-19T04:31:00.000000Z",
            updated_at: "2023-06-19T04:31:00.000000Z",
          },
          images: [
            {
              id: 3,
              product_id: 2,
              image_url:
                "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021242/2021-01-08T12_21_24.133Z_memuoh.png",
              is_primary: 1,
              is_deleted: 0,
              created_at: "2023-06-19T04:35:36.000000Z",
              updated_at: "2023-06-19T04:35:36.000000Z",
            },
            {
              id: 4,
              product_id: 2,
              image_url:
                "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021258/2021-01-08T12_21_26.405Z_seaf8r.png",
              is_primary: 0,
              is_deleted: 0,
              created_at: "2023-06-19T04:35:36.000000Z",
              updated_at: "2023-06-19T04:35:36.000000Z",
            },
          ],
        },
        {
          id: 3,
          name: "APEL Bandung",
          price: "50000",
          description:
            "Microlot coffee renowned for clean with loud and clear flavour. Handled by respective family with amazing sortation! This coffee is a natural processed, a new  processed for this family! Highlighted with huge green apple flavor yet we call this coffee as Apel Malang, great for filter coffee",
          short_description: "APEL MALANG",
          slug: "apel-malang-245",
          min_order: 0,
          is_merchant_discount: 0,
          discount_amount: 0,
          product_type_id: 1,
          is_active: 1,
          is_deleted: 0,
          created_at: "2023-06-19T04:35:36.000000Z",
          updated_at: "2023-06-19T04:35:36.000000Z",
          product_type: {
            id: 1,
            name: "Roasted Bean",
            slug: "roasted-bean-2",
            is_deleted: 0,
            created_at: "2023-06-19T04:31:00.000000Z",
            updated_at: "2023-06-19T04:31:00.000000Z",
          },
          images: [
            {
              id: 3,
              product_id: 2,
              image_url:
                "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021242/2021-01-08T12_21_24.133Z_memuoh.png",
              is_primary: 1,
              is_deleted: 0,
              created_at: "2023-06-19T04:35:36.000000Z",
              updated_at: "2023-06-19T04:35:36.000000Z",
            },
            {
              id: 4,
              product_id: 2,
              image_url:
                "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021258/2021-01-08T12_21_26.405Z_seaf8r.png",
              is_primary: 0,
              is_deleted: 0,
              created_at: "2023-06-19T04:35:36.000000Z",
              updated_at: "2023-06-19T04:35:36.000000Z",
            },
          ],
        },
        {
          id: 3,
          name: "APEL Bandung",
          price: "50000",
          description:
            "Microlot coffee renowned for clean with loud and clear flavour. Handled by respective family with amazing sortation! This coffee is a natural processed, a new  processed for this family! Highlighted with huge green apple flavor yet we call this coffee as Apel Malang, great for filter coffee",
          short_description: "APEL MALANG",
          slug: "apel-malang-245",
          min_order: 0,
          is_merchant_discount: 0,
          discount_amount: 0,
          product_type_id: 1,
          is_active: 1,
          is_deleted: 0,
          created_at: "2023-06-19T04:35:36.000000Z",
          updated_at: "2023-06-19T04:35:36.000000Z",
          product_type: {
            id: 1,
            name: "Roasted Bean",
            slug: "roasted-bean-2",
            is_deleted: 0,
            created_at: "2023-06-19T04:31:00.000000Z",
            updated_at: "2023-06-19T04:31:00.000000Z",
          },
          images: [
            {
              id: 3,
              product_id: 2,
              image_url:
                "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021242/2021-01-08T12_21_24.133Z_memuoh.png",
              is_primary: 1,
              is_deleted: 0,
              created_at: "2023-06-19T04:35:36.000000Z",
              updated_at: "2023-06-19T04:35:36.000000Z",
            },
            {
              id: 4,
              product_id: 2,
              image_url:
                "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021258/2021-01-08T12_21_26.405Z_seaf8r.png",
              is_primary: 0,
              is_deleted: 0,
              created_at: "2023-06-19T04:35:36.000000Z",
              updated_at: "2023-06-19T04:35:36.000000Z",
            },
          ],
        },
        {
          id: 3,
          name: "APEL Bandung",
          price: "50000",
          description:
            "Microlot coffee renowned for clean with loud and clear flavour. Handled by respective family with amazing sortation! This coffee is a natural processed, a new  processed for this family! Highlighted with huge green apple flavor yet we call this coffee as Apel Malang, great for filter coffee",
          short_description: "APEL MALANG",
          slug: "apel-malang-245",
          min_order: 0,
          is_merchant_discount: 0,
          discount_amount: 0,
          product_type_id: 1,
          is_active: 1,
          is_deleted: 0,
          created_at: "2023-06-19T04:35:36.000000Z",
          updated_at: "2023-06-19T04:35:36.000000Z",
          product_type: {
            id: 1,
            name: "Roasted Bean",
            slug: "roasted-bean-2",
            is_deleted: 0,
            created_at: "2023-06-19T04:31:00.000000Z",
            updated_at: "2023-06-19T04:31:00.000000Z",
          },
          images: [
            {
              id: 3,
              product_id: 2,
              image_url:
                "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021242/2021-01-08T12_21_24.133Z_memuoh.png",
              is_primary: 1,
              is_deleted: 0,
              created_at: "2023-06-19T04:35:36.000000Z",
              updated_at: "2023-06-19T04:35:36.000000Z",
            },
            {
              id: 4,
              product_id: 2,
              image_url:
                "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021258/2021-01-08T12_21_26.405Z_seaf8r.png",
              is_primary: 0,
              is_deleted: 0,
              created_at: "2023-06-19T04:35:36.000000Z",
              updated_at: "2023-06-19T04:35:36.000000Z",
            },
          ],
        },
        {
          id: 3,
          name: "APEL Bandung",
          price: "50000",
          description:
            "Microlot coffee renowned for clean with loud and clear flavour. Handled by respective family with amazing sortation! This coffee is a natural processed, a new  processed for this family! Highlighted with huge green apple flavor yet we call this coffee as Apel Malang, great for filter coffee",
          short_description: "APEL MALANG",
          slug: "apel-malang-245",
          min_order: 0,
          is_merchant_discount: 0,
          discount_amount: 0,
          product_type_id: 1,
          is_active: 1,
          is_deleted: 0,
          created_at: "2023-06-19T04:35:36.000000Z",
          updated_at: "2023-06-19T04:35:36.000000Z",
          product_type: {
            id: 1,
            name: "Roasted Bean",
            slug: "roasted-bean-2",
            is_deleted: 0,
            created_at: "2023-06-19T04:31:00.000000Z",
            updated_at: "2023-06-19T04:31:00.000000Z",
          },
          images: [
            {
              id: 3,
              product_id: 2,
              image_url:
                "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021242/2021-01-08T12_21_24.133Z_memuoh.png",
              is_primary: 1,
              is_deleted: 0,
              created_at: "2023-06-19T04:35:36.000000Z",
              updated_at: "2023-06-19T04:35:36.000000Z",
            },
            {
              id: 4,
              product_id: 2,
              image_url:
                "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021258/2021-01-08T12_21_26.405Z_seaf8r.png",
              is_primary: 0,
              is_deleted: 0,
              created_at: "2023-06-19T04:35:36.000000Z",
              updated_at: "2023-06-19T04:35:36.000000Z",
            },
          ],
        },
        {
          id: 3,
          name: "APEL Bandung",
          price: "50000",
          description:
            "Microlot coffee renowned for clean with loud and clear flavour. Handled by respective family with amazing sortation! This coffee is a natural processed, a new  processed for this family! Highlighted with huge green apple flavor yet we call this coffee as Apel Malang, great for filter coffee",
          short_description: "APEL MALANG",
          slug: "apel-malang-245",
          min_order: 0,
          is_merchant_discount: 0,
          discount_amount: 0,
          product_type_id: 1,
          is_active: 1,
          is_deleted: 0,
          created_at: "2023-06-19T04:35:36.000000Z",
          updated_at: "2023-06-19T04:35:36.000000Z",
          product_type: {
            id: 1,
            name: "Roasted Bean",
            slug: "roasted-bean-2",
            is_deleted: 0,
            created_at: "2023-06-19T04:31:00.000000Z",
            updated_at: "2023-06-19T04:31:00.000000Z",
          },
          images: [
            {
              id: 3,
              product_id: 2,
              image_url:
                "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021242/2021-01-08T12_21_24.133Z_memuoh.png",
              is_primary: 1,
              is_deleted: 0,
              created_at: "2023-06-19T04:35:36.000000Z",
              updated_at: "2023-06-19T04:35:36.000000Z",
            },
            {
              id: 4,
              product_id: 2,
              image_url:
                "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021258/2021-01-08T12_21_26.405Z_seaf8r.png",
              is_primary: 0,
              is_deleted: 0,
              created_at: "2023-06-19T04:35:36.000000Z",
              updated_at: "2023-06-19T04:35:36.000000Z",
            },
          ],
        },
        {
          id: 3,
          name: "APEL Bandung",
          price: "50000",
          description:
            "Microlot coffee renowned for clean with loud and clear flavour. Handled by respective family with amazing sortation! This coffee is a natural processed, a new  processed for this family! Highlighted with huge green apple flavor yet we call this coffee as Apel Malang, great for filter coffee",
          short_description: "APEL MALANG",
          slug: "apel-malang-245",
          min_order: 0,
          is_merchant_discount: 0,
          discount_amount: 0,
          product_type_id: 1,
          is_active: 1,
          is_deleted: 0,
          created_at: "2023-06-19T04:35:36.000000Z",
          updated_at: "2023-06-19T04:35:36.000000Z",
          product_type: {
            id: 1,
            name: "Roasted Bean",
            slug: "roasted-bean-2",
            is_deleted: 0,
            created_at: "2023-06-19T04:31:00.000000Z",
            updated_at: "2023-06-19T04:31:00.000000Z",
          },
          images: [
            {
              id: 3,
              product_id: 2,
              image_url:
                "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021242/2021-01-08T12_21_24.133Z_memuoh.png",
              is_primary: 1,
              is_deleted: 0,
              created_at: "2023-06-19T04:35:36.000000Z",
              updated_at: "2023-06-19T04:35:36.000000Z",
            },
            {
              id: 4,
              product_id: 2,
              image_url:
                "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021258/2021-01-08T12_21_26.405Z_seaf8r.png",
              is_primary: 0,
              is_deleted: 0,
              created_at: "2023-06-19T04:35:36.000000Z",
              updated_at: "2023-06-19T04:35:36.000000Z",
            },
          ],
        },
        {
          id: 3,
          name: "APEL Bandung",
          price: "50000",
          description:
            "Microlot coffee renowned for clean with loud and clear flavour. Handled by respective family with amazing sortation! This coffee is a natural processed, a new  processed for this family! Highlighted with huge green apple flavor yet we call this coffee as Apel Malang, great for filter coffee",
          short_description: "APEL MALANG",
          slug: "apel-malang-245",
          min_order: 0,
          is_merchant_discount: 0,
          discount_amount: 0,
          product_type_id: 1,
          is_active: 1,
          is_deleted: 0,
          created_at: "2023-06-19T04:35:36.000000Z",
          updated_at: "2023-06-19T04:35:36.000000Z",
          product_type: {
            id: 1,
            name: "Roasted Bean",
            slug: "roasted-bean-2",
            is_deleted: 0,
            created_at: "2023-06-19T04:31:00.000000Z",
            updated_at: "2023-06-19T04:31:00.000000Z",
          },
          images: [
            {
              id: 3,
              product_id: 2,
              image_url:
                "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021242/2021-01-08T12_21_24.133Z_memuoh.png",
              is_primary: 1,
              is_deleted: 0,
              created_at: "2023-06-19T04:35:36.000000Z",
              updated_at: "2023-06-19T04:35:36.000000Z",
            },
            {
              id: 4,
              product_id: 2,
              image_url:
                "https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021258/2021-01-08T12_21_26.405Z_seaf8r.png",
              is_primary: 0,
              is_deleted: 0,
              created_at: "2023-06-19T04:35:36.000000Z",
              updated_at: "2023-06-19T04:35:36.000000Z",
            },
          ],
        },

      ]
    }
  },
  actions: {
    async getProducts(params) {
      this.loading = true
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
        const result = await res.data.data
        console.log("res", result)
        this.products = result
        this.loading = false

      } catch (error) {
        // console.log(error)
        this.loading = false
        this.router.push('/login')
      }
    },
    formatPrice(price) {
      return `Rp ${parseInt(price).toFixed()}`;
    }
  },
  getters: {

  }
})





if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreProduct, import.meta.hot))
}