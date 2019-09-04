import React from 'react';
import { StyleSheet, css } from 'aphrodite'
import { connect } from 'react-redux'
import barConfig3 from './deploy3.config'
import { childIds } from '../data/api'
import { getDetail } from '../data/http'
import areaConfig from '../data/area.config'
import showbarConfig from './barconfig'

// 引入 ECharts 主模块
import ReactEcharts from 'echarts-for-react'
import echarts from 'echarts/lib/echarts'
import liquidfill from 'echarts/lib/echarts-liquidfill.js'
import $ from "jquery"

const getRange = arr => {
    let M = []
    arr.map(item => {
        M.push(item.total)
    })
    M.sort((a, b) => (a - b))
    return (M[M.length - 1])
}
class RiskEarlyWarning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            JRRWS: true,
            JYWCQK: false,
            JYHGQK: false
        }
    }
    async getData() {
        try {
            let currentType = showbarConfig[this.props.barType]
            let barDataTotal = []
            let id = `${this.props.id != '' ? this.props.id : areaConfig(this.props.current, this.props.currentarea)}`
            let str = ''
            let url = childIds(this.props.current, id)
            let data = '' //await getDetail(url)
            let arrLength = 1
            /*             this.renderBar(str, getRange(barDataTotal))
                        this.renderBarHGL(str, getRange(barDataTotal)) */

            this.honeycomb();
        } catch (error) {
            console.log('error')
            console.log(error)
        }
    }

    honeycomb() {
        for (let index = 0; index < 100; index++) {
            if (index < 12) {
                $("#wheelPlanting").append('<li class="hex_158i8t0" style="margin-top: -4.9% !important"> <a  id=hexIn' + index + ' class="hexIn3_1qnx44m"></a></li>')
            } else if (index > 12 && index < 24) {
                $("#wheelPlanting").append('<li class="hexnew_1bvi2wu"> <a id=hexIn' + index + ' class="hexInnew_1qnx44m"></a></li>')

            } else if (index > 24 && index < 37) {
                if (index == 25) {
                    $("#wheelPlanting").append('<li class="hex3_1i6l5s4"> <a id=hexIn' + index + ' class="hexIn3_1qnx44m"></a></li>')
                } else {
                    $("#wheelPlanting").append('<li class="hex_158i8t0"  style="margin-top: -1.9% !important;"> <a id=hexIn' + index + ' class="hexIn3_1qnx44m"></a></li>')
                }
            } else if (index > 37 && index < 49) {
                $("#wheelPlanting").append('<li class="hex_158i8t0" style="margin-top: -1.9% !important;transform: translateX(50%) rotate(-60deg) skewY(30deg) !important;"> <a id=hexIn' + index + ' class="hexIn3_1qnx44m"></a></li>')

            } else if (index > 49 && index < 62) {
                if (index == 50) {
                    $("#wheelPlanting").append('<li class="hex3_1i6l5s4"> <a id=hexIn' + index + ' class="hexIn3_1qnx44m"></a></li>')
                } else {
                    $("#wheelPlanting").append('<li class="hex_158i8t0"  style="margin-top: -1.9% !important;"> <a id=hexIn' + index + ' class="hexIn3_1qnx44m"></a></li>')
                }
            } else if (index > 62 && index < 74) {
                $("#wheelPlanting").append('<li class="hex_158i8t0" style="margin-top: -1.9% !important;transform: translateX(50%) rotate(-60deg) skewY(30deg) !important;"> <a id=hexIn' + index + ' class="hexIn3_1qnx44m"></a></li>')
            } else if (index > 74 && index < 87) {
                if (index == 75) {
                    $("#wheelPlanting").append('<li class="hex3_1i6l5s4"> <a id=hexIn' + index + ' class="hexIn3_1qnx44m"></a></li>')
                } else {
                    $("#wheelPlanting").append('<li class="hex_158i8t0"  style="margin-top: -1.9% !important;"> <a id=hexIn' + index + ' class="hexIn3_1qnx44m"></a></li>')
                }
            } else if (index > 87 && index < 99) {
                $("#wheelPlanting").append('<li class="hex_158i8t0" style="margin-top: -1.9% !important;transform: translateX(50%) rotate(-60deg) skewY(30deg) !important;"> <a id=hexIn' + index + ' class="hexIn3_1qnx44m"></a></li>')

            }
        }
        this.roleupdate();
    }

    roleupdate() {
        var asd = [1, 2, 3, 4,1, 2, 3, 4]
        var x = 101;
        var y = 3;
        var random = [];
        var num=0;
        for (let index = 0; index < asd.length; index++) {
           var repeat= parseInt(Math.random() * (x - y + 1) + y);          
            if(repeat!=num){
                random.push(parseInt(Math.random() * (x - y + 1) + y));
                num=repeat;
            }
        }
        $('#wheelPlanting li').each(function (index) {
            for (var i = 0; i < random.length; i++) {
                if (index == random[i]) {
                    $(this).find('a').css("cursor", "pointer").css("background-image", "url(./image/blue.png)");
                    $(this).find('a').click(function () {
                        alert(this.id);
                    });
                }
            }
        });
    }


    riskEarlyWarning() {
        return {
            color: ['#00FFFF', '#06394C'],
            legend: {
                bottom: "15%",
                right: "2%",
                itemWidth: 8,
                itemHeight: 8,
                data: [],
                formatter: function (name) { // 格式处理
                    var datas = option.series;
                    for (var i = 0; i < datas.length; i++) {
                        if (name == datas[i].name) {
                            return name + ' ' + (datas[i].data[0]) + '%';
                        }
                    }
                }
            },
            tooltip: {
                trigger: 'item',
                show: false,

            },
            grid: {
                x: 25,
                y: 80,
            },
            xAxis: {
                type: 'value',
                max: 100, // 总长为100% 
                show: false,
            },
            yAxis: {
                type: 'category',
                data: [' '],
                show: false,
            },
            series: [ // 
                {
                    barWidth: 20,
                    name: '0-10dBm',
                    type: 'bar',
                    stack: '总量',
                    data: [45], // 计算得到此部分相应百分比 
                    backgroundColor: 'RED',
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            //TODO 
                            offset: [-55, 0],
                            formatter: '{c}%',
                            fontSize: '18',
                            color: '#06394C',
                        },

                    },
                    itemStyle: {
                        normal: {
                            barBorderRadius: [10, 0, 0, 10],
                        }
                    },
                },
                {

                    name: '11-15dBm',
                    type: 'bar',
                    stack: '总量',
                    data: [55],  // 计算得到此部分相应百分比 
                    itemStyle: {
                        normal: {
                            barBorderRadius: [0, 10, 10, 0],
                            barBorderWidth: 1,
                            barBorderColor: '#00FFFF',

                        }
                    },
                }
            ]
        }
    }
    /**
     * barDataTotal 柱状图的数据
     * format  label所呈现的数据
     * max     x轴的最大值
     * length  调节数据在整个框中的位置
     */

    renderBar(format, max) {
        //console.log("数据："+max);
        max = 17;
        let Bar = echarts.init(document.getElementById('riskEarlyWarning'));
        var riskEarlyWarning = {
            color: ['#00FFFF', '#06394C'],
            legend: {
                bottom: "15%",
                right: "2%",
                itemWidth: 8,
                itemHeight: 8,
                data: [],
                formatter: function (name) { // 格式处理
                    var datas = option.series;
                    for (var i = 0; i < datas.length; i++) {
                        if (name == datas[i].name) {
                            return name + ' ' + (datas[i].data[0]) + '%';
                        }
                    }
                }
            },
            tooltip: {
                trigger: 'item',
                show: false,

            },
            grid: {
                x: 25,
                y: 80,
            },
            xAxis: {
                type: 'value',
                max: 100, // 总长为100% 
                show: false,
            },
            yAxis: {
                type: 'category',
                data: [' '],
                show: false,
            },
            series: [ // 
                {
                    barWidth: 20,
                    name: '0-10dBm',
                    type: 'bar',
                    stack: '总量',
                    data: [45], // 计算得到此部分相应百分比 
                    backgroundColor: 'RED',
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            //TODO 
                            offset: [-55, 0],
                            formatter: '{c}%',
                            fontSize: '18',
                            color: '#06394C',
                        },

                    },
                    itemStyle: {
                        normal: {
                            barBorderRadius: [10, 0, 0, 10],
                        }
                    },
                },
                {

                    name: '11-15dBm',
                    type: 'bar',
                    stack: '总量',
                    data: [55],  // 计算得到此部分相应百分比 
                    itemStyle: {
                        normal: {
                            barBorderRadius: [0, 10, 10, 0],
                            barBorderWidth: 1,
                            barBorderColor: '#00FFFF',

                        }
                    },
                }
            ]
        };
        Bar.setOption(riskEarlyWarning)  //barConfig

    }

    renderBarHGL(format, max) {

        max = 17;
        let Bar = echarts.init(document.getElementById('waterDrop'));

        var waterDrop = {
            series: [{
                type: 'liquidFill',
                data: [{
                    value: 0.34,
                    direction: 'left',
                    itemStyle: {
                        color: '#00FFFF'
                    }
                }],
                center: ['50%', '50%'],
                radius: '80%',
                outline: {
                    show: true,
                    borderDistance: 0,
                    itemStyle: {
                        color: 'none',
                        borderColor: '#3C959E',
                        borderWidth: 2,
                        shadowBlur: 20,
                    }
                },
                backgroundStyle: {
                    color: 'none'
                },
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            insideColor: '#fff',
                            fontSize: 20,
                            align: 'center',
                            baseline: 'middle'
                        },
                        position: 'inside'
                    }
                }
            }]
        };

        Bar.setOption(waterDrop)  //barConfig

    }
    componentDidMount() {
        this.getData()
    }
    componentDidUpdate() {
        //this.getData()
    }
    render() {
        return (
            <div className={css(styles.container)}>
                <div className={css(styles.quickCheckContent)}>
                    <div className={css(styles.riskEarlyWarningUp)}>
                        <div className={css(styles.WCL)}>完成率</div>
                        <ReactEcharts className={css(styles.timeAxis)} option={this.riskEarlyWarning()} />
                        {/* <div className={css(styles.timeAxis)} id='riskEarlyWarning'></div> */}
                    </div>


                </div>
                <div className={css(styles.quickInspectionRotaryBroadcasting)}>
                    <div className={css(styles.wheelPlanting)} >
                        {/*      <ul className={css(styles.hexGrid)} id='wheelPlanting'> */}
                        <ul className={css(styles.hexGrid)} id='wheelPlanting'>
                            <li className={css(styles.hex)} style={{
                                display: `none`
                            }}>
                                <a className={css(styles.hexIn)}>

                                </a>
                            </li>
                            <li className={css(styles.hexnew)} style={{
                                display: `none`
                            }}>
                                <a className={css(styles.hexInnew)}>

                                </a>
                            </li>
                            <li className={css(styles.hex3)} style={{
                                display: `none`
                            }}>
                                <a className={css(styles.hexIn3)}>

                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className={css(styles.liquiDdiagram)}>
                    <div className={css(styles.liquidPicture)}>
                        <div className={css(styles.cpmc)}>
                            <div className={css(styles.cpmcBQ)}><div className={css(styles.cpmcname)}>平谷海关</div></div>
                        </div>
                        <div className={css(styles.fxyjContent)}>
                            <div>产品名称：<span>XXXXXX</span></div>
                            <div>类别名称：<span>可口及可口制品</span></div>
                            <div>企业名称：<span>东升食品</span></div>
                            <div>所属国：<span>加拿大</span></div>
                            <div>检测日期：<span>2019年8月19日</span></div>
                        </div>
                        <div className={css(styles.warning)}>
                            <div className={css(styles.warningTB)}></div>
                            <div className={css(styles.warningTitle)}>X检测项 100017-红霉素,（乳基较大婴儿和幼儿佩服食品，指标偏高）</div>
                        </div>
                        <div className={css(styles.lxqy)}>
                            连线企业
                        </div>
                        <div className={css(styles.lxhg)}>
                            连线海关
                        </div>
                        <div className={css(styles.lxkjs)}>
                            连线快检室
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => {
        return {
            current: state.mediate,
            currentarea: state.currentAreaName,
            barType: state.barType,
            barName: state.barName,
            id: state.basicId
        }
    }
)(RiskEarlyWarning)

const styles = StyleSheet.create({
    cpmcname: {
        width: '40px',
        'padding-top': '6px',
        'padding-left': '6px',
        'text-align': 'center',
    },
    cpmcBQ: {
        position: 'absolute',
        'width': '50px',
        left: '60px',
        top: '20px',
        height: '50px',
        background: `url('./image/blue.png') no-repeat center`,
        'font-size': '14px'
    },
    warningTitle: {
        color: '#FCD10B',
        fontSize: '14PX',

    },
    warningTB: {
        'float': 'left',
        'height': '60px',
        'width': '65px',
        background: `url('./image/JG.png') no-repeat center`,

    },
    lxkjs: {
        'position': 'absolute',
        top: "210px",
        right: '0px',
        width: '85px',
        height: '25px',
        margin: '20px 20px 0px 20px',
        border: '1px  solid  #3C959E',
        'border-radius': '5px',
        'font-size': '14px',
        'line-height': '23px',
        'text-align': 'center',
    },
    lxhg: {
        'position': 'absolute',
        top: "210px",
        right: '94px',
        width: '85px',
        height: '25px',
        margin: '20px 20px 0px 20px',
        border: '1px  solid  #3C959E',
        'border-radius': '5px',
        'font-size': '14px',
        'line-height': '23px',
        'text-align': 'center',

    },
    lxqy: {
        'position': 'absolute',
        top: "210px",
        right: '186px',
        width: '85px',
        height: '25px',
        margin: '20px 20px 0px 20px',
        border: '1px  solid  #3C959E',
        'border-radius': '5px',
        'font-size': '14px',
        'line-height': '23px',
        'text-align': 'center',
    },
    warning: {
        'position': 'absolute',
        top: '160px',
        width: '310px',
        height: '60px',
        border: '1px  solid  #3C959E',
        'border-radius': '5px',
        margin: '0px 20px 0px 20px',
        overflow: 'hidden',

    },
    fxyjContent: {
        'position': 'absolute',
        left: '130px',
        top: 0,
        width: '220px',
        height: '160px',
        'text-align': 'left',
        'line-height': '30px',
    },
    cpmc: {
        'position': 'absolute',
        left: 0,
        top: 0,
        width: '130px',
        height: '160px',


    },
    hexIn: {
        'display': 'block',
        'width': '100%',
        'height': '100%',
        'text-align': 'center',
        'color': '#fff',
        'overflow': 'hidden',
        'background-color': '#033954',
        '-webkit-transform': 'skewY(-30deg) rotate(60deg)',
        '-ms-transform': 'skewY(-30deg) rotate(60deg)',
        'transform': 'skewY(-30deg) rotate(60deg)',
        'position': 'absolute',
        'visibility': 'visible',
        'outline': '1px solid transparent',
        'text-decoration': 'none',
        'line-height': '20px',
        'font-size': '10px',

    },
    hex: {
        'position': 'relative',
        'list-style-type': 'none',
        'float': 'left',
        'overflow': 'hidden',
        'visibility': 'hidden',
        'outline': '1px solid transparent', /* fix for jagged edges in FF on hover transition */
        '-webkit-transform': 'rotate(-60deg) skewY(30deg) translatez(-1px)',
        '-ms-transform': 'rotate(-60deg) skewY(30deg) translatez(-1px)',
        'transform': 'rotate(-60deg) skewY(30deg) translatez(-1px)',
        'width': '8%',
        'padding-bottom': '9%',
        'margin-left': '0.1%',
        'margin-right': '0.1%',
        'margin-top': '0.1%',
        'margin-bottom': '0.1%',

    },
    hexInnew: {
        'display': 'block',
        'width': '100%',
        'height': '100%',
        'text-align': 'center',
        'color': '#fff',
        'overflow': 'hidden',
        'background-color': '#033954',
        '-webkit-transform': 'skewY(-30deg) rotate(60deg)',
        '-ms-transform': 'skewY(-30deg) rotate(60deg)',
        'transform': 'skewY(-30deg) rotate(60deg)',
        'position': 'absolute',
        'visibility': 'visible',
        'outline': '1px solid transparent',
        'text-decoration': 'none',
        'line-height': '20px',
        'font-size': '10px',

    },
    hexnew: {
        'position': 'relative',
        'list-style-type': 'none',
        'float': 'left',
        'overflow': 'hidden',
        'visibility': 'hidden',
        'outline': '1px solid transparent', /* fix for jagged edges in FF on hover transition */
        'transform': 'translateX(50%) rotate(-60deg) skewY(30deg)',
        'width': '8%',
        'padding-bottom': '9%',
        'margin-left': '0.1%',
        'margin-right': '0.1%',
        'margin-top': '-1.9%',
        'margin-bottom': '0.1%',

    },
    hexIn3: {
        'display': 'block',
        'width': '100%',
        'height': '100%',
        'text-align': 'center',
        'color': '#fff',
        'overflow': 'hidden',
        'background-color': '#033954',
        '-webkit-transform': 'skewY(-30deg) rotate(60deg)',
        '-ms-transform': 'skewY(-30deg) rotate(60deg)',
        'transform': 'skewY(-30deg) rotate(60deg)',
        'position': 'absolute',
        'visibility': 'visible',
        'outline': '1px solid transparent',
        'text-decoration': 'none',
        'line-height': '20px',
        'font-size': '10px',

    },
    hex3: {
        'clear': 'left',
        'position': 'relative',
        'list-style-type': 'none',
        'float': 'left',
        'overflow': 'hidden',
        'visibility': 'hidden',
        'outline': '1px solid transparent', /* fix for jagged edges in FF on hover transition */
        '-webkit-transform': 'rotate(-60deg) skewY(30deg) translatez(-1px)',
        '-ms-transform': 'rotate(-60deg) skewY(30deg) translatez(-1px)',
        'transform': 'rotate(-60deg) skewY(30deg) translatez(-1px)',
        'width': '8%',
        'padding-bottom': '9%',
        'margin-left': '0.1%',
        'margin-right': '0.1%',
        'margin-top': '-1.9%',
        'margin-bottom': '0.1%',

    },

    hexGrid: {
        overflow: 'hidden',
        width: '543px',
        margin: '0 auto',
        padding: '0.866% 0',
        'font-family': '"Raleway", sans-serif',
        fontSize: '15px',
        position: 'absolute',
        left: "-22px"

    },
    container: {
        width: '100%',
        height: '100%',
        position: 'relative',
        color: '#FFFFFF'
    },
    quickCheckContent: {
        width: '100%',
        height: '145px'
    },
    quickInspectionRotaryBroadcasting: {
        position: 'absolute',
        top: '150px',
        left: '0px',
        width: '58%',
        height: '280px',
    },
    liquiDdiagram: {
        position: 'absolute',
        top: '150px',
        left: '57%',
        width: '43%',
        height: '200px',

    },
    liquidPicture: {
        height: '280px',
        width: '350px',
        border: '1px solid #3C959E',
        marginLeft: '12px',
        position: 'relative',

    },
    liquidDisplay: {
        height: '160px',
        width: '200px',
        float: 'left',
    },
    liquidValue: {
        height: '160px',
        width: '150px',
        float: 'left',
    },
    liquidValueNumber: {
        fontSize: '30px',
        textAlign: 'center',
        color: '#FCD310',
        fontWeight: 'bold',
        paddingTop: '40px'
    },
    liquidValueTitle: {
        fontSize: '20px',
        textAlign: 'center',
        color: '#3FD8F0',
    },
    timeAxis: {
        height: '110px',
    },
    wheelPlanting: {
        width: '490px ',
        height: '280px',
        marginLeft: '40px',
        border: '1px solid #367A8A',
        'overflow': 'hidden',
        position: 'relative'
    },
    theSum1: {
        position: 'absolute',
        top: '40px',
        left: '47%',
        fontSize: '20px',
        fontWeight: 'bold',
    },
    riskEarlyWarningUp: {
        position: 'absolute',
        top: '30px',
        left: '40px',
        width: '92%',
        height: '110px',
        border: '1px solid #367A8A'
    },
    WCL: {
        position: 'absolute',
        top: '10px',
        left: '30px',
    }

})



