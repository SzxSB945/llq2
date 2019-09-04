import React from 'react';
import {StyleSheet,css} from 'aphrodite'
import { connect } from 'react-redux'

import { setDetailmodalVision } from '../action/action'

class CaseModal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      itemDetail : false,
      itemDetailhignrisk : '',
      dataSource : []
    }
  }
  openDetail(){
    this.setState({
      itemDetail : true
    })
  }
  closenDetail(){
    this.setState({
      itemDetail : false
    })
  }
  openDetailhisk(key){
    this.setState({
      itemDetailhignrisk : key
    })
  }
  closenDetailhisk(){
    this.setState({
      itemDetailhignrisk : ''
    })
  }
  closeModal(){
    this.props.setDetailmodal(false,'')
    this.setState({
      itemDetailhignrisk : ''
    })
  }
  render(){
    let data = this.props.dataSource
    let list = []
    if(data && data.length != 0){
      data.map((item,index)=>{
        list.push(
          <div key={index}>
            <div className={css(styles.listLihover)} onClick={this.openDetailhisk.bind(this,item.id)}>
            <span className={css(styles.liLabel)}>{`案件${index+1}：`}</span>
              <span className={css(styles.liText)}>{item.cause || ''}</span>
            </div>
            <div style={{width:'100%',height:'7px',float:'left',borderTop :'1px dotted #419fe9'}}></div>
            <div className={css(styles.itemModal)} style={{display:`${this.state.itemDetailhignrisk == item.id ? 'block' :'none'}`}}>
              <div className={css(styles.modelheader)}>
                案件详情
                <span className={css(styles.shouqi)} onClick={this.closenDetailhisk.bind(this)}></span>
              </div>
              <div className={css(styles.listLi)}>
                <span className={css(styles.liLabel)}>首次报警：</span>
                <span className={css(styles.liText)}>{item.callTime}</span>
              </div>
              <div className={css(styles.listLi)}>
                <span className={css(styles.liLabel)}>当事人：</span>
                <span className={css(styles.liText)}>{item.callerName || ''}</span>
              </div>
              <div className={css(styles.listLi)}>
                <span className={css(styles.liLabel)}>案由：</span>
                <span className={css(styles.liText)}>{item.cause}</span>
              </div>
              <div className={css(styles.listLi)}>
                <span className={css(styles.liLabel)}>联系电话：</span>
                <span className={css(styles.liText)}>{item.callerPhone}</span>
              </div>
              <div className={css(styles.listLi)}>
                <span className={css(styles.liLabel)}>事发地址：</span>
                <span className={css(styles.liText)}>{item.eventAddress || ''}</span>
              </div>
              <div className={css(styles.listLi)}>
                <span className={css(styles.liLabel)}>处置日期：</span>
                <span className={css(styles.liText)}>{item.feedbackDate || ''}</span>
              </div>
              <div className={css(styles.listLi)}>
                <span className={css(styles.liLabel)}>处置人员：</span>
                <span className={css(styles.liText)}>{item.staff || ''}</span>
              </div>
              
              <div className={css(styles.listLi)}>
                <span className={css(styles.liLabel)}>所在单位：</span>
                <span className={css(styles.liText)}>{item.staffOrg || ''}</span>
              </div>

            </div>
          </div>
        )
      })  
    }else{
      list.push(<div key="nocase">无案件</div>)
    }
    // if( this.props.type == 'emergency' ){
    //   if( data.emergency && data.emergency.length != 0){
    //     data.emergency.map((item,index)=>{
    //       list.push(
    //         <div key={index} >
    //           <div className={css(styles.listLihover)} onClick={this.openDetail.bind(this)}>
    //             <span className={css(styles.liLabel)}>{`案件${index+1}：`}</span>
    //             <span className={css(styles.liText)}>{item.title || ''}</span>
    //           </div>
    //           <div style={{width:'100%',height:'7px',float:'left',borderTop :'1px dotted #419fe9'}}></div>
    //           <div className={css(styles.itemModal)} style={{display:`${this.state.itemDetail ? 'block' :'none'}`}}>
    //             <div className={css(styles.modelheader)}>
    //               案件详情
    //               <span className={css(styles.shouqi)} onClick={this.closenDetail.bind(this)}></span>
    //             </div>
    //             <div className={css(styles.listLi)}>
    //               <span className={css(styles.liLabel)}>案件名称：</span>
    //               <span className={css(styles.liText)}>{item.title || ''}</span>
    //             </div>
    //             <div className={css(styles.listLi)}>
    //               <span className={css(styles.liLabel)}>案件起因：</span>
    //               <span className={css(styles.liText)}>{item.description || ''}</span>
    //             </div>
    //             <div className={css(styles.listLi)}>
    //               <span className={css(styles.liLabel)}>案件地址：</span>
    //               <span className={css(styles.liText)}>{item.location || ''}</span>
    //             </div>
    //             <div className={css(styles.listLi)}>
    //               <span className={css(styles.liLabel)}>上报人：</span>
    //               <span className={css(styles.liText)}>{item.mediator || ''}</span>
    //             </div>
    //             <div className={css(styles.listLi)}>
    //               <span className={css(styles.liLabel)}>调解状态：</span>
    //               <span className={css(styles.liText)}>{item.status || ''}</span>
    //             </div>
    //             <div className={css(styles.listLi)}>
    //               <span className={css(styles.liLabel)}>发生时间：</span>
    //               <span className={css(styles.liText)}>{item.date || ''}</span>
    //             </div>
    //           </div>
    //         </div>
    //       )
    //     }) 
    //   }else{
    //     list.push(<div key="nocase">无案件</div>)
    //   }
    // }else if( this.props.type == 'hignrisk' ){
      
    // }

    return(
      <div className={css(styles.detailsModal)} style={{display:`${this.props.type == this.props.config ? 'block': 'none'}`}} >
        <div className={css(styles.modelheader)}>
          案件列表
          {/* <span className={css(styles.jiantouL)}></span>
          <span className={css(styles.jiantouR)}></span> */}
          <span className={css(styles.close)} onClick={this.closeModal.bind(this)}></span>
        </div>
        {list}
      </div>
    )
  }
}

export default connect(
    state =>{
        return {
            dataSource : state.detailSource,
            vision     : state.detailModal,
            type       : state.detailType,
            bartype    : state.barType,
            
        }
    },
    dispatch =>{
        return {
            setDetailmodal : (vision,type) => {
                dispatch(setDetailmodalVision(vision,type))
            }
        }
    }
)(CaseModal)

const styles = StyleSheet.create({
    detailsModal:{
        width:'270px',
        height:'350px',
        padding: '15px',
        boxSizing: 'border-box',
        position:'absolute',
        left:'-270px',
        top:'-110px',
        background:`url('./image/tcK.png') center center no-repeat`,
        backgroundSize:'97% 100%',
        transition:'left 0.1s',
        zIndex:1,
        // position:'relative'
    },
    itemModal:{
        width:'290px',
        height:'350px',
        padding: '15px',
        boxSizing: 'border-box',
        position:'absolute',
        left:'-290px',
        top:'0',
        background:`url('./image/tcK.png') center center no-repeat`,
        backgroundSize:'97% 100%',
        // transition:'left 0.1s',
        overflowY:'scroll'
    },
    listLihover:{
      width:'100%',
      // height:'25px',
      color:'#ccc',
      padding:'0 5px',
      boxSizing:'border-box',
      cursor:'pointer',
      ':hover':{
        color:'#00feff',
      }
    },
    listLi:{
      width:'100%',
      height:'25px',
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
      minHeight:'25px',
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
      padding:'0 25px',
      marginBottom:'10px',
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
      right:'0px',
      bottom:'7px',
      cursor:'pointer'
    },
    shouqi:{
      width:'25px',
      height:'25px',
      background:`url('./image/jiantouL.png') center right no-repeat`,
      backgroundSize:'66%',
      transform:'rotateY(180deg)',
      position:'absolute',
      right:'0px',
      bottom:'7px',
      cursor:'pointer'
    }
})