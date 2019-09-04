module.exports = {
    series: [
        {
            name: '突然事件处置率',
            type: 'gauge',
            radius: '60%',
            center:['30%','45%'],
            title :{
                color:'#fff',
                fontSize  :16,
                offsetCenter:[0,'120%']
            },
            pointer:{
                show:true,
                width:4,
                length:'60%'
            },
            detail: {
                formatter: '{value}%',
                fontSize : 15,
                offsetCenter:[0,'55%'],
                fontfamily: 'PingFangSC-Semibold',
            },
            splitLine:{
                show: false,
            },
            axisTick: {
                splitNumber : 1,
                lineStyle   :{
                    color : 'rgba(255, 255, 255, 0.5)'
                }
            },
            axisLabel: {
                show : false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 10,
                    shadowBlur: 0,
                    color: [
                        [0.3, '#fa3823'],
                        [0.7, '#179dff'],
                        [1, '#01ffe7']
                    ]
                }
            },
            data: [{
                value: 0,
                name: '处置率',
            }]
        },
        {
            name: '突发事件反馈率',
            type: 'gauge',
            radius: '60%',
            center:['70%','45%'],
            title :{
                color:'#fff',
                fontSize  :16,
                offsetCenter:[0,'120%']
            },
            pointer:{
                show:true,
                width:4,
                length:'60%'
            },
            detail: {
                formatter: '{value}%',
                fontSize : 15,
                offsetCenter:[0,'55%'],
                fontfamily: 'PingFangSC-Semibold',
            },
            splitLine:{
                show: false,
            },
            axisTick: {
                splitNumber : 1,
                lineStyle   :{
                    color : 'rgba(255, 255, 255, 0.5)'
                }
            },
            axisLabel: {
                show : false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 10,
                    shadowBlur: 0,
                    color: [
                        [0.3, '#fa3823'],
                        [0.7, '#179dff'],
                        [1, '#01ffe7']
                    ]
                }
            },
            data: [{
                value: 71,
                name: '反馈率',
            }]
        }
    ]
}