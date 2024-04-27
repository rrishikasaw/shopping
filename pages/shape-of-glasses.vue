<script setup>
import { useSnackStore } from '~/stores/snack';
let snack = useSnackStore();
let env = useRuntimeConfig().public.backend

let glasses = ref()
onMounted(()=>{
  getAllGlass()
})


async function getAllGlass() {
   try {
  
    const res = await fetch(`${env}/glasses/all`, {
      method: 'GET',
    });
    const json = await res.json();
    console.log(json);
    
    glasses.value = json.glasses;
    // count.value = json.count
  } catch (error) {
    return snack.error(error);
  }
}

</script>




<template>
 <h2 class="text-center my-10">The ultimate glasses fashion vocabulary</h2>
  <section class="section5 py-10  my-10" >
    <!-- <v-sheet class="mx-auto" max-width="2000" style="background-color: #eef2ff">
      <h5
      class="ml-16 pb-5"
      style="font-weight: bold; color: #4d45d1; font-size: 30px"
    >
     {{ e.type }}
    </h5>
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
    </v-sheet> -->
  
    <!-- <v-sheet class="mx-auto" max-width="2000" style="background-color: #eef2ff">
  <template v-for="(e, key) in data">
    <h5 class="ml-16 pb-5" style="font-weight: bold; color: #4d45d1; font-size: 30px">
      {{ key }}
    </h5>
    <v-slide-group show-arrows>
      <v-slide-group-item v-for="item in e" :key="item._id" v-slot="{ isSelected, toggle }">
        <v-card class="box">
          <img :src="item.images[0].image" alt="" width="250" height="160"/>
          <div class="pa-3">
            <div class="d-flex justify-between">
              <Icon name="material-symbols:star" style="font-size: 30px" class="mb-3 icon" color="yellow"/>
              <p>4.60</p>
              <p>India</p>
              <p>INSTOCK</p>
            </div>
            <p class="mb-1">{{ item.description }}</p>
            <h5>${{ item.price }}</h5>
            <v-btn color="red">ADD TO CART</v-btn>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </template>
</v-sheet> -->
  
 <v-sheet v-if="glasses" class="mx-auto" max-width="2000" style="background-color: #eef2ff">
    <div v-for="( glassList,type) in glasses" :key="type" class="mb-3">
      
     <template v-if="glassList.length">
      <hr>
       <h5 class="ml-16 pb-5" style="font-weight: bold; color: #4d45d1; font-size: 30px">{{ type }}</h5>
         <v-sheet class="mx-auto " max-width="2000" style="background-color: #eef2ff">
      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="n of glassList"
          :key="n._id"

        >
         <v-card class="box mx-3">
            <img :src="n.images[0]?.image" alt="" class="photo" height="200" />
          
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
     </template>
    </div>
  </v-sheet>
  </section>

 

</template>

<style scoped>

.box{
  width: 270px;
  padding: 10px;
}

.photo{
  width: 250px
}


</style>