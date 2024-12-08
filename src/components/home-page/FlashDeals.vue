<template>
  <div class="flash-deals pt-13 px-6">
    <div class="title mb-7 px-1">
      <h2
        style="font-weight: 900; font-size: 40px"
        class="text-3xl font-bold text-red"
      >
        {{ title }}
      </h2>
    </div>
    <v-container fluid v-if="!products.length">
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="3" v-for="num in 4" :key="num">
              <v-skeleton-loader
                type="image, article, button"
                class="mx-auto"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <Swiper
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="modules"
      :slides-per-view="4"
      :space-between="30"
      class="pb-12"
      :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
      :autoplay="{ delay: 3000 }"
    >
      <SwiperSlide v-for="item in products" :key="item.id">
        <v-card
          :style="{ border: '1px solid #ffb547', height: '450px' }"
          elevation="0"
        >
          <v-hover v-slot="{ isHovering, props }">
            <div class="img-parint" style="height: 200px; overflow: hidden">
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
                : item.description.split(" ").slice(0, 9).join(" ") + "..."
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
                  item.price - item.price * (item.discountPercentage / 100)
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
      <div class="swiper-prev"></div>
      <div class="swiper-next"></div>
      <div class="swiper-pagination"></div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";

export default {
  props: {
    products: {
      type: Array,
    },
    title: {
      type: String,
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
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

<style lang="scss">
.flash-deals {
  .swiper-button-next,
  .swiper-button-prev {
    width: 35px;
    height: 35px;
    border: 2px solid rgb(95, 95, 95);
    border-radius: 50%;
    background-color: white;
    &::after {
      font-size: 14px;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(53, 53, 53);
      font-weight: 900;
    }
  }
}
</style>
