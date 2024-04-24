<script setup>
import { useSnackStore } from '~/stores/snack';
let snack = useSnackStore();
import image1 from '../assets/image/home/banner2.png';
import image2 from '../assets/image/home/banner6.png';
import image3 from '../assets/image/home/banner7.png';
import image4 from '../assets/image/home/banner8.png';
import men from '../assets/image/section3/eye-men.jpeg';
import women from '../assets/image/section3/eye-women.webp';
import kid from '../assets/image/section3/eye-kid.jpg';
import mens from '../assets/image/section3/sun-men.jpg';
import womens from '../assets/image/section3/sun-women.webp';
import kids from '../assets/image/section3/sun-kid.jpg';

let glasses = ref([]);
let orders = ref([]);

onMounted(() => {
  fetchGlasses();
  fetchGlassesByOrder();
});

async function fetchGlassesByOrder() {
  try {
    const queryParams = new URLSearchParams({
      limit: '12',
      // page: page.value || '1',
    });
    const token = localStorage.getItem('token');
    const res = await fetch(
      `http://localhost:5000/api/glasses?${queryParams}`,
      {
        method: 'GET',
      }
    );
    const json = await res.json();
    // console.log(json);
    glasses.value = json.glasses;
    // count.value = json.count
  } catch (error) {
    return snack.error(error);
  }
}

async function fetchGlasses() {
  try {
    const res = await fetch(`http://localhost:5000/api/glasses/orders`, {
      method: 'GET',
    });
    const json = await res.json();
    console.log(json);
    orders.value = json.glasses;
    // count.value = json.count
  } catch (error) {
    return snack.error(error);
  }
}
</script>

<template>
  <v-carousel class="d-none d-md-block">
    <v-carousel-item :src="image1" cover></v-carousel-item>

    <v-carousel-item :src="image2" cover></v-carousel-item>

    <v-carousel-item :src="image3" cover></v-carousel-item>
    <v-carousel-item :src="image4" cover></v-carousel-item>
  </v-carousel>

  <v-carousel class="d-block d-md-none" height="200">
    <v-carousel-item :src="image1" cover></v-carousel-item>

    <v-carousel-item :src="image2" cover></v-carousel-item>

    <v-carousel-item :src="image3" cover></v-carousel-item>
    <v-carousel-item :src="image4" cover></v-carousel-item>
  </v-carousel>

  <v-container>
    <section class="section2">
      <v-row class="my-10">
        <v-col cols="12" lg="4">
          <div class="card2 pa-10">
            <div class="d-flex justify-center align-center circle">
              <Icon
                name="bx:phone-call"
                style="font-size: 30px"
                class="mb-3 icon"
              />
            </div>
            <p class="text-center mb-1 head">CALL US ANY TIME</p>
            <p class="text-center">Contact us 24/7 hours a day</p>
          </div>
        </v-col>

        <v-col cols="12" lg="4">
          <div class="card2 pa-10">
            <div class="d-flex justify-center align-center circle">
              <Icon
                name="streamline:transfer-van"
                style="font-size: 30px"
                class="mb-3 icon"
              />
            </div>
            <p class="text-center mb-1 head">PICKUP AT ANY STORE</p>
            <p class="text-center">Free shipping on orders over $65</p>
          </div>
        </v-col>

        <v-col cols="12" lg="4">
          <div class="card2 pa-10">
            <div class="d-flex justify-center align-center circle">
              <Icon
                name="bi:arrow-repeat"
                style="font-size: 30px"
                class="mb-3 icon mb-1"
              />
            </div>
            <p class="text-center mb-0 mt-4 head">FREE RETURNS</p>
            <p class="text-center">30-days free return policy</p>
          </div>
        </v-col>
      </v-row>
    </section>

    <section class="section4 my-10">
      <h3 class="text-center" style="font-weight: bold">Eyeglasses</h3>

      <v-row class="mt-10">
        <v-col>
          <v-card max-width="400">
            <v-img class="align-end text-black" height="200" :src="men" cover>
              <v-card-title>Men</v-card-title>
            </v-img>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" lg="4">
          <v-card max-width="400">
            <v-img class="align-end text-black" height="200" :src="women" cover>
              <v-card-title>Women</v-card-title>
            </v-img>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" lg="4">
          <v-card max-width="400">
            <v-img class="align-end text-black" height="200" :src="kid" cover>
              <v-card-title>Kid</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <section class="section4 my-10">
      <h3 class="text-center" style="font-weight: bold">Sunglasses</h3>

      <v-row class="mt-10">
        <v-col cols="12" md="6" lg="4">
          <v-card max-width="400">
            <v-img class="align-end text-black" height="200" :src="mens" cover>
              <v-card-title>Men</v-card-title>
            </v-img>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" lg="4">
          <v-card max-width="400">
            <v-img
              class="align-end text-black"
              height="200"
              :src="womens"
              cover
            >
              <v-card-title>Women</v-card-title>
            </v-img>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" lg="4">
          <v-card max-width="400">
            <v-img class="align-end text-black" height="200" :src="kids" cover>
              <v-card-title>Kid</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </v-container>

  <section class="section5 py-10">
    <h2
      class="ml-16 pb-5"
      style="font-weight: bold; color: #4d45d1; font-size: 40px"
    >
      New Arraivals
    </h2>
    <v-sheet class="mx-auto" max-width="2000" style="background-color: #eef2ff">
      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="n in glasses"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-card class="box">
            <img :src="n.images[0].image" alt="" width="280" height="200" />
            <div class="pa-3">
              <div class="d-flex justify-between mt-4">
                <p class="mb-1 fw-bold fz-13">{{ n.title }}</p>
                <p class="mb-1">{{ n.type }}</p>
              </div>

              <h5 class="fz-14">
                ${{ n.price }} <i class="ml-3 text-blue">{{ n.discount }}%</i>
              </h5>
              <v-btn color="red" class="mt-3"   @click="navigateTo(`/over-collection/glasses/${n._id}`)">Buy Now</v-btn>
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </section>

  <v-container>
    <section class="section6 my-10">
      <h3 class="text-center">View Collection</h3>
      <v-row class="my-10">
        <v-col cols="12" md="6" lg="3" v-for="e of glasses">
          <v-card @click="navigateTo(`/over-collection/glasses/${e._id}`)">
            <img :src="e.images[0].image" alt="" width="200" class="w-full" />

            <div class="pa-5">
              <p class="mb-1">{{ e.title }}</p>
              <p class="mb-1">
                Size :
                <span v-for="i of e.size"
                  ><v-chip color="blue">{{ i }}</v-chip></span
                >
              </p>
              <div class="d-flex justify-between">
                <p style="font-weight: bold">${{ e.price }}</p>
                <div class="d-flex">
                  <span
                    v-for="(image, index) in e.images"
                    :key="index"
                    class="circle"
                    :style="{ backgroundColor: image.color }"
                  ></span>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </v-container>

  <section class="section5 py-10 mt-16">
    <h2
      class="ml-16 pb-5"
      style="font-weight: bold; color: #4d45d1; font-size: 40px"
    >
      Most Sold Specs for a Reason
    </h2>
    <v-sheet class="mx-auto" max-width="2000" style="background-color: #eef2ff">
      <v-slide-group show-arrows>
        <!-- <v-slide-group-item
          v-for="n in orders.glass"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-card class="box">
            <img
              src="../assets/image/home/section5/glasses3.jpg"
              alt=""
              width="230"
              class="w-full"
            />
       
               <div class="pa-3">
              <div class="d-flex justify-between mt-4">
               
                <p class="mb-1 fw-bold fz-13 ">{{ n.title }}</p>
              <p class="mb-1">{{ n.type }}</p>
              
              </div>
            
              <h5 class="fz-14">${{ n.price }} <i class="ml-3 text-blue">{{n.discount}}%</i></h5>
              <v-btn color="red">ADD TO CART</v-btn>
            </div>
          </v-card>
        </v-slide-group-item> -->

        <v-slide-group>
          <v-slide-group-item
            v-for="order in orders"
            :key="order._id"
            v-slot="{ isSelected, toggle }"
          >
            <v-card class="box">
              <img
                :src="order.glass.images[0].image"
                alt=""
                width="230"
                class="w-full"
              />
              <div class="pa-3">
                <div class="d-flex justify-between mt-4">
                  <p class="mb-1 fw-bold fz-13">{{ order.glass.title }}</p>
                  <p class="mb-1">{{ order.glass.type }}</p>
                </div>
                <h5 class="fz-14">
                  ${{ order.glass.price }}
                  <i class="ml-3 text-blue">{{ order.glass.discount }}%</i>
                </h5>
                <v-btn
                  color="red"
                  @click="navigateTo(`/over-collection/glasses/${order._id}`)"
                  >Buy Now</v-btn
                >
              </div>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-slide-group>
    </v-sheet>
  </section>
</template>

<style scoped>
.low-height {
  height: 10px;
}
.circle{
  max-width: 23px;
  max-height: 23px;
 
}

.box {
  width: 300px;
  /* background-color: rgb(247, 200, 247); */
  padding: 10px;
  margin-inline: 10px;
}

.section1 {
  background-image: url('../assets/image/home/banner.jpg');
  /* box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.4); */
  min-height: 500px;
  max-width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}

.circle {
  width: 60px;
  display: block;
  margin-inline: auto;
  height: 60px;
  background: rgb(237, 235, 235);
  border-radius: 50%;
}

.head {
  font-size: 15px;
  font-weight: bold;
}
.w-full {
  /* width: 100%;
  max-width: 600px; */
  display: block;
  margin-inline: auto;
  height: 150px;
}
.section5 {
  background-color: #eef2ff;
}
</style>
