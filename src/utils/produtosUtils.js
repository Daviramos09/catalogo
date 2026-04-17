import { moedapais , idioma } from "./global";

function formataPreco(preco) {
 return preco.toLocaleString (idioma , {
    style: 'currency' ,
    currency: moedapais,
 })
}

export {formataPreco}