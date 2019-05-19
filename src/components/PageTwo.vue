<template>
    <div>
        <h1>Page Two</h1>
        <p v-if="param">Parameter: {{ param }}</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                param : ''
            }
        },

        created(){
            var parameter = this.$route.params.parameter;

            this.param = parameter;
        }
    }
</script>

