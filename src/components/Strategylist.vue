<template>
    <div :id="Menu">
        <el-table :data="strategies">
            <el-table-column label='策略名称' prop="strategy_name"> </el-table-column>
            <el-table-column label='编辑时间' prop="strategy_name"> </el-table-column>
            <el-table-column></el-table-column>
            <el-table-column label="Operations">
                <template #default="scope">
                    <el-button size="small" @click="CopySt(scope.$index, scope.row)">使用策略</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script setup>
let strategies=reactive([])
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
var url = "http://101.34.239.153:8118/backtest/"+r+"/"+id;  
var data = {'userId':"e063bb16cc76558b9f94afe212747cda"};  
var xhr = new XMLHttpRequest();  
xhr.open("POST", url, true);  
xhr.setRequestHeader("token", "19b05dd61f1c46e78667955ee016b7f4");  
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
    }
return xhr
}  
}
let rt=postData("getStrategyId")

vm.$watch('dt', function (newValue, oldValue) {
			// 这个回调将在 vm.kilometers 改变后调用
            strategies=vm.dt
		})
function Copyst(index,row){

}
</script>
