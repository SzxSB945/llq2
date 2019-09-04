import React from 'react';
import {StyleSheet,css} from 'aphrodite'
import { connect } from 'react-redux'

/**
 * 引入action
 */
import { showInfoModal,geBburstCaseInfo } from '../action/action'

class EventBar extends React.Component{
    openModal(){
        this.props.ShowInfo('block')
        this.props.latestCase.seriesName = '110警情'
        let data  = this.props.latestCase
        let datasource = {};
        if (data && data.length > 0) {
            datasource = data[0];
            datasource.seriesName = '110警情'
        }
        this.props.getBurstInfo(datasource)
    }
    render(){
        let data  = this.props.latestCase
        let datasource = {};
        if (data && data.length > 0) {
            datasource = data[0]
        }
        return(
            <div className={css(styles.container)} onClick={this.openModal.bind(this)}>
                <div className={css(styles.header)}>110警情</div>
                <div className={css(styles.tubiao)}>
                    <div className={css(styles.locationDiv)}>
                        <span className={css(styles.icon)} style={{
                            background:"url('./image/sz.png') center center no-repeat"
                        }}></span>
                        <span className={css(styles.text)} style={{float:'left'}}>{datasource.callTime || ''}</span>
                    </div>
                    <div className={css(styles.eventText)}>{datasource.cause || '无事件'}</div>
                    <div className={css(styles.eventtwo)}>
                        <span>当事人：</span><span style={{marginRight:'15px'}}>{datasource.callerName|| ''}</span>
                        <span>出动单位：</span><span>{datasource.staffOrg || ''}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state =>{
        return {
            latestCase : state.detailSource
        }
    },
    dispatch =>{
        return {
            ShowInfo : text=>{
                dispatch(showInfoModal(text))
            },
            getBurstInfo : (obj)=>{
                dispatch(geBburstCaseInfo(obj))
            },
        }
    }
)(EventBar)

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        position:'relative',
        cursor:'pointer'
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
        paddingTop:'48px',
        boxSizing:'border-box'
    },
    locationDiv:{
        width:'100%',
        height:'35px',
        padding:'0 10px',
        boxSizing:'border-box',
    },
    icon:{
        width:'35px',
        height:'35px',
        float:'left',
        marginLeft:'10px',
        // background:`url('./image/dw.png') center center no-repeat`,
        backgroundSize:'35%',
    },
    icon2:{
        width:'35px',
        height:'35px',
        float:'right',
        // background:`url('./image/sz.png') center center no-repeat`,
        backgroundSize:'45%',
    },
    text:{
        width:'350px',
        height:'35px',
        fontSize:'16px',
        color:'#fff',
        lineHeight:'35px',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    text2:{
        width:'170px',
        height:'35px',
        fontSize:'16px',
        color:'#fff',
        lineHeight:'35px',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    eventText:{
        width:'100%',
        // height:'85px',
        fontSize:'24px',
        color:'#fff',
        textAlign:'left',
        padding: '12px 30px',
        boxSizing:'border-box',
        wordWrap: 'break-word',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    eventtwo:{
        width:'100%',
        height:'40px',
        fontSize:'14px',
        color:'#fff',
        textAlign:'left',
        padding: '12px 30px',
        boxSizing:'border-box',
    }
})