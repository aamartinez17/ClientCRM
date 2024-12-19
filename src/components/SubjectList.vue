<template>
    <section id = "subject-list">
                <h2>Subjects</h2>
                <div class="subject">
                    <p 
                    v-for="subject of getSubject" 
                    :key="subject.subject"
                    @click="showNote(subject)"
                    :class="{active : subject === activeSubject}">
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
            name: String,
            activeSubject: Object
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
        box-shadow: var(--shadow);
        margin:8% 0 8% 5%;

    }

    h2 {
        display: flex;
        justify-content: center;
        align-items: center; 
        width: 100%;
        color: var(--for-color);
        margin: 0;
        height: 50px;
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
