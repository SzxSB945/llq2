import React from 'react';
import {StyleSheet,css} from 'aphrodite'
import { connect } from 'react-redux'
import barConfig from './deploy.config'
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
class ShowBar2 extends React.Component{
    async getData(){
        try {
            let currentType = showbarConfig[this.props.barType]
            let barDataTotal = []
            let id = `${this.props.id != '' ? this.props.id : areaConfig(this.props.current,this.props.currentarea)}`
            let str = ''
            let url   = childIds(this.props.current,id)
            let data = '' //await getDetail(url)
            let arrLength = 1 //data.data.length
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
            str = '{c}'
            this.renderBar(barDataTotal,str,100,arrLength) //getRange(barDataTotal)
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
        max = 246;
        let Bar = echarts.init(document.getElementById('bar2'));
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
            barConfig.grid.bottom = '60%';
            barConfig.series[0].barWidth = 20
        }else if(length > 25){
            barConfig.grid.bottom = 5;
            barConfig.series[0].barWidth = 10
        }else{
            barConfig.grid.bottom = 20;
            barConfig.series[0].barWidth = 20
        }
        barConfig.grid.bottom = 15;
        barConfig.series[0].barWidth = 15
        //console.log(barData);
        //console.log(yData_deploy);
        //modify by liulinqing 2019-05-07 柱形图数据先固定
        //机场货管231、京监管处151、京关展览246、天竺海关132、京涉外处98、京关关税105、机场库区132、
        //机场旅检121、平谷海关156、京五里店132、京邮办处112、京中关村125、京国际局165、
        //京东郊站145、机场货二133、京开发区94、十八里店92、旅检征税117
        barData = [{name:"十八里店",value:92,itemStyle:{
            normal:{color:'#40A9ED'}
        }},{name:"京开发区",value:94,itemStyle:{
            normal:{color:'#40A9ED'}
        }},{name:"京涉外处",value:98,itemStyle:{
            normal:{color:'#40A9ED'}
        }},{name:"京关关税",value:105,itemStyle:{
            normal:{color:'#40A9ED'}
        }},{name:"京邮办处",value:112,itemStyle:{
            normal:{color:'#40A9ED'}
        }},{name:"旅检征税",value:117,itemStyle:{
            normal:{color:'#40A9ED'}
        }},{name:"机场旅检",value:121,itemStyle:{
            normal:{color:'#40A9ED'}
        }},{name:"京中关村",value:125,itemStyle:{
            normal:{color:'#40A9ED'}
        }},{name:"京五里店",value:132,itemStyle:{
            normal:{color:'#40A9ED'}
        }},{name:"机场库区",value:132,itemStyle:{
            normal:{color:'#40A9ED'}
        }},{name:"京关保税",value:132,itemStyle:{
            normal:{color:'#40A9ED'}
        }},{name:"机场货二",value:133,itemStyle:{
            normal:{color:'#40A9ED'}
        }},{name:"京东郊站",value:145,itemStyle:{
            normal:{color:'#40A9ED'}
        }},{name:"京监管处",value:151,itemStyle:{
            normal:{color:'#40A9ED'}
        }},{name:"平谷海关",value:156,itemStyle:{
            normal:{color:'#40A9ED'}
        }},{name:"京国际局",value:165,itemStyle:{
            normal:{color:'#40A9ED'}
        }},{name:"机场货管",value:231,itemStyle:{
            normal:{color:'#40A9ED'}
        }},{name:"京关展览",value:246,itemStyle:{
            normal:{color:'#40A9ED'}
        }}]
        barDatatwo = [{name:"机场货管",value:80},{name:"京监管处",value:75},{name:"京关展览",value:70},{name:"京关保税",value:65},{name:"京涉外处",value:59}]
        yData_deploy = ["旅检征税","十八里店","京开发区","机场货二","京东郊站","京国际局","京中关村","京邮办处","京五里店","平谷海关","机场旅检","机场库区","京关关税","京涉外处","京关保税","京关展览","京监管处","机场货管"]
        barConfig.series[0].data = barData
        //barConfig.series[1].data = barDatatwo
        

        barConfig.series[0].label.normal.formatter = format
        barConfig.yAxis.data = yData_deploy
        barConfig.xAxis.max  = max
        Bar.clear()
        Bar.setOption(barConfig)
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
                <div className={css(styles.header)} >{/*{this.props.barName}*/}各隶属关当月检测任务数</div>
                {/*{spanArr}*/}
                <div className={css(styles.showDiv)}>
                    <div className={css(styles.tubiao)} id='bar2' style={{width:'335px',height:'600px'}}></div>
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
)(ShowBar2)

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        position:'relative'
    },
    header:{
        width:'220px',
        height:'35px',
        lineHeight:'35px',
        fontSize:'17px',
        color:'#fff',
        textIndent:'1em',
        position:'absolute',
        top:10,
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
        paddingTop:'22px',
        boxSizing:'border-box'
    },
    // showDiv:{
    //     width:'418px',
    //     height:'300px',
    //     overflow:'hidden',
    //     overflowY:'scroll',
    //     background:'red'
    // }
})