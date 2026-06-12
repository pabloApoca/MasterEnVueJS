<template>
    <div class="card" :class="{ noActivo:!state}">
        <h3>{{ nombreFormato }}</h3>
        <hr>
        <p>Numero: {{tel}}</p>
        <p>Correo: {{correo}}</p>
        <app-btn-state @stateUser="state = $event"/>
    </div>
</template>

<script>
export default {
    //props:['nombre', 'tel', 'profesion', 'correo'],
    data(){
        return{
            state:true
        }
    },
    props:{
        nombre:{
            type:String,
            default:"Nombre Usuario"
        },
        tel:{
            type:Number,
            default:123456
        },
        correo:{
            type:String,
            required:true
        },
    },
    computed:{
        nombreFormato(){
            return this.nombre[0].toUpperCase() + this.nombre.substr(1).toLowerCase()
        }
    }
}
</script>

<style scoped>
    .card {
        border: 1px solid #000000;
        padding: 5px;
        border-radius: 5px;
        width: 300px;
        margin: 150px;
        margin: 10px;
        box-shadow: 2px 2px 1px #ccc;
    }
    .noActivo{
        border: solid 2px red;
    }
</style>