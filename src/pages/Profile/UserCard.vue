<template>
  <card type="user">
    <p class="card-text">
    </p>
    <div class="author">
      <div class="block block-one"></div>
      <div class="block block-two"></div>
      <div class="block block-three"></div>
      <div class="block block-four"></div>
      <a href="https://docs.google.com/document/d/1WMV0nEjF7OPvv2yx_qbCv9IlylKorRFpHA2941JgLa0">
        <img class="avatar" src="@/assets/photo.jpg" alt="...">
        <h5 class="title" style="color: #000000">{{user.fullName}}</h5>
      </a>
      <p class="description" style="color: #000000">
        {{user.title}}
      </p>
    </div>
    <p></p>
    <p class="card-description" style="color: #000000">
      {{user.description}}
    </p>
    <div slot="footer" class="button-container">
      <base-button icon round class="btn-facebook">
        <i class="fab fa-facebook"></i>
      </base-button>
      <base-button icon round class="btn-twitter">
        <i class="fab fa-twitter"></i>
      </base-button>
      <base-button icon round class="btn-google">
        <i class="fab fa-google-plus"></i>
      </base-button>
    </div>
  </card>
</template>
<script>
  export default {
    props: {
      user: {
        type: Object,
        default: () => {
          return {};
        }
      }
    }
  }
</script>
<style>
</style>
