<template>
    <div class="col-sm-6 col-md-4">
        <div class="card text-white  mb-3 stockcards">
        <div class="card-header"> {{ stock.name }} <small> (Price: {{ stock.price }} | Shares: {{ stock.quantity }})</small></div>
            <div class="card-body">
                <div class="float-left">
                    <input type="number"
                    class="form-control "
                    placeholder="Quantity"
                    v-model.number="quantity"
                    :class="{danger: insufficientQuantity}"
                    >
                </div>
                <div class="float-right">
                    <button 
                        class="btn btn-danger"
                        @click="sellStock"
                        :class="{dangerbtn: insufficientQuantity}"
                        :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
                        >{{ insufficientQuantity ? 'Not enough Stock': 'Sell' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style >

.danger{
    border: 2px solid rgb(250, 163, 33) !important;
}
.dangerbtn{
    background-color: rgb(250, 163, 33) !important;
}


.btn.btn-danger{
    background-color:rgb(240, 100, 76);
    border-style:none;
}
.card-header{
    background-color:rgb(156, 155, 155);
    border-style:none;
    /* color: rgb(27, 131, 27); */
    font-weight: 700;
}

.row{
    margin-top: 2%;
    
}
.navbar-toggler {
 border-style: none;   
}
.stockcards{
    margin-left:3%;
    margin-right: 3%;
}

</style>

<script>
import {mapActions} from 'vuex';
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
      methods: {
        ...mapActions({
        placeSellOrder: 'sellStock'
        }),
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            this.placeSellOrder(order);
            this.quantity= 0; 
        } 
    },
    computed: {
        insufficientQuantity () {
            return this.quantity > this.stock.quantity;
        }
    }    
}
  
</script>
