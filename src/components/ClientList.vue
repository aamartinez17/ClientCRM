<template>
    <section id = "client-list">
                <h2>Client List</h2>
                <div class = "client">
                    <p v-for="client of clients" 
                    :key="client.name"
                    @click="displayClient(client)">
                        {{client.name}}
                    </p>
                </div>
            </section>
</template>

<script>
    export default{
        name: 'ClientList',
        props:{
            clients: Array
        },
    methods: {
            displayClient(client) {
                this.$emit('show-client', client);
            }
        }
    }
</script>

<style scoped>
    #client-list {
        background-color: var(--sec-color);
        margin-left: 5%;
        box-shadow: var(--shadow);
    }

    h2 {
        display: flex;
        justify-content: center;
        align-items: end;
        width: 100%;
        color: var(--for-color);
        height: 25px;
        padding-top: 10px;
    }

    p {
        display: flex;
        height: 30px;
        justify-content: center;
        align-items: center;
    }

    p:hover{
        background-color: var(--for-color);
        color: var(--sec-color);
        cursor: pointer;
    }
</style>