<script setup lang="ts">
import {ref, computed} from "vue";

// data for NFT on cart
let data = ref([
    {
        image: "https://cdn.pentas.io/next-s3-uploads/2b1340b4-2ac3-4dfc-a572-7797025aa12e/1200-%2822%29.png",
        desciption: 'Frozen Yogurt',
        price: 0.6,
    },
    {
        image: "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=626&ext=jpg",
        desciption: 'Bad Ape',
        price: 0.14,
    },
    {
        image: "https://preview.redd.it/9zzel52xfcy81.jpg?width=640&crop=smart&auto=webp&s=b9315cc50f0929d7a3ff5a26c7f6147b37fd8a67",
        desciption: 'Ningen Dog',
        price: 0.7,
    },
])
// removing items funcion
function removeItem(itemToRemove : any) {
    data.value.splice(itemToRemove, 1)
}

//calculating prices
let sum = computed(() => {
    let total = 0;
    data.value.forEach((item) => {
        total += item.price;
    });
    return total;
})
</script>
<template>
    <v-table class="pa-4">
        <thead>
        <tr>
            <th class="text-left">Description</th>
            <th class="text-left">Remove</th>
            <th class="text-left">Price</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in data" :key="item.desciption">
            <td>
                <v-row>
                    <v-col>
<!--                        NFT image-->
                        <v-img
                            :src="item.image"
                            style="border-radius: 6px"
                            class="ma-2"
                        ></v-img>
                    </v-col>
                    <v-col>
                        <v-card-text class="align-center"
                        >{{ item.desciption }}
                        </v-card-text
                        >
                    </v-col>
                </v-row>
            </td>
            <td>
<!--                delete button-->
                <v-btn
                    @click="removeItem(index)"
                >
                    <v-icon icon="$delete"
                    ></v-icon>
                </v-btn>
            </td>
            <td>{{ item.price }} ETH</td>
        </tr>
        </tbody>
    </v-table>
    <v-row class="pa-5">
<!--        total prices-->
        <v-col class="v-col-8">
            <v-card-text class="text-center font-weight-black"
            >Total Price: {{ sum }} ETH
            </v-card-text
            >
        </v-col>
        <v-col class="v-col-2">
            <v-btn min-width="100px" class="text-center font-weight-black"
                   :style="{ background: $vuetify.theme.global.current.colors.navbtn}">Payment
            </v-btn>
        </v-col>
    </v-row>
</template>
