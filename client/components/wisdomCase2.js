import React from 'react';
import {StyleSheet,css} from 'aphrodite'
import { connect } from 'react-redux'

import { setShowBarType,setDetailmodalVision } from '../action/action'

class WisdomCase2 extends React.Component{
    NumberSelected(title,type){
        this.props.setshowbartype(title,type)
        this.props.setDetailmodal(false,'')
    }
    render(){
        let data = this.props.dataSource.globalStats
        return(
            <div className={css(styles.container)}>
                <div className={css(styles.header)}>北京海关</div>
                <div className={css(styles.tubiao)}>
                    <div 
                    className={css(styles.liDiv)}
                    >
                        <div className={css(styles.content)}>
                            <span className={css(styles.textL)}>隶属关：</span>
                            <span className={css(styles.textR)}>18</span>
                        </div>
                        
                    </div>
                    <div 
                    className={css(styles.liDiv)} 
                    >
                        <div className={css(styles.content)}>
                            <span className={css(styles.textL)}>实验室：</span>
                            <span className={css(styles.textR)}>6</span>
                        </div>
                        
                    </div>
                    <div 
                    className={css(styles.liDiv)}
                    >
                        <div className={css(styles.content)}>
                            <span className={css(styles.textL)}>检测总数：</span>
                            <span className={css(styles.textR)}>845</span>
                        </div>
                    </div>
                    <div 
                    className={css(styles.liDiv)}
                    >
                        <div className={css(styles.content)}>
                            <span className={css(styles.textL)}>合格率：</span>
                            <span className={css(styles.textR)}>99.6%</span>
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
)(WisdomCase2)

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        position:'relative'
    },
    header:{
        width:'100%',
        height:'20px',
        lineHeight:'20px',
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
        padding:'20px 8px 0',
        boxSizing:'border-box'
    },
    liDiv:{
        width:'100%',
        height:'28px',
        cursor:'pointer',
        backgroundSize:'103%',
        ':hover':{
            background:`url('./image/numselected.png') no-repeat center`,
            background:'none',
            backgroundSize:'103%',
        }
    },
    content:{
        width:'100%',
        height:'100%',
        display:'inline-block',
        padding:'0 15px',
        boxSizing:'border-box',
        marginLeft:'5%',
        marginTop:'18px'
    },
    textL:{
        fontSize:'16px',
        color:'#fff',
        lineHeight:'26px',
        float:'left'
    },
    textR:{
        fontSize:'16px',
        color:'#fff',
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