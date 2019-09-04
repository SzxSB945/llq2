import React from 'react';
import {StyleSheet,css} from 'aphrodite'
import { connect } from 'react-redux'
import barConfig3 from './deploy7.config'
import { childIds } from '../data/api'
import { getDetail } from '../data/http'
import areaConfig from '../data/area.config'
import showbarConfig from './barconfig'

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'

const getRange = arr => {
    let M = []
    arr.map(item => {
        M.push(item.total)
    })
    M.sort((a, b) => (a - b))
    return (M[M.length - 1])
}
class ShowBar8 extends React.Component{
    async getData(){
        try {
            let currentType = showbarConfig[this.props.barType]
            let barDataTotal = []
            let id = `${this.props.id != '' ? this.props.id : areaConfig(this.props.current,this.props.currentarea)}`
            let str = ''
            let url   = childIds(this.props.current,id)
            let data = ''//await getDetail(url)
            let arrLength = 1//data.data.length
            // let data = await getDetail(url)
            // let arrLength = data.data.length
            // if (this.props.barType == '高风险案件比例' || (this.props.barType == '高风险案件关注率') || (this.props.barType == '高风险案件反馈率') || (this.props.barType == '突发事件日平均数') || (this.props.barType == '突然事件处置率') || (this.props.barType == '突发事件反馈率')) {
            //     data.data.map(item => {
            //         let mmm = item.analysis.filter(item=>(item.name == this.props.barType))
            //         barDataTotal.push({
            //             name : item.area,
            //             value1: mmm[0].value,
            //             value2: 0,
            //             total : mmm[0].value
            //         })
            //     })
            //     str = '{c}'+'%'
            // }else if (this.props.barType == 'highRiskStats_caseTodayTotalCount' || (this.props.barType == 'highRiskStats_caseTodayInProcessCount') || (this.props.barType == 'highRiskStats_caseTotalCount') || (this.props.barType == 'highRiskStats_caseInProcessCount')) {
            //     data.data.map(item => {
            //         barDataTotal.push({
            //             name  : item.area,
            //             value1: item.highRiskStats[currentType[1].split('_')[1]],
            //             value2: item.highRiskStats[currentType[0].split('_')[1]] - item.highRiskStats[currentType[0].split('_')[1]],
            //             total : item.highRiskStats[currentType[0].split('_')[1]]
            //         })
            //     })
            //     str = '{c}'
            // }else{
            //     data.data.map((item, index) => {
            //         barDataTotal.push({
            //             name : item.area,
            //             value1: item[currentType[1]],
            //             value2: item[currentType[0]] - item[currentType[1]],
            //             total : item[currentType[0]]
            //         })
            //     })
            //     str = '{c}'
            // }
            this.renderBar(barDataTotal,str,getRange(barDataTotal),arrLength)
        } catch (error) {
            console.log('error')
            console.log(error)
        }
    }

    /**
     * barDataTotal 柱状图的数据
     * format  label所呈现的数据
     * max     x轴的最大值
     * length  调节数据在整个框中的位置
     */

    renderBar(barDataTotal,format,max,length){
        //console.log("数据："+max);
        max = -0.02;
        let Bar = echarts.init(document.getElementById('bar8'));
        let yData_deploy = []
        let barData  = []
        let barDatatwo = []
        // barDataTotal.sort(function(o1, o2) {
        //     if (isNaN(o1.total) || o1.total == null) return -1
        //     if (isNaN(o2.total) || o2.total == null) return 1
        //     return o1.total - o2.total
        // })

        // for (var i = 0 ;i < barDataTotal.length ;i++) {
        //     yData_deploy.push(barDataTotal[i].name)
        // }
        // barDataTotal.map((item, index) => {
        //     barData.push({
        //         name : item.name,
        //         value: item.value1
        //     })
        //     barDatatwo.push({
        //         name : item.name,
        //         value: item.value2
        //     })
        // })
        
        if(length <= 5){
            barConfig3.grid.bottom = '60%';
            barConfig3.series[0].barWidth = 20
        }else if(length > 25){
            barConfig3.grid.bottom = 5;
            barConfig3.series[0].barWidth = 10
        }else{
            barConfig3.grid.bottom = 20;
            barConfig3.series[0].barWidth = 20
        }
        barConfig3.grid.bottom = 15;
        barConfig3.series[0].barWidth = 15
        console.log(barData);
        console.log(yData_deploy);
        //modify by liulinqing 2019-05-07 柱形图数据先固定
        barData = [{name:"午阳",value:-0.006,itemStyle:{
            normal:{color:'#40A9ED'}
        }},{name:"长图",value:-0.011,itemStyle:{
            normal:{color:'#40A9ED'}
        }},{name:"常胜）",value:-0.013,itemStyle:{
            normal:{color:'#40A9ED'}
        }},{name:"东升",value:-0.014,itemStyle:{
            normal:{color:'#40A9ED'}
        }},{name:"一零六）",value:-0.016,itemStyle:{
            normal:{color:'#40A9ED'}
        }}]
        barDatatwo = [{name:"机场货管",value:80},{name:"京监管处",value:75},{name:"京关展览",value:70},{name:"京关保税",value:65},{name:"京涉外处",value:59}]
        yData_deploy = ["午阳","长图","常胜","东升","一零六"]
        barConfig3.series[0].data = barData
        //barConfig3.series[1].data = barDatatwo
        

        barConfig3.series[0].label.normal.formatter = function (params) {
            return -(params.value*100).toFixed(1)+'%'; //.toFixed(2)
        };
        //format
        barConfig3.yAxis.data = yData_deploy
        barConfig3.yAxis.position = "right"
        
        barConfig3.xAxis.max  = max
        barConfig3.xAxis.min = 0
        Bar.clear()
        Bar.setOption(barConfig3)
    }
    componentDidMount(){
        this.getData()
    }
    componentDidUpdate(){
        this.getData()
    }
    render(){
        let spanArr = []
        if (this.props.barType == 'treatTodayCount' || (this.props.barType == 'caseTodayCount') || (this.props.barType == 'treatTotalCount') || (this.props.barType == 'emergencyTotalCount') || (this.props.barType == 'caseTotalCount')) {
            spanArr.push(
                <div className={css(styles.tuli)} key={1}>
                    <div className={css(styles.tuliLi)}><span className={css(styles.tuliSpan)} style={{ background:'#40a9ed'}}></span>已处理</div>
                    <div className={css(styles.tuliLi)}><span className={css(styles.tuliSpan)} style={{ background:'rgba(64,169,237,0.5)'}}></span>未处理</div>
                </div>
            )
        }else{
            spanArr.push(
                <div className={css(styles.tuli)} key={2}>
                    <div className={css(styles.tuliLi)}><span className={css(styles.tuliSpan)} style={{ background:'#40a9ed'}}></span>在线</div>
                    <div className={css(styles.tuliLi)}><span className={css(styles.tuliSpan)} style={{ background:'rgba(64,169,237,0.5)'}}></span>离线</div>
                </div>
            )
        }
        return(
            <div className={css(styles.container)}>
                <div className={css(styles.header)} style={{backgroundColor:'#ffcc29',border:'1px solid #b49f5d'}}>{/*{this.props.barName}*/}企业不合格率排行</div>
                {/*{spanArr}*/}
                <div className={css(styles.showDiv)}>
                    <div className={css(styles.tubiao)} id='bar8' style={{width:'298px',height:'200px'}}></div>
                </div>
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
)(ShowBar8)

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        position:'relative'
    },
    header:{
        width:'146px',
        height:'25px',
        lineHeight:'25px',
        fontSize:'15px',
        color:'#090909',
        textIndent:'1em',
        position:'absolute',
        top:10,
        right:0
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
        paddingTop:'12px',
        boxSizing:'border-box'
    },
    showDiv:{
        width:'248px',
        height:'200px',
        float:'right',
        overflow:'hidden',
        overflowY:'hidden',
        //background:'red'
    }
})