<template>
    <div class="card">
        <h3>{{nombre}} - {{ nombreFormato }}</h3>
        <hr>
        <p>Numero: {{tel}}</p>
        <p>Profesión: {{profesion}}</p>
        <p>Correo: {{correo}}</p>
        <p>Hobbies</p>
        <ul>
            <li v-for="(hobbie, i) in hobbies" :key="i">
                {{ hobbie }}
            </li>
        </ul>
        <p>Carro: {{ carro.marca }}</p>
        <app-btn-state/>
    </div>
</template>

<script>
export default {
    //props:['nombre', 'tel', 'profesion', 'correo'],
    props:{
        nombre:{
            type:String,
            default:"Nombre Usuario"
        },
        profesion:{
            type:String,
            default:"Empleado"
        },
        tel:{
            type:Number,
            default:123456
        },
        correo:{
            type:String,
            required:true
        },
        hobbies:{
            tyoe:Array,
            default:['Nadar', 'pintar']
        },
        carro:{
            type:Object,
            default:()=>({
                marca:'Honda'
            })
        }
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
</style>