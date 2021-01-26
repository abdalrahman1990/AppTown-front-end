<template>
  <div class="modal fade" id="check">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">


    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <div class="card">
                    <h3 class="card-header" style="color:#000000">Payment Summary</h3>
                    <div class="card-body">
                        <table class="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th style="color:#000000">Product</th>
                                    <th style="color:#000000">Price</th>
                                    <th width="100" style="color:#000000">Quantity</th>
                                </tr>
                                <tr>
                                  <th style="color:#000000">Order-delivery</th>
                                  <th style="color:#000000">$ 69 </th>
                                  <th width="100" style="color:#000000"> 1 </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="cart in carts" v-bind:key="cart.id">
                                    <td style="color:#000000">{{ cart.name }}</td>
                                    <td style="color:#000000">Rp. {{ cart.price }}</td>
                                    <td style="color:#000000">{{ cart.amount }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="mt-2 text-right">
<!--                            <p style="color:#000000">Total Price: {{ total }}</p>-->
                            <a href="http://localhost:8000/checkout/stripe" class="btn btn-primary">Checkout with Stripe</a>
<!--                            <button class="btn btn-primary">Checkout with Paypal Braintree</button>-->
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

</style>

<script>
export default{
    data(){
        return {
            carts: [],
            total: '0'
        }
    },
    created(){
        this.viewCart();
    },
    methods: {
        viewCart(){
            if(localStorage.getItem('carts')){
                this.carts = JSON.parse(localStorage.getItem('carts'));
                this.total = this.carts.reduce((total, item)=>{
                    return total + item.amount * item.price;
                }, 0);
                localStorage.setItem('total', this.total);
            }
        }
    }
}
</script>
