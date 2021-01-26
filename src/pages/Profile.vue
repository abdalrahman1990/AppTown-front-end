<template>
  <div class="row">
    <div class="col-md-8">
      <edit-profile-form :model="model">
      </edit-profile-form>
    </div>
    <div class="col-md-4">
      <user-card :user="user"></user-card>
    </div>

<!--    <private-chat></private-chat>-->

  </div>

</template>
<script>
// import Vuetify from 'vuetify'
// Vue.use(Vuetify)
// import 'vuetify/dist/vuetify.min.css'

  import EditProfileForm from './Profile/EditProfileForm';
  import UserCard from './Profile/UserCard'
  import PrivateChat from "@/components/PrivateChat";


  export default {
    components: {

      EditProfileForm,
      UserCard,
      PrivateChat

    },
    data() {
      return {

        model: {
          company: 'Company name.',
          email: 'abdalrahman@email.com',
          username: 'abdl23',
          firstName: 'abd',
          lastName: 'Al khoja',
          address: 'Zahle main street, nr. 8 Bl 1, Sc 1, Ap 09',
          city: 'zahle',
          country: 'Lebanon',
          about: 'Lamborghini Mercy, I\'m in that two seat Lambo.'
        },
        user: {
          fullName: 'Abd Alrahman AlKoja',
          title: 'Programer',
          description: `Do not be scared of the truth because we need to restart the human foundation in truth...`,
        }
      }

    },
  }
</script>
<style lang="sass">
@import '~vue-toastr/src/vue-toastr.scss'
</style>
