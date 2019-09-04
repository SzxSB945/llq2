import React from 'react';
import {StyleSheet,css} from 'aphrodite'
import { connect } from 'react-redux'
import CaseModal from '../components/caseModal'

import { setShowBarType,setDetailmodalVision } from '../action/action'

class HighRiskCase extends React.Component{
    NumberSelected(title,type){
        this.props.setshowbartype(title,type)
        if(title == '110警情总数'){
            this.props.setDetailmodal(true,'hignrisk')
        }else {
            this.props.setDetailmodal(false,'')
        }
    }
    render(){
        let data = this.props.dataSource
        return(
            <div className={css(styles.container)}>
                <div className={css(styles.header)}>110警情</div>
                <div className={css(styles.tubiao)}>
                    <div 
                    className={css(styles.liDiv)}
                    onClick={this.NumberSelected.bind(this,'110警情总数','treatTotalCount')}
                    style={{
                        background:`${this.props.barType == 'treatTotalCount' ? "url('./image/numselected.png') no-repeat center" : ''}`,
                    }}
                    >
                        <div className={css(styles.content)}>
                            <span className={css(styles.textL)}>警情总数</span>
                            <span className={css(styles.textR)}>{data.treatTotalCount || 0}<span className={css(styles.small)}>件</span></span>
                        </div>
                        <div className={css(styles.content)}>
                            <span className={css(styles.textL)}>正在处置</span>
                            <span className={css(styles.textR)}>{data.treatTotalInProcessCount || 0}<span className={css(styles.small)}>件</span></span>
                        </div>
                    </div>
                    <div 
                    className={css(styles.liDiv)}
                    onClick={this.NumberSelected.bind(this,'110警情今日新增','treatTodayCount')}
                    style={{
                        background:`${this.props.barType == 'treatTodayCount' ? "url('./image/numselected.png') no-repeat center" : ''}`,
                    }}
                    >
                        <div className={css(styles.content)}>
                            <span className={css(styles.textL)}>今日新增</span>
                            <span className={css(styles.textR)}>{data.treatTodayCount || 0}<span className={css(styles.small)}>件</span></span>
                        </div>
                        <div className={css(styles.content)}>
                            <span className={css(styles.textL)}>正在处置</span>
                            <span className={css(styles.textR)}>{data.treatTodayInProcessCount || 0}<span className={css(styles.small)}>件</span></span>
                        </div>
                    </div>
                </div>
                <CaseModal config='hignrisk'/>
                {/* <div className={css(styles.detailsModal)} style={{left:`${this.state.vision ? '-290px': '9999px'}`}} >
                    <div className={css(styles.modelheader)}>
                        案件列表
                        <span className={css(styles.jiantouL)}></span>
                        <span className={css(styles.jiantouR)}></span>
                        <span className={css(styles.close)} onClick={this.closeModal.bind(this)}></span>
                    </div>
                    {container}
                </div> */}
            </div>
        )
    }
}

export default connect(
    state =>{
        return {
            dataSource : state.dataSource,
            barType    : state.barType,
            mediate    : state.mediate,
            areaname   : state.currentAreaName
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
)(HighRiskCase)

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        position:'relative',
        
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
        boxSizing:'border-box',
        zIndex:2
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
    },
    detailsModal:{
        width:'280px',
        height:'400px',
        padding: '10px',
        boxSizing: 'border-box',
        position:'absolute',
        // left:'-250px',
        top:'-110px',
        background:`url('./image/tcK.png') center center no-repeat`,
        backgroundSize:'100% 100%',
        transition:'left 0.1s',
        zIndex:1,
        overflowY:'scroll'
    },
    listLi:{
        width:'100%',
        // height:'25px',
        color:'#ccc',
        padding:'0 5px',
        boxSizing:'border-box'
    },
    liLabel:{
        float:'left',
        width:'35%',
        // height:'25px',
        lineHeight:'25px',
        textAlign:'right',
        fontSize:'15px'
    },
    liText:{
        float:'left',
        width:'65%',
        // height:'25px',
        lineHeight:'25px',
        // textIndent:'1em',
        fontSize:'15px',
        overflow:'hidden',
        textOverflow: 'ellipsis',
        wordWrap:'break-word'
    },
    modelheader:{
        width:'100%',
        height:'40px',
        lineHeight:'40px',
        padding:'0 50px',
        boxSizing:'border-box',
        fontSize:'18px',
        color:'#00feff',
        textAlign:'center',
        position:'relative'
    },
    jiantouL:{
        width:'40px',
        height:'40px',
        float:'left',
        background:`url('./image/jiantouL.png') center right no-repeat`,
        backgroundSize:'50%',
    },
    jiantouR:{
        width:'40px',
        height:'40px',
        float:'right',
        background:`url('./image/jiantouL.png') center right no-repeat`,
        backgroundSize:'50%',
        transform:'rotateY(180deg)'
    },
    close:{
        width:'25px',
        height:'25px',
        background:`url('./image/close.png') center center no-repeat`,
        backgroundSize:'60%',
        position:'absolute',
        right:'20px',
        bottom:'7px',
        cursor:'pointer'
    },
})