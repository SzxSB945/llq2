module.exports = {
    grid: {
        left: 20,
        top: 40,
        bottom: 20,
        right:20,
        containLabel :true
    },
    xAxis: {
        type: 'value',
        scale: true,
        min  : 0,
        position: 'top',
        boundaryGap: false,
        splitLine :{
            show  : true,
            lineStyle :{
                color:'rgba(255,255,255,0.1)'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            align   :'right',
            lineHeight  : 28,
            interval: 0,
            margin  : 20,
            fontSize: 15,
            textStyle: {
                color: '#fff',
                borderWidth:1
            },
        }
    },
    yAxis: {
        type: 'category',
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisLabel: {
            align   :'right',
            lineHeight  : 28,
            interval: 0,
            margin  : 20,
            fontSize: 15,
            textStyle: {
                color: '#fff',
                borderWidth:1
            },
            // formatter : function(params){
            //     let newParams = '';// 最终拼接成的字符串
            //     var paramsLength = params.length;// 实际标签的个数
                
            //     if( paramsLength <= 4 ){
            //         newParams = params
            //     }else if( paramsLength > 4 ){
            //         newParams = params.substring(0, 3) + "..."
            //     }
            //     //将最终的字符串返回
            //     return newParams
            // }
        },
        data: []
    },
    series: [
        {
        name: '数值一',
        type: 'bar',
        stack: '总量',
        barWidth : 20,
        roam: false,
        visualMap: false,
        zlevel: 2,
        barMaxWidth: 20,
        itemStyle: {
            normal: {
                color: '#fff'
            },
            emphasis: {
                color: "#fff"
            }
        },
        label: {
            normal: {
                show: true,
                position: 'insideLeft',
                fontSize:10
            }
        },
        data: []
    },
    {
        name: '数值二',
        type: 'bar',
        stack: '总量',
        barWidth : 20,
        roam: false,
        visualMap: false,
        zlevel: 2,
        barMaxWidth: 20,
        itemStyle: {
            normal: {
                color: 'red'//'rgba(64,169,237,0.5)'
            },
            emphasis: {
                color: 'red'//'rgba(53,150,192,0.5)'
            }
        },
        label: {
            normal: {
                show: true,
                position: 'insideLeft',
                fontSize:10
            }
        },
        data: []
    }
    ]
}