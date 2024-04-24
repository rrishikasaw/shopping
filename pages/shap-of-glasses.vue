<script setup>
import { useSnackStore } from '~/stores/snack';
let snack = useSnackStore();

onMounted(()=>{
  // getProducts()
  getAllGlass()
})


// async function getProducts() {
//    try {
//      gender.value = route.query.gender
//     const queryParams = new URLSearchParams({
//       gender : gender.value
//     });
//     console.log(queryParams);
  
//     const res = await fetch(`http://localhost:5000/api/glasses/`, {
//       method: 'GET',
//     });
//     const json = await res.json();
//     console.log(json);
//     // glasses.value = json.glasses;
//     // count.value = json.count
//   } catch (error) {
//     return snack.error(error);
//   }
// }


// async function getAllGlass() {
//    try {
//     //  gender.value = route.query.gender
//     // const queryParams = new URLSearchParams({
//     //   gender : gender.value
//     // });
//     // console.log(queryParams);
  
//     const res = await fetch(`http://localhost:5000/api/glasses/all`, {
//       method: 'GET',
//     });
//     const json = await res.json();
//     console.log(json);
//     // glasses.value = json.glasses;
//     // count.value = json.count
//   } catch (error) {
//     return snack.error(error);
//   }
// }

</script>




<template>
 <h2 class="text-center my-10">The ultimate glasses fashion vocabulary</h2>
  <section class="section5 py-10">
    <h5
      class="ml-16 pb-5"
      style="font-weight: bold; color: #4d45d1; font-size: 30px"
    >
      Round Eye
    </h5>
    <v-sheet class="mx-auto" max-width="2000" style="background-color: #eef2ff">
      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="n in 25"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-card class="box">
            <img
              src="../assets/image/mens-lens/lens4.png"
              alt=""
              width="250"
              height="160"
            />
            <div class="pa-3">
              <div class="d-flex justify-between ">
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

    <section class="section5 py-10 mt-10">
    <h5
      class="ml-16 pb-5"
      style="font-weight: bold; color: #4d45d1; font-size: 30px"
    >
     Cat Eye
    </h5>
    <v-sheet class="mx-auto" max-width="2000" style="background-color: #eef2ff">
      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="n in 25"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-card class="box">
            <img
              src="../assets/image/women-lens/women6.avif"
              alt=""
              width="250"
              height="160"
            />
            <div class="pa-3">
              <div class="d-flex justify-between ">
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

  
    <section class="section5 py-10 mt-10">
    <h5
      class="ml-16 pb-5"
      style="font-weight: bold; color: #4d45d1; font-size: 30px"
    >
  Wayfarer
    </h5>
    <v-sheet class="mx-auto" max-width="2000" style="background-color: #eef2ff">
      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="n in 25"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-card class="box">
            <img
              src="../assets/image/mens-lens/lens3.jpg"
              alt=""
              width="250"
              height="160"
            />
            <div class="pa-3">
              <div class="d-flex justify-between ">
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

  
    <section class="section5 py-10 mt-10">
    <h5
      class="ml-16 pb-5"
      style="font-weight: bold; color: #4d45d1; font-size: 30px"
    >
  Aviator
    </h5>
    <v-sheet class="mx-auto" max-width="2000" style="background-color: #eef2ff">
      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="n in 25"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-card class="box">
            <img
              src="../assets/image/women-lens/women5.jpg"
              alt=""
              width="250"
              height="160"
            />
            <div class="pa-3">
              <div class="d-flex justify-between ">
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

   

  <section class="section5 py-10 mt-10">
    <h5
      class="ml-16 pb-5"
      style="font-weight: bold; color: #4d45d1; font-size: 30px"
    >
  Pantos
    </h5>
    <v-sheet class="mx-auto" max-width="2000" style="background-color: #eef2ff">
      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="n in 25"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-card class="box">
            <img
              src="../assets/image/women-lens/women6.avif"
              alt=""
              width="250"
              height="160"
            />
            <div class="pa-3">
              <div class="d-flex justify-between ">
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

   <section class="section5 py-10 mt-10">
    <h5
      class="ml-16 pb-5"
      style="font-weight: bold; color: #4d45d1; font-size: 30px"
    >
  Clubmaster
    </h5>
    <v-sheet class="mx-auto" max-width="2000" style="background-color: #eef2ff">
      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="n in 25"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-card class="box">
            <img
              src="../assets/image/women-lens/women8.webp"
              alt=""
              width="250"
              height="160"
            />
            <div class="pa-3">
              <div class="d-flex justify-between ">
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


   <section class="section5 py-10 mt-10">
    <h5
      class="ml-16 pb-5"
      style="font-weight: bold; color: #4d45d1; font-size: 30px"
    >
  Wrap
    </h5>
    <v-sheet class="mx-auto" max-width="2000" style="background-color: #eef2ff">
      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="n in 25"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-card class="box">
            <img
              src="../assets/image/kid-lens/kid4.webp"
              alt=""
              width="250"
              height="160"
            />
            <div class="pa-3">
              <div class="d-flex justify-between ">
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


    <section class="section5 py-10 mt-10">
    <h5
      class="ml-16 pb-5"
      style="font-weight: bold; color: #4d45d1; font-size: 30px"
    >
  Biker
    </h5>
    <v-sheet class="mx-auto" max-width="2000" style="background-color: #eef2ff">
      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="n in 25"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-card class="box">
            <img
              src="../assets/image/kid-lens/kid3.webp"
              alt=""
              width="250"
              height="160"
            />
            <div class="pa-3">
              <div class="d-flex justify-between ">
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

  <section class="section5 py-10 mt-10">
    <h5
      class="ml-16 pb-5"
      style="font-weight: bold; color: #4d45d1; font-size: 30px"
    >
  Shield
    </h5>
    <v-sheet class="mx-auto" max-width="2000" style="background-color: #eef2ff">
      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="n in 25"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-card class="box">
            <img
              src="../assets/image/kid-lens/kid4.webp"
              alt=""
              width="250"
              height="160"
            />
            <div class="pa-3">
              <div class="d-flex justify-between ">
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

  <section class="section5 py-10 mt-10">
    <h5
      class="ml-16 pb-5"
      style="font-weight: bold; color: #4d45d1; font-size: 30px"
    >
 Oval
    </h5>
    <v-sheet class="mx-auto" max-width="2000" style="background-color: #eef2ff">
      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="n in 25"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-card class="box">
            <img
              src="../assets/image/kid-lens/kid6.webp"
              alt=""
              width="250"
              height="160"
            />
            <div class="pa-3">
              <div class="d-flex justify-between ">
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

   <section class="section5 py-10 mt-10">
    <h5
      class="ml-16 pb-5"
      style="font-weight: bold; color: #4d45d1; font-size: 30px"
    >
Square
    </h5>
    <v-sheet class="mx-auto" max-width="2000" style="background-color: #eef2ff">
      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="n in 25"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-card class="box">
            <img
              src="../assets/image/mens-lens/lens3.jpg"
              alt=""
              width="250"
              height="160"
            />
            <div class="pa-3">
              <div class="d-flex justify-between ">
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

   <section class="section5 py-10 mt-10">
    <h5
      class="ml-16 pb-5"
      style="font-weight: bold; color: #4d45d1; font-size: 30px"
    >
Pilot
    </h5>
    <v-sheet class="mx-auto" max-width="2000" style="background-color: #eef2ff">
      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="n in 25"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-card class="box">
            <img
              src="../assets/image/mens-lens/lens3.jpg"
              alt=""
              width="250"
              height="160"
            />
            <div class="pa-3">
              <div class="d-flex justify-between ">
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

   <section class="section5 py-10 mt-10">
    <h5
      class="ml-16 pb-5"
      style="font-weight: bold; color: #4d45d1; font-size: 30px"
    >
Butterfly
    </h5>
    <v-sheet class="mx-auto" max-width="2000" style="background-color: #eef2ff">
      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="n in 25"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-card class="box">
            <img
              src="../assets/image/mens-lens/lens3.jpg"
              alt=""
              width="250"
              height="160"
            />
            <div class="pa-3">
              <div class="d-flex justify-between ">
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

   <section class="section5 py-10 mt-10">
    <h5
      class="ml-16 pb-5"
      style="font-weight: bold; color: #4d45d1; font-size: 30px"
    >
Heart
    </h5>
    <v-sheet class="mx-auto" max-width="2000" style="background-color: #eef2ff">
      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="n in 25"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-card class="box">
            <img
              src="../assets/image/mens-lens/lens3.jpg"
              alt=""
              width="250"
              height="160"
            />
            <div class="pa-3">
              <div class="d-flex justify-between ">
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

   <section class="section5 py-10 mt-10">
    <h5
      class="ml-16 pb-5"
      style="font-weight: bold; color: #4d45d1; font-size: 30px"
    >
Goggles
    </h5>
    <v-sheet class="mx-auto" max-width="2000" style="background-color: #eef2ff">
      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="n in 25"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-card class="box">
            <img
              src="../assets/image/mens-lens/lens3.jpg"
              alt=""
              width="250"
              height="160"
            />
            <div class="pa-3">
              <div class="d-flex justify-between ">
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

  <section class="section5 py-10 mt-10">
    <h5
      class="ml-16 pb-5"
      style="font-weight: bold; color: #4d45d1; font-size: 30px"
    >
Mirrored
    </h5>
    <v-sheet class="mx-auto" max-width="2000" style="background-color: #eef2ff">
      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="n in 25"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-card class="box">
            <img
              src="../assets/image/mens-lens/lens3.jpg"
              alt=""
              width="250"
              height="160"
            />
            <div class="pa-3">
              <div class="d-flex justify-between ">
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

  <section class="section5 py-10 mt-10">
    <h5
      class="ml-16 pb-5"
      style="font-weight: bold; color: #4d45d1; font-size: 30px"
    >
Ful Vue
    </h5>
    <v-sheet class="mx-auto" max-width="2000" style="background-color: #eef2ff">
      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="n in 25"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-card class="box">
            <img
              src="../assets/image/mens-lens/lens3.jpg"
              alt=""
              width="250"
              height="160"
            />
            <div class="pa-3">
              <div class="d-flex justify-between ">
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

    <section class="section5 py-10 mt-10">
    <h5
      class="ml-16 pb-5"
      style="font-weight: bold; color: #4d45d1; font-size: 30px"
    >
Polarized
    </h5>
    <v-sheet class="mx-auto" max-width="2000" style="background-color: #eef2ff">
      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="n in 25"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-card class="box">
            <img
              src="../assets/image/mens-lens/lens3.jpg"
              alt=""
              width="250"
              height="160"
            />
            <div class="pa-3">
              <div class="d-flex justify-between ">
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

<style scoped>

.box{
  width: 270px;
}


</style>