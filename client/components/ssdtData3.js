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

const getRange = arr => {
    let M = []
    arr.map(item => {
        M.push(item.total)
    })
    M.sort((a, b) => (a - b))
    return (M[M.length - 1])
}
class SsdtData3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            JRRWS: true,
            JYWCQK: false,
            JYHGQK: false
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
            this.renderBar(str, getRange(barDataTotal))
            this.renderBarHGL(str, getRange(barDataTotal))
        } catch (error) {
            console.log('error')
            console.log(error)
        }
    }


    /* 今日任务数 */
    JRRWS() {
        var JRRWS = document.getElementById('JRRWS').innerHTML;
        this.setState({
            JRRWS: true,
            JYWCQK: false,
            JYHGQK: false
        })
    }
    /* 检验完成情况 */
    JYWCQK() {
        var JYWCQK = document.getElementById('JYWCQK').innerHTML;
        this.setState({
            JRRWS: false,
            JYWCQK: true,
            JYHGQK: false
        })
    }
    /* 检验合格情况 */
    JYHGQK() {
        var JYHGQK = document.getElementById('JYHGQK').innerHTML;
        this.setState({
            JRRWS: false,
            JYWCQK: false,
            JYHGQK: true
        })
    }

    ssdtData3(){
        return{
            tooltip: {
                trigger: 'item',
                formatter: '{d}%',
                position: "right"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                selectedMode: false,
                data: ['', '']
            },
            series: [{
                name: '',
                type: 'pie',
                radius: ['55%', '75%'],
                center: ['60%', '40%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,
                clickable: false,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        fontSize: '16'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '18.01'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    value: 20,
                    name: '完成率\n' + 20 + "%",
                    itemStyle: {
                        normal: {
                            color: '#00ffff'
                        },
                        emphasis: {
                            color: '#00ffff'
                        }
                    }
                },
                {
                    value: 80,
                    name: '',
                    itemStyle: {
                        normal: {
                            color: '#0A3848'
                        },
                        emphasis: {
                            color: '#0A3848'
                        }
                    }
                }]
            }]
        };
    }

    ssdtData3HGL(){
        return{
            tooltip: {
                trigger: 'item',
                formatter: '{d}%',
                position: "right"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                selectedMode: false,
                data: ['', '']
            },
            series: [{
                name: '',
                type: 'pie',
                radius: ['55%', '75%'],
                center: ['60%', '40%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,
                clickable: false,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        fontSize: '16'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '18.01'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    value: 42,
                    name: '合格率\n' + 42 + "%",
                    itemStyle: {
                        normal: {
                            color: '#00ffff'
                        },
                        emphasis: {
                            color: '#00ffff'
                        }
                    }
                },
                {
                    value: 58,
                    name: '',
                    itemStyle: {
                        normal: {
                            color: '#0A3848'
                        },
                        emphasis: {
                            color: '#0A3848'
                        }
                    }
                }]
            }]

        };
    }
    componentDidMount() {
        //this.getData()
    }
    componentDidUpdate() {
        //this.getData()
    }
    render() {
        return (
            <div className={css(styles.container)}>
                <div className={css(styles.switch)}>
                    <div className={css(styles.switch1)} id="JRRWS" onClick={this.JRRWS.bind(this)} style={{
                        background: `${this.state.JRRWS ? 'url(./image/SSDTSwitch.png) no-repeat center' : 'url(./image/SSDTSwitchWX.png) no-repeat center'}`
                    }}>今日任务数</div>
                    <div className={css(styles.switch2)} id="JYWCQK" onClick={this.JYWCQK.bind(this)} style={{
                        background: `${this.state.JYWCQK ? 'url(./image/SSDTSwitch.png) no-repeat center' : 'url(./image/SSDTSwitchWX.png) no-repeat center'}`
                    }}>检验完成情况</div>
                    <div className={css(styles.switch3)} id="JYHGQK" onClick={this.JYHGQK.bind(this)} style={{
                        background: `${this.state.JYHGQK ? 'url(./image/SSDTSwitch.png) no-repeat center' : 'url(./image/SSDTSwitchWX.png) no-repeat center'}`
                    }}>检验合格情况</div>
                </div>
                <div style={{
                    display: `${this.state.JRRWS ? 'block' : 'none'}`
                }}>
                    <div className={css(styles.number)}>5,508</div>
                    <div className={css(styles.showDiv3)}>月同比 23% <img src="./image/up.png" /> </div>
                    <div className={css(styles.showDiv4)}>周同比 44% <img src="./image/down.png" /></div>
                </div>
                <div style={{
                    display: `${this.state.JYWCQK ? 'block' : 'none'}`
                }}>
                    <div className={css(styles.container)}>
                    <ReactEcharts className={css(styles.showDiv)} option={this.ssdtData3()} />
{/*                         <div className={css(styles.showDiv)} id='ssdtData3'></div> */}
                        <div className={css(styles.showDiv2)}>
                            <div className={css(styles.title)}>抽样完成总数</div>
                            <div className={css(styles.numdata)}>900</div>
                        </div>
                    </div>
                    <div className={css(styles.showDiv3)}>月同比 9% <img src="./image/up.png" /> </div>
                    <div className={css(styles.showDiv4)}>周同比 7% <img src="./image/down.png" /></div>
                </div>
                <div style={{
                    display: `${this.state.JYHGQK ? 'block' : 'none'}`
                }}>
                    <div className={css(styles.container)}>
                    <ReactEcharts className={css(styles.showDiv)} option={this.ssdtData3HGL()} />
{/*                         <div className={css(styles.showDiv)} id='ssdtData3HGL'></div> */}
                        <div className={css(styles.showDiv2)}>
                            <div className={css(styles.title)}>抽样合格总数</div>
                            <div className={css(styles.numdata)}>800</div>
                        </div>
                    </div>
                    <div className={css(styles.showDiv3)}>月同比 9% <img src="./image/up.png" /> </div>
                    <div className={css(styles.showDiv4)}>周同比 7% <img src="./image/down.png" /></div>
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
)(SsdtData3)

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
    showDiv: {
        width: '250px',
        height: '120px',
        float: 'left',
        overflow: 'hidden',
        overflowY: 'hidden',
    },
    showDiv2: {
        width: '170px',
        float: 'left',
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
        color: '#00ffff',
        paddingTop: '10px'

    },
    numdata: {
        color: '#FCD310',
        fontSize: '30px',
        marginLeft: '20px'

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
    JYWCQK: {
        position: 'absolute',
        width: '240px',
        height: '100px',
        top: '26%',
        fontWeight: 'bold'

    },
    JYHGQK: {
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