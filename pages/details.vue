<script setup>
import { useSnackStore } from '~/stores/snack';
import men from "../assets/image/mens-lens/lens2.jpg"

let product = ref();
let selectedImage = ref();
const imageDialog = ref(false);

let buy = ref();

const totalPrice = computed(
  () =>
    (product.value?.price || 0) + addOns.value.reduce((p, e) => p + e.price, 0)
);

const route = useRoute();
const config = useRuntimeConfig().public;
const snack = useSnackStore();



let images = ref([
 "/image/home/image2.jpg",
 "/image/home/image3.webp",
 "/image/home/image4.avif",
  "/image/home/image1.webp"




]);





</script>

<template>
  <div>
    <Header2 />
    <v-container>
      <v-row justify="space-between">
        <v-col cols="12" lg="6">
          <v-sheet class="mx-auto pt-7" elevation="8">
            <img
              :src="selectedImage||images[0]"
              alt=""
              class="image d-block mx-auto"
              @click="imageDialog = true"
            />

            <v-slide-group class="pa-4" center-active show-arrows>
              <v-slide-group-item
                v-for="e of images"
                :key="e"
                v-slot="{ isSelected, toggle }"
              >
                <v-card
                  :color="isSelected ? 'primary' : 'grey-lighten-1'"
                  class="ma-4"
                  width="100"
                  height="120"
                  @click="toggle"
                >
                  <div class="d-flex fill-height align-center justify-center">
                    <img
                      @click="selectedImage = e"
                      :src="e"
                      alt=""
                      width="100"
                      height="120"
                      style="object-fit: cover"
                    />
                  </div>
                </v-card>
              </v-slide-group-item>
            </v-slide-group>
          </v-sheet>
        </v-col>

        <v-col cols="12" lg="6">
          <div class="mx-auto px-4">
            <h2 class="text-start mb-3 pt-4 mb-1">
              Acne Studios Black Ingridh Sunglasses
            </h2>
            <p>
              Collections: Classes, Hipster, Prescription, sunglasses, Square
            </p>
            <p>Product type:- Sporty</p>
            <p>Vendor:- Ray.Ban</p>

            <div class="d-flex">
              <v-select label="Gender" :items="['Male', 'Female']"></v-select>
              <v-select label="Style" :items="['Classic', 'Vintage']"></v-select>
              <v-select label="Frame" :items="['Corban', 'Flexible Metal']"></v-select>
            </div>

            <p class="text-start fz-10">
              <span>
                <b>₹ 30000</b>
              </span>
              <span class="ms-5 text-red fz-12">
                <i>10% OFF</i>
              </span>
            </p>
            <div class="d-flex">
              <p>Quantity</p>
               <div class="box ">➖</div>
                <p>1 </p>
                <div class="box">➕</div>
              
              </div>
            <hr />
         

            <div class="mt-8">
              <v-btn
                class="text-center text-white bg-black px-16 mr-5"
                @click="buy = true"
                >BUY NOW (₹2000)</v-btn
              >
            </div>
          </div>

          <p class="fz-16 mt-7 text-grey-darken-3">
            <b>SHIPPING INFORMATION:</b> location
          </p>

          <p class="fz-16 mt-7 text-grey-darken-3">
            <b>DISCLAIMER:</b> Every product we offer is exclusively handcrafted
            to meet your specific preferences. Please be aware that due to the
            various artisan-led techniques and processes involved, the final
            color, texture, and pattern of your item may exhibit slight
            variations from the image displayed. These differences are a
            testament to the individuality and craftsmanship behind each piece,
            making your purchase truly unique and tailored to your taste. Your
            understanding of these handcrafted nuances is greatly appreciated as
            they enhance the distinctive character of your product.
          </p>
        </v-col>
      </v-row>
    </v-container>


    <v-dialog v-model="imageDialog" width="auto">
      <v-card>
        <img
          :src="selectedImage"
          alt="Image"
          style="max-width: 1000px; max-height: 1000px"
        />
      </v-card>
    </v-dialog>

   
  </div>
</template>

<style scoped>
.size {
  border-radius: 10px solid black;
  padding-inline: 15px;
  padding-block: 10px;
  border: 1px solid rgb(161, 158, 158);
}

.add {
  border: 1px solid black;
}

.card {
  border: 1px solid rgb(209, 7, 108);
}

.address {
  color: blueviolet;
  background-color: rgb(221, 191, 249);
}

.selected {
  border: 3px solid hotpink;
}

.color {
  width: 40px;
  height: 40px;
}

.image {
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 500px;
  object-fit: cover;
}

.image2 {
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 500px;
  object-fit: cover;
}

.iframe {
  width: 500px;
  height: 280px;
}

.dialog {
  width: 100%;
  max-width: 800px;
}

.box{
  width: 40px;
  height: 40px;
  background-color: rgb(244, 216, 180);
}
</style>
