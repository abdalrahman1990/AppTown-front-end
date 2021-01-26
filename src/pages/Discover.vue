<template>
  <div class="bg-black text-white flex-1 ml-56" style="padding-bottom: 400px !important">
    <transition name="animation" enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
      <div v-if="titleBarVisible" class="text-white bg-grey-darkest border-b border-grey p-3 text-center fixed z-10 w-full pr-56">
        Discover
      </div>
    </transition>
<!--<div class="row">-->
    <flickity ref="flickity" :options="flickityOptions" class="flickity" >
      <div
        v-for="story in featuredStories"
        :key="story.id"
        class="carousel-cell"
        @click="gotoStory(story.id)"
        :style="`background-image: url(${story.featured_image});padding-left:70px;padding-top:10px`"
      >
        <div class="uppercase mb-4 ">{{ story.category_title }}</div>
        <h1 class="font-normal mb-4">{{ story.title }}</h1>
        <p class="w-64 leading-normal text-grey-lighter">{{ story.description }}</p>
      </div>

    </flickity>
<!--</div>-->
    <div class="row">


<div class="col-md-1">

</div>
    <div class="col-md-11">


    <div class="flex mb-1 px-10" style="height: auto;margin-bottom:20px">
      <div
        v-for="(story, index) in normalStories"
        :key="story.id"
        class="w-1/4 bg-grey-darkest rounded-lg flex px-2 py-3"
        :class="{ 'mr-1' : index === 0 }"
        style="display:inline-block ; margin-right:100px; width:400px; position: relative;padding: 2rem "
        @click="gotoStory(story.id)"
      >
        <div class="flex-2"

        >
          <div class="uppercase text-grey-light text-xs mb-1">{{ story.category_title }}</div>
          <h3 class="font-normal text-2xl mb-4">{{ story.title }}</h3>
          <p class="text-grey-light text-xs leading-normal">{{ story.description }}</p>
        </div>
        <div class="" >
          <img :src="story.icon_image" alt="icon" width=300px height=100px >
        </div>
      </div>

    </div>

    <div class="border-b border-grey-darker mb-10 mx-10"></div>

    <div class="apps-games-we-love text-white px-10">
      <div class="flex justify-between">
        <h2 class="font-normal mb-8">Apps and Games We Love Right Now</h2>
        <a href="#" class="text-blue no-underline">See All</a>
      </div>

      <div class= "col-sm-12">
        <div
          v-for="(product, index) in productsLove"
          :key="product.id"
          class="col-sm-3"
          style="display:inline-block !important;margin-bottom: 30px;margin-left:-20px !important"
          :class="{ 'pl-6' : index % 2 !== 0}"

        >
          <div class="w-16">
            <img :src="product.icon" alt="icon" width="80%" @click="gotoProduct(product.id)">
          </div>
          <div class="pl-6 flex-1 pr-6">
            <div class="mb-1">{{ product.title }}</div>
            <div class="text-grey text-xs mb-6">{{ product.tagline }}</div>
            <div class="mb-8" >
              <span class="bg-green text-blue rounded-full px-3 py-1 text-xs font-bold" style="color: #11cdef" >
                ${{ product.price / 100 }}
              </span>
            </div>
            <div class="border-b border-grey-darker mb-10"></div>
          </div>
        </div>



      </div>
    </div> <!-- end apps-games-we-love -->


    <div class="border-b border-grey-darker mb-10 mx-10"></div>

    <div class="border-b border-grey-darker mb-10 mx-10"></div>
    <div class="top-paid text-white px-10">
      <div class="flex justify-between">
        <hr>
        <hr>
        <h2 class="font-normal mb-8">Top Free</h2>
        <a href="#" class="text-blue no-underline">See All</a>
      </div>


      <div class="container-fluid card-body all-icons ">
        <div class="wrapper">
          <div
            v-for="(filteredList, indexChunk) in chunkedItems"
            :key="indexChunk"

            class="font-icon-list col-sm-12 justify-content-center"
            :class="{ 'pr-6' : indexChunk === 0, 'pl-6' : indexChunk === 1}"
          >
            <div
              v-for="(product, index) in filteredList"
              :key="product.id"
              class="col-sm-4"
              style="display:inline-block !important;margin-bottom: 30px;margin-left:-20px !important"
            >
              <div class="col-sm-6 justify-content-center"><img :src="product.icon" alt="icon" width="300"  @click="gotoProduct(product.id)"></div>
              <div class="ml-3" v-if="indexChunk === 0">{{ index + 1 }}</div>
              <div class="ml-3" v-else>{{ index + 4 }}</div>
              <div class="ml-3 flex flex-1 justify-between border-b border-grey-darker">
                <div>
                  <div class="mb-1">{{ product.title }}</div>
                  <div class="text-blue underline text-xs mb-6">{{ product.tagline }}</div>
                </div>
                <div>
                  <form v-on:submit.prevent="downloadFile(product.file)">
                    <md-button class="btn-danger" style="color:#00bbff;margin-left:0"  type="submit">Download</md-button>
                  </form>
                  <span class="bg-success text-blue rounded-full px-3 py-1 text-xs font-bold" style="margin-left:6px">
<!--                    ${{ product.price / 100 }}-->
                    Free</span>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div> <!-- end top-free -->


    <div class="border-b border-grey-darker mb-10 mx-10"></div>

    <div class="text-grey mb-10 px-10">
      Terms & Conditions
    </div>
    </div>

  </div>
  </div>

</template>


<script>
import Flickity from 'vue-flickity'
import axios from 'axios'
import chunk from 'lodash.chunk'

// @ is an alias to /src
export default {
  name: 'home',
  components: {
    Flickity
  },
 async created() {
    window.addEventListener('scroll', this.toggleTitleBar, { passive: true })

   await axios.get('http://127.0.0.1:8000/api/discover',{

     headers: {
       'content-type': 'multipart/form-data',
       "Access-Control-Allow-Origin": "*"
     },
   })

      .then(response => {

        this.stories = response.data.stories
        this.productsLove = response.data.productsLove
        this.productsPaid = response.data.productsPaid

        this.$nextTick(() => {
          this.$refs.flickity.rerender();
        })
      })
      .catch(e => {
        console.log(e)
      })
  },
  computed: {
    chunkedItems() {
      return chunk(this.productsPaid, 3)
    },
    featuredStories() {
      return this.stories.filter(story => story.featured)
    },
    normalStories() {
      return this.stories.filter(story => !story.featured).slice(0, 2)
    }
  },
  data() {
    return {

      stories: [],
      productsLove: [],
      productsPaid: [],
      image2: require('../assets/discover1-2.jpg'),
      titleBarVisible: false,
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: false

        // any options from Flickity can be used
      }
    }
  },
  methods: {
    toggleTitleBar() {
      // console.log(window.scrollY);

      // if (window.scrollY > 0) {
      //   this.titleBarVisible = true
      // } else {
      //   this.titleBarVisible = false
      // }

      // throttle or debounce for better performance (with lodash)
      this.titleBarVisible = window.scrollY > 0
    },
    gotoStory(id) {
      this.$router.push({
        name: 'story',
        params: { id }
      })
    },
    gotoProduct(id) {
      this.$router.push({
        name: 'product',
        params: { id }
      })
    }
  }
}
</script>

<style>
.carousel-cell {
  width: 100%; /* full width */
  height: 250px; /* height of carousel */
margin-left: 10px;
}
</style>

