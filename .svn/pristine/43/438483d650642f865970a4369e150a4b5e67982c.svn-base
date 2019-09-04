module.exports = {
    tooltip : {//提示框组件。
        trigger: 'item',//数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
        formatter: '{b}'
    },
    // animationEasingUpdate:'quinticln',
    geo3D:{
        show :true,
        map: '北京',
        itemStyle :{
            normal:{
                borderWidth: 2,
                shadowBlur: 25,
                shadowColor: '#45FFFF',   //
                borderColor: 'rgba(0,0,0,0)',
            }
        }
    },
    geo:{
        show :true,
        map: '北京',
        
        zoom : 1,
        selectedMode : 'single',
        center:['47%','50%'],
        label: {
            normal: {
                show: false   //false
            },
            emphasis: {
                show: false   //false
            }
        },
        itemStyle :{
            normal:{
                areaColor : '#419EEA',//419fe9 rgba(216, 236, 246, 1)
                borderColor : '#004395',  //082478
                borderWidth : 1,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            emphasis:{
                borderWidth : 1,
                areaColor : '#8bb3e6',//
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 15,
                shadowOffsetX : 0,
                shadowOffsetY : 10
            }
        }
    },
    series: [
        {
            name: 'MAP',
            type: 'map',
            mapType: '',
            geoIndex: 0,
            data:[]
        },
        {
            name: '突发事件',
            type: 'scatter',
            coordinateSystem: 'geo',
            geoIndex: 0,
            data: [],
            symbolSize: 24,
            animationDelay : 600,
            hoverAnimation: true, 
            symbol:'image://./image/tfsjIcon.png',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        },
        {
            name: '辖区信息',
            type: 'scatter',
            coordinateSystem: 'geo',
            geoIndex: 0,
            data: [],
            symbolSize: 20,
            animationDelay : 600,
            hoverAnimation: true, 
            symbol:'image://./image/sfs.png',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        },
        {
            name: '110警情',
            type: 'scatter',
            coordinateSystem: 'geo',
            geoIndex: 0,
            data: [],
            symbolSize: 24,
            animationDelay : 600,
            hoverAnimation: true, 
            symbol:'image://./image/gfxicon.png',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        }
    ],
    // dataRange: {
    //     show:false, //false就隐藏了
    //     min: 10,
    //     max: 2000,
    //     x: 'left',
    //     y: 'bottom',
    //     calculable: true,
    //     inRange: {
    //         color: ['lightskyblue','yellow', 'orangered']
    //     }
    // },
}