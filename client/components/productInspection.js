import React from 'react';
import { StyleSheet, css } from 'aphrodite'
import { connect } from 'react-redux'
import barConfig3 from './deploy3.config'
import { childIds } from '../data/api'
import { getDetail } from '../data/http'
import areaConfig from '../data/area.config'
import showbarConfig from './barconfig'
import config from './config.js'
// 引入 ECharts 主模块
import ReactEcharts from 'echarts-for-react'
import echarts from 'echarts/lib/echarts'
import liquidfill from 'echarts/lib/echarts-liquidfill.js'
import $ from "jquery"
import axios from 'axios';


const getRange = arr => {
    let M = []
    arr.map(item => {
        M.push(item.total)
    })
    M.sort((a, b) => (a - b))
    return (M[M.length - 1])
}
class ProductInspection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: 0,
            num_avg2: "0分0秒",
            num_avg3: "0分0秒",
            num_avg5: "0分0秒",
        }
        this.url = global.constants.url;
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
            this.renderBar();
        } catch (error) {
            console.log('error')
            console.log(error)
        }
    }

    timeAxis() {
        return {
            tooltip: {
                trigger: 'item',
                show: false,
            },
            xAxis: {
                type: 'value',
                show: false,
            },
            grid: {
                x: 25,
                y: 120,
            },
            yAxis: {
                type: 'category',
                show: false,
                axisTick: {
                    show: false
                }
            },
            series: [{
                type: 'bar',
                name: '',
                data: [15],
                stack: 'income',
                barWidth: 25,
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        //TODO 
                        offset: [0, 0],
                        formatter: this.state.num_avg2,
                        fontSize: '18'
                    },

                },
                itemStyle: {
                    normal: {
                        color: '#FF7E00',
                        barBorderRadius: [0],

                    }
                },
            },
            {
                type: 'bar',
                name: '',
                data: [30],
                stack: 'income',
                barWidth: 25,
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        //TODO 
                        offset: [0, 0],
                        formatter: this.state.num_avg3,
                        fontSize: '18'
                    }
                },

                itemStyle: {
                    normal: {
                        color: '#0387F6',
                        barBorderRadius: [0],

                    }

                },
            },
            {
                type: 'bar',
                name: '',
                data: [45],
                stack: 'income',
                barWidth: 25,
                label: {
                    normal: {
                        show: true,
                        position: 'left',
                        //TODO 
                        offset: [120, 0],
                        formatter: this.state.num_avg5,
                        color: '#FFFFFF',
                        fontSize: '18'
                    }
                },

                itemStyle: {
                    normal: {
                        color: '#23AD34',
                        barBorderRadius: [0],

                    }

                }
            }]
        };
    }
    waterDrop() {
        return {
            series: [{
                type: 'liquidFill',
                data: [{
                    value: this.state.percent,
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
        }
    }
    renderBar() {
        /*         var arr = ['p1_1g7su8g', 'p2_1d7qjer', 'p3_5p40pa', 'p4_1aw7va8', 'p5_1cb9exh', 'p5_1cb9exh', 'p5_1cb9exh']; */
        var arr = ['p2_1d7qjer', 'p3_5p40pa', 'p4_1aw7va8', 'p5_1cb9exh', 'p5_1cb9exh'];
        var index = 0;
        var timer = '';
        timer = setInterval(() => {
            $("#btn_right").click();
        }, 15000);
        $("#btn_left").click(function () {
            arr.push(arr[0]);
            arr.shift();
            $('#Cooldog_content li').each(function (i, e) {
                $(e).removeClass().addClass(arr[i]);
            })
            index++;
            if (index > 4) {
                this.index = 0;
            }

        });
        $("#btn_right").click(function () {
            arr.unshift(arr[4]);
            arr.pop();
            $('#Cooldog_content li').each(function (i, e) {
                $(e).removeClass().addClass(arr[i]);
            })
            index--;
            if (index < 0) {
                this.index = 4;
            }

        });
        this.readData();
    }

    //获取数据
    readData() {
        var _this = this;
        let url = this.url + "cstmdata/v1/inspection/time"
        axios.get(url)
            .then(function (response) {
                let data = response.data
                if (data.message == "成功") {
                    _this.assignment(data);
                }
            })
            .catch(function (error) {
            });
    }

    //获取返回值赋值
    assignment(data) {
        var data1 = {
            message: '成功',
            result: 0,
            rest: {
                count: 524,
                percent: 34
            },
            duration: {
                num_avg2: 90000,
                num_avg3: 200000,
                num_avg5: 104000
            },
            tasks: [{
                quarantine: '奶粉',
                vendor: '上海幼儿中心',
                inspectionItems: [{
                    name: '奶粉质量',
                    checkupResult: '1',
                    checkupInfo: '正常'
                }]
            },
            {
                quarantine: '香烟',
                vendor: '上海香烟制造厂',
                inspectionItems: [{
                    name: '尼古丁成分',
                    checkupResult: '2',
                    checkupInfo: '异常'
                }]
            },
            {
                quarantine: '幼儿器材',
                vendor: '上海幼儿中心',
                inspectionItems: [{
                    name: '安全性',
                    checkupResult: '2',
                    checkupInfo: '正常'
                }]
            },
            {
                quarantine: '可口可乐',
                vendor: '上海百事分部',
                inspectionItems: [{
                    name: '质量程度',
                    checkupResult: '2',
                    checkupInfo: '异常'
                }]
            },
            {
                quarantine: '糖及糖食',
                vendor: '上海甜甜实业',
                inspectionItems: [{
                    name: '化学剂量',
                    checkupResult: '2',
                    checkupInfo: '正常'
                }]
            },
            {
                quarantine: '油脂类产品',
                vendor: '上海油脂贸易公司',
                inspectionItems: [{
                    name: '含油量',
                    checkupResult: '2',
                    checkupInfo: '异常'
                }]
            }]
        }

        /* 检测剩余数量 */
        $("#liquidValueNumber").html(data1.rest.count);


        /* 检测时间 */
        var num_avg2;
        var num_avg3;
        var num_avg5;
        var TheSum = 0;
        if (data1.duration.num_avg2 == null) {
            num_avg2 = this.TimeConversion(0);
            TheSum += 0;
        } else {
            num_avg2 = this.TimeConversion(data1.duration.num_avg2);
            TheSum += data1.duration.num_avg2;
        }

        if (data1.duration.num_avg3 == null) {
            num_avg3 = this.TimeConversion(0);
            TheSum += 0;
        } else {
            num_avg3 = this.TimeConversion(data1.duration.num_avg3);
            TheSum += data1.duration.num_avg3;
        }

        if (data1.duration.num_avg5 == null) {
            num_avg5 = this.TimeConversion(0);
            TheSum += 0;
        } else {
            num_avg5 = this.TimeConversion(data1.duration.num_avg5);
            TheSum += data1.duration.num_avg5;
        }

        $("#TheSumChinese").html(this.TimeConversion(TheSum));

        /* 检测百分比数量 */
        this.setState({
            num_avg2: num_avg2,
            num_avg3: num_avg3,
            num_avg5: num_avg5,
            percent: data1.rest.percent / 100
        })

        //各产品检测时间轮播
        this.tasks(data1.tasks);


    }

    /* 毫秒转换为分钟 */
    TimeConversion(time) {
        var days = time / 1000 / 60 / 60 / 24;
        var daysRound = Math.floor(days);
        var hours = time / 1000 / 60 / 60 - (24 * daysRound);
        var hoursRound = Math.floor(hours);
        var minutes = time / 1000 / 60 - (24 * 60 * daysRound) - (60 * hoursRound);
        var minutesRound = Math.floor(minutes);
        var seconds = time / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);

        return minutesRound + "分" + seconds + "秒"

    }

    //轮播播放时
    tasks(tasksData) {
        for (let i = 0; i < tasksData.length; i++) {
            $("#CPXX" + i).html(tasksData[i].quarantine);
            $("#QYMC" + i).html(tasksData[i].vendor);
            $("#JCX" + i).html(tasksData[i].inspectionItems[0].name);
            $("#JCJG" + i).html(tasksData[i].inspectionItems[0].checkupInfo);
        }
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
                    <ReactEcharts className={css(styles.timeAxis)} option={this.timeAxis()} />
                    {/*                     <div className={css(styles.timeAxis)} id='timeAxis'></div> */}
                    <div className={css(styles.theSum1)} id="TheSumChinese">0分0秒</div>
                    <div className={css(styles.theSum)}></div>
                    <div className={css(styles.chuli1)}>快检受理</div>
                    <div className={css(styles.chuli2)}>取样完成</div>
                    <div className={css(styles.chuli3)}>检测开始</div>
                    <div className={css(styles.chuli4)}>检测完成</div>
                    <div className={css(styles.chuli5)}>鉴定完成</div>
                    <div className={css(styles.theSum2)}></div>

                </div>
                <div className={css(styles.quickInspectionRotaryBroadcasting)}>
                    <div className={css(styles.wheelPlanting)}>
                        <div className={css(styles.Cooldog_container)}>
                            <div className={css(styles.Cooldog_content)} id='Cooldog_content'>
                                <ul>
                                    {/*                                  <li className={css(styles.p1)}>
                                        <a href="#">
                                            <div className={css(styles.image)}>
                                                <div className={css(styles.imageData)}>
                                                    <div className={css(styles.imageContent)}>
                                                        <div>产品名称：<span className={css(styles.title)} id="CPXX0"></span></div>
                                                        <div>企业名称：<span className={css(styles.title)} id="QYMC0"></span></div>
                                                        <div>检测项：<span className={css(styles.title)} id="JCX0"></span></div>
                                                        <div>检测结果：<span className={css(styles.title)} id="JCJG0"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li> */}
                                    <li className={css(styles.p2)}>
                                        <a href="#">
                                            <div className={css(styles.image)}>
                                                <div className={css(styles.imageData)}>
                                                    <div className={css(styles.imageContent)}>
                                                        <div>产品名称：<span className={css(styles.title)} id="CPXX0"></span></div>
                                                        <div>企业名称：<span className={css(styles.title)} id="QYMC0"></span></div>
                                                        <div>检测项：<span className={css(styles.title)} id="JCX0"></span></div>
                                                        <div>检测结果：<span className={css(styles.title)} id="JCJG0"></span></div>
                                                    </div>

                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className={css(styles.p3)}>
                                        <a href="#">
                                            <div className={css(styles.image)}>
                                                <div className={css(styles.imageData)}>
                                                    <div className={css(styles.imageContent)}>
                                                        <div>产品名称：<span className={css(styles.title)} id="CPXX1"></span></div>
                                                        <div>企业名称：<span className={css(styles.title)} id="QYMC1"></span></div>
                                                        <div>检测项：<span className={css(styles.title)} id="JCX1"></span></div>
                                                        <div>检测结果：<span className={css(styles.title)} id="JCJG1"></span></div>
                                                    </div>

                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className={css(styles.p4)}>
                                        <a href="#">
                                            <div className={css(styles.image)}>
                                                <div className={css(styles.imageData)}>
                                                    <div className={css(styles.imageContent)}>
                                                        <div>产品名称：<span className={css(styles.title)} id="CPXX2"></span></div>
                                                        <div>企业名称：<span className={css(styles.title)} id="QYMC2"></span></div>
                                                        <div>检测项：<span className={css(styles.title)} id="JCX2"></span></div>
                                                        <div>检测结果：<span className={css(styles.title)} id="JCJG2"></span></div>
                                                    </div>

                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className={css(styles.p5)}>
                                        <a href="#">
                                            <div className={css(styles.image)}>
                                                <div className={css(styles.imageData)}>
                                                    <div className={css(styles.imageContent)}>
                                                        <div>产品名称：<span className={css(styles.title)} id="CPXX3"></span></div>
                                                        <div>企业名称：<span className={css(styles.title)} id="QYMC3"></span></div>
                                                        <div>检测项：<span className={css(styles.title)} id="JCX3"></span></div>
                                                        <div>检测结果：<span className={css(styles.title)} id="JCJG3"></span></div>
                                                    </div>

                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className={css(styles.p5)}>
                                        <a href="#">
                                            <div className={css(styles.image)}>
                                                <div className={css(styles.imageData)}>
                                                    <div className={css(styles.imageContent)}>
                                                        <div>产品名称：<span className={css(styles.title)} id="CPXX4"></span></div>
                                                        <div>企业名称：<span className={css(styles.title)} id="QYMC4"></span></div>
                                                        <div>检测项：<span className={css(styles.title)} id="JCX4"></span></div>
                                                        <div>检测结果：<span className={css(styles.title)} id="JCJG4"></span></div>
                                                    </div>

                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    {/*                                 <li className={css(styles.p5)}>
                                        <a href="#">
                                            <div className={css(styles.image)}>
                                                <div className={css(styles.imageData)}>
                                                    <div className={css(styles.imageContent)}>
                                                        <div>产品名称：<span className={css(styles.title)} id="CPXX6"></span></div>
                                                        <div>企业名称：<span className={css(styles.title)} id="QYMC6"></span></div>
                                                        <div>检测项：<span className={css(styles.title)} id="JCX6"></span></div>
                                                        <div>检测结果：<span className={css(styles.title)} id="JCJG6"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li> */}
                                </ul>
                            </div>
                            <a className={css(styles.btn_left)} id='btn_left'>
                            </a>
                            <a className={css(styles.btn_right)} id='btn_right'>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={css(styles.liquiDdiagram)}>
                    <div className={css(styles.liquidPicture)}>
                        <ReactEcharts className={css(styles.liquidDisplay)} option={this.waterDrop()} notMerge={true} lazyUpdate={true} />
                        {/*                         <div className={css(styles.liquidDisplay)} id='waterDrop'></div> */}
                        <div className={css(styles.liquidValue)}>
                            <div className={css(styles.liquidValueNumber)} id="liquidValueNumber"></div>
                            <div className={css(styles.liquidValueTitle)}>检测剩余数</div>
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
)(ProductInspection)

const styles = StyleSheet.create({
    title: {
        fontSize: '16px',
        color: '#00F3F4',
    },
    imageContent: {
        'line-height': '30px',
        'padding-left': '30px',
    },
    imageData: {
        width: '230px',
        height: '123px',
        padding: '10px 10px 10px 10px',
        color: '#FFFFFF',

    },
    btn_left: {
        'text-align': 'left',
        'left': '0',

        'width': '126px',
        'height': '90px',
        'position': 'absolute',
        top: '21px',
        'z-index': '50000',
        color: '#fff',
        'line-height': '179px',

    },
    btn_right: {
        'text-align': 'right',
        'right': '0',
        'width': '126px',
        'height': '90px',
        'position': 'absolute',
        top: '21px',
        'z-index': '50000',
        color: '#fff',
        'line-height': '179px',
    },
    image: {
        width: '100%',
        height: '100%',
        'vertical-align': 'middle',
        display: 'inline-block',
    },
    p1: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '250px',
        height: '145px ',
        transition: 'all 0.3s ease',
        transform: 'translate3d(-577px, 0, 0) scale(0.81)',
        opacity: '0.4',
        'z-index': '1',
        'list-style': 'none',
        background: `url('./image/LBT.png') no-repeat center`,

    },

    p2: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '250px',
        height: '145px',
        transition: 'all 0.3s ease',
        transform: 'translate3d(-325px, 0, 0) scale(0.81)',
        'transform-origin': '0 50%',
        opacity: '0.6',
        'z-index': '2',
        'list-style': 'none',
        background: `url('./image/LBT.png') no-repeat center`,
    },

    p3: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '250px',
        height: '145px',
        transition: 'all 0.3s ease',
        transform: 'translate3d(-125px, 0, 0) scale(0.81)',
        'transform-origin': '0 50%',
        'opacity': '0.8',
        'z-index': '3',
        'list-style': 'none',
        background: `url('./image/LBT.png') no-repeat center`,
    },

    p4: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '250px',
        height: '145px',
        transition: 'all 0.3s ease',
        transform: 'translate3d(0px, 0, 0) scale(1)',
        opacity: '1',
        'z-index': '4',
        'list-style': 'none',
        background: `url('./image/LBT.png') no-repeat center`,
    },

    p5: {
        position: 'absolute',
        top: 0,
        left: '-50px',
        width: '250px',
        height: '145px',
        transition: 'all 0.3s ease',
        transform: 'translate3d(220px, 0, 0) scale(0.81)',
        'transform-origin': '0 50%',
        'opacity': '0.8',
        'z-index': '3',
        'list-style': 'none',
        background: `url('./image/LBT.png') no-repeat center`,
    },

    Cooldog_content: {
        position: 'absolute',
        width: '250px',
        height: '130px',
        top: '0',
        left: '75%',
        'margin-left': '-249px',
    },
    Cooldog_container: {
        width: '500px',
        height: '200px',
        position: 'relative',
        overflow: 'hidden',

    },
    container: {
        width: '100%',
        height: '100%',
        position: 'relative',
        color: '#FFFFFF'
    },
    quickCheckContent: {
        width: '100%',
        height: '180px'
    },
    quickInspectionRotaryBroadcasting: {
        position: 'absolute',
        top: '180px',
        left: '0px',
        width: '57%',
        height: '200px',
    },
    liquiDdiagram: {
        position: 'absolute',
        top: '180px',
        left: '57%',
        width: '43%',
        height: '200px',

    },
    liquidPicture: {
        height: '160px',
        width: '350px',
        border: '1px solid #3C959E',
        borderRadius: '5px'
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
        height: '100px',
        padding: '40px'

    },
    chuli1: {
        position: 'absolute',
        top: '135px',
        left: '4%',
    },
    chuli2: {
        position: 'absolute',
        top: '135px',
        left: '28%',
    },
    chuli3: {
        position: 'absolute',
        top: '135px',
        left: '52%',
    },
    chuli4: {
        position: 'absolute',
        top: '135px',
        left: '75%',
    },
    chuli5: {
        position: 'absolute',
        top: '135px',
        left: '90%',
    },
    theSum: {
        position: 'absolute',
        top: '50px',
        width: '100%',
        height: '55px',
        background: `url('./image/theSum.png') center center no-repeat`,
        left: '10px'
    },
    theSum1: {
        position: 'absolute',
        top: '46px',
        left: '47%',
        fontSize: '20px',
        fontWeight: 'bold'
    },
    theSum2: {
        position: 'absolute',
        top: '86px',
        width: '100%',
        height: '55px',
        background: `url('./image/theSum2.png') center center no-repeat`,
        left: '12px',

    },
    wheelPlanting: {
        width: '480px',
        height: '200px',
        marginLeft: '25px',
        background: `url('./image/wheelPlanting.png') center center no-repeat`,
    }

})



