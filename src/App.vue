<template>
  <MyHeader
  :pictureURL="require(`${pictureURL}`)"
  :name = "name"
  :birthday = "birthday"
  :ssn = "ssn"
  :status = "status"
  :dependants = "dependants"/>
  <main>
    <aside>
      <ClientList :clients=clients @show-client="displayClient" :activeClient="activeClient" />
      <SubjectList :clients=clients
       :name="name" @show-note="displayNote" :activeSubject="activeSubject"/>
    </aside>
    <ClientNotes :subject="selectSubject" />
  </main>
  <MyFooter/>
  
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import ClientList from './components/ClientList.vue'
import SubjectList from './components/SubjectList.vue'
import ClientNotes from './components/ClientNotes.vue'
import MyFooter from './components/MyFooter.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    MyHeader,
    ClientList,
    SubjectList,
    ClientNotes,
    MyFooter
  },
  data(){
    return {
      clients: [],
      selectSubject: null,
      name: "",
      birthday: "",
      ssn: "",
      status: "",
      dependants: null,
      pictureURL: "./assets/blank-photo-icon.jpg",
      activeClient: "",
      activeSubject: ""
    }
  },
  methods:{
  async fetchclients(){
      // const res = await fetch('http://localhost:5555/clients');
      const res = await axios.get('https://aamartinez17.github.io/ClientCRM/db.json')
      // const data = res.json();
      const data = await res.data.clients;
      console.log(data);
      return data;
    },
    displayNote(subject){
    this.selectSubject = subject;
    this.activeSubject = subject;
    },
    displayClient(client){
      this.name = client.name;
      this.birthday = client.dob;
      this.ssn = client.ssn;
      this.status = client.status;
      this.dependants = client.dependants;
      this.pictureURL = client.pictureURL;
      this.activeClient = client.name;
    }
  },

  async created(){
      this.clients = await this.fetchclients();
      if(this.clients.length > 0){
        this.name = this.clients[0].name;
        this.ssn = this.clients[0].ssn;
        this.status = this.clients[0].status;
        this.dependants = this.clients[0].dependants;
        this.birthday = this.clients[0].dob;
        this.pictureURL = this.clients[0].pictureURL;
        this.activeClient = this.clients[0].name;
        this.activeSubject = this.clients[0].notes[0];
      }
  }
}
</script>

<style>
:root {
    --back-color: #EBEBEB;
    --for-color: #5E0000;
    --sec-color: white;
    --shade-color:#d5c7c7;
    --text-color:#383838;
    --main-margin: 2%;
    --sec-margin:1%;
    --main-rad: 40px;
    --shadow: 3px 3px 10px var(--shade-color);
}

#app {
  display: block;
  background-color: var(--back-color);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



main {
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 2;
    aside {
        grid-row: 3;
        grid-column: 1;
        text-align: top;
    }
}

</style>
