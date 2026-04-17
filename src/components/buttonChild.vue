<script setup>
defineProps(['nome' , 'preco' , 'categoria'])
defineEmits(['clique'])
</script>

<template>
<button @click.prevent="$emit('clique')">
    <slot>
      
    </slot>
</button>
</template>

<style scoped>


</style>