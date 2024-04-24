<script setup>
import { useSnackStore } from '~/stores/snack';
const route = useRoute();
const config = useRuntimeConfig().public;
const snack = useSnackStore();
let title = ref('');
let description = ref('');
let discount = ref();
let selectedType = ref('');
let sizes = ref('');
let genders = ref('');
let product = ref();
let selectedImage = ref();
let colors = ref('');
const imageDialog = ref(false);
let details = ref(false);
let images = ref([
  '/image/home/image2.jpg',
  '/image/home/image3.webp',
  '/image/home/image4.avif',
  '/image/home/image1.webp',
]);

const totalPrice = computed(
  () =>
    (product.value?.price || 0) + addOns.value.reduce((p, e) => p + e.price, 0)
);

onMounted(() => {
  fetchProduct();
});

async function fetchProduct() {
  try {
    let res = await fetch(
      `http://localhost:5000/api/glasses/${route.params.glassId}`,
      {
        method: 'GET',
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      }
    );
    const json = await res.json();
    console.log(json);
    if (!res.ok) {
      return console.log('product not found');
    }
    title.value = json.glass.title;
    description.value = json.glass.description;
    price.value = json.glass.price;
    discount.value = json.glass.discount;
    selectedType.value = json.glass.type;
    sizes.value = json.glass.size;
    genders.value = json.glass.gender;
    images.value = json.glass.images;
    colors.value = [
      ...new Set(json.glass.images.filter((e) => e.color).map((e) => e.color)),
    ];
  } catch (error) {
    console.log(error);
  }
}

let quantity = ref(1)
console.log(quantity.value);
let name = ref('test')
let email = ref('test@gmail.com')
let phone = ref('12345678909')
let address = ref('gkgkgkjgkg')
let city = ref('gkjgkjgg')
let state = ref('ggjgjg')
let zip  =ref('870709')
let country = ref('jgkjgjkgj')
let color = ref('red')
let price = ref('790709');
let size = ref('')
let gender = ref('')

async function postOder() {

  let res = await fetch(
    `http://localhost:5000/api/orders`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        phone: phone.value,
        price: "1234565678",
        color:color.value,
        size: size.value,
        city: city.value,
        zip: zip.value,
        state: state.value,
        address: address.value,
        country: country.value,
        gender: gender.value,
        quantity: quantity.value,
        glass: route.params.glassId
      }),
    }
  );
  const json = await res.json();
  if (!res.ok) {
    return snack.error(json.message);
  }
  snack.success('oder added successfully');
}


function increment() {
  quantity.value++;
  return increment;
}

function decrement() {
  if (quantity.value > 1) {
    quantity.value--;
  }
  return decrement;
}

const total_price = computed(() => {
  return price.value * quantity.value;
});
</script>

<template>
  <div>
    <Header2 />
    <v-container>
      <v-row justify="space-between">
        <v-col cols="12" lg="6">
          <!-- <v-sheet class="mx-auto pt-7" elevation="8">
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
          </v-sheet> -->

          <v-sheet class="mx-auto pt-7" elevation="8">
            <img
              :src="selectedImage || images[0].image"
              alt=""
              class="image d-block mx-auto"
              @click="imageDialog = true"
            />

            <v-slide-group class="pa-4" center-active show-arrows>
              <v-slide-group-item
                v-for="image in images"
                :key="image._id"
                v-slot="{ isSelected, toggle }"
              >
                <v-card
                  :color="isSelected ? 'primary' : 'grey lighten-1'"
                  class="ma-4"
                  width="100"
                  height="120"
                  @click="toggle"
                >
                  <div class="d-flex fill-height align-center justify-center">
                    <img
                      @click="selectedImage = image.image"
                      :src="image.image"
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
              {{ title }}
            </h2>
            <p>
              {{ description }}
            </p>
            <p>Glass type:- {{ selectedType }}</p>

            <p>
              Gender:
              <span v-for="e of genders"
                ><v-chip color="blue" class="ml-3">{{ e }}</v-chip></span
              >
            </p>

            <p>
              Size:
              <span v-for="e of sizes"
                ><v-chip color="pink" class="ml-3">{{ e }}</v-chip></span
              >
            </p>

            <p class="text-start fz-10">
              <span>
                <b>₹ {{ price }}</b>
              </span>
              <span class="ms-5 text-red fz-12">
                <i>{{ discount }}% OFF</i>
              </span>
            </p>

            <div class="d-flex">
              <v-select label="Gender" v-model="gender" :items="genders"></v-select>

              <v-select label="Size" v-model="size" :items="sizes"></v-select>
            </div>

            <div class="d-flex">
              <span
                v-for="(e, index) in colors"
                :key="index"
                class="circle"
                :style="{ backgroundColor: e }"
              ></span>
            </div>

            <div class="d-flex quantity-controls mt-10">
              <p class="mr-10">Quantity</p>
              <div class="box" @click="decrement">➖</div>
              <p>{{ quantity }}</p>
              <div class="box" @click="increment">➕</div>
            </div>

            <hr />

            <div class="mt-8">
              <v-btn
                class="text-center text-white bg-black px-16 mr-5"
                @click="details = true"
                >BUY NOW ({{ total_price }})</v-btn
              >
            </div>
          </div>

          <p class="fz-16 mt-7 text-grey-darken-3">
            <b>SHIPPING INFORMATION:</b> Add.atmiya complex maneja
            crossing.maneja Vadodara 390 013. Gujrat
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

    <v-dialog v-model="details" width="auto">
      <v-card class="pa-6">
        <h4>Fill all details</h4>
      <div class="d-flex">
          <v-text-field
          label="Enter name"
          class="text-field"
          variant="underlined"
          v-model="name"
        ></v-text-field>

        <v-text-field
          label="Enter email"
          class="text-field"
          variant="underlined"
          v-model="email"
        ></v-text-field>
      </div>

     <div class="d-flex">
         <v-text-field
          label="Enter phone"
          type="number"
          class="text-field"
          variant="underlined"
          v-model="phone"
        ></v-text-field>

        <v-text-field
          label="Enter address"
          class="text-field"
          variant="underlined"
          v-model="address"
        ></v-text-field>
     </div>

      <div class="d-flex">
          <v-text-field
          label="Enter zip"
          class="text-field"
          variant="underlined"
          v-model="zip"
        ></v-text-field>

        <v-text-field
          label="Enter city "
          class="text-field"
          variant="underlined"
          v-model="city"
        ></v-text-field>
      </div>

     <div class="d-flex">
         <v-text-field
          label="Enter state "
          class="text-field"
          variant="underlined"
          v-model="state"
        ></v-text-field>

        <v-text-field
          label="Enter country "
          class="text-field"
          variant="underlined"
          v-model="country"
        ></v-text-field>
     </div>

  <v-btn color="blue" @click="postOder()">ADD</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
.text-field {
  width: 600px;
}

.size {
  border-radius: 10px solid black;
  padding-inline: 15px;
  padding-block: 10px;
  border: 1px solid rgb(161, 158, 158);
}

.card2 {
  width: 300px;
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

/* .quantity-selector {
  margin: 20px;
}

.quantity-controls {
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 10px;
} */

.box {
  cursor: pointer;
  width: 40px;
  height: 40px;
  color: white;
  background-color: rgb(231, 222, 222);
  border-radius: 30px;
}

.box:hover {
  transform: scale(1.2);
}

.circle {
  max-width: 23px;
  max-height: 23px;
}
</style>
