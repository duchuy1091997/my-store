<template>
    <v-container grid-list-xs>
        <v-layout column>
            <v-flex>
                <v-img
                :src="product.url"
                ></v-img>
            </v-flex>
            <v-flex>
                <h1>{{ product.comment }}</h1>
                <p class="subtitle">{{ product.info }}</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props:{
        product:{
            type:Object,
            required:true
        }
    },
    data(){
        return{

        }
    }
}
</script>
