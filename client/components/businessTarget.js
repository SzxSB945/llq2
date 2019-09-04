import React from 'react';
import {StyleSheet,css} from 'aphrodite'
import { connect } from 'react-redux'

import pieConfig from './pieOption'
import pieConfig2 from './pieOption2'
import pieConfig3 from './pieOption3'

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'

import { setShowBarType } from '../action/action'

class BusinessTarget extends React.Component{
    NumberSelected(title,type){
        this.props.setshowbartype(title,type)
    }
    renderPie(){
        let pie =  echarts.init(document.getElementById('highrisk'))
        pieConfig.series[0].data[0].value = this.props.dataSource.analysis[0].value
        pieConfig.series[0].data[0].name  = this.props.dataSource.analysis[0].name
        pieConfig.series[1].data[0].value = this.props.dataSource.analysis[1].value
        pieConfig.series[1].data[0].name = this.props.dataSource.analysis[1].name
        pieConfig.series[2].data[0].value = this.props.dataSource.analysis[2].value
        pieConfig.series[2].data[0].name = this.props.dataSource.analysis[2].name
        pie.setOption(pieConfig)
        let pieBurst =  echarts.init(document.getElementById('burstcase'))
        pieConfig2.series[0].data[0].value = this.props.dataSource.analysis[3].value
        pieConfig2.series[0].data[0].name = this.props.dataSource.analysis[3].name
        pieConfig2.series[1].data[0].value = this.props.dataSource.analysis[4].value
        pieConfig2.series[1].data[0].name = this.props.dataSource.analysis[4].name
        pieConfig2.series[2].data[0].value = this.props.dataSource.analysis[5].value
        pieConfig2.series[2].data[0].name = this.props.dataSource.analysis[5].name
        pieBurst.clear()
        pieBurst.setOption(pieConfig2)

        // if(this.props.current == 'mediate'){
        //     pieConfig3.series[0].data[0].value = this.props.dataSource.analysis[4].value
        //     pieConfig3.series[1].data[0].value = this.props.dataSource.analysis[5].value
        //     pieBurst.clear()
        //     pieBurst.setOption(pieConfig3)
        // }else{
        //     pieConfig2.series[0].data[0].value = this.props.dataSource.analysis[3].value
        //     pieConfig2.series[1].data[0].value = this.props.dataSource.analysis[4].value
        //     pieConfig2.series[2].data[0].value = this.props.dataSource.analysis[5].value
        //     pieBurst.clear()
        //     pieBurst.setOption(pieConfig2)
        // }

        // pie.on('click', params => {
        //     if(params.seriesName == '高风险案件比例'){
        //         this.NumberSelected('高风险案件比例','高风险案件比例')
        //     }else if(params.seriesName == '高风险案件关注率'){
        //         this.NumberSelected('高风险案件关注率','高风险案件关注率')
        //     }else if(params.seriesName == '高风险案件反馈率'){
        //         this.NumberSelected('高风险案件反馈率','高风险案件反馈率')
        //     }

        // })
        // pieBurst.on('click', params => {
        //     if(params.seriesName == '突然事件处置率'){
        //         this.NumberSelected('突然事件处置率','突然事件处置率')
        //     }else if(params.seriesName == '突发事件日平均数'){
        //         this.NumberSelected('突发事件日平均数','突发事件日平均数')
        //     }else if(params.seriesName == '突发事件反馈率'){
        //         this.NumberSelected('突发事件反馈率','突发事件反馈率')
        //     }

        // })
    }
    componentDidMount(){
        this.renderPie()
    }
    componentDidUpdate(){
        this.renderPie()
    }
    render(){
        return(
            <div className={css(styles.container)}>
                <div className={css(styles.header)}>业务指标</div>
                <div className={css(styles.tubiao)}>
                    <div className={css(styles.content)}>
                        {/* <div className={css(styles.title)}>高风险案件</div> */}
                        <div id='highrisk' style={{width:'402px',height:'157px'}}></div>
                    </div>
                    <div className={css(styles.content)}>
                        {/* <div className={css(styles.title)}>突发事件</div> */}
                        <div id='burstcase' style={{width:'402px',height:'157px'}}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state =>{
        return {
            current    : state.mediate,
            dataSource : state.dataSource
        }
    },
    dispatch =>{
        return {
            setshowbartype : (title,type)=>{
                dispatch(setShowBarType(title,type))
            }
        }
    }
)(BusinessTarget)

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        position:'relative'
    },
    header:{
        width:'100%',
        height:'35px',
        lineHeight:'35px',
        fontSize:'17px',
        color:'#fff',
        textIndent:'1em',
        position:'absolute',
        top:0,
        left:0
    },
    tubiao:{
        width:'100%',
        height:'100%',
        padding:'45px 8px 0',
        boxSizing:'border-box'
    },
    content:{
        width:'100%',
        height:'50%',
        borderBottom:'1px solid #1f42a7'
    },
    title:{
        width:'155px',
        height:'35px',
        margin:'0 auto',
        background:`url('./image/sjbtk.png') center center no-repeat`,
        backgroundSize:'100%',
        textAlign:'center',
        lineHeight:'35px',
        fontSize:'16px',
        color:'#fff'
    }
})