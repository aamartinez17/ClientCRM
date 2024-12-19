<template>
    <section v-if="subject" class = "Note">
        <h1>Note</h1>
        <h2><strong>Subject:</strong> {{ subject.subject }}</h2>
        <h3><strong>Date:</strong> {{subject.date}}</h3>
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
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 50px 50px auto;
        grid-row: 3;
        grid-column: 2;
        text-align: top;
        background-color: var(--sec-color);
        margin: var(--main-margin);
        box-shadow: var(--shadow);

        h1 {
            display: flex;
            justify-content: left;
            align-items: center;
            margin: 0;
            grid-column: 1/4;
            font-size: 30px;
            background-color: var(--for-color);
            color: var(--sec-color);
            font-weight: normal;
            padding-left: 5%;
        }

        h2 {
            font-weight: normal;
            grid-column: 1/3;
            text-align: left;
            padding-left: 7.5%;
        }

        h3 {
            font-weight: normal;
            grid-column: 3;
            text-align: left;
            padding-right: 5%;

        }

        p {
            text-align: left;
            grid-column: 1/4;
            padding: 0 5%;
            font-size: 20px;
        }
    }
</style>