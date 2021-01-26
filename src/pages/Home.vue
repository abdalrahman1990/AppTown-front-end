
  <template>

  <div class="bg-black text-white flex-1 ml-56" style="padding-bottom: 400px !important">

    <transition name="animation" enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
      <div v-if="titleBarVisible" class="text-white bg-grey-darkest border-b border-grey p-3 text-center fixed z-10 w-full pr-56">
        More Than 1000 000 Application
      </div>
    </transition>

    <div id="app">
      <div class="search-bar input-group">
        <i class="tim-icons icon-zoom-split"></i>
      <input slot="header" class="form-control" id="inlineFormInputGroup" type="text" v-model="search" placeholder="Search title.."/>
    </div>


      <div class="flex justify-between">
        <hr>
        <h2 class="font-normal mb-8"></h2>
        <hr>
      </div>


    <div class="wrapper">
      <div class="card "  v-for="product in filteredList">

        <a>{{ product.tagline }}

          <img v-bind:src="product.icon" @click="gotoProduct(product.id)"/>
          <small style="color:#00b290">price: {{ product.price / 100  }}</small>

          {{ product.title  }}
        </a>

<div class="btn-group-vertical" role="group" aria-label="Basic example">

<!--  <button class=" btn btn-primary" data-toggle="modal" v-bind:data-target="'#feed'+product.id">Feedback</button>-->

  <button class=" btn btn-primary" data-toggle="modal" data-target="#feed">Feedback</button>

<!--  <detail-component :model="product.id"></detail-component>-->

  <button class="btn btn-warning" data-toggle="modal" data-target="#check">payment</button>

  <form v-on:submit.prevent="downloadFile(product.file)">
    <span class="text-center">
      <md-button class="md-raised btn btn-social" style="color:#00bbff;width:100%"   type="submit">Download</md-button>
    </span>
  </form>



</div>

<!--
        <div class="modal fade" v-bind:id="'feed'+product.id">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="modal-header">


                <div class="card card-rating">
                  <div class="card-body">
                    <h3 class="heading" style="color:#000000">Product {{ product.title  }} Rating</h3>
                    <div class="star-rating">
                      <star-rating v-model="rating" :increment="0.5" text-class="custom-text"></star-rating>
                      <button @click="setRating(product.id)" class="btn btn-primary">Publish</button>
                    </div>
                    <h3 class="heading" style="color:#000000">Reviews</h3>
                    <div class="review-rating">
                      <div class="left-review">
                        <div class="review-title" ><h3 style="color:#000000">{{ totalrate }}</h3></div>
                        <div class="review-star">
                          <star-rating :inline="true" :read-only="true" :show-rating="false" v-model="totalrate" :increment="0.1" :star-size="20" active-color="#000000"></star-rating>
                        </div>

                        <div class="review-people">
                          <p style="color:#000000"> {{ totaluser }} total</p>
                          <i class="fa fa-user" style="color:#000000"></i>

                        </div>

                      </div>
                      <div class="right-review">
                        <div class="row-bar">
                          <div class="left-bar">5</div>
                          <div class="right-bar">
                            <div class="bar-container">
                              <div class="bar-5" style="width: 0%;"></div>
                            </div>
                          </div>
                        </div>
                        <div class="row-bar">
                          <div class="left-bar">4</div>
                          <div class="right-bar">
                            <div class="bar-container">
                              <div class="bar-4" style="width: 0%;"></div>
                            </div>
                          </div>
                        </div>
                        <div class="row-bar">
                          <div class="left-bar">3</div>
                          <div class="right-bar">
                            <div class="bar-container">
                              <div class="bar-3" style="width: 0%;"></div>
                            </div>
                          </div>
                        </div>
                        <div class="row-bar">
                          <div class="left-bar">2</div>
                          <div class="right-bar">
                            <div class="bar-container">
                              <div class="bar-2" style="width: 0%;"></div>
                            </div>
                          </div>
                        </div>
                        <div class="row-bar">
                          <div class="left-bar">1</div>
                          <div class="right-bar">
                            <div class="bar-container">
                              <div class="bar-1" style="width: 0%;"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>




                </div>
              </div>
            </div>
          </div>
        </div>
-->

      </div>

    </div>
    </div>
<!--//rating-->




<detail-component></detail-component>

    <checkout-component/>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="border-b border-grey-darker mb-10 mx-10"></div>
    <div class="top-paid text-white px-10">


      <div class="flex justify-between">
        <hr>
        <hr>
        <h2 class="font-normal mb-8 ">Top Free</h2>
        <a href="#" class="text-blue no-underline text-center">See All</a>
      </div>


      <div style="margin-left:100px" class="container-fluid card-body all-icons justify-content-center ">

        <div class="wrapper justify-content-center">
          <div
            v-for="(filteredList, indexChunk) in chunkedItems"
            :key="indexChunk"

            class="font-icon-list col-sm-12 justify-content-center"
            :class="{ 'pr-6' : indexChunk === 0, 'pl-6' : indexChunk === 1}"
          >
            <div
              v-for="(product, index) in filteredList"
              :key="product.id"
              class="col-sm-4 justify-content-center"
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
</template>

<script>

import axios from 'axios'
import chunk from 'lodash.chunk'
import DetailComponent from "@/components/DetailComponent";
import CheckoutComponent from "@/components/CheckoutComponent";
import PrivateChat from "@/components/PrivateChat";


export default {
  name: 'home',
  components: {
    PrivateChat,
    DetailComponent,
    CheckoutComponent

  },
   created() {
    window.addEventListener('scroll', this.toggleTitleBar, { passive: true })

     axios.get('http://127.0.0.1:8000/api/discover',{
       headers: {

         'content-type': 'application/json',
         'Access-Control-Allow-Headers' : 'Accept',
         'Cross-Origin-Resource-Policy': '*'

       }

    })

      .then(response => {

        this.productsPaid = response.data.productsPaid

      })
      .catch(e => {
        console.log(e)
      })
    this.getRating();
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
    },

    filteredList() {
      return this.productsPaid.filter(product => {
        return product.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  data() {
    return {
      product: {
        id: '',
        title: '',
        tagline: '',
        icon: '',
        price: '',
        description: '',
        website: '' ,
        media1: '',
        media2: '',
      },
      search: '',
      stories: [],
      productsLove: [],
      productsPaid: [],
      image2: require('../assets/discover1-2.jpg'),
      titleBarVisible: false,
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: false,

        badge: '0',
        quantity: 1,
        totalprice: '0',
        rating: 0,
        totaluser: 0,
        totalrate: 0,

        // any options from Flickity can be used

        file: '',
        files:''
      }
    }
  },

  methods: {

    setRating(id) {
      //var pathArray = location.pathname.split('/');
     // var uid = pathArray[2];
      fetch('http://localhost:8000/api/rating/new', {
        method: 'post',
        body: JSON.stringify({ product:id, user:'4', rating:this.rating }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .then(data => {
          swal('Thank you!', 'thank you for rating', 'success');
          this.getRating(id)
        }).catch(err => {
        swal('Failed', 'try again', 'error');
      });
    },


    getRating(id){
       var pathArray = location.pathname.split('/');
      // var uid = pathArray[2];
      fetch(`http://localhost:8000/api/rating/`+ id)
        .then(res => res.json())
        .then(res => {
          var mydata = res.data;
          this.totaluser = mydata.length;
          var sum = 0;
          for(var i = 0; i < mydata.length; i++){
            sum += parseFloat(mydata[i]['rating']);
          }
          var avg = sum/mydata.length
          this.totalrate = parseFloat(avg.toFixed(1));
          var bar1 = 0;
          var bar2 = 0;
          var bar3 = 0;
          var bar4 = 0;
          var bar5 = 0;
          for(var j = 0; j < mydata.length; j++){
            if(parseInt(mydata[j]['rating']) === '1'){
              bar1 += 1
            }
            if(parseInt(mydata[j]['rating']) === '2'){
              bar2 += 1
            }
            if(parseInt(mydata[j]['rating']) === '3'){
              bar3 += 1
            }
            if(parseInt(mydata[j]['rating']) === '4'){
              bar4 += 1
            }
            if(parseInt(mydata[j]['rating']) === '5'){
              bar5 += 1
            }
          }
          $('.bar-5').css('width', bar5+'%');
          $('.bar-4').css('width', bar4+'%');
          $('.bar-3').css('width', bar3+'%');
          $('.bar-2').css('width', bar2+'%');
          $('.bar-1').css('width', bar1+'%');
        })
        .catch(err => {
          console.log(err);
        });
    },
    showCurrentRating: function(rating) {
      this.currentRating = (rating === 0) ? this.currentSelectedRating : "Click to select " + rating + " stars"
    },
    setCurrentSelectedRating: function(rating) {
      this.currentSelectedRating = "You have Selected: " + rating + " stars";
    },





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
    },

    getFile(){
      axios.get('http://localhost:8000/api/get/').then(res=>{
        this.files = res.data;
      })
    },

    downloadFile(file){
      axios.get('http://localhost:8000/api/download/upload/'+file, {responseType: 'arraybuffer'})
        .then(res=>{
        let blob = new Blob([res.data], {type:'application/*'})
        let link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = file
        link.click();
      })
    }

  },

}
</script>

  <style lang="scss" scoped>
html, body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 16px;


}

div#app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;



.search-wrapper {
  position: relative;
label {
  position: absolute;
  font-size: 12px;
  color: rgba(0,0,0,.50);
  top: 8px;
  left: 12px;
  z-index: -1;
  transition: .15s all ease-in-out;
}
input {
  padding: 4px 12px;
  color: rgba(0,0,0,.70);
  border: 1px solid rgba(0,0,0,.12);
  transition: .15s all ease-in-out;
  background: #ffffff;
&:focus {
   outline: none;
   transform: scale(1.05);
& + label  {
    font-size: 10px;
    transform: translateY(-24px) translateX(-12px);
  }
}
&::-webkit-input-placeholder {
   font-size: 12px;
   color: rgba(0,0,0,.50);
   font-weight: 100;
 }
}
}

.wrapper {
  display: flex;
  max-width: 900px;
  flex-wrap: wrap;
  padding-top: 10px;
}
  .card-rating {
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    width: 100%;
    height: 250px;
    margin: 12px;

    background: #ffffff;
    transition: .15s all ease-in-out;

    &:hover {
       transform: scale(1.1);
     }
    a {
      text-decoration: none;
      padding: 12px;
      color: #03A9F4;
      font-size: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        height: 100px;
      }
      small {
        font-size: 10px;
        padding: 4px;
      }
    }
  }
.card {
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  max-width: 180px;
  height: 325px !important;
  margin: 20px;

  background: #ffffff;
  transition: .15s all ease-in-out;

&:hover {
   transform: scale(1.1);
  z-index:100
 }
a {
  text-decoration: none;
  padding: 12px;
  color: #03A9F4;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
img {
  height: 100px;
}
small {
  font-size: 10px;
  padding: 4px;
}
}
}



.hotpink {
  background: hotpink;
}

.green {
  background: green;
}

.box {
  width: 100px;
  height: 100px;
  border: 1px solid rgba(0,0,0,.12);
}
}

/* Star Rating */
* {
  box-sizing: border-box;
}
.fa {
  font-size: 25px;
}
.left-bar {
  float: left;
  width: 5%;
  margin-top:10px;
}
.right-bar {
  margin-top:10px;
  float: left;
  width: 95%;
}
.row-bar:after {
  content: "";
  display: table;
  clear: both;
}
.review-rating:after {
  content: "";
  display: table;
  clear: both;
}
.left-review {
  float: left;
  width: 30%;
  margin-top:10px;
  text-align: center;
}
.right-review {
  float: left;
  width: 70%;
  margin-top:10px;
}
.review-title{
  font-size: 56pt;
}
.review-star{
  margin: 0 0 10px 0;
}
.review-people .fa{
  font-size: 11pt;
}
.bar-container {
  width: 100%;
  background-color: #f1f1f1;
  text-align: center;
  color: white;
}
.bar-5 {height: 18px; background-color: #57bb8a;}
.bar-4 {height: 18px; background-color: #9ace6a;}
.bar-3 {height: 18px; background-color: #ffcf02;}
.bar-2 {height: 18px; background-color: #ff9f02;}
.bar-1 {height: 18px; background-color: #ff6f31;}
.star-rating{
  text-align: center;
  margin:auto;
  width: 45%;
}
.star-rating .fa:hover{
  color: orange;
}
.heading {
  font-size: 25px;
  color: #999;
  border-bottom: 2px solid #eee;
}
@media (max-width: 400px) {
  .left-bar, .right-bar, .left-review, .right-review {
    width: 100%;
  }
}
.custom-text {
  font-weight: bold;
  font-size: 1.9em;
  border: 1px solid #cfcfcf;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  color: #999;
  background: #fff;
}
</style>

