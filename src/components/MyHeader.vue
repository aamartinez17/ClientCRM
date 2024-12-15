<template>
    <header>Tax Client CRM</header>

    <div id="profile">
        <img :src= "pictureURL" alt="">
        <h1> {{ name }}</h1>
        <article id = "birthday">
                <h3>DOB:</h3>
                <p>{{ birthday }}</p>
            </article>
            <article id = "ssn">
                <h3>SSN:</h3>
                <p>{{ ssn }}</p>
            </article>
            <article id= "status">
                <h3>STATUS:</h3>
                <p>{{ status }}</p>
            </article>
            <article id = "depenants">
                <h3>DEPENDANTS:</h3>
                <p>{{ dependants }}</p>
            </article>
    </div>
</template>

<script>
    export default{
        name: 'MyHeader',
        props:{
            pictureURL: String,
            name: String,
            birthday: String,
            ssn: String,
            status: String,
            dependants: Number
        }
    }
</script>

<style scoped>
header {
        grid-row: 1;
        grid-column: 1/4;
        background-color: var(--for-color);
        color: var(--sec-color);
        font-size: 40px;
    }

#profile {
    grid-row: 2;
    grid-column: 1/4;
    display: grid;
    grid-template-columns: 20% auto auto;
    grid-template-rows: 50px auto;
    background-color: var(--sec-color);
    box-shadow: 0 3px 10px var(--shade-color);;

    article {
        display: flex;
        padding-left: 35px;
    }

    img {
        width: 100%;
        grid-column: 1;
        grid-row: 1 / 4;
    }

    h1 {
        padding-left: 35px;
        grid-column: 2 / 4;
        grid-row: 1;
        text-align: left;
    }

    #birthday {
        grid-column: 2;
        grid-row: 2;
    }

    #ssn {
        grid-column: 2;
        grid-row: 3;
    }
    
    #status {
        grid-column: 3;
        grid-row: 2;
    }

    #dependants {
        grid-column: 3;
        grid-row: 3;
    }

    h3 {
        display: inline;
        font-size: 20px;
    }

    p {
        display: inline;
        margin-left: 10px;
        font-size: 20px;
    }
}

</style>