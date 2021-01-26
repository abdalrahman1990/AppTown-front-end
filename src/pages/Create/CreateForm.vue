<template>
  <card>

    <h5 slot="header" class="title">Edit App</h5>
    <div class="row">
      <div class="col-md-5 pr-md-1">
        <base-input label="Company (disabled)"
                  placeholder="Title"
                  v-model="model.title">
        </base-input>
      </div>
      <div class="col-md-3 px-md-1">
        <base-input label="tagline"
                  placeholder="Tagline"
                  v-model="model.tagline">
        </base-input>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 pr-md-1">
        <base-input label="Icon Name"
                  v-model="model.icon"
                  placeholder="Icon Name">
        </base-input>
      </div>
      <div class="col-md-6 pl-md-1">
        <base-input label="Price"
                  v-model="model.price"
                  placeholder="Price">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <base-input label="website"
                  v-model="model.website"
                  placeholder="website">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 pr-md-1">
        <base-input label="media1"
                  v-model="model.media1"
                  placeholder="media1">
        </base-input>
      </div>
      <div class="col-md-4 px-md-1">
        <base-input label="media2"
                  v-model="model.media2"
                  placeholder="media2">
        </base-input>
      </div>
      <div class="col-md-4 px-md-1">
        <base-input label="file"
                    v-model="model.file"
                    placeholder="same name zip file">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <base-input>
          <label>description</label>
          <textarea rows="4" cols="80"
                    class="form-control"
                    placeholder="description"
                    v-model="model.description">

              </textarea>
        </base-input>
      </div>
    </div>
    <base-button slot="footer" type="submit" @click=handleSubmit >Save</base-button>

  </card>
</template>
<script>
  import axios from "axios";


  export default {
    data(){
      return{

        model: {
          title: '',
          tagline: '',
          icon: '',
          price: '',
          website: '',
          media1: '',
          media2: '',
          file: '',
          description: ''
        },

      }
    },
    props: {

        type: Object,
        default: () => {
          return {

          };
        }

    },
    methods:{

    /* async save(){

       await axios.post ("http://127.0.0.1:8000/api/products",

          {title:this.title,
        tagline:this.tagline,
        icon:this.model.icon,
        price:this.model.price,
        website:this.model.website,
        media1:this.model.media1,
        media2:this.model.media2},

        ).then ((response)=> {
            //if (response.data.code == 626) {
            console.log (response);
            //}
          }). catch ((error)=> {
          console.log(error);
        });

      },*/

      handleSubmit: async function(e) {
        e.preventDefault();

        try {
          const response = await axios.post('http://localhost:8000/api/products', this.model)
          console.log(response);
        } catch(error) {
          this.error = error;
        }
      }

    }
  }

</script>
<style>
</style>
