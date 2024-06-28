<template>
  <div class="blocks-container">
    <h1>Recent Changes & Updates</h1>
    <a href="https://github.com/TheWiredDiabetic/PersonalSite/"><i class="bi bi-chevron-right"></i> View on GitHub </a>
    <a href="https://github.com/TheWiredDiabetic/PersonalSite/"><i class="bi bi-chevron-right"></i> Report a Bug </a>
  </div>
  <div class="blocks-container">
    <div v-for="(log, index) in changeLog" :key="index" class="block">
      <h3>Version {{ log.version }} - {{ log.title }}</h3> 
      <p>{{ log.description }}</p>
      <ul>
          <li v-for="(item, index) in log.changes" :key="index">
            {{ item }}
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
 import changeLog from '../assets/changelog.json';
 export default {
   data() {
     return {
       changeLog: changeLog
     }
   }
 };
</script>

<style>
.blocks-container {
  padding: 2rem;
  margin: 0.1rem;
  background-color: transparent;
}

h1 {
  font-weight: 600;
}

.block {
  display: block;
  font-size: 1rem;
  padding: 1rem;
  background: #191e3e70;
  border: 0.05rem solid #334155;
  border-radius: 0.45rem;
}

.block h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.block ul li {
    line-height: 2rem;
    font-size: 1rem;
    list-style-type: " ╰ ";
  }


</style>
