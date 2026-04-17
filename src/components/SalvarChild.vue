<script setup>
defineProps(['nome' , 'preco' , 'categoria' , 'id'])
defineEmits(['salvar'])
import buttonChild from './buttonChild.vue';
</script>
<template>
<li>
    {{ nome }} - R${{ preco }} ({{ categoria }})
    <buttonChild @clique="$emit('salvar' , preco , id)" >
        corrigir preço
    </buttonChild>

</li>
</template>

<style scoped>
</style>