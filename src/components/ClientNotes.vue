<template>
    <section v-if="subject" class = "Note">
        <h1>Note</h1>
        <h2>{{ subject.subject }}</h2>
        <h3> {{subject.date}}</h3>
        <p>{{ subject.note }}</p>
    </section>
</template>

<script>
export default {
    props: {
        subject: Object
    }
};
</script>

<style>
    .Note {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 50px 50px auto;
        grid-row: 3;
        grid-column: 2;
        text-align: top;
        background-color: var(--sec-color);
        margin: var(--main-margin);
        box-shadow: var(--shadow);

        h1 {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
            grid-column: 1/3;
            font-size: 30px;
            background-color: var(--for-color);
            color: var(--sec-color);
        }

        h2 {
            grid-column: 1;
            text-align: left;
            padding-left: 10%;
        }

        h3 {
            grid-column: 2;
            text-align: right;
            padding-right: 10%;

        }

        p {
            text-align: left;
            grid-column: 1/3;
            padding: 0% 5%;
            font-size: 20px;
        }
    }
</style>