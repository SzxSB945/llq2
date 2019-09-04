import React from 'react';
import {StyleSheet,css} from 'aphrodite'
import { connect } from 'react-redux'

import { setShowBarType } from '../action/action'


class TodayNews extends React.Component{
    NumberSelected(title,type){
        this.props.setshowbartype(title,type)
    }
    render(){
        return(
            <div className={css(styles.container)}>
                <div className={css(styles.header)}>今日动态</div>
                <div className={css(styles.tubiao)}>
                    <div className={css(styles.liDiv)}>
                        <div className={css(styles.liLabel)}>{`${this.props.current == 'mediate' ? '调解机构在线' : '公证机构在线'}`}</div>
                        <div className={css(styles.liNum)} onClick={this.NumberSelected.bind(this,'机构在线','officeOnline')}>
                            <span className={css(styles.numSpan)}>{this.props.dataSource.globalStats.officeOnline}</span>
                        </div>
                    </div>
                    <div className={css(styles.liDiv)}>
                        <div className={css(styles.liLabel)}>{`${this.props.current == 'mediate' ? '调解人员在线' : '公证人员在线'}`}</div>
                        <div className={css(styles.liNum)} onClick={this.NumberSelected.bind(this,'人员在线数量','staffOnline')}>
                            <span className={css(styles.numSpan)}>{this.props.dataSource.globalStats.staffOnline}</span>
                        </div>
                    </div>
                    <div className={css(styles.liDiv)}>
                        <div className={css(styles.liLabel)}>在办案件</div>
                        <div className={css(styles.liNum)} onClick={this.NumberSelected.bind(this,'今日案件正在办理','caseTodayInProcessCount')}>
                            <span className={css(styles.numSpan)}>{this.props.dataSource.globalStats.caseTodayInProcessCount}</span>
                        </div>
                    </div>
                    <div className={css(styles.liDiv)}>
                        <div className={css(styles.liLabel)}>110警情</div>
                        <div className={css(styles.liNum)} onClick={this.NumberSelected.bind(this,'110警情今日新增','highRiskStats_caseTodayTotalCount')}>
                            <span className={css(styles.numSpan)}>{this.props.dataSource.highRiskStats.caseTodayTotalCount}</span>
                        </div>
                    </div>
                    <div className={css(styles.liDiv)}>
                        <div className={css(styles.liLabel)}>突发事件</div>
                        <div className={css(styles.liNum)} onClick={this.NumberSelected.bind(this,'紧急案件','emergencyTotalCount')}>
                            <span className={css(styles.numSpan)}>{this.props.dataSource.highRiskStats.emergencyTotalCount}</span>
                        </div>
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
)(TodayNews)

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        position:'relative',
        display: 'none'
    },
    header:{
        width:'100%',
        height:'40px',
        lineHeight:'40px',
        fontSize:'17px',
        color:'#fff',
        letterSpacing:'2px',
        textAlign:'center',
        position:'absolute',
        top:0,
        left:0
    },
    tubiao:{
        width:'100%',
        height:'100%',
        padding:'45px 96px 0',
        boxSizing:'border-box'
    },
    liDiv: {
        width:'20%',
        height:'100%',
        float:'left'
    },
    liLabel:{
        width:'100%',
        height:'35px',
        lineHeight:'54px',
        textAlign:'center',
        fontSize:'18px',
        color:'#ffffff'
    },
    liNum:{
        width:'100%',
        height:'100px',
        background:`url('./image/numdiv.png') center center no-repeat`,
        background:'none',
        backgroundSize:'85%'
    },
    numSpan:{
        width:'100%',
        height:'100px',
        float:'left',
        color:'#fff',
        fontSize:'28px',
        lineHeight:'100px',
        textAlign:'center',
        letterSpacing:'2px',
        cursor:'pointer'
    }
})