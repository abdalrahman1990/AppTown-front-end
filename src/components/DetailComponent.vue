<template>
  <div class="modal fade" id="feed">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">


          <div class="card">
            <div class="card-body">
              <h3 class="heading" style="color:#000000">Product Rating</h3>
              <div class="star-rating">
                <star-rating v-model="rating" :increment="0.5" text-class="custom-text"></star-rating>
                <button @click="setRating()" class="btn btn-primary">Publish</button>
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
                    <div class="left-bar" style="color:#000000">5</div>
                    <div class="right-bar">
                      <div class="bar-container">
                        <div class="bar-5" style="width: 80%;"></div>
                      </div>
                    </div>
                  </div>
                  <div class="row-bar">
                    <div class="left-bar" style="color:#000000">4</div>
                    <div class="right-bar">
                      <div class="bar-container">
                        <div class="bar-4" style="width: 60%;"></div>
                      </div>
                    </div>
                  </div>
                  <div class="row-bar">
                    <div class="left-bar" style="color:#000000">3</div>
                    <div class="right-bar">
                      <div class="bar-container">
                        <div class="bar-3" style="width: 40%;"></div>
                      </div>
                    </div>
                  </div>
                  <div class="row-bar">
                    <div class="left-bar" style="color:#000000">2</div>
                    <div class="right-bar">
                      <div class="bar-container">
                        <div class="bar-2" style="width: 20%;"></div>
                      </div>
                    </div>
                  </div>
                  <div class="row-bar">
                    <div class="left-bar" style="color:#000000">1</div>
                    <div class="right-bar">
                      <div class="bar-container">
                        <div class="bar-1" style="width: 5%;"></div>
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




</template>

<style>
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

<script>
export default{
  props: ['id'],

  data(){
    return {

      products: [],
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
      carts: [],
      cart: {
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
      badge: '0',
      quantity: 1,
      totalprice: '0',
      rating: 0,
      totaluser: 0,
      totalrate: 0
    }
  },
  created(){
    this.viewProduct();
    this.viewOne();
    this.localStorageProduct();
    this.getRating();
  },
  methods: {
    viewProduct(){
      fetch('http://localhost:8000/api/products')
      .then(res => res.json())
      .then(res => {
        this.products = res.data;
      })
      .catch(err => console.log(err));
    },

    viewOne(){
      var pathArray = location.pathname.split('/');
      var uid = pathArray[2];
      fetch(`http://localhost:8000/api/products/`+ this.id)
      .then(res => res.json())
      .then(res => {
        this.product.id = res.data.id;
        this.product.title = res.data.title;
        this.product.tagline = res.data.tagline;
        this.product.icone = res.data.icon;
        this.product.price = res.data.price;
        this.product.description = res.data.description;

      })
      .catch(err => console.log(err));
    },
    localStorageProduct(){
      if(localStorage.getItem('carts')){
        this.carts = JSON.parse(localStorage.getItem('carts'));
        this.badge = this.carts.length;
        this.totalprice = this.carts.reduce((total, item) => {
            return total + item.price;
        }, 0);
      }
    },

    cartProduct(pro){
      this.cart.id = pro.id;
      this.cart.title = pro.title;
      this.cart.price = pro.price;
     // this.cart.amount = this.quantity;
      this.carts.push(this.cart);
      this.cart = {};
      this.storeCartProduct();
    },
    removeCartProduct(pro){
      this.carts.splice(pro, 1);
      this.storeCartProduct();
    },
    storeCartProduct(){
      let parsed = JSON.stringify(this.carts);
      localStorage.setItem('carts', parsed);
      this.localStorageProduct();
    },
    viewLink(mylink){
      location.href = '/detail/'+mylink;
    },

    setRating() {
      var pathArray = location.pathname.split('/');
      var uid = pathArray[2];
      fetch('http://localhost:8000/api/rating/new', {
        method: 'post',
        body: JSON.stringify({ product: 1, user:'6', rating:this.rating }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(data => {
        swal('Thank you!', 'thank you for rating', 'success');
      }).catch(err => {
        swal('Failed', 'try again', 'error');
      });
    },


    getRating(){
      var pathArray = location.pathname.split('/');
      var uid = pathArray[2];
      fetch(`http://localhost:8000/api/rating/${1}`)
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
    }
  }
}
</script>
