import React from 'react';
import {StyleSheet,css} from 'aphrodite'
import axios from 'axios'

class Buttons extends React.Component{
    // JoinMeeting(){
    //     let ip = 'http://localhost:1234'
    //     let userName = 'shsfgz'
    //     axios.get(`${ip}/duty/meeting/user/${userName}`).then(rtn=>{
    //         let meetingid = rtn.data.m_id;
    //         let password  = rtn.data.m_password;
    //         axios.get(`${ip}/meeting/join/${meetingid}/${password}`).then(rtn=>{
    //             console.log(rtn.data)
    //         })
    //     })
    // }
    render(){
        return(
            <div className={css(styles.container)}>
                <div className={css(styles.containerItemL)}></div>
                <div className={css(styles.containerItem1)}>
                    <span className={css(styles.containerSpan)}>调解督查</span>
                </div>
                <div className={css(styles.containerItem2)}></div>
                <div className={css(styles.containerItem3)}>
                    <span className={css(styles.containerSpan)}>指挥连线</span>
                </div>
                <div className={css(styles.containerItemR)}></div>
            </div>
        )
    }
}
export default Buttons

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        color:'#fff',
        padding:'0 100px 40px',
        boxSizing:'border-box',
        display:'-webkit-flex',
        flexDirection : 'row'
    },
    containerItemL:{
        flexGrow: 0.5,
        background:`url('./image/biaotizhuangshi.png') right center no-repeat`,
        backgroundSize:'55%'
    },
    containerItemR:{
        flexGrow: 0.5,
        background:`url('./image/biaotizhuangshi.png') right center no-repeat`,
        backgroundSize:'55%',
        transform:'rotate(180deg)',
    },
    containerItem1:{
        flexGrow: 1,
        background:`url('./image/menuTwo.png') center center no-repeat`,
        backgroundSize:'contain',
        cursor:'pointer'
    },
    containerItem2:{
        flexGrow: 1,
        background:`url('./image/menuJt.png') center center no-repeat`,
        backgroundSize:'85%'
    },
    containerItem3:{
        flexGrow: 1,
        background:`url('./image/menuTwo.png') center center no-repeat`,
        backgroundSize:'contain',
        cursor:'pointer'
    },
    containerSpan:{
        width:'47px',
        height:'50px',
        lineHeight:'24px',
        textAlign:'center',
        display:'inline-block',
        position:'relative',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
    }
})