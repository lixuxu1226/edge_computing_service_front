

    /* Flot Charts
     * -------
     * Here we will create a few charts using Flot Charts
     */

    // 	移动设备关系图
	$(document).ready(
	   function () {
	       // var device=device.deviceGetAll();









           //realtimeChart 实时数据
           realtimeChart = echarts.init(document.getElementById("realtime-chart"));

           function randomData() {
               var now = new Date();
               value = Math.random() * 50;
               return {
                   value: [
                       [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
                       Math.round(value)
                   ]
               }
           }

           var data = [];
           var date = [];
           // var data1=[];
           var value = Math.random();
           for (var i = 0; i < 1000; i++) {
               data.push(randomData());//风险指数
               // data1.push(randomData()*5)//心率
               date.push('')
           }

           realtimeOption = {
               // title: {
               //     text: '动态数据 + 时间坐标轴'
               // },
               // legend: {
               //     data:['心率','风险指数']
               // },
               grid:{
                   x:75,
                   y:50,
                   x2:150,
                   y2:50


               },
               tooltip: {
                   trigger: 'axis',
                   formatter: function (params) {
                       params = params[0];
                       return params.value[0] + ' <br/>' + '风险指数：' + params.value[1] + '%' + '<br/>' + '心率：' + params.value[1] * 5;
                   },
                   axisPointer: {
                       animation: false
                   }
               },
               xAxis: {
                   type: 'category',
                   splitLine: {
                       show: false
                   },
                   data: date
               },
               dataZoom: [{
                   type: 'slider',
                   show: true,
                   xAxisIndex: [0],
                   left: '9%',
                   bottom: -5,
                   start: 90,
                   end: 100 //初始化滚动条
               }],
               yAxis: {
                   type: 'value',
                   boundaryGap: [0, '100%'],
                   splitLine: {
                       show: true
                   }
               },
               series: [{
                   name: '实时数据',
                   type: 'line',
                   showSymbol: false,
                   hoverAnimation: false,
                   data: data,
                   lineStyle: {
                       color: '#4b565b'
                   }
               }
               ]
           };

           setInterval(function () {
               var _data = randomData();
               data.shift();
               // data1.shift();
               date.shift();
               data.push(_data);
               // data1.push(_data*5);
               date.push(_data.value[0]);

               realtimeChart.setOption({
                   xAxis: {
                       data: date
                   },
                   series: [{
                       data:data
                   }
                   ]
               });
           }, 1000);
           realtimeChart.setOption(realtimeOption);


       })




