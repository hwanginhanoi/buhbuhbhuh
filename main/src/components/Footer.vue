<script setup lang="ts">
import {useDisplay} from 'vuetify';

//icons
const icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
]
//check if size of window is middle (1024)
let {mdAndUp} = useDisplay();

</script>

<template>
    <v-footer absolute>
        <v-container class="d-flex flex-column flex-wrap" style="max-width: 95vw; padding-right: 2em;">
            <v-row>
                <v-col cols="12" md="6">
                    <v-img src="src/assets/m-dark.png" max-width="30px"></v-img>
                    <h1>M3LODY</h1>
                    <p>Welcome to the premier digital hub for music NFTs, where melodies meet the blockchain. Explore,
                        trade, and unearth exclusive musical treasures in our revolutionary marketplace.</p>
                    <div>
                        <v-btn
                            v-for="icon in icons"
                            :key="icon"
                            class="mx-4"
                            :icon="icon"
                            variant="text"
                        ></v-btn>
                    </div>
                </v-col>
                <v-col cols="4" md="2">
<!--                    about us-->
                    <v-list>
                        <v-list-subheader :class="!mdAndUp? 'smallertext':''"><h2>About Us</h2></v-list-subheader>
                        <v-list-item>
                            <router-link to="">Our team</router-link>
                        </v-list-item>
                        <v-list-item>
                            <router-link to="">Careers</router-link>
                        </v-list-item>
                        <v-list-item>
                            <router-link to="">Contact</router-link>
                        </v-list-item>
                    </v-list>
                </v-col>
                <v-col cols="4" md="2">
<!--                    marketplace-->
                    <v-list>
                        <v-list-subheader :class="[(!mdAndUp ? 'smallertext' : ''), 'w-100']"><h2>Marketplace</h2>
                        </v-list-subheader>
                        <v-list-item>
                            <router-link to="/marketplace">Buy</router-link>
                        </v-list-item>
                        <v-list-item>
                            <router-link to="/create">Create</router-link>
                        </v-list-item>
                    </v-list>
                </v-col>
                <v-col cols="4" md="2">
<!--                    account-->
                    <v-list>
                        <v-list-subheader :class="!mdAndUp? 'smallertext':''"><h2>Account</h2></v-list-subheader>
                        <v-list-item>
                            <router-link to="/profile">Profile</router-link>
                        </v-list-item>
                        <v-list-item>
                            <router-link to="/account">Account</router-link>
                        </v-list-item>
                        <v-list-item>
                            <router-link to="/transaction">History</router-link>
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>
<!--            brand-->
            <v-row class="justify-center">
                <v-icon>mdi-copyright</v-icon>
                {{ new Date().getFullYear() }} — <strong>Trader Network, Inc</strong>
            </v-row>
        </v-container>
    </v-footer>
</template>

<style scoped>
</style>