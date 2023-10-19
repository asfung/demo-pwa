<script setup>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    document.title = 'Home'
</script>

<template>
    <div class="header">
        <Header />
    </div>
    <div class="content">
        <div class="row flex ml-80 mt-6">
            <h1 class="text-5xl text-blue-950">Lorem Ipsum.</h1> 
        </div>
        <div class="row flex ml-80 mt-6">
            <h1 class="text-2xl text-grey-950 text-justify w-96">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque obcaecati rem odit laudantium! Sapiente, sed quidem soluta non id ea.</h1> 
        </div>
    </div>
    <div class="footer">
        <Footer />
    </div>
</template>