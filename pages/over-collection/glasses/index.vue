<script setup>
import { useSnackStore } from '~/stores/snack';
let snack = useSnackStore();
let env = useRuntimeConfig().public.backend;
const route = useRoute();
const gender = ref('men');
let glasses = ref([]);
let count = ref();
let timer;

function getColors(images) {
  console.log(images);
  let x = images
    .map((e) => e.color)
    .filter((e) => e)
    .slice(0, 3);
  console.log(x);
  return x;
}




onMounted(() => {
  getProducts();
  timer = setInterval(() => {
    if (gender.value !== route.query.gender) {
      getProducts();
    }
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});

async function getProducts() {
  try {
    gender.value = route.query.gender;
    const queryParams = new URLSearchParams({
      gender: gender.value,
    });
    console.log(queryParams);

    const res = await fetch(`${env}/glasses?${queryParams}`, {
      method: 'GET',
    });
    const json = await res.json();
    console.log(json);
    glasses.value = json.glasses;
    count.value = json.count;
  } catch (error) {
    return snack.error(error);
  }
}
</script>

<template>
  <v-container>
    <div class="d-flex justify-between">
      <h3 style="font-weight: bold" class="">
        {{ gender[0]?.toUpperCase() + gender.slice(1) }} Glasses
      </h3>
      <v-text-field
        class="ml-3 textfield"
        density="compact"
        label="Search glasses name"
        variant="outlined"
      ></v-text-field>
    </div>
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
                    v-for="color of getColors(e.images)"
                    :key="color"
                    class="circle"
                    :style="{ backgroundColor: color }"
                  ></span>
              
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row class=""> </v-row>
  </v-container>
</template>

<style>
.w-full {
  /* width: 100%;
  max-width: 600px; */
  display: block;
  margin-inline: auto;
  height: 150px;
}

.textfield {
  height: 30px;
  max-width: 500px;
}

.circle {
  width: 23px;
  height: 23px;
  border-radius: 50%;
}
</style>
