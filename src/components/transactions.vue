<template>
    <body>
    <div id="tr" >
    <el-table :data="transactions" style="width: 100%" height="1000" key="sa" >
        <el-table-column prop="_trade_datetime" label="交易时间" width="180" sortable />
        <el-table-column prop="commission" label="手续费"  sortable />
        <el-table-column prop="order_type" label="下单类型" sortable />
        <el-table-column prop="order_volume" label="挂单数" sortable />
        <el-table-column prop="security_type" label="品种" display="block" sortable />
        <el-table-column prop="trade_amount" label='成交额' sortable />
        <el-table-column prop="trade_price" label='成交价' sortable />
        <el-table-column prop="trade_security" label="标的" width="120" sortable />
        <el-table-column prop="trade_type" label="交易类型"  sortable />
        <el-table-column prop="trade_volume" label="成交量" sortable />   
    </el-table>
    </div>
    </body>
</template>
<script>
import {reactive} from "vue"
let n={},transactions=reactive([]),sa=reactive(0)
var vm = new Vue({
    el:"tr", 
    data: {dt:reactive([])}
});

function postData(r,id) { 
  var app=document.getElementById('main')
  let child = app.firstChild;
        while (child) {
        app.removeChild(child);
        child = app.firstChild
        }
var url = "http://101.34.239.153:8118/backtestResult/"+r+"/"+id;  
var data = {'backtest_id':id,offset:0,length:2000};  
var xhr = new XMLHttpRequest();  
xhr.open("POST", url, true);  
xhr.setRequestHeader("token", "3db8bcd501c44a35b516a7fac6016903");  
xhr.setRequestHeader("Access-Control-Allow-Origin","*")
//xhr.send(JSON.stringify(data));  
xhr.send(data)
console.log(xhr)
let n=1
//while (xhr.readyState != 4)
//    n=n+1

xhr.onreadystatechange = function() {  
    if(xhr.readyState == 4 && xhr.status == 200) {  
        vm.dt=JSON.parse(xhr.responseText).data.results;        
        for (let i=0;i<vm.dt.length;i++){
          if (vm.dt[i].security_type=="STOCK")  vm.dt[i].security_type="股票"
          if (vm.dt[i].security_type=="FUTURES")  vm.dt[i].security_type="期货"
          if (vm.dt[i].security_type=="CB")  vm.dt[i].security_type="可转债"
          if (vm.dt[i].trade_type=="BUY")  vm.dt[i].trade_type="买入"
          if (vm.dt[i].trade_type=="SELL")  vm.dt[i].trade_type="卖出"
          if (vm.dt[i].order_type=="MARKET")  vm.dt[i].order_type="市价单"
          if (vm.dt[i].order_type=="LIMIT")  vm.dt[i].order_type="限价单"
          console.log(vm.dt[i])
        }
        console.log(vm.dt); 
    }
return xhr
}  
}

//postData();
export default{
    setup(){
        let t0=postData("tradeDetail","57280c6d5232446591b27d30d656689b");
        console.log(t0)
        var app=document.getElementById('main')
    let child = app.firstChild;
        while (child) {
        app.removeChild(child);
        child = app.firstChild
        }
    return {
        transactions,vm,sa
    }
}
}


vm.$watch('dt', function (newValue, oldValue) {
			// 这个回调将在 vm.kilometers 改变后调用
            transactions=vm.dt
            sa++
		})

//while (1)
//console.log(dt)
//let dt=tr.data.results//transactions.results

</script>