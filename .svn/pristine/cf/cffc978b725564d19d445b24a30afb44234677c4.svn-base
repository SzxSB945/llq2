import React from 'react';
import {StyleSheet,css} from 'aphrodite'
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
class SsdtData2 extends React.Component{
    getData(){
        try {
            let currentType = showbarConfig[this.props.barType]
            let barDataTotal = []
            let id = `${this.props.id != '' ? this.props.id : areaConfig(this.props.current,this.props.currentarea)}`
            let str = ''
            let url   = childIds(this.props.current,id)
            let data = '' //await getDetail(url)
            let arrLength = 1 //data.data.length
            this.renderBar(barDataTotal,str,getRange(barDataTotal),arrLength)
        } catch (error) {
            console.log('error')
            console.log(error)
        }
    }

    getOptions () {
        return {
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
                radius: ['40%', '55%'],
                avoidLabelOverlap: false,
                hoverAnimation: false,
                clickable: false,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        fontSize: '11'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '16.01'
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
                    name: '占快检总分比\n'+20+"%",
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

    componentDidMount(){
        //alert('componentDidMount')
         //this.getData()
    }
    componentDidUpdate(){
        //alert('componentDidUpdate')
         //this.getData()
    }
    render(){
        return(
            <div className={css(styles.container)}>
                <ReactEcharts className={css(styles.showDiv)} option={this.getOptions()} />
                <div className={css(styles.showDiv2)}>
                    <div className={css(styles.title)}>抽样完成总数</div>
                    <div className={css(styles.numdata)}>8702</div>
                </div>
                 <div className={css(styles.showDiv3)}>月同比 9% <img src="./image/up.png" /> </div>
                 <div className={css(styles.showDiv4)}>周同比 7% <img src="./image/down.png" /></div> 
            </div>
        )
    }
}

export default connect(
    state =>{
        return {
            current    : state.mediate,
            currentarea: state.currentAreaName,
            barType    : state.barType,
            barName    : state.barName,
            id         : state.basicId
        }
    }
)(SsdtData2)

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        position:'relative'
    },
    header:{
        width:'245px',
        height:'35px',
        lineHeight:'35px',
        fontSize:'17px',
        color:'#fff',
        textIndent:'1em',
        position:'absolute',
        top:0,
        left:0
    },
    tuli:{
        width:'95%',
        height:'45px',
        lineHeight:'45px',
        margin:'0 10px',
        padding:'0 40px',
        fontSize:'17px',
        color:'#090909',
        position:'absolute',
        top:'47px',
        left:0,
        borderBottom:'1px solid #16358c',
        boxSizing:'border-box'
    },
    tuliLi:{
        width:'50%',
        height:'45px',
        float:'left',
        textAlign:'center'
    },
    tuliSpan:{
        width:'18px',
        height:'18px',
        display:'inline-block',
        position:'relative',
        top:'3px',
        left:'-8px'
    },
    tubiao:{
/*         paddingTop:'43px',
        paddingLeft:'18px', */
        boxSizing:'border-box'
    },
     showDiv:{
         width:'60%',
         height:'200px',
         top: '-20px',
         float:'left',
         overflow:'hidden',
         overflowY:'hidden',
         //background:'red'
     },
     showDiv2:{
        width:'30%',
        height:'150px',
        float:'left',
     },
     showDiv3:{
        position:'absolute',
        bottom:'0',
        width:'50%',
        height:'45px',
        textAlign:'center',
        color:'#FFFFFF'

     },
     showDiv4:{
        position:'absolute',
        bottom:'0',
        width:'50%',
        height:'45px',
        left:'50%',
        textAlign:'left',
        color:'#FFFFFF'

     },
     title:{
     textAlign:'center',
     color:'#00ffff', 
     paddingTop:'70px'    

     },
     numdata:{
     textAlign:'center',
     color:'#FCD310',
     paddingTop:'10px',
     fontSize:'24px'

     }
})