<template>
    <body>
    <el-table :data="dt" style="width: 100%">
        <el-table-column prop="_trade_datetime" label="交易时间" width="180"/>
        <el-table-column prop="commission" label="手续费" />
        <el-table-column prop="order_type" label="下单类型"/>
        <el-table-column prop="order_volume" label="挂单数"/>
        <el-table-column prop="security_type" label="品种"/>
        <el-table-column prop="trade_amount" label='成交额'/>
        <el-table-column prop="trade_price" label='成交价'/>
        <el-table-column prop="trade_security" label="标的" width="120"/>
        <el-table-column prop="trade_type" label="交易类型" />
        <el-table-column prop="trade_volume" label="成交量"/>   
    </el-table>
    </body>
</template>
<script setup>
    function postData() {  
        var url = "101.34.239.153:8118/backtestResult/tradeDetail/";  
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
    //postData();
let transactions={
        "offset": 10,
        "results": [
            {
                "_create_time": "2023-07-17 15:43:47",
                "_trade_datetime": "2017-04-12",
                "_update_time": null,
                "backtest_id": "57280c6d5232446591b27d30d656689b",
                "commission": 2.1,
                "id": 13329,
                "is_valid": true,
                "order_type": "LIMIT",
                "order_volume": 500,
                "security_type": "STOCK",
                "strategy_id": "6e5c30ba56bd577d99463163d16b7b9c",
                "trade_amount": 7000.0,
                "trade_id": "7a621ff003414addb3e8c44c6e9895a1",
                "trade_price": 14.0,
                "trade_security": "sz300013",
                "trade_type": "BUY",
                "trade_volume": 500,
                "user_id": 0
            },
            {
                "_create_time": "2023-07-17 15:43:47",
                "_trade_datetime": "2017-04-13",
                "_update_time": null,
                "backtest_id": "57280c6d5232446591b27d30d656689b",
                "commission": 8.88,
                "id": 13330,
                "is_valid": true,
                "order_type": "LIMIT",
                "order_volume": -500,
                "security_type": "STOCK",
                "strategy_id": "6e5c30ba56bd577d99463163d16b7b9c",
                "trade_amount": -6830.6,
                "trade_id": "045b5f64ec2944f988203d85cc20b09b",
                "trade_price": 13.66,
                "trade_security": "sz300013",
                "trade_type": "SELL",
                "trade_volume": -500,
                "user_id": 0
            },
            {
                "_create_time": "2023-07-17 15:43:47",
                "_trade_datetime": "2017-04-14",
                "_update_time": null,
                "backtest_id": "57280c6d5232446591b27d30d656689b",
                "commission": 2.09,
                "id": 13331,
                "is_valid": true,
                "order_type": "LIMIT",
                "order_volume": 500,
                "security_type": "STOCK",
                "strategy_id": "6e5c30ba56bd577d99463163d16b7b9c",
                "trade_amount": 6970.0,
                "trade_id": "2284f5cab6db4cefa405660d7aa44e0a",
                "trade_price": 13.94,
                "trade_security": "sz300013",
                "trade_type": "BUY",
                "trade_volume": 500,
                "user_id": 0
            },
            {
                "_create_time": "2023-07-17 15:43:47",
                "_trade_datetime": "2017-04-17",
                "_update_time": null,
                "backtest_id": "57280c6d5232446591b27d30d656689b",
                "commission": 8.66,
                "id": 13332,
                "is_valid": true,
                "order_type": "LIMIT",
                "order_volume": -500,
                "security_type": "STOCK",
                "strategy_id": "6e5c30ba56bd577d99463163d16b7b9c",
                "trade_amount": -6664.0,
                "trade_id": "1bd4337ae9e04c31949ffbf9709a8323",
                "trade_price": 13.33,
                "trade_security": "sz300013",
                "trade_type": "SELL",
                "trade_volume": -500,
                "user_id": 0
            },
            {
                "_create_time": "2023-07-17 15:43:47",
                "_trade_datetime": "2017-04-18",
                "_update_time": null,
                "backtest_id": "57280c6d5232446591b27d30d656689b",
                "commission": 2.05,
                "id": 13333,
                "is_valid": true,
                "order_type": "LIMIT",
                "order_volume": 500,
                "security_type": "STOCK",
                "strategy_id": "6e5c30ba56bd577d99463163d16b7b9c",
                "trade_amount": 6850.0,
                "trade_id": "0e5b6bf6d2be405da3f576cee70c92f4",
                "trade_price": 13.7,
                "trade_security": "sz300013",
                "trade_type": "BUY",
                "trade_volume": 500,
                "user_id": 0
            },
            {
                "_create_time": "2023-07-17 15:43:47",
                "_trade_datetime": "2017-04-19",
                "_update_time": null,
                "backtest_id": "57280c6d5232446591b27d30d656689b",
                "commission": 2.01,
                "id": 13334,
                "is_valid": true,
                "order_type": "LIMIT",
                "order_volume": 500,
                "security_type": "STOCK",
                "strategy_id": "6e5c30ba56bd577d99463163d16b7b9c",
                "trade_amount": 6700.0,
                "trade_id": "ac268d8afbef428ba70d1364393a39be",
                "trade_price": 13.4,
                "trade_security": "sz300013",
                "trade_type": "BUY",
                "trade_volume": 500,
                "user_id": 0
            },
            {
                "_create_time": "2023-07-17 15:43:47",
                "_trade_datetime": "2017-04-20",
                "_update_time": null,
                "backtest_id": "57280c6d5232446591b27d30d656689b",
                "commission": 1.97,
                "id": 13335,
                "is_valid": true,
                "order_type": "LIMIT",
                "order_volume": 500,
                "security_type": "STOCK",
                "strategy_id": "6e5c30ba56bd577d99463163d16b7b9c",
                "trade_amount": 6565.0,
                "trade_id": "25124819043144a992d1b37afa52371f",
                "trade_price": 13.13,
                "trade_security": "sz300013",
                "trade_type": "BUY",
                "trade_volume": 500,
                "user_id": 0
            },
            {
                "_create_time": "2023-07-17 15:43:47",
                "_trade_datetime": "2017-04-21",
                "_update_time": null,
                "backtest_id": "57280c6d5232446591b27d30d656689b",
                "commission": 1.92,
                "id": 13336,
                "is_valid": true,
                "order_type": "LIMIT",
                "order_volume": 500,
                "security_type": "STOCK",
                "strategy_id": "6e5c30ba56bd577d99463163d16b7b9c",
                "trade_amount": 6400.0,
                "trade_id": "66b52859188543c6a2467b981ac4b6d1",
                "trade_price": 12.8,
                "trade_security": "sz300013",
                "trade_type": "BUY",
                "trade_volume": 500,
                "user_id": 0
            },
            {
                "_create_time": "2023-07-17 15:43:47",
                "_trade_datetime": "2017-04-24",
                "_update_time": null,
                "backtest_id": "57280c6d5232446591b27d30d656689b",
                "commission": 1.91,
                "id": 13337,
                "is_valid": true,
                "order_type": "LIMIT",
                "order_volume": 500,
                "security_type": "STOCK",
                "strategy_id": "6e5c30ba56bd577d99463163d16b7b9c",
                "trade_amount": 6370.0,
                "trade_id": "04552dc080d4408b84aa026845c61d48",
                "trade_price": 12.74,
                "trade_security": "sz300013",
                "trade_type": "BUY",
                "trade_volume": 500,
                "user_id": 0
            },
            {
                "_create_time": "2023-07-17 15:43:47",
                "_trade_datetime": "2017-04-25",
                "_update_time": null,
                "backtest_id": "57280c6d5232446591b27d30d656689b",
                "commission": 1.84,
                "id": 13338,
                "is_valid": true,
                "order_type": "LIMIT",
                "order_volume": 500,
                "security_type": "STOCK",
                "strategy_id": "6e5c30ba56bd577d99463163d16b7b9c",
                "trade_amount": 6150.0,
                "trade_id": "82b38219e0694d939cadc072ecd25acc",
                "trade_price": 12.3,
                "trade_security": "sz300013",
                "trade_type": "BUY",
                "trade_volume": 500,
                "user_id": 0
            }
        ]
    }
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
let dt=transactions.results

</script>