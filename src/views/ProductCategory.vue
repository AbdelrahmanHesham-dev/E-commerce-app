<template>
  <div style="margin-top: 170px; color: black" class="text-center">
    <h1
      style="font-weight: 900; font-size: 40px"
      class="text-3xl font-bold text-red"
    >
      {{ $route.params.title }}
    </h1>
    <v-container fluid class="pt-2">
      <v-card :loading="loading" class="pt-5" elevation="0">
        <v-row v-if="loading">
          <v-col cols="3" v-for="num in 4" :key="num">
            <v-skeleton-loader
              type="image, article, button"
              class="mx-auto"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row v-if="!loading">
          <v-col
            cols="3"
            v-for="item in categoryProducts.products"
            :key="item.id"
          >
            <v-lazy>
              <v-card
                :style="{ border: '1px solid #ffb547', height: '450px' }"
                elevation="0"
              >
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    class="img-parint"
                    style="height: 200px; overflow: hidden"
                  >
                    <img
                      :src="
                        showenItem[item.title]
                          ? showenItem[item.title]
                          : item.thumbnail
                      "
                      class="w-100"
                      :style="`height: 100%; transition: 0.4s all ease-in-out; scale: ${
                        isHovering ? 1.05 : 1
                      }`"
                      alt=""
                      v-bind="props"
                    />
                  </div>
                </v-hover>
                <v-card-text class="pl-1 py-0">
                  ( {{ item.title }} )
                  {{
                    item.description.split(" ").length <= 9
                      ? item.description
                      : item.description.split(" ").slice(0, 9).join(" ") +
                        "..."
                  }}
                </v-card-text>
                <v-rating
                  class="pt-0 pl-1"
                  color="#FFC623"
                  v-model="item.rating"
                  half-increments
                  readonly
                  density="compact"
                  size="small"
                ></v-rating>
                <v-card-text class="pl-1 pt-0">
                  <del>{{ item.price }}</del> From
                  <span class="font-weight-bold text-red">
                    {{
                      Math.ceil(
                        item.price -
                          item.price * (item.discountPercentage / 100)
                      )
                    }}$
                  </span>
                </v-card-text>
                <v-btn-toggle
                  style="padding: 5px"
                  class="pl-0"
                  v-model="showenItem[item.title]"
                >
                  <v-btn
                    v-for="(pic, i) in item.images"
                    :value="pic"
                    :key="i"
                    size="x-small"
                    rounded="xl"
                    ><img
                      :src="pic"
                      width="40"
                      height="40"
                      style="border-radius: 50%; border: 1px solid orange"
                      alt=""
                  /></v-btn>
                </v-btn-toggle>
                <div
                  class="text-center py-5 d-flex align-center justify-center"
                >
                  <v-btn
                    density="compact"
                    class="py-5 px-6 d-flex align-center justify-center"
                    :style="{
                      borderRadius: '30px',
                      backgroundColor: '#ffb547',
                      color: 'white',
                      paddingBottom: '50px',
                    }"
                    >Choose Options</v-btn
                  >
                </div>
              </v-card>
            </v-lazy>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
  <Footer class="pt-12" />
</template>

<script>
import Footer from "@/components/global/AppFooter.vue";
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";

export default {
  data: function () {
    return {
      showenItem: {},
      loading: false,
    };
  },
  methods: {
    ...mapActions(productsModule, ["getProductsByCategory"]),
  },
  computed: {
    ...mapState(productsModule, ["categoryProducts"]),
  },
  watch: {
    async $route() {
      this.loading = true;
      await this.getProductsByCategory(this.$route.params.category);
      this.loading = false;
    },
  },
  async mounted() {
    this.loading = true;
    await this.getProductsByCategory(this.$route.params.category);
    this.loading = false;
  },
  components: {
    Footer,
    VSkeletonLoader,
  },
};
</script>
