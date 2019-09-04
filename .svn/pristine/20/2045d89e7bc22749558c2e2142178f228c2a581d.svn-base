import React from 'react';
import {StyleSheet,css} from 'aphrodite'
import { connect } from 'react-redux'
import CaseModal from '../components/caseModal'

import { setShowBarType,setDetailmodalVision } from '../action/action'

class BurstCase extends React.Component{
    NumberSelected(title,type){
        this.props.setshowbartype(title,type)
        this.props.setDetailmodal(true,'emergency')
    }
    render(){
        let data = this.props.dataSource.highRiskStats
        return(
            <div className={css(styles.container)}>
                <div className={css(styles.header)}>突发事件</div>
                <div className={css(styles.tubiao)}>
                    <div 
                    className={css(styles.liDiv)}
                    onClick={this.NumberSelected.bind(this,'紧急案件','emergencyTotalCount')}
                    style={{
                        background:`${this.props.barType == 'emergencyTotalCount' ? "url('./image/numselected.png') no-repeat center" : ''}`,
                    }}
                    >
                        <div className={css(styles.content)}>
                            <span className={css(styles.textL)}>事件总数</span>
                            <span className={css(styles.textR)}>{data.emergencyTotalCount}<span className={css(styles.small)}>件</span></span>
                        </div>
                        <div className={css(styles.content)}>
                            <span className={css(styles.textL)}>正在发生</span>
                            <span className={css(styles.textR)}>{data.emergencyInProcessCount}<span className={css(styles.small)}>件</span></span>
                        </div>
                    </div>
                </div>
                <CaseModal config = 'emergency'/>
            </div>
        )
    }
}

export default connect(
    state =>{
        return {
            dataSource : state.dataSource,
            barType    : state.barType,
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
)(BurstCase)

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
    liDiv:{
        width:'100%',
        height:'42px',
        cursor:'pointer',
        backgroundSize:'103%',
        ':hover':{
            background:`url('./image/numselected.png') no-repeat center`,
            backgroundSize:'103%',
        }
    },
    content:{
        width:'50%',
        height:'100%',
        display:'inline-block',
        padding:'0 15px',
        boxSizing:'border-box'
    },
    textL:{
        fontSize:'16px',
        color:'#fff',
        lineHeight:'40px',
        float:'left'
    },
    textR:{
        fontSize:'16px',
        color:'#fff',
        lineHeight:'40px',
        float:'right',
    },
    small:{
        fontSize:'12px',
        color:'#eaeaea',
        marginLeft:'3px'
    },
    eventText:{
        width:'100%',
        height:'120px',
        fontSize:'26px',
        color:'#fff',
        lineHeight:'120px',
        textAlign:'center',
        overflow:'hidden'
    }
})