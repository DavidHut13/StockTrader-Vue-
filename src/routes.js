import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Stocks from './components/stocks/Stocks.vue';
import Stock from './components/portfolio/Stock.vue';

export const routes = [
{path: '/', component: Home },
{path: '/Portfolio', component: Portfolio},
{path: '/Stocks', component: Stocks},
{path: '/Stocks/Stock', component: Stock}

];