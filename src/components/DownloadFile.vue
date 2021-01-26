<template>
  <div>
          <form v-on:submit.prevent="downloadFile(file)">
            <md-button class="md-raised btn-danger" style="color:#00bbff"  type="submit">Download</md-button>
          </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "App",
  data: ()=>({
    file: '',
    files:''
  }),
  methods:{
    onFileChange(e){
      this.file = e.target.files[0];
    },

    downloadFile(file){
      axios.get('http://localhost:8000/api/download/'+file, {responseType: 'arraybuffer'}).then(res=>{
        let blob = new Blob([res.data], {type:'application/*'})
        let link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = file
        link.click();
      })
    }
  },
  created(){

  },
};
</script>
<style lang="scss" scoped>
  form {
    display:inline;
  }
</style>
