<template>
    <section id = "subject-list">
                <h2>Subjects</h2>
                <div class="subject">
                    <p 
                    v-for="subject of getSubject" 
                    :key="subject.subject"
                    @click="showNote(subject)">
                        {{subject.subject}}
                    </p>
                </div>
            </section>
</template>


<script>
    export default{
        name: 'SubjectList',
        props:{
            clients: Array,
            name: String
        },
        computed: {
            getSubject() {
                const client = this.clients.find(client => client.name === this.name);
                this.showNote(client?.notes[0]);
                return client ? client.notes:[];
            }
        },
        methods: {
            showNote(subject) {
                this.$emit('show-note', subject);
            }
        }
    }   
</script>

<style scoped>
    #subject-list {
        background-color: var(--sec-color);
        margin-left: 5%;
        box-shadow: var(--shadow);
    }

    h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        color: var(--for-color);
        height: 25px;
        padding-top: 10px;
    }

    p {
        display: flex;
        height: 50px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        height: 30px;
    }

    p:hover{
        background-color: var(--for-color);
        color: var(--sec-color);
    }

</style>
