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
class KjqsfxData1 extends React.Component {
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

    kjqsfxData1Brokenline(){
        return{
            xAxis: {
                type: 'category',
                data: ['一月', '二月', '三月', '四月', '五月', '六月'],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#FFFFFF'
                    }
                }
            },
            grid: {
                x: 65,
                y: 13,
                x2: 5,
                y2: 20
            },
            yAxis: {

                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: '#FFFFFF'
                    },
                    show: true,
                    interval: 'auto',
                    formatter: '{value} %'
                }, axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },

            },
            series: [{
                color: ['#F5DE08'],
                data: [100, 80, 20, 40, 60, 50],
                type: 'line',
                symbolSize: 9,
                symbol: 'circle',

            }]
        };
    }

    kjqsfxData1Cake(){
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
                radius: ['50%', '80%'],
                center: ['50%', '50%'],
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
                    value: 15,
                    name: '',
                    itemStyle: {
                        normal: {
                            color: '#0A3848'
                        },
                        emphasis: {
                            color: '#0A3848'
                        }
                    }
                },
                {
                    value: 85,
                    name: '' + 85 + "%",
                    itemStyle: {
                        normal: {
                            color: '#00ffff'
                        },
                        emphasis: {
                            color: '#00ffff'
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
                <div className={css(styles.upPart)}>
                    <div className={css(styles.title)}>所有申报内容合格率</div>
                    <div className={css(styles.title2)}>
                        <select className={css(styles.select2)}>
                            <option value="全部类别">全部类别</option>
                        </select>
                    </div>
                    <div className={css(styles.title1)}>
                        <select className={css(styles.select1)}>
                           <option value="近半年">近半年</option>
                           <option value="近七天">近七天</option>

                        </select>
                    </div>
                </div>
                <ReactEcharts className={css(styles.leftBrokenLine)} option={this.kjqsfxData1Brokenline()} />
{/*                 <div className={css(styles.leftBrokenLine)} id='kjqsfxData1Brokenline'>
                </div> */}
                <ReactEcharts className={css(styles.rightCake)} option={this.kjqsfxData1Cake()} />
{/*                 <div className={css(styles.rightCake)} id='kjqsfxData1Cake'></div> */}
                <div className={css(styles.rightContent)}>
                    <div className={css(styles.zsTitle)}>合格总数</div>
                    <div className={css(styles.numdata)}>2,387,636</div>
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
)(KjqsfxData1)

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'relative'
    },
    title: {
        padding: '15px 15px 0px  25px',
        float: 'left',
        color: '#FFFFFF',
        fontSize: '14px'
    },
    title1: {
        padding: '15px 15px  0px  0px',
        float: 'right',
        color: '#FFFFFF',
        fontSize: '14px'
    },
    title2: {
        padding: '15px 15px  0px  0px',
        float: 'right',
        color: '#FFFFFF',
        fontSize: '14px'
    },
    select1: {
        backgroundColor: '#0A3849',
        color: '#FFFFFF',
        '-webkitBorderRadius': '4px',
        width: '75px',
        border: '1px solid #1A7486',
        height: '22px'
    },
    select2: {
        backgroundColor: '#0A3849',
        color: '#FFFFFF',
        '-webkitBorderRadius': '4px',
        width: '80px',
        border: '1px solid #1A7486',
        height: '22px'
    },
    upPart: {
        height: '40px'
    },
    leftBrokenLine: {
        position: 'absolute',
        top: '40px',
        width: '70%',
        height: '172px',
    },
    rightCake: {
        position: 'absolute',
        top: '40px',
        left: '70%',
        width: '30%',
        height: '100px',
    },
    rightContent: {
        position: 'absolute',
        top: '140px',
        left: '70%',
        width: '30%',
        height: '70px',

    },
    zsTitle: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: '18px',

    },
    numdata: {
        color: '#F5DE08',
        fontSize: '16px',
        textAlign: 'center',
    },
})