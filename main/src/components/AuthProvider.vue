<script setup lang="ts">
import { useTheme } from 'vuetify'

const { global } = useTheme()

// social media icons
const authProviders = [
    {
        icon: 'mdi-facebook',
        color: '#4267b2',
        colorInDark: '#4267b2',
    },
    {
        icon: 'mdi-twitter',
        color: '#1da1f2',
        colorInDark: '#1da1f2',
    },
    {
        icon: 'mdi-github',
        color: '#272727',
        colorInDark: '#fff',
    },
    {
        icon: 'mdi-gmail',
        color: '#db4437',
        colorInDark: '#db4437',
    },
]
</script>

<template>
<!--    adding icons to html-->
    <VBtn
        v-for="link in authProviders"
        :key="link.icon"
        :icon="link.icon"
        variant="text"
        :color="global.name.value === 'dark' ? link.colorInDark : link.color"
    />
</template>
