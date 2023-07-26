<template>
    <body>
    <el-table :data="dt" style="width: 100%">
        <el-table-column prop="position_value" label="持仓量" width="180" />
        <el-table-column prop="date_time" label="日期" width="180"  />
        <el-table-column prop="close_price" label="当前价格"/>
        <el-table-column prop="gain" label="收益"/>
        <el-table-column prop="security_type" label="类型"/>
        <el-table-column prop="trade_amount" label='成交额'/>
        <el-table-column prop="trade_price" label='成交价'/>
        <el-table-column prop="security_name" label="品种" width="120" />
        <el-table-column prop="position_value" label="价值" width="120" />
        <el-table-column prop="position_size" label="持仓数量"/>   
    </el-table>
    </body>
</template>
<script setup>
    function postData() {  
        var url = "101.34.239.153:8088/backtestResult/tradeDetail/<backtest_id> ";  
        var data = {'backtest_id':"57280c6d5232446591b27d30d656689b",offset:0,length:2000};  
        var xhr = new XMLHttpRequest();  
        xhr.open("POST", url, true);  
        xhr.setRequestHeader("Content-Type", "application/json");  
        xhr.send(JSON.stringify(data));  
        xhr.onreadystatechange = function() {  
            if(xhr.readyState == 4 && xhr.status == 200) {  
                console.log(xhr.responseText);  
            }  
        }  
    }  
    postData();
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
let position={
        "offset": 10,
        "results": [
            {
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
            },
            {
                "_create_time": "2023-07-17 15:43:51",
                "_date": null,
                "_update_time": null,
                "avg_cost": null,
                "backtest_id": "57280c6d5232446591b27d30d656689b",
                "close_price": null,
                "closeable_amount": null,
                "daily_gains": null,
                "daily_gains_percent": null,
                "date_time": 1491350400000,
                "gain": null,
                "gain_percent": null,
                "host_cost": null,
                "id": 52912,
                "is_valid": true,
                "position_info_id": "2b61c66c7ba94f0b91bb4eb3c213bf69",
                "position_percent": null,
                "position_size": null,
                "position_value": 1000000.0,
                "security_code": null,
                "security_deposit": null,
                "security_name": null,
                "security_type": "Cash",
                "side": 1,
                "total_value": null
            },
            {
                "_create_time": "2023-07-17 15:43:51",
                "_date": null,
                "_update_time": null,
                "avg_cost": null,
                "backtest_id": "57280c6d5232446591b27d30d656689b",
                "close_price": null,
                "closeable_amount": null,
                "daily_gains": 0.0,
                "daily_gains_percent": null,
                "date_time": 1491350400000,
                "gain": "0",
                "gain_percent": null,
                "host_cost": null,
                "id": 52913,
                "is_valid": true,
                "position_info_id": "930f12c3a1fe4a0589306794e4072a17",
                "position_percent": null,
                "position_size": null,
                "position_value": 1000000.0,
                "security_code": null,
                "security_deposit": null,
                "security_name": null,
                "security_type": "Value",
                "side": 1,
                "total_value": null
            },
            {
                "_create_time": "2023-07-17 15:43:51",
                "_date": null,
                "_update_time": null,
                "avg_cost": 0.0,
                "backtest_id": "57280c6d5232446591b27d30d656689b",
                "close_price": 0.0,
                "closeable_amount": 0.0,
                "daily_gains": 0.0,
                "daily_gains_percent": null,
                "date_time": 1491436800000,
                "gain": "0",
                "gain_percent": "0",
                "host_cost": 0.0,
                "id": 52914,
                "is_valid": true,
                "position_info_id": "ba35cb624e2540009508f60358f1cb6c",
                "position_percent": 0.0,
                "position_size": 0.0,
                "position_value": 0.0,
                "security_code": "sz300013",
                "security_deposit": null,
                "security_name": "新宁物流",
                "security_type": "STOCK",
                "side": 1,
                "total_value": 1000000.0
            },
            {
                "_create_time": "2023-07-17 15:43:51",
                "_date": null,
                "_update_time": null,
                "avg_cost": null,
                "backtest_id": "57280c6d5232446591b27d30d656689b",
                "close_price": null,
                "closeable_amount": null,
                "daily_gains": null,
                "daily_gains_percent": null,
                "date_time": 1491436800000,
                "gain": null,
                "gain_percent": null,
                "host_cost": null,
                "id": 52915,
                "is_valid": true,
                "position_info_id": "05db5999ecd44f12b563dba98ed29074",
                "position_percent": null,
                "position_size": null,
                "position_value": 1000000.0,
                "security_code": null,
                "security_deposit": null,
                "security_name": null,
                "security_type": "Cash",
                "side": 1,
                "total_value": null
            },
            {
                "_create_time": "2023-07-17 15:43:51",
                "_date": null,
                "_update_time": null,
                "avg_cost": null,
                "backtest_id": "57280c6d5232446591b27d30d656689b",
                "close_price": null,
                "closeable_amount": null,
                "daily_gains": 0.0,
                "daily_gains_percent": null,
                "date_time": 1491436800000,
                "gain": "0",
                "gain_percent": null,
                "host_cost": null,
                "id": 52916,
                "is_valid": true,
                "position_info_id": "ccdfc76bb8514ea9880876d20f2556c3",
                "position_percent": null,
                "position_size": null,
                "position_value": 1000000.0,
                "security_code": null,
                "security_deposit": null,
                "security_name": null,
                "security_type": "Value",
                "side": 1,
                "total_value": null
            },
            {
                "_create_time": "2023-07-17 15:43:51",
                "_date": null,
                "_update_time": null,
                "avg_cost": 0.0,
                "backtest_id": "57280c6d5232446591b27d30d656689b",
                "close_price": 0.0,
                "closeable_amount": 0.0,
                "daily_gains": 0.0,
                "daily_gains_percent": null,
                "date_time": 1491523200000,
                "gain": "0",
                "gain_percent": "0",
                "host_cost": 0.0,
                "id": 52917,
                "is_valid": true,
                "position_info_id": "9a1f83b9615d404a9652ed6272b4eb6a",
                "position_percent": 0.0,
                "position_size": 0.0,
                "position_value": 0.0,
                "security_code": "sz300013",
                "security_deposit": null,
                "security_name": "新宁物流",
                "security_type": "STOCK",
                "side": 1,
                "total_value": 1000000.0
            },
            {
                "_create_time": "2023-07-17 15:43:51",
                "_date": null,
                "_update_time": null,
                "avg_cost": null,
                "backtest_id": "57280c6d5232446591b27d30d656689b",
                "close_price": null,
                "closeable_amount": null,
                "daily_gains": null,
                "daily_gains_percent": null,
                "date_time": 1491523200000,
                "gain": null,
                "gain_percent": null,
                "host_cost": null,
                "id": 52918,
                "is_valid": true,
                "position_info_id": "3d44a731cabf470ab4c0bdee0ac0c7e6",
                "position_percent": null,
                "position_size": null,
                "position_value": 1000000.0,
                "security_code": null,
                "security_deposit": null,
                "security_name": null,
                "security_type": "Cash",
                "side": 1,
                "total_value": null
            },
            {
                "_create_time": "2023-07-17 15:43:51",
                "_date": null,
                "_update_time": null,
                "avg_cost": null,
                "backtest_id": "57280c6d5232446591b27d30d656689b",
                "close_price": null,
                "closeable_amount": null,
                "daily_gains": 0.0,
                "daily_gains_percent": null,
                "date_time": 1491523200000,
                "gain": "0",
                "gain_percent": null,
                "host_cost": null,
                "id": 52919,
                "is_valid": true,
                "position_info_id": "c44f9a0ec80f445ea61333409710d895",
                "position_percent": null,
                "position_size": null,
                "position_value": 1000000.0,
                "security_code": null,
                "security_deposit": null,
                "security_name": null,
                "security_type": "Value",
                "side": 1,
                "total_value": null
            },
            {
                "_create_time": "2023-07-17 15:43:51",
                "_date": null,
                "_update_time": null,
                "avg_cost": 0.0,
                "backtest_id": "57280c6d5232446591b27d30d656689b",
                "close_price": 0.0,
                "closeable_amount": 0.0,
                "daily_gains": 0.0,
                "daily_gains_percent": null,
                "date_time": 1491782400000,
                "gain": "0",
                "gain_percent": "0",
                "host_cost": 0.0,
                "id": 52920,
                "is_valid": true,
                "position_info_id": "97fb446c5bb946a59de2c4f4e24ca0b5",
                "position_percent": 0.0,
                "position_size": 0.0,
                "position_value": 0.0,
                "security_code": "sz300013",
                "security_deposit": null,
                "security_name": "新宁物流",
                "security_type": "STOCK",
                "side": 1,
                "total_value": 1000000.0
            }
        ]
    }
    for (let i=0;i<position.results.length;i++){
        var d = new Date();
        d.setTime(position.results[i].date_time)
        var date0=d.toLocaleDateString()
        position.results[i].date_time=tx.nowTime('yy-mm-dd',d)
        if (position.results[i].security_type=='Cash')
            position.results[i].security_name='现金'
        if (position.results[i].security_type=='Value')
            position.results[i].security_name='总额'

    }
    console.log(position.results)
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
let dt=position.results

</script>