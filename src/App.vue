<script setup>
import { ref } from 'vue'
import ProdutoChild from './components/ProdutoChild.vue';
import { listaProdutos } from './data/produtos';

const preco = ref(0);
const posicaoProduto = ref(-1)
const alterando = ref(false)
function corrigirpreco( precoProduto , idProduto) {
  preco.value = precoProduto;
  posicaoProduto.value = produtos.value.findIndex(p => p.id === idProduto)
  alterando.value = true;

}
const produtos = ref(listaProdutos)


function salvarpreco() {
  produtos.value[posicaoProduto.value].preco = preco.value
  alterando.value = false;
}
</script>

<template>
  <div class="container">
    <h1>Catalogo de produtos</h1>
    <div>
       <ul>
        <ProdutoChild v-for="produto in produtos" 
        :key="produto.id" :nome ="produto.nome" :categoria = "produto.categoria" :id="produto.id" :preco="produto.preco" @corrigirpreco="corrigirpreco">  
          
        </ProdutoChild>
       </ul>
    </div>
    <div v-show="alterando">
      <label>Preço</label>
      <input type="number" v-model="preco">
      <button @click.prevent="salvarpreco">salvar</button>
    </div>
  </div>
</template>

<style scoped>

</style>
