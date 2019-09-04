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
import echarts from 'echarts/lib/echarts'
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
class SsdtData4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            QYSBS: true,
            DCYS: false,
            JCZS: false,
            JCWCS: false
        }
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


    /* 企业申报数 */
    QYSBS() {
        var QYSBS = document.getElementById('QYSBS').innerHTML;
        this.setState({
            QYSBS: true,
            DCYS: false,
            JCZS: false,
            JCWCS: false
        })
    }
    /* 待抽样数 */
    DCYS() {
        var DCYS = document.getElementById('DCYS').innerHTML;
        this.setState({
            QYSBS: false,
            DCYS: true,
            JCZS: false,
            JCWCS: false
        })
    }
    /* 检测中数 */
    JCZS() {
        var JCZS = document.getElementById('JCZS').innerHTML;
        this.setState({
            QYSBS: false,
            DCYS: false,
            JCZS: true,
            JCWCS: false
        })
    }
    /* 检测完成数 */
    JCWCS() {
        var JCWCS = document.getElementById('JCWCS').innerHTML;
        this.setState({
            QYSBS: false,
            DCYS: false,
            JCZS: false,
            JCWCS: true
        })
    }

    /**
     * barDataTotal 柱状图的数据
     * format  label所呈现的数据
     * max     x轴的最大值
     * length  调节数据在整个框中的位置
     */

    readData() {
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
        this.getData()
    }
    render() {
        return (
            <div className={css(styles.container)}>
                <div className={css(styles.switch)}>
                    <div className={css(styles.switch1)} id="QYSBS" onClick={this.QYSBS.bind(this)} style={{
                        background: `${this.state.QYSBS ? 'url(./image/SSDTSwitch.png) no-repeat center' : 'url(./image/SSDTSwitchWX.png) no-repeat center'}`
                    }}>企业申报数</div>
                    <div className={css(styles.switch2)} id="DCYS" onClick={this.DCYS.bind(this)} style={{
                        background: `${this.state.DCYS ? 'url(./image/SSDTSwitch.png) no-repeat center' : 'url(./image/SSDTSwitchWX.png) no-repeat center'}`
                    }}>待抽样数</div>
                    <div className={css(styles.switch3)} id="JCZS" onClick={this.JCZS.bind(this)} style={{
                        background: `${this.state.JCZS ? 'url(./image/SSDTSwitch.png) no-repeat center' : 'url(./image/SSDTSwitchWX.png) no-repeat center'}`
                    }}>检测中数</div>
                    <div className={css(styles.switch4)} id="JCWCS" onClick={this.JCWCS.bind(this)} style={{
                        background: `${this.state.JCWCS ? 'url(./image/SSDTSwitch.png) no-repeat center' : 'url(./image/SSDTSwitchWX.png) no-repeat center'}`
                    }}>检测完成数</div>
                </div>
                <div style={{
                    display: `${this.state.QYSBS ? 'block' : 'none'}`
                }}>
                    <div className={css(styles.number)} id="vendor">5,508</div>
                    <div className={css(styles.showDiv3)}>月同比 <span>23%</span> <img src="./image/up.png" /> </div>
                    <div className={css(styles.showDiv4)}>周同比 <span>44%</span> <img src="./image/down.png" /></div>
                </div>
                <div style={{
                    display: `${this.state.DCYS ? 'block' : 'none'}`
                }}>
                    <div className={css(styles.number)} id="accept">5,123</div>
                    <div className={css(styles.showDiv3)}>月同比 <span>23%</span> <img src="./image/up.png" /> </div>
                    <div className={css(styles.showDiv4)}>周同比 <span>44%</span> <img src="./image/down.png" /></div>
                </div>
                <div style={{
                    display: `${this.state.JCZS ? 'block' : 'none'}`
                }}>
                    <div className={css(styles.number)} id="inspecting">5,333</div>
                    <div className={css(styles.showDiv3)}>月同比 <span>23%</span> <img src="./image/up.png" /> </div>
                    <div className={css(styles.showDiv4)}>周同比 <span>44%</span> <img src="./image/down.png" /></div>
                </div>
                <div style={{
                    display: `${this.state.JCWCS ? 'block' : 'none'}`
                }}>
                    <div className={css(styles.number)} id="inspected">5,444</div>
                    <div className={css(styles.showDiv3)}>月同比 <span>23%</span> <img src="./image/up.png" /> </div>
                    <div className={css(styles.showDiv4)}>周同比 <span>44%</span> <img src="./image/down.png" /></div>
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
)(SsdtData4)

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
    }
})