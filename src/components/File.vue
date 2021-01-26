<template>
  <div>
    <h1>choose file</h1>
      <form v-on:submit.prevent="uploadFile">
        <md-field>
          <label style="color: white">Select file</label>
          <md-file  name="file" v-on:change="onFileChange" />
        </md-field>

        <md-button type="submit" class="md-raised md-accent" style="color: white">Upload</md-button>
    </form>
    <hr>
    <table>
      <tr>
        <th style="color: white">File name</th>
        <th style="color: white">Actions</th>
      </tr>
      <tr v-for="file of files">
        <td style="color: white">{{file}}</td>
        <td>
          <form v-on:submit.prevent="downloadFile(file)">
            <md-button class="md-raised md-danger " style="color: white"  type="submit">Download</md-button>
          </form>
          <form v-on:submit.prevent="deleteFile(file)">
            <md-button class="md-raised md-danger" style="color: white"  type="submit">Delete</md-button>
          </form>
        </td>
      </tr>
    </table>
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
    uploadFile(){
      let formData = new FormData();
      formData.append('file', this.file);
        axios.post('http://localhost:8000/api/upload/', formData).then(res=>{
            this.getFiles();
          }).catch(err=>{
            console.log('Error: ', err);
          });
    },
    deleteFile(file){
      axios.get('http://localhost:8000/api/delete/'+file).then(res=>{
        this.getFiles();
      })
    },
    getFiles(){
      axios.get('http://localhost:8000/api/files').then(res=>{
        this.files = res.data;
      })
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
    this.getFiles()
  },
};
</script>
<style lang="scss" scoped>
  form {
    display:inline;
  }
</style>
