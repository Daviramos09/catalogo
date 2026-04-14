<script setup>
defineProps(['nome' , 'preco' , 'categotia'])
</script>
<template>
<li>
    {{ produto.nome }} - R$ {{ produto.preco }} {{ categoria }}
</li>
</template>

<style scoped>
</style>