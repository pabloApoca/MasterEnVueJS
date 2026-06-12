<template>
    <button @click="estado = !estado">{{ labelBtn }}</button>
</template>

<script>
export default {
    data() {
        return {
            estado: true
        }
    },
    computed: {
        labelBtn() {
            this.$emit('stateUser', this.estado)
            return this.estado ? 'Activo' : 'Inactivo'
        }
    }
}
</script>