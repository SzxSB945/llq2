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
class KjqsfxData4 extends React.Component {
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


    kjqsfxData4Brokenline(){
        return{
            xAxis: {
                type: 'category',
                data: ['9.03', '9.04', '9.05', '9.06', '9.07', '9.08'],
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
                color: ['#998CE9'],
                data: [82, 98, 90, 80, 98, 88],
                type: 'line',
                symbolSize: 9,

            }]

        };
    }
    kjqsfxData4Cake(){
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
                    value: 10,
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
                    value: 90,
                    name: '' + 90 + "%",
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
                    <div className={css(styles.title)}>口岸合格率</div>
                    <div className={css(styles.title2)}>
                        <select className={css(styles.select2)}>
                            <option value="大兴机场">大兴机场</option>
                        </select>
                    </div>
                    <div className={css(styles.title1)}>
                        <select className={css(styles.select1)}>
                            <option value="近七天">近七天</option>
                            <option value="近半年">近半年</option>
                        </select>
                    </div>
                </div>
                <ReactEcharts className={css(styles.leftBrokenLine)} option={this.kjqsfxData4Brokenline()} />
{/*                 <div className={css(styles.leftBrokenLine)} id='kjqsfxData4Brokenline'></div> */}
                <ReactEcharts className={css(styles.rightCake)} option={this.kjqsfxData4Cake()} />
{/*                 <div className={css(styles.rightCake)} id='kjqsfxData4Cake'></div> */}
                <div className={css(styles.rightContent)}>
                    <div className={css(styles.zsTitle)}>合格总数</div>
                    <div className={css(styles.numdata)}>187,037</div>
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
)(KjqsfxData4)

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