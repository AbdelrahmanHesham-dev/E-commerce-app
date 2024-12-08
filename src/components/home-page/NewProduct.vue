<template>
  <div class="new-products pt-12">
    <div class="title mb-1 px-5 d-flex align-center justify-space-between">
      <h2
        :style="{ fontWeight: 900, fontSize: '40px' }"
        class="text-3xl font-bold text-red"
      >
        New Products
      </h2>
      <a href="#" class="text-black" :style="{ fontSize: 14 }">Shop All</a>
    </div>
    <v-container fluid>
      <v-row class="d-flex justify-center align-center">
        <v-col cols="7" v-if="!products.length">
          <v-row>
            <v-col cols="4" v-for="num in 3" :key="num">
              <v-skeleton-loader
                type="image, article, button"
                class="mx-auto"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="7" class="pt-12" v-else>
          <Swiper
            :modules="modules"
            :slides-per-view="3"
            :space-between="30"
            :autoplay="{ delay: 3000 }"
          >
            <SwiperSlide v-for="item in products" :key="item.id">
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
                    item.description.split(" ").length <= 5
                      ? item.description
                      : item.description
                          .split(" ")
                          .slice(0, 5 - item.title.split(" ").length)
                          .join(" ") + "..."
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
                      width="50"
                      height="50"
                      style="border-radius: 50%; border: 1px solid orange"
                      alt=""
                  /></v-btn>
                </v-btn-toggle>
                <div class="text-center py-5">
                  <v-btn
                    density="compact"
                    class="py-3 px-6"
                    :style="{
                      borderRadius: '30px',
                      backgroundColor: '#ffb547',
                      color: 'white',
                      padding: '50px',
                    }"
                    >Choose Options</v-btn
                  >
                </div>
              </v-card>
            </SwiperSlide>
            <div class="swiper-pagination"></div>
          </Swiper>
        </v-col>
        <v-col cols="5">
          <img class="w-100" src="@/assets/images/vr-banner.webp" alt="" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Autoplay } from "swiper";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";

export default {
  props: {
    products: {
      type: Array,
    },
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    VSkeletonLoader,
  },
  data: () => ({
    showenItem: {},
  }),
};
</script>
