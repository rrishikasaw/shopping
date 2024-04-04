<script setup>
import image1 from '../assets/image/home/banner2.png';
import image2 from '../assets/image/home/banner6.png';
import image3 from '../assets/image/home/banner7.png';
import image4 from '../assets/image/home/banner8.png';
import men from '../assets/image/home/section3/man.webp';
import women from '../assets/image/home/section3/ppppp.jpg';
import kid from '../assets/image/home/section3/kids.jpg';
import mens from '../assets/image/home/section3/sun-men.webp';
import womens from '../assets/image/home/section3/yyyy.jpeg';
import kids from '../assets/image/home/section3/sun-kids.jpg';
</script>

<template>
  <v-carousel>
    <v-carousel-item :src="image1" cover></v-carousel-item>

    <v-carousel-item :src="image2" cover></v-carousel-item>

    <v-carousel-item :src="image3" cover></v-carousel-item>
    <v-carousel-item :src="image4" cover></v-carousel-item>
  </v-carousel>

  <v-container>
    <section class="section2">
      <v-row class="my-10">
        <v-col>
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

        <v-col>
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

        <v-col>
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
            <v-img class="align-end text-black" height="200" :src="womens" cover>
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
          v-for="n in 25"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-card class="box">
            <img
              src="../assets/image/home/section5/eye-glass2.avif"
              alt=""
              width="280"
              height="200"
            />
            <div class="pa-3">
              <div class="d-flex justify-between mt-4">
                <Icon
                  name="material-symbols:star"
                  style="font-size: 30px"
                  class="mb-3 icon"
                  color="yellow"
                />
                <p>4.60</p>
                <p>India</p>
                <p>INSTOCK</p>
              </div>
              <p class="mb-1">Premium Transparent Glass...</p>
              <h5>$240.00</h5>
              <v-btn color="red">ADD TO CART</v-btn>
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
        <v-col cols="12" md="6" lg="3">
          <v-card>
            <img
              src="../assets/image/mens-lens/lens1.jpg"
              alt=""
              width="200"
              class="w-full"
            />
            <div class="pa-5">
              <p class="mb-1">Vincent Chase Polarized</p>
              <p class="mb-1">Size:Medium</p>
              <div class="d-flex justify-between">
                <p style="font-weight: bold">$2000</p>
                <div>
                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="yellow"
                  />
                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="yellow"
                  />
                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="yellow"
                  />
                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="yellow"
                  />
                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="yellow"
                  />
                </div>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" lg="3">
          <v-card>
            <img
              src="../assets/image/mens-lens/lens2.jpg"
              alt=""
              width="200"
              class="w-full"
            />
            <div class="pa-5">
              <p class="mb-1">Vincent Chase Polarized</p>
              <p class="mb-1">Size:Medium</p>
              <div class="d-flex justify-between">
                <p style="font-weight: bold">$2000</p>
                <div>
                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="red"
                  />

                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="red"
                  />
                </div>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" lg="3">
          <v-card>
            <img
              src="../assets/image/mens-lens/lens3.jpg"
              alt=""
              width="200"
              class="w-full"
            />
            <div class="pa-5">
              <p class="mb-1">Vincent Chase Polarized</p>
              <p class="mb-1">Size:Medium</p>
              <div class="d-flex justify-between">
                <p style="font-weight: bold">$2000</p>
                <div>
                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="orange"
                  />
                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="orange"
                  />

                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="orange"
                  />
                </div>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" lg="3">
          <v-card>
            <img
              src="../assets/image/mens-lens/lens4.png"
              alt=""
              width="200"
              class="w-full"
            />
            <div class="pa-5">
              <p class="mb-1">Vincent Chase Polarized</p>
              <p class="mb-1">Size:Medium</p>
              <div class="d-flex justify-between">
                <p style="font-weight: bold">$2000</p>
                <div>
                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="green"
                  />
                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="green"
                  />
                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="green"
                  />
                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="green"
                  />
                </div>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" lg="3">
          <v-card>
            <img
              src="../assets/image/mens-lens/lens1.jpg"
              alt=""
              width="200"
              class="w-full"
            />
            <div class="pa-5">
              <p class="mb-1">Vincent Chase Polarized</p>
              <p class="mb-1">Size:Medium</p>
              <div class="d-flex justify-between">
                <p style="font-weight: bold">$2000</p>
                <div>
                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="yellow"
                  />
                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="yellow"
                  />
                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="yellow"
                  />
                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="yellow"
                  />
                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="yellow"
                  />
                </div>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" lg="3">
          <v-card>
            <img
              src="../assets/image/mens-lens/lens2.jpg"
              alt=""
              width="200"
              class="w-full"
            />
            <div class="pa-5">
              <p class="mb-1">Vincent Chase Polarized</p>
              <p class="mb-1">Size:Medium</p>
              <div class="d-flex justify-between">
                <p style="font-weight: bold">$2000</p>
                <div>
                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="red"
                  />

                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="red"
                  />
                </div>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" lg="3">
          <v-card>
            <img
              src="../assets/image/mens-lens/lens3.jpg"
              alt=""
              width="200"
              class="w-full"
            />
            <div class="pa-5">
              <p class="mb-1">Vincent Chase Polarized</p>
              <p class="mb-1">Size:Medium</p>
              <div class="d-flex justify-between">
                <p style="font-weight: bold">$2000</p>
                <div>
                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="orange"
                  />
                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="orange"
                  />

                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="orange"
                  />
                </div>
              </div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" lg="3">
          <v-card>
            <img
              src="../assets/image/mens-lens/lens4.png"
              alt=""
              width="200"
              class="w-full"
            />
            <div class="pa-5">
              <p class="mb-1">Vincent Chase Polarized</p>
              <p class="mb-1">Size:Medium</p>
              <div class="d-flex justify-between">
                <p style="font-weight: bold">$2000</p>
                <div>
                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="green"
                  />
                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="green"
                  />
                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="green"
                  />
                  <Icon
                    name="material-symbols:star"
                    style="font-size: 20px"
                    class="mb-3 icon"
                    color="green"
                  />
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
        <v-slide-group-item
          v-for="n in 25"
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
                <Icon
                  name="material-symbols:star"
                  style="font-size: 30px"
                  class="mb-3 icon"
                  color="yellow"
                />
                <p>4.60</p>
                <p>India</p>
                <p>INSTOCK</p>
              </div>
              <p class="mb-1">Premium Transparent Glass...</p>
              <h5>$240.00</h5>
              <v-btn color="red">ADD TO CART</v-btn>
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </section>
</template>

<style>
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
