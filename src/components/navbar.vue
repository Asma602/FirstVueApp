<template>
  <div>
    <ul>
      <li >
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/admin">Admin</router-link>
      </li>
      <li>
        <router-link to="/user">User</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data(){
    return{
      navItems: [
        {name: 'Home', link: '/'},
        {name: 'Admin', link: '/admin'},
        {name: 'User', link: '/user'},
      ]
    }
  }
}
</script>

<style scoped>
ul{
  list-style-type: none;
  display: flex;
  /*justify-content: space-evenly;*/
  background-color: #d7d7d9;
  margin:0;
}
li{
  padding: 20px;
  cursor: pointer;
  color: white;
  font-family: Bahnschrift,sans-serif;
  font-size: 20px;
}
</style>
