<script setup>
const props = defineProps({
    movieTop: Object,

})
const emit = defineEmits(['goMovie'])
const goToMovie = () =>{
    emit('goMovie' ,props.movieTop.id)
}
</script>
<template>
    <div class="top-movie" @click= goToMovie>
        <div class="top-movie__inner">
            <div class="top-movie__img">
                <img :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movieTop.poster_path}`" alt="">
                <span class="top-movie__rating">{{ movieTop.vote_average.toFixed(1) }}</span>
            </div>
            <div class="top-movie__title">{{ movieTop.title }}</div>
        </div>
    </div>
</template>