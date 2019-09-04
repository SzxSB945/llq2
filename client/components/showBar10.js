import React from 'react';
import {StyleSheet,css} from 'aphrodite'
import { connect } from 'react-redux'
import barConfig from './deploy6.config'
import { childIds } from '../data/api'
import { getDetail } from '../data/http'
import areaConfig from '../data/area.config'
import showbarConfig from './barconfig'

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'

const label = ['01活动物', '02肉及食用', '03鱼、甲壳', '04乳品蛋品', '05其他动物', '06活树', '07食用蔬菜', '08食用水果', '09咖啡、茶', '10谷物', '11制粉工业', '12含油子仁', '13虫胶树胶', '14编结用植', 
'15动植物油', '16肉、鱼','17糖及糖食','18可可','19谷物粮食','20蔬菜水果','21杂项食品','22饮料、酒','23残渣废料','24烟草','总计']

//['机场货管', '京监管处', '京关展览', '京关保税', '京涉外处', '京关关税', '机场库区', '机场旅检', '平谷海关', '京五里店', '京邮办处', '京中关村', '京国际局', '京东郊站', '机场货二', '京开发区','十八里店','旅检征税']

const getRange = arr => {
    let M = []
    arr.map(item => {
        M.push(item.total)
    })
    M.sort((a, b) => (a - b))
    return (M[M.length - 1])
}
class ShowBar10 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectState: false //下拉框打开和闭合
        }
    }

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
     * 打开和收缩下拉框
     */
    toggle() {
        this.setState({
            selectState: !this.state.selectState
        })
    }

    /**
     * 
     * @param {*} name 下拉框选择区域
     */
    async selectArea(name) {
        //下拉选择触发事件 liulinqing 20190509

        // this.props.ShowInfo('none')
        // this.props.setBaiscID('')
        // this.setState({
        //     basicparam : {}
        // })
        // clearInterval(this.mapTimer)
        // this.setState({
        //     lunbo : true
        // })
        // let cityCode = citys[name] //城市的json代码
        // let cityUrl = './couties/' + cityCode + '.json'; //城市的地图json
        // this.props.setcurrentarea(name)
        // if (cityCode != undefined && name != '金山区') {
        //     this.renderProvincesMap(cityUrl, name)
        // }
        try {
            // let url = detail(this.props.mediate, areaConfig(this.props.mediate, name))
            // let data = await getDetail(url)
            // if (this.props.mediate == 'unmediate') {
            //     data.globalStats = {
            //         officeCount: data.officeCount,
            //         officeOnline: data.officeOnline,
            //         staffCount: data.staffCount,
            //         staffOnline: data.staffOnline,
            //         caseTotalCount: data.caseTotalCount,
            //         caseInProcessCount: data.caseInProcessCount,
            //         caseTodayTotalCount: data.caseTodayTotalCount,
            //         caseTodayInProcessCount: data.caseTodayTotalCount
            //     }
            // }
            // this.props.setData(data)
        } catch (error) {
            console.log('下拉框选择')
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
        console.log("数据："+max);
        max = 1;
        let Bar = echarts.init(document.getElementById('bar10'));
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
        barConfig.grid.bottom = 20;
        barConfig.series[0].barWidth = 20
        console.log(barData);
        console.log(yData_deploy);
        //modify by liulinqing 2019-05-07 柱形图数据先固定
        barData = [{name:"京涉外处",value:0.59,itemStyle:{
            normal:{color:'#D5912B'}
        }},{name:"京关保税",value:0.65,itemStyle:{
            normal:{color:'#D5912B'}
        }},{name:"京关展览",value:0.7,itemStyle:{
            normal:{color:'#D5912B'}
        }},{name:"京监管处",value:0.75,itemStyle:{
            normal:{color:'#D5912B'}
        }},{name:"机场货管",value:0.8,itemStyle:{
            normal:{color:'#D5912B'}
        }}]
        barDatatwo = [{name:"机场货管",value:80},{name:"京监管处",value:75},{name:"京关展览",value:70},{name:"京关保税",value:65},{name:"京涉外处",value:59}]
        yData_deploy = ["京涉外处","京关保税","京关展览","京监管处","机场货管"]
        barConfig.series[0].data = barData
        //barConfig.series[1].data = barDatatwo
        

        barConfig.series[0].label.normal.formatter = function (params) {
            return (params.value*100)+'%'; //.toFixed(2)
        };
        //format
        barConfig.yAxis.data = yData_deploy
        barConfig.xAxis.max  = max
        Bar.clear()
        var optionss = {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: 0,
                right: 0,
                bottom: 20,
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['2019年2月', '2019年3月', '2019年4月'],
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel:{  
                        interval:0,//横轴信息全部显示  
                        color:'#fff'
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    "axisTick":{       //y轴刻度线
                        "show":false
                      },
                      "splitLine": {     //网格线
                        "show": false
                      },
                      axisLabel:{  
                        interval:0,//横轴信息全部显示  
                        color:'#fff'
                    }
                      
                }
            ],
            series : [
                {
                    type:'line',
                    barWidth: '20%',
                    itemStyle: {
                        normal: {
                            color: '#40a9ed'
                        },
                        emphasis: {
                            color: "#3596c0"
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            fontSize:10
                        }
                    },
                    data:[{name:"2019年2月",value:0.8,itemStyle:{
                        normal:{color:'#fff'}
                    }},{name:"2019年3月",value:0.97,itemStyle:{
                        normal:{color:'#fff'}
                    }},{name:"2019年4月",value:0.83,itemStyle:{
                        normal:{color:'#fff'}
                    }}]
                }
            ]
        };
        optionss.series[0].label.normal.formatter = function (params) {
            return (params.value*100)+'%'; //.toFixed(2)
        };
        Bar.setOption(optionss)  //barConfig
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
                <div className={css(styles.header)} style={{backgroundColor:'#ffcc29',border:'1px solid #b49f5d'}}>{/*{this.props.barName}*/}产品类别合格率：</div>

                <div className = {css(styles.selectDiv)} onClick = {this.toggle.bind(this)}>
                    总计 
                    <span className = {css(styles.icon)} style = {{
                        transform: `${ this.state.selectState ? 'translate(0,-50%) rotate(180deg)':'translate(0,-50%)'}`
                    }}></span> 
                    <div className = {`${css(styles.nextDiv)} ${css(styles.bounce)}` } style = {{ display: `${this.state.selectState ? 'block':'none'}`}}> 
                        {
                            label && label.map((item, index) => {
                                return (
                                    <div className = {css(styles.nextLi)} key = {index} onClick = {this.selectArea.bind(this, item)} style = {{
                                        background: `${ this.props.areaname == item ? "url('./image/xqdian.png') no-repeat center" :''}`
                                    }}> 
                                        {item} 
                                    </div>
                                )
                            })
                        }
                    </div> 
                </div>

                {/*{spanArr}*/}
                <div className={css(styles.showDiv)}>
                    <div className={css(styles.tubiao)} id='bar10' style={{width:'218px',height:'210px'}}></div>
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
)(ShowBar10)

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        position:'relative'
    },
    header:{
        width:'120px',
        height:'20px',
        lineHeight:'20px',
        fontSize:'12px',
        color:'#090909',
        textIndent:'1em',
        position:'absolute',
        top:'30px',
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
        paddingTop:'32px',
        boxSizing:'border-box'
    },
    selectDiv: {
        width: '78px',
        height: '20px',
        lineHeight: '20px',
        background: `url('./image/xqk.png') no-repeat center`,
        // background:'none',
        backgroundSize: '100% 100%',
        position: 'absolute',
        right: '0px',
        top: '30px',
        textIndent: '1em',
        color: '#fff',
        zIndex: '10',
        cursor: 'pointer',
        border: '1px solid #888',
        clear: 'both'
    },
    icon: {
        width: '10px',
        height: '7px',
        background: `url('./image/sanjiao.png') no-repeat center`,
        backgroundSize: '100% 100%',
        position: 'absolute',
        right: '10px',
        top: '50%'
    },
    nextDiv: {
        width: '98px',
        height: '867px',
        background: `url('./image/group.png') no-repeat center`,
        // backgroundColor:'#fff',
        backgroundSize: '100% 100%',
        position: 'absolute',
        left: '-1px',
        top: '-871px',
        zIndex: '99999999',
        border:'1px solid #000000',
        overflowY:'visible'
    },
    nextLi: {
        width: '98px',
        height: '35px',
        lineHeight: '35px',
        float: 'left',
        textAlign: 'center',
        textIndent: '0',
        backgroundSize: '100% 100%',
        cursor: 'pointer',
        ':hover': {
            background: `url('./image/xqdian.png') no-repeat center`,
            backgroundSize: '100% 100%',
            color:'#fff'
        }
    },
    // showDiv:{
    //     width:'418px',
    //     height:'300px',
    //     overflow:'hidden',
    //     overflowY:'scroll',
    //     background:'red'
    // }
})