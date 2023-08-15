
<script>
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
import backtest from './components/backtest.vue'
console.log(app)

let postData=function (r,id) { 
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
xhr.setRequestHeader("token", "1d5cc1fe09fd4cca8769d6e5741fdde3");  
xhr.setRequestHeader("Access-Control-Allow-Origin","*")
//xhr.send(JSON.stringify(data));  
xhr.send(data)
console.log(xhr)
let n=1
//while (xhr.readyState != 4)
//    n=n+1
if (r=='tradeDetail')
xhr.onreadystatechange = function() { 
  exporttransaction(JSON.parse(xhr.responseText).data);        
    }
if (r=='positionInfo')
xhr.onreadystatechange = function() { 
  exportposition(JSON.parse(xhr.responseText).data);        
    }
return xhr
}  

 
function exportCsv(bk){
        //title ["","",""]
        let len=bk.benchmark_earn.length;
        //titleForKey ["","",""]
        let title=['time','benchmark','Balance','earn','lose','sell','buy']
        var str = [];
        str.push(title.join(",")+"\n");
        for(var i=0;i<len;i++){
            var temp = [];
            temp.push(bk.time[i]);
            temp.push(bk.benchmark_earn[i].value);
            temp.push((1+0.01*bk.algo_earn[i].value)*100000)
            temp.push(bk.daily_profit[i].value);
            temp.push(bk.daily_loss[i].value);
            temp.push(bk.daily_sell[i].value);
            temp.push(bk.daily_buy[i].value);
         str.push(temp.join(",")+"\n");
     }
     var uri = 'data:text/csv;charset=utf-8,' + encodeURIComponent(str.join(""));  
     var downloadLink = document.createElement("a");
     downloadLink.href = uri;
     downloadLink.download = "export.csv"; 
     app.appendChild(downloadLink);
     downloadLink.click();
     app.removeChild(downloadLink); 
  }


function exporttransaction(transaction){
  console.log("111")
  let title = transactions.title;
  //titleForKey ["","",""]
  var titleForKey = ['_trade_datetime','security_type','trade_security','trade_type','order_type','order_volume','trade_price','trade_amount','commission'];
  //var title=['时间',]
  var data = transactions.results;
  var str = [];
  str.push(titleForKey.join(",")+"\n");
  for(var i=0;i<data.length;i++){
      var temp = [];
      for(var j=0;j<titleForKey.length;j++){
          temp.push(data[i][titleForKey[j]]);
   }
   str.push(temp.join(",")+"\n");
  }
  var uri = 'data:text/csv;charset=utf-8,' + encodeURIComponent(str.join(""));  
   var downloadLink = document.createElement("a");
   downloadLink.href = uri;
   downloadLink.download = "export.csv"; 
   app.appendChild(downloadLink);
   downloadLink.click();
   app.removeChild(downloadLink); 
}
function exportposition(transaction){
    var titleForKey = ['security_name','close_price','security_name','security_type','daily_gains','position_size','position_value','position_percent','avg_cost'];
    var data = position.results;
    var str = [];
    str.push(titleForKey.join(",")+"\n");
    for(var i=0;i<data.length;i++){
        var temp = [];
        for(var j=0;j<titleForKey.length;j++){
            temp.push(data[i][titleForKey[j]]);
     }
     str.push(temp.join(",")+"\n");
    }    
}
export default {
  name: "navigations",
  data() {
    return {
      items: [
        {
          icon: "fa-money",
          name: "回测详情",
          path: "/backtest",
          children: [{ path: "/backtest", name: "回测详情" }]
        },
        {
          icon: "fa-asterisk",
          name: "交易信息",
          path: "/transactions",
          children: [{ path: "/transactions", name: "交易信息" }]
        },
        {
          icon: "fa-asterisk",
          name: "交易信息",
          path: "/position",
          children: [{ path: "/position", name: "持仓信息" }]
        },
        {
          icon: "fa-asterisk",
          name: "编辑器",
          path: "/editor",
          children: [{ path: "/editor", name: "编辑器" }]
        },
        {
          icon: "fa-asterisk",
          name: "用户信息",
          path: "/user",
          children: [{ path: "/user", name: "用户信息" }]
        }
      ]
    };

  }
  ,setup(){
    return {
  exportposition
  ,exporttransaction
  ,postData
}
  }
};/*  {
                "_create_time": "2023-07-17 15:43:51",
                "_date": null,
                "_update_time": null,
                "avg_cost": 0.0,
                "backtest_id": "57280c6d5232446591b27d30d656689b",
                "close_price": 0.0,
                "closeable_amount": 0.0,
                "daily_gains": 0.0,
                "daily_gains_percent": null,
                "date_time": 1491350400000,
                "gain": "0",
                "gain_percent": "0",
                "host_cost": 0.0,
                "id": 52911,
                "is_valid": true,
                "position_info_id": "b1b610c37f77493cbb82272be4d2203f",
                "position_percent": 0.0,
                "position_size": 0.0,
                "position_value": 0.0,
                "security_code": "sz300013",
                "security_deposit": null,
                "security_name": "新宁物流",
                "security_type": "STOCK",
                "side": 1,
                "total_value": 1000000.0
            }*/
</script>
<template>
  <el-row class="menu_page">
    <el-col>
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#324057"
        text-color="#fff"
        active-text-color="#409eff"
      >
        <router-link to="/home">
          <el-menu-item index="0">
            <i class="fa fa-margin fa-server"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <template v-for="item in items">
            <el-submenu v-if="item.children" :index="item.path" :key="item.path">
              <template slot="title">
                <i :class="'fa fa-margin'+item.icon"></i>
                <span slot="title">{{item.name}}</span>
              </template>
              <router-link v-for="(citem,cindex) in item.children" :to="citem.path" :key="cindex">
                <el-menu-item :index="citem.path">
                  <span slot="title">{{citem.name}}</span>
                </el-menu-item>
              </router-link>
            </el-submenu>
          </template>
        </router-link>
            <el-sub-menu index="1">
              <template #title>导出</template>
              <el-button @click="console.log(exportposition)">导出回测结果</el-button>
              <el-button @click="postData('positionInfo','57280c6d5232446591b27d30d656689b')">导出仓位详情</el-button>
              <el-button @click="postData('tradeDetail','57280c6d5232446591b27d30d656689b')">导出交易详情</el-button>
            </el-sub-menu>
            <el-button @click=" getFile" style="margin-top: 10px"> 
              Upload<el-icon class="el-icon--right" icon="Search"></el-icon>
              </el-button>
              <input type="file" ref="file" style="display: none;" v-on:change="handleFileUpload($event) ">
              
      </el-menu>
    </el-col>
  </el-row>
</template>
<style scoped>
.menu_page{
    position: fixed;
    top: 71px;
    left: 0;
    min-height: 100%;
    background-color: #0bf1e6;
    z-index: 99;
}
.el-menu {
  border: none;
}
.fa-margin {
  margin-right: 5px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-height: 400px;
}

.el-menu-vertical-demo {
  width: 35px;
}
.el-submenu .el-menu-item {
  min-width: 180px;
}
.hiddenDropdown,
.hiddenDropname {
  display: none;
}
a {
  text-decoration: none;
}
</style>
