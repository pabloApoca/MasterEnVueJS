<template>
    <button @click="estado = !estado">{{ labelBtn }}</button>
</template>

<script>
export default {
    data() {
        return {
            estado: false
        }
    },
    computed: {
        labelBtn() {
            return this.estado ? 'Activo' : 'Inactivo'
        }
    }
}
</script>