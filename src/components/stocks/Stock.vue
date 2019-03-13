<template>
    <div class="col-sm-6 col-md-4">
        <div class="card text-white  mb-3 stockcards">
        <div class="card-header"> {{ stock.name }} <small> (Price: {{ stock.price }})</small></div>
            <div class="card-body">

                    <div class="float-left">
                        <input type="number"
                        class="form-control"
                        placeholder="Quantity"
                        v-model.number="quantity"
                        :class="{danger: insufficientFunds}"
                        >
                    </div>
                    <div class="float-right">
                        <button 
                            class="btn btn-success"
                            @click="buyStock"
                            :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
                            :class="{dangerbtn: insufficientFunds}"
                            >{{ insufficientFunds ? 'insufficient Funds': 'Buy' }}</button>
                    </div>
            </div>
        </div>
    </div>
</template>
    

<style scoped>

.danger{
    border: 2px solid rgb(240, 100, 76) !important;
}
.dangerbtn{
    background-color:rgb(240, 100, 76)  !important;
}
.btn.btn-success{
    background-color:#29BF12;
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
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            this.$store.dispatch('buyStock',order);
            this.quantity = 0;
        }
    },
    computed: {
        insufficientFunds(){
            return this.quantity * this.stock.price > this.funds;
        },
        funds(){
            return this.$store.getters.funds;
        }  
    }
}
</script>
