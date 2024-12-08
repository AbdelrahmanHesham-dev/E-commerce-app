<template>
  <div class="shop-withUs py-15 mt-7">
    <div class="title">
      <h2><span>Why Shop</span> With Us?</h2>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="3">
          <v-card
            elevation="0"
            class="text-center text-white"
            :style="{ backgroundColor: 'transparent' }"
          >
            <div class="parent-img">
              <img src="@/assets/images/free-shipping.png" alt="" />
            </div>
            <v-card-title
              :style="{ whiteSpace: 'pre-wrap', fontWeight: 'bold' }"
            >
              Free Shipping On Frist Order</v-card-title
            >
            <v-card-text :style="{ color: '#c6b8b8' }"
              >Prasent suscipipt mattis facilis</v-card-text
            >
            <a :style="{ color: '#c6b8b8' }" href="#">learn more</a>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card
            elevation="0"
            class="text-center text-white"
            :style="{ backgroundColor: 'transparent' }"
          >
            <div class="parent-img">
              <img src="@/assets/images/weekly-flash-sales.png" alt="" />
            </div>
            <v-card-title
              :style="{ whiteSpace: 'pre-wrap', fontWeight: 'bold' }"
            >
              Weekly Flash Sale</v-card-title
            >
            <v-card-text :style="{ color: '#c6b8b8' }"
              >Prasent suscipipt mattis facilis</v-card-text
            >
            <a :style="{ color: '#c6b8b8' }" href="#">learn more</a>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card
            elevation="0"
            class="text-center text-white"
            :style="{ backgroundColor: 'transparent' }"
          >
            <div class="parent-img">
              <img src="@/assets/images/cash-back.png" alt="" />
            </div>
            <v-card-title
              :style="{ whiteSpace: 'pre-wrap', fontWeight: 'bold' }"
            >
              Anual Payment Discount</v-card-title
            >
            <v-card-text :style="{ color: '#c6b8b8' }"
              >Prasent suscipipt mattis facilis</v-card-text
            >
            <a :style="{ color: '#c6b8b8' }" href="#">learn more</a>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card
            elevation="0"
            class="text-center text-white"
            :style="{ backgroundColor: 'transparent' }"
          >
            <div class="parent-img">
              <img src="@/assets/images/discount.png" alt="" />
            </div>
            <v-card-title
              :style="{ whiteSpace: 'pre-wrap', fontWeight: 'bold' }"
            >
              Cashback Raward Program</v-card-title
            >
            <v-card-text :style="{ color: '#c6b8b8' }"
              >Prasent suscipipt mattis facilis</v-card-text
            >
            <a :style="{ color: '#c6b8b8' }" href="#">learn more</a>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
.shop-withUs {
  background-image: url(../../assets/images/why-shop-with-us-banner.webp);
  background-size: cover;
  background-position: center;
  h2 {
    text-align: center;
    color: white;
    font-size: 35px;
    font-weight: 900;
    padding: 0px 0 40px 0;
    span {
      color: aquamarine;
    }
  }
}
</style>
