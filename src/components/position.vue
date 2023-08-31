<template>
    <body>
    <el-table :data="position" :key="s0" style="width: 100%" height="1000">
        <el-table-column prop="position_value" label="持仓量" width="180" />
        <el-table-column prop="_date_time" label="日期" width="180"  />
        <el-table-column prop="close_price" label="当前价格"/>
        <el-table-column prop="gain" label="收益"/>
        <el-table-column prop="security_type" label="类型"/>
        <el-table-column prop="position_size" label='成交额'/>
        <el-table-column prop="security_name" label="品种" width="120" />
        <el-table-column prop="position_value" label="价值" width="120" />
        <el-table-column prop="position_size" label="持仓数量"/>   
    </el-table>
    </body>
</template>
<script>
import {reactive} from "vue"
var vm = new Vue({
    el:"pos", 
    data: {dt:reactive([])}
});
let position=reactive([]), s0=reactive(0) 

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
        console.log(vm.dt); 
        for (let i=0;i<vm.dt.length;i++){
          if (vm.dt[i].security_type=="STOCK")  vm.dt[i].security_type="股票"
          if (vm.dt[i].security_type=="FUTURES")  vm.dt[i].security_type="期货"
          if (vm.dt[i].security_type=="CB")  vm.dt[i].security_type="可转债"
          if (vm.dt[i].security_type=="Cash")  vm.dt[i].security_type="现金"
          if (vm.dt[i].security_type=="Value")  vm.dt[i].security_type="净值"
          console.log(vm.dt[i])
        }        
    }
return xhr
}  
}
export default{
    setup(){
    postData("positionInfo","57280c6d5232446591b27d30d656689b");
    var app=document.getElementById('main')
    let child = app.firstChild;
        while (child) {
        app.removeChild(child);
        child = app.firstChild
        }
    return {
        position,vm,s0
    }
}
    }
    class Point{
    nowTime(format,date){  //时间转换格式
      let times;
      if(format=='yy-mm-dd hh:mm:ss'){//yy-mm-dd hh:mm:ss
        times=date.getFullYear() +"-"+ 
        ((date.getMonth()+1)>=10?(date.getMonth()+1):'0'+
        (date.getMonth()+1))  +"-"+ (date.getDate()>=10? date.getDate():'0'+ date.getDate())+" "+
        (date.getHours()>=10? date.getHours():'0'+ date.getHours())+":"+
        (date.getMinutes()>=10? date.getMinutes():'0'+ date.getMinutes())+":"+
        (date.getSeconds()>=10? date.getSeconds():'0'+ date.getSeconds());      
      }else if(format=='yy-mm-dd'){//yy-mm-dd
        times=date.getFullYear() +"-"+ 
        ((date.getMonth()+1)>=10?(date.getMonth()+1):'0'+
        (date.getMonth()+1))  +"-"+ (date.getDate()>=10? date.getDate():'0'+ date.getDate());
      }else if(format=='hh:mm:ss'){
        times = 
        (date.getHours()>=10? date.getHours():'0'+ date.getHours())+":"+
        (date.getMinutes()>=10? date.getMinutes():'0'+ date.getMinutes())+":"+
        (date.getSeconds()>=10? date.getSeconds():'0'+ date.getSeconds());
      }else{
        times = date.toLocaleString().replace(/\//g, "\-");
      }
      return times;
    }
  };
  let tx = new Point();



/*let col=[
    <el-table-column prop="_create_time" label='委托时间'/>
    <el-table-column prop="_trade_datetime" label="交易时间"/>
    //"_update_time": null,
    //<el-table-column prop="backtest_id" label="57280c6d5232446591b27d30d656689b"/>
    <el-table-column prop="commission" label='手续费'/>
    //"id": 13329,
    //"is_valid": true,
    <el-table-column prop="order_type" label="下单类型"/>
    <el-table-column prop="order_volume" label="挂单数"/>
    <el-table-column prop="security_type" label="品种"/>
    //"strategy_id": "6e5c30ba56bd577d99463163d16b7b9c",
    <el-table-column prop="trade_amount" label='成交额'/>
    //"trade_id": "7a621ff003414addb3e8c44c6e9895a1",
    <el-table-column prop="trade_price" label='成交价'/>
    <el-table-column prop="trade_security" label="标的"/>
    <el-table-column prop="trade_type" label="交易类型"/>
    <el-table-column prop="trade_volume" label="成交量"/>
]*/
vm.$watch('dt', function (newValue, oldValue) {
			// 这个回调将在 vm.kilometers 改变后调用
            position=vm.dt
        console.log(position)         

        s0++
		})
</script>