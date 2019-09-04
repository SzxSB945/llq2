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
import wordcloud from 'echarts/lib/echarts-wordcloud.js'
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
class ssdtData1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            KJZS: true,
            LBS: false,
            data: []
        }
        this.url = global.constants.url;
    }
    getData() {
        try {
            let currentType = showbarConfig[this.props.barType]
            let barDataTotal = []
            let id = `${this.props.id != '' ? this.props.id : areaConfig(this.props.current, this.props.currentarea)}`
            let str = ''
            let url = childIds(this.props.current, id)
            let data = '' //await getDetail(url)
            let arrLength = 1
            this.readData();
        } catch (error) {
            console.log('error')
            console.log(error)
        }
    }


    /* 快检总数 */
    KJZS() {
        var KJZS = document.getElementById('KJZS').innerHTML;
        this.setState({
            KJZS: true,
            LBS: false,
        })
    }
    /* 待抽样数 */
    LBS() {
        var LBS = document.getElementById('LBS').innerHTML;
        this.setState({
            KJZS: false,
            LBS: true,
        })
    }


    getOptions() {
        return {
            tooltip: {
                show: true
            },
            series: [{
                type: 'wordCloud',
                size: ['80%', '80%'],
                sizeRange: [15, 20],
                rotationRange: [0, 0],
                textPadding: 0,
                autoSize: {
                    enable: true,
                    minSize: 12
                },
                textStyle: {
                    normal: {
                        color: function () {
                            return 'rgb(' + [
                                Math.round(Math.random() * 460),
                                Math.round(Math.random() * 260),
                                Math.round(Math.random() * 360)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: this.state.data
            }]
        };
    }

    readData() {
        var _this = this;
        let url = this.url + "cstmdata/v1/category/count"
        axios.post(url)
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
        var dataArray = [];
        var data1 = {
            message: '成功',
            result: 0,
            list: [{
                name: "品类2",
                count: 1200
            },
            {
                name: "油脂类产品",
                count: 855,
            },
            {
                name: "活动物",
                count: 455
            },
            {
                name: "糖及糖食",
                count: 980
            },
            {
                name: "杂项食品",
                count: 250
            },
            {
                name: "编制用植物材料",
                count: 1898
            },
            {
                name: "食品工业的残渣以肥料",
                count: 1484
            },
            {
                name: "肉及使用杂碎",
                count: 1112
            },
            {
                name: "食用蔬菜",
                count: 965
            },
            {
                name: "咖啡，茶及调味香料",
                count: 847
            }]
        }
        for (let i = 0; i < data1.list.length; i++) {
            var list = {
                name: data1.list[i].name,
                value: data1.list[i].count
            }
            dataArray.push(list);
        }
        this.setState({
            data: dataArray
        })
        this.processingData();
    }

    //获取总数以及浮动值
    processingData() {
        var _this = this;
        let url = this.url + "cstmdata/v1/task/data"
        axios.post(url, { period: 'today' })
            .then(function (response) {
                let data = response.data
                if (data.message == "成功") {
                    _this.readValue(data);
                }
            })
            .catch(function (error) {
            });
    }

    //读取获取到的值
    readValue(data) {
        var data1 = {
            message: '成功',
            result: 0,
            total: 2,
            accept: [{
                current: 0,
                month: {
                    increment: "add",
                    percent: -1
                },
                week: {
                    increment: "add",
                    percent: -1
                }
            }],
            sample: [{
                current: 2,
                month: {
                    increment: "add",
                    percent: -1
                },
                week: {
                    increment: "add",
                    percent: -1
                }
            }],
            inspecting: [{
                current: 0,
                month: {
                    increment: "add",
                    percent: -1
                },
                week: {
                    increment: "add",
                    percent: -1
                }
            }],
            inspected: [{
                current: 2,
                month: {
                    increment: "add",
                    percent: -1
                },
                week: {
                    increment: "add",
                    percent: -1
                }
            }],
            qualified: [{
                current: 1,
                month: {
                    increment: "add",
                    percent: -1
                },
                week: {
                    increment: "add",
                    percent: -1
                }
            }],
            vendor: [{
                current: 1,
                month: {
                    increment: "add",
                    percent: -1
                },
                week: {
                    increment: "add",
                    percent: -1
                }
            }]
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
                <div className={css(styles.switch)}>
                    <div className={css(styles.switch1)} id="KJZS" onClick={this.KJZS.bind(this)} style={{
                        background: `${this.state.KJZS ? 'url(./image/SSDTSwitch.png) no-repeat center' : 'url(./image/SSDTSwitchWX.png) no-repeat center'}`
                    }}>快检总数</div>
                    <div className={css(styles.switch2)} id="LBS" onClick={this.LBS.bind(this)} style={{
                        background: `${this.state.LBS ? 'url(./image/SSDTSwitch.png) no-repeat center' : 'url(./image/SSDTSwitchWX.png) no-repeat center'}`
                    }}>类别数</div>
                </div>
                <div style={{
                    display: `${this.state.KJZS ? 'block' : 'none'}`
                }}>
                    <div className={css(styles.number)}>5,508</div>
                    <div className={css(styles.showDiv3)}>月同比 8% <img src="./image/up.png" /> </div>
                    <div className={css(styles.showDiv4)}>周同比 1% <img src="./image/down.png" /></div>
                </div>
                <div style={{
                    display: `${this.state.LBS ? 'block' : 'none'}`
                }}>

                    {/*                     <div className={css(styles.LBS)}  id='ssdtData1'></div> */}
                    <ReactEcharts className={css(styles.LBS)} option={this.getOptions()} lazyUpdate={(this.getOptions(), false)} />
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
)(ssdtData1)

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'relative'
    },
    header: {
        width: '245px',
        height: '35px',
        lineHeight: '35px',
        fontSize: '17px',
        color: '#fff',
        textIndent: '1em',
        position: 'absolute',
        top: 0,
        left: 0
    },
    tuli: {
        width: '95%',
        height: '45px',
        lineHeight: '45px',
        margin: '0 10px',
        padding: '0 40px',
        fontSize: '17px',
        color: '#090909',
        position: 'absolute',
        top: '47px',
        left: 0,
        borderBottom: '1px solid #16358c',
        boxSizing: 'border-box'
    },
    tuliLi: {
        width: '50%',
        height: '45px',
        float: 'left',
        textAlign: 'center'
    },
    tuliSpan: {
        width: '18px',
        height: '18px',
        display: 'inline-block',
        position: 'relative',
        top: '3px',
        left: '-8px'
    },
    tubiao: {
        paddingTop: '43px',
        paddingLeft: '18px',
        boxSizing: 'border-box'
    },
    switch: {
        width: '100%',
        height: '40px',
        padding: '20px 0px 0px 20px'
    },
    showDiv3: {
        position: 'absolute',
        bottom: '0',
        width: '50%',
        height: '45px',
        textAlign: 'center',
        color: '#FFFFFF'

    },
    showDiv4: {
        position: 'absolute',
        bottom: '0',
        width: '50%',
        height: '45px',
        left: '50%',
        textAlign: 'left',
        color: '#FFFFFF'

    },
    title: {
        textAlign: 'center',
        color: '#00ffff',
        paddingTop: '70px'

    },
    numdata: {
        textAlign: 'center',
        color: '#FCD310',
        paddingTop: '10px',
        fontSize: '24px'

    },
    number: {
        position: 'absolute',
        width: '100%',
        top: '40%',
        paddingLeft: '26px',
        color: '#FCD310',
        fontSize: '30px',
        fontWeight: 'bold'


    },
    switch1: {
        float: 'left',
        width: '80px',
        height: '40px',
        lineHeight: '40px',
        textAlign: 'center',
        /*         background:`url('./image/SSDTSwitch.png') no-repeat center`, */
        backgroundSize: '113% 100%',
        color: '#fff',
        fontSize: '12px',
        fontWeight: 400,
        cursor: 'pointer',
    },
    switch2: {
        float: 'left',
        width: '80px',
        height: '40px',
        lineHeight: '40px',
        textAlign: 'center',
        /*         background:`url('./image/SSDTSwitchWX.png') no-repeat center`, */
        backgroundSize: '113% 100%',
        color: '#fff',
        fontSize: '12px',
        fontWeight: 400,
        cursor: 'pointer',
    },
    switch3: {
        float: 'left',
        width: '80px',
        height: '40px',
        lineHeight: '40px',
        textAlign: 'center',
        /*         background:`url('./image/SSDTSwitchWX.png') no-repeat center`, */
        backgroundSize: '113% 100%',
        color: '#fff',
        fontSize: '12px',
        fontWeight: 400,
        cursor: 'pointer',
    },
    switch4: {
        float: 'left',
        width: '80px',
        height: '40px',
        lineHeight: '40px',
        textAlign: 'center',
        /*         background:`url('./image/SSDTSwitchWX.png') no-repeat center`, */
        backgroundSize: '113% 100%',
        color: '#fff',
        fontSize: '12px',
        fontWeight: 400,
        cursor: 'pointer',
    },
    LBS: {
        position: 'absolute',
        height: '135px',
        width: '440px',
        top: '56px',
    }
})