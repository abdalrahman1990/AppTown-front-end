<template>
  <div class="row">
    <div class="col-md-8">
      <create-form :model="model"></create-form>
    </div>
    <div class="col-md-4">
    <file></file>
    </div>
    <div class="col-md-8">
      <image-uploader></image-uploader>
    </div>
  </div>

</template>
<script>
  import AppCard from "@/pages/Create/AppCard";
  import CreateForm from "@/pages/Create/CreateForm";
  import UploadFiles from "@/components/UploadFiles";
  import ImageUploader from "@/components/ImageUploader";
  import File from "@/components/File";

  export default {
    components: {
      ImageUploader,
      UploadFiles,
      AppCard,
      CreateForm,
      File
    },
    data() {
      return {
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

        app: {
          fullName: 'Mike Andrew',
          title: 'Ceo/Co-Founder',
          description: `Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...`,
        }
      }
    }
  }
</script>
<style>
</style>
