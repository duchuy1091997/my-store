<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex v-for="(product, index) in products" :key="product.id" xs12 md4 xl3 pa-2>
        <v-card>
          <v-img height="170" :src="product.url" aspect-ratio="2.75"></v-img>
          <v-card-title primary-title style="padding-top:13px">
            <div>
              <h3 class="headline">{{ product.comment }}</h3>
              <b>{{ product.price }} $</b>
              <div>{{ product.info }}</div>
            </div>
          </v-card-title>
          <v-btn color="info">
            Add to cart
            <v-icon>shopping_cart</v-icon>
          </v-btn>
          <v-btn color="warning" @click="$router.push({name: 'details', params:{ id:product.id, product:products[index] }})">
            More info
          </v-btn>
        </v-card>
      </v-flex>
    </v-layout>
    <v-btn @click="$router.push({ name: 'post'})" color="red" dark fixed bottom right fab>
      <v-icon>add</v-icon>
    </v-btn>
    <div class="text-xs-center">
      <v-pagination v-model="page" :length="6"></v-pagination>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      products: [
        {
          id: 0,
          url:
            "https://images.dog.ceo/breeds/germanshepherd/n02106662_13904.jpg",
          comment: "Dog resting",
          price: 1000,
          info: "Posted by Eder on Friday"
        },
        {
          id: 1,
          url: "https://images.dog.ceo/breeds/setter-gordon/n02101006_4491.jpg",
          comment: "Tongue dog",
          price: 1000,
          info: "Posted by Naye on Tuesday"
        },
        {
          id: 2,
          url:
            "https://images.dog.ceo/breeds/terrier-australian/n02096294_1429.jpg",
          comment: "Terrier Australian dog",
          price: 1000,
          info: "Posted by Eder on Monday"
        },
        {
          id: 3,
          url:
            "https://images.dog.ceo/breeds/mexicanhairless/n02113978_1595.jpg",
          comment: "Mexico Xoloitzcuintle",
          price: 1000,
          info: "Posted by Naye on Monday"
        },
        {
          id: 4,
          url: "https://images.dog.ceo/breeds/dachshund/dog-495133_640.jpg",
          comment: "Sad dog",
          price: 1000,
          info: "Posted by Eder on Monday"
        },
        {
          id: 5,
          url:
            "https://images.dog.ceo/breeds/mexicanhairless/n02113978_1595.jpg",
          comment: "Mexico Xoloitzcuintle",
          price: 1000,
          info: "Posted by Naye on Monday"
        },
        {
          id: 6,
          url: "https://images.dog.ceo/breeds/dachshund/dog-495133_640.jpg",
          comment: "Sad dog",
          price: 1000,
          info: "Posted by Eder on Monday"
        },
        {
          id: 7,
          url:
            "https://images.dog.ceo/breeds/mexicanhairless/n02113978_1595.jpg",
          comment: "Mexico Xoloitzcuintle",
          price: 1000,
          info: "Posted by Naye on Monday"
        },
        {
          id: 8,
          url: "https://images.dog.ceo/breeds/dachshund/dog-495133_640.jpg",
          comment: "Sad dog",
          price: 1000,
          info: "Posted by Eder on Monday"
        },
        {
          id: 9,
          url:
            "https://images.dog.ceo/breeds/mexicanhairless/n02113978_1595.jpg",
          comment: "Mexico Xoloitzcuintle",
          price: 1000,
          info: "Posted by Naye on Monday"
        },
        {
          id: 10,
          url: "https://images.dog.ceo/breeds/dachshund/dog-495133_640.jpg",
          comment: "Sad dog",
          price: 1000,
          info: "Posted by Eder on Monday"
        }
      ]
    };
  }
};
</script>