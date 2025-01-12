<template>
    <section id = "client-list">
                <h2>Client List</h2>
                <div class = "client">
                    <p v-for="client of clients" 
                    :key="client.name"
                    @click="displayClient(client)"
                    :class="{active : client.name === activeClient}">
                        {{client.name}}
                    </p>
                </div>
            </section>
</template>

<script>
    export default{
        name: 'ClientList',
        props:{
            clients: Array,
            activeClient: String
        },
    methods: {
            displayClient(client) {
                this.$emit('show-client', client);
            },
        }
    }
</script>

<style scoped>
    #client-list {
        background-color: var(--sec-color);
        margin-left: 5%;
        box-shadow: var(--shadow);
        margin-top: 8%;
    }

    h2 {
        display: flex;
        justify-content: center;
        align-items: center; 
        width: 100%;
        color: var(--for-color);
        height: 50px;
        margin: 0;
        /* height: 25px; */
        /* padding-top: 10px; */
    }

    p {
        display: flex;
        height: 30px;
        justify-content: center;
        align-items: center;
        padding: 5px;
        margin: 0;
    }

    p:hover, .active{
        background-color: var(--for-color);
        color: var(--sec-color);
        cursor: pointer;
    }
</style>