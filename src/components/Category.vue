<script setup>
import { useRouter } from 'vue-router'
const props = defineProps({
    categoria: {
        type: Object,
        required: true
    }
})
const emit = defineEmits(['movieId'])
const toGoCaterory = (id) =>{
    emit('movieId',id)
}
</script>
<template>
    <div class="category-movie">
        <a @click=" () => toGoCaterory(categoria.id) " class="category-movie__title">{{ categoria.name }}</a>
    </div>
</template>