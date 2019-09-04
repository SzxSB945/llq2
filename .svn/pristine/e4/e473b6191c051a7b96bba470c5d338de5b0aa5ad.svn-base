import React from 'react';
import { StyleSheet, css } from 'aphrodite'
import { connect } from 'react-redux'
import { clickNavigation, setstateDataSource, changeLastCase, setTreatenent } from '../action/action'
import dataSource from '../data/overview'
import areaConfig from '../data/area.config'

import { detail, zhishou, enterzhishou } from '../data/api'
import { getDetail,getHuishang,getTreatenent } from '../data/http'

class Header extends React.Component {
    openNewpage(){
        window.open("http://static.homolo.net/prototype/mediation-lntelligent-scheduling/#/");  
    }
    mediate() {
        this.props.clickNav('mediate')
        // this.getData('mediate', this.props.areaname)
    }
    notarization() {
        this.props.clickNav('unmediate')
        // this.getData('unmediate', this.props.areaname)
    }
    async getData(type, area) {
        try {
            let id = areaConfig(type, area)
            let url = detail(type, id)
            let data = await getDetail(url)
            let treatenentdata = await getTreatenent(this.props.current, areaConfig(this.props.current, this.props.areaname))
            this.props.setTreatenentdata(treatenentdata.data) 
            // console.log(data)
            if(data.treatevent){
                let treatenentlast = data.treatevent[0]
                //更新110
                this.props.getLastCase({
                    callTime: treatenentlast.callerName,
                    callerName:treatenentlast.callerName,
                    cause:treatenentlast.cause,
                    callerPhone:treatenentlast.callerPhone,
                    eventAddress: treatenentlast.eventAddress, // 地址
                    feedbackDate: treatenentlast.feedbackDate, // 案件状态
                    staff: treatenentlast.staff, // 公证员
                    staffOrg: treatenentlast.staffOrg, // 公证机构
                    meetingId : treatenentlast.hsusername
                })
            }
            if (!data.globalStats) {
                data.globalStats = {
                    officeCount: data.officeCount,
                    officeOnline: data.officeOnline,
                    staffCount: data.staffCount,
                    staffOnline: data.staffOnline,
                    caseTotalCount: data.caseTotalCount,
                    caseInProcessCount: data.caseInProcessCount,
                    caseTodayTotalCount: data.caseTodayTotalCount,
                    caseTodayInProcessCount: data.caseTodayTotalCount
                }
            }
            this.props.setData(data)
        } catch (error) {
            console.log('切换调解和公证标签')
            console.log(error)
        }
    }
    async enter() {
        try {
            let meeting = await getDetail(zhishou(this.props.current))
            await getDetail(enterzhishou(meeting.m_id, meeting.m_password))
        } catch (error) {
            console.log(error)
        }
    }
    async yinji(){
        try{
            window.location.href = 'http://222.249.238.244:81/main.html#/zh-CN/login';
        }catch(error){
            console.log(error)
        }

    }
    async huishang(){
        //console.log('会商连线')
        try{
            await getHuishang('/sfj/connect')
        } catch (error) {
            console.log(error)
        }
        
    }
    componentWillMount() {
        this.props.setData(dataSource)
    }
    componentDidMount() {
        // this.getData(this.props.current, this.props.areaname)
    }
    render() {
        return (
            <h1 className={`${css(styles.header)}`}>
                {/* <span className={css(styles.btn)}
                    onClick={this.enter.bind(this)}
                    style={{
                        background: `url('./image/topBtn.png') no-repeat center`,
                        backgroundSize: '100% 100%',
                    }}>值守</span> */}
                {/*<span className={css(styles.btn)}
                    onClick={this.huishang.bind(this)}
                    style={{
                        background: `url('./image/topBtn.png') no-repeat center`,
                        backgroundSize: '100% 100%',
                    }}>会商</span>*/}
                {/*<span className={css(styles.btn)} style={{
                    background: `${this.props.current == 'unmediate' ? "url('./image/topBtn2.png') no-repeat center" : "url('./image/topBtn.png') no-repeat center"}`,
                    backgroundSize: '100% 100%',
                }}>公证</span>*/}
                {/* <span className={css(styles.btn)} style={{
                    background: `${this.props.current == 'unmediate' ? "url('./image/topBtn2.png') no-repeat center" : "url('./image/topBtn.png') no-repeat center"}`,
                    backgroundSize: '100% 100%',
                }} onClick={this.notarization.bind(this)}>公证</span> */}
                {/*<span className={css(styles.btn)}
                    onClick={this.mediate.bind(this)} 
                    style={{
                        background: `${this.props.current == 'mediate' ? "url('./image/topBtn2.png') no-repeat center" : "url('./image/topBtn.png') no-repeat center"}`,
                        backgroundSize: '100% 100%',
                    }}>调解</span>*/}
                {/*<span className={css(styles.btn)}
                    onClick={this.openNewpage.bind(this)}
                    style={{
                        background: `url('./image/topBtn.png') no-repeat center`,
                        backgroundSize: '100% 100%',
                    }}>110警情</span>*/}
{/*                 <span className={css(styles.logos2)}></span>
                <span className={css(styles.logos)}>海关监管服务指挥平台</span> */}
                <span className={css(styles.btn)}
                onClick={this.yinji.bind(this)}
                style={{
                    backgroundSize: '100% 100%',
                }}>应急安全</span>
                <span className={css(styles.btn)}
                onClick={this.huishang.bind(this)}
                style={{
                    backgroundSize: '100% 100%',
                }}>会商连线</span>
                <span className={css(styles.btn2)}
                onClick={this.mediate.bind(this)} 
                style={{
                    backgroundSize: '100% 100%',
                }}>快检态势</span>
            </h1>
        )
    }
}

export default connect(
    state => {
        return {
            current: state.mediate,
            areaname: state.currentAreaName
        }
    },
    dispatch => {
        return {
            clickNav: text => {
                dispatch(clickNavigation(text))
            },
            setData: data => {
                dispatch(setstateDataSource(data))
            },
            getLastCase: obj => {
                dispatch(changeLastCase(obj))
            },
            setTreatenentdata : (arr) =>{
                dispatch(setTreatenent(arr))
            }
        }
    }
)(Header);

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '60px',
        paddingLeft: '10px',
        paddingRight: '20px',
        position: 'fixed',
        top: 0,
        left: 0,
        boxSizing: 'border-box',
        margin: 0,
        zIndex: 2
    },
    logos:{
        width: '304px',
        height: '40px',
        lineHeight: '40px',
        textAlign: 'center',
        color: '#8BDEF9',  //#000000
        fontSize: '28px',
        fontWeight: 100,
        marginRight: '8px',
        marginTop: '10px',
        float: 'left',
        cursor: 'pointer',
        // border:'1px solid #000000'
    },
    logos2:{
        width: '43px',
        height: '43px',
        lineHeight: '40px',
        textAlign: 'center',
        color: '#000000',
        fontSize: '18px',
        fontWeight: 100,
        marginRight: '8px',
        marginLeft:'10px',
        marginTop: '10px',
        float: 'left',
        cursor: 'pointer',
        background:`url('./image/logos.png') no-repeat center`,
        backgroundSize:'43px 43px'
    },
    btn: {
        width: '104px',
        height: '40px',
        lineHeight: '40px',
        textAlign: 'center',
        background:`url('./image/topBtn.png') no-repeat center`,
        backgroundSize:'100% 100%',
        color: '#fff',
        fontSize: '17px',
        fontWeight: 400,
        marginRight: '8px',
        marginTop: '10px',
        float: 'right',
        cursor: 'pointer',
        // ':hover':{
        //     background:`url('./image/topBtn2.png') no-repeat center`,
        //     backgroundSize:'100% 100%'
        // }
    },
    btn2: {
        width: '104px',
        height: '40px',
        lineHeight: '40px',
        textAlign: 'center',
        background:`url('./image/topBtn2.png') no-repeat center`,
        backgroundSize:'100% 100%',
        color: '#fff',
        fontSize: '17px',
        fontWeight: 400,
        marginRight: '8px',
        marginTop: '10px',
        float: 'right',
        cursor: 'pointer',
        // ':hover':{
        //     background:`url('./image/topBtn2.png') no-repeat center`,
        //     backgroundSize:'100% 100%'
        // }
    }
})