module.exports = {
    series: [
        {
            name: '调解成功率',
            type: 'gauge',
            radius: '60%',
            center:['20%','55%'],
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
                name: '',
            }]
        },
        {
            name: '司法确认率',
            type: 'gauge',
            radius: '60%',
            center:['50%','55%'],
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
                name: '',
            }]
        },
        {
            name: '警情转化率',
            type: 'gauge',
            radius: '60%',
            center:['80%','55%'],
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
                name: '',
            }]
        }
    ]
}