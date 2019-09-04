import React from 'react';
import {StyleSheet,css} from 'aphrodite'
import { connect } from 'react-redux'
import echarts from 'echarts/lib/echarts'

import { setShowBarType,setDetailmodalVision } from '../action/action'

class WisdomCase extends React.Component{
    NumberSelected(title,type){
        this.props.setshowbartype(title,type)
        this.props.setDetailmodal(false,'')
    }
    async yaocan(id){
        // let china = echarts.init(document.getElementById('china'))
        // var strs = document.getElementById("spanDate").innerHTML
        // var datass = {name:strs,value:[116.60038,40.085756,0],officeOnline:312,staffOnline:1411,caseInProcessCount:19,
        // caseTodayInProcessCount:0,id:"1919f62326314b6fbff7d570f4aead62",seriesName:"辖区信息",username:""}
        //  // this.jiSuanPosition(x,y)
        //  this.props.ShowInfo('block')
        //  this.props.getBurstInfo(datass)
        document.getElementById("clisss").click();
        //document.getElementById("clisss2").style.display="none";
        //document.getElementById("mapdiv").style.display="block";
    }

    render(){
        let data = this.props.dataSource.globalStats
        return(
            <div className={css(styles.container)} onClick={this.yaocan.bind(this)}>
                <div className={css(styles.header)}>不合格预警</div>
                <div className={css(styles.tubiao)}>
                    <div 
                    className={css(styles.liDiv)}
                    >
                        <div className={css(styles.content)}>
                            <span className={css(styles.textL)}>日期：</span>
                            <span id='spanDate' className={css(styles.textR)} style={{display:'block'}}>2019-05-24 10:03:00</span>
                        </div>
                        
                    </div>
                    <div 
                    className={css(styles.liDiv)} 
                    >
                        <div className={css(styles.content)}>
                            <span className={css(styles.textL)}>隶属关：</span>
                            <span id='spanLsg' className={css(styles.textR)}>平谷海关</span>
                        </div>
                        
                    </div>
                    <div 
                    className={css(styles.liDiv)}
                    >
                        <div className={css(styles.content)}>
                            <span className={css(styles.textL)}>企业：</span>
                            <span id='spanQy' className={css(styles.textR)}>北京一零六食品贸易有限公司</span>
                        </div>
                    </div>
                    <div 
                    className={css(styles.liDiv)}
                    >
                        <div className={css(styles.content)}>
                            <span className={css(styles.textL)}>报关单号：</span>
                            <span id='spanDh' className={css(styles.textR)}>520050532000003</span>
                        </div>
                    </div>
                    <div 
                    className={css(styles.liDiv)}
                    >
                        <div className={css(styles.content)}>
                            <span className={css(styles.textL)}>不合格指标：</span>
                            <span id='spanBhg' className={css(styles.textR)}>呋喃妥因超标 0.8</span>
                        </div>
                    </div>
                    <div 
                    className={css(styles.liDiv)}
                    >
                        <div className={css(styles.content)}>
                            <span className={css(styles.textL)}>指标正常范围：</span>
                            <span id='spanFw' className={css(styles.textR)}>正常值0</span>
                        </div>
                    </div>
                    <div 
                    className={css(styles.liDiv)}
                    onClick={this.NumberSelected.bind(this,'今日案件','caseTodayCount')}
                    style={{
                        background:`${this.props.barType == 'caseTodayCount' ? "url('./image/numselected.png') no-repeat center" : ''}`,display:'none'
                    }}
                    >
                        <div className={css(styles.content)}>
                            <span className={css(styles.textL)}>今日新增</span>
                            <span className={css(styles.textR)}>{data.caseTodayTotalCount}<span className={css(styles.small)}>件</span></span>
                        </div>
                    </div>
                </div>
            </div>
            /*<div className={css(styles.container)}>
                <div className={css(styles.header)}>{this.props.areaname}{`${this.props.current == 'mediate' ? '智慧调解' : '智慧公证'}`}</div>
                <div className={css(styles.tubiao)}>
                    <div 
                    className={css(styles.liDiv)}
                    onClick={this.NumberSelected.bind(this,'案件总数','caseTotalCount')}
                    style={{
                        background:`${this.props.barType == 'caseTotalCount' ? "url('./image/numselected.png') no-repeat center" : ''}`,
                    }}
                    >
                        <div className={css(styles.content)}>
                            <span className={css(styles.textL)}>案件总数</span>
                            <span className={css(styles.textR)}>{data.caseTotalCount}<span className={css(styles.small)}>件</span></span>
                        </div>
                        <div className={css(styles.content)}>
                            <span className={css(styles.textL)}>正在办理</span>
                            <span className={css(styles.textR)}>{data.caseInProcessCount}<span className={css(styles.small)}>件</span></span>
                        </div>
                    </div>
                    <div 
                    className={css(styles.liDiv)} 
                    onClick={this.NumberSelected.bind(this,'辖区信息','officeCount')}
                    style={{
                        background:`${this.props.barType == 'officeCount' ? "url('./image/numselected.png') no-repeat center" : ''}`,
                    }}>
                        <div className={css(styles.content)}>
                            <span className={css(styles.textL)}>{`${this.props.current == 'mediate' ? '调解机构' : '公证机构'}`}</span>
                            <span className={css(styles.textR)}>{data.officeCount}<span className={css(styles.small)}>个</span></span>
                        </div>
                        <div className={css(styles.content)}>
                            <span className={css(styles.textL)}>在线</span>
                            <span className={css(styles.textR)}>{data.officeOnline}<span className={css(styles.small)}>个</span></span>
                        </div>
                    </div>
                    <div 
                    className={css(styles.liDiv)}
                    onClick={this.NumberSelected.bind(this,'人员数量','staffCount')}
                    style={{
                        background:`${this.props.barType == 'staffCount' ? "url('./image/numselected.png') no-repeat center" : ''}`,
                    }}
                    >
                        <div className={css(styles.content)}>
                            <span className={css(styles.textL)}>{`${this.props.current == 'mediate' ? '调解员' : '公证员'}`}</span>
                            <span className={css(styles.textR)}>{data.staffCount}<span className={css(styles.small)}>人</span></span>
                        </div>
                        <div className={css(styles.content)}>
                            <span className={css(styles.textL)}>在线</span>
                            <span className={css(styles.textR)}>{data.staffOnline}<span className={css(styles.small)}>人</span></span>
                        </div>
                    </div>
                    <div 
                    className={css(styles.liDiv)}
                    onClick={this.NumberSelected.bind(this,'今日案件','caseTodayCount')}
                    style={{
                        background:`${this.props.barType == 'caseTodayCount' ? "url('./image/numselected.png') no-repeat center" : ''}`,
                    }}
                    >
                        <div className={css(styles.content)}>
                            <span className={css(styles.textL)}>今日新增</span>
                            <span className={css(styles.textR)}>{data.caseTodayTotalCount}<span className={css(styles.small)}>件</span></span>
                        </div>
                        <div className={css(styles.content)}>
                            <span className={css(styles.textL)}>正在办理</span>
                            <span className={css(styles.textR)}>{data.caseTodayInProcessCount}<span className={css(styles.small)}>件</span></span>
                        </div>
                    </div>
                </div>
            </div>*/
        )
    }
}

export default connect(
    state =>{
        return {
            current    : state.mediate,
            dataSource : state.dataSource,
            areaname   : state.currentAreaName,
            barType    : state.barType
        }
    },
    dispatch =>{
        return {
            setshowbartype : (title,type)=>{
                dispatch(setShowBarType(title,type))
            },
            setDetailmodal : (vision,type) => {
                dispatch(setDetailmodalVision(vision,type))
            }
        }
    }
)(WisdomCase)

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        position:'relative'
    },
    header:{
        width:'100%',
        height:'26px',
        lineHeight:'26px',
        fontSize:'18px',
        color:'#fff',   //090909
        textIndent:'1em',
        position:'absolute',
        top:2,
        left:0
    },
    tubiao:{
        width:'100%',
        height:'100%',
        padding:'55px 8px 0',
        boxSizing:'border-box'
    },
    liDiv:{
        width:'100%',
        height:'30px',
        lineHeight:'30px',
        cursor:'pointer',
        backgroundSize:'103%',
        ':hover':{
            background:`url('./image/numselected.png') no-repeat center`,
            background:'none',
            backgroundSize:'103%',
        }
    },
    content:{
        width:'110%',
        height:'100%',
        display:'inline-block',
        padding:'0 15px',
        boxSizing:'border-box',
    },
    textL:{
        fontSize:'17px',
        color:'#fff',  //#090909
        lineHeight:'26px',
        float:'left'
    },
    textR:{
        fontSize:'17px',
        color:'#fff', //090909
        lineHeight:'26px',
        float:'left'
    },
    small:{
        fontSize:'12px',
        color:'#090909',
        marginLeft:'3px'
    },
    eventText:{
        width:'100%',
        height:'120px',
        fontSize:'26px',
        color:'#090909',
        lineHeight:'120px',
        textAlign:'center',
        overflow:'hidden'
    }
})