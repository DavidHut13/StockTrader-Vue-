<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/"><i class="fas fa-dollar-sign fa-2x"></i><span class="brandy-name">tocky</span></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item ">
                  <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>  
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Portfolio">Portfolio</router-link>
                </li>
                 <li class="nav-item">
                    <router-link class="nav-link" to="/Stocks">Stocks</router-link>
                </li>
            </ul>
            <div class="pull-right">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown show">
                        <a class="nav-link dropdown-toggle " @click="isDropdownOpen = !isDropdownOpen" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Save
                        </a>
                    <div class="dropdown-menu " :class="{show: isDropdownOpen}"  aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#" @click="saveData">Save</a>
                        <a class="dropdown-item" href="#" @click="loadData">Load</a>
                        </div>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link pull-right " href="#" tabindex="-1" aria-disabled="true" @click="endDay">End Day</a>
                    </li>
                    <strong class="navbar-text pull-right funds">Funds: ${{ funds }}</strong>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import {mapActions} from 'vuex';

export default {
    data() {
        return {
           isDropdownOpen: false
        }
    },
 computed: {
     funds(){
         return this.$store.getters.funds;
     }
 },
 methods: {
     ...mapActions({
         randomizeStocks: 'randomizeStocks',
         fetchData: 'loadData' 
     }),
     endDay(){
         this.randomizeStocks();
     },
     saveData() {
       const data = {
             funds: this.$store.getters.funds,
             stockPortfolio: this.$store.getters.stockPortfolio,
             stocks: this.$store.getters.stocks
         };
         this.$http.put('data.json', data);
     },
     loadData() {
         console.log('loading the data')
         this.fetchData();
     }
 }

}

</script>

<style>
.bg-light {
    background-color: white !important;
}

.brandy-name{
    font-family:'Open Sans', sans-serif;
    font-size: 30px;
    color: white;
}
.navbar.navbar-expand-lg.navbar-light.bg-light{
background: #8cd867; /* Old browsers */
background: -moz-linear-gradient(left, #8cd867 12%, #6ecc77 37%, #94f986 66%, #21a828 92%); /* FF3.6-15 */
background: -webkit-linear-gradient(left, #8cd867 12%,#6ecc77 37%,#94f986 66%,#21a828 92%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to right, #8cd867 12%,#6ecc77 37%,#94f986 66%,#21a828 92%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8cd867', endColorstr='#21a828',GradientType=1 ); /* IE6-9 */
}

.fas.fa-dollar-sign.fa-2x{
    color: white;
}

.navbar-light .navbar-nav .nav-link {
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
}

.funds{
    padding-left: 15px;
}



</style>
  