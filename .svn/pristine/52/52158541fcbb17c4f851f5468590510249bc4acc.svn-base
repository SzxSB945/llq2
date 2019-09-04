import React from 'react';
import {StyleSheet,css} from 'aphrodite'
import { connect } from 'react-redux'
import { showInfoModal,geBburstCaseInfo,setBaiscId } from '../action/action'
import { Emergency,tiaojieJson,gongzhengJson,retina} from '../data/api'
import { PostFun,getDetail,getHuishang} from '../data/http'
import ShowBar3 from './showBar8'
import ShowBar6 from './showBar9'
import ShowBar7 from './showBar10'
import ShowBar11 from './showBar11'

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
//import 'echarts-gl'
import 'echarts/lib/component/visualMap'
import 'echarts/map/js/china'

/**
 * 获取图表的配置
 */
import provinceConfig from './provinces.config'

/**
 * 拿到点位数据
 */

import { childIds } from '../data/api'
import { getSupervision } from '../data/http'
import Axios from 'axios';


class InformationModal extends React.Component{
    closeModal(){
        this.props.ShowInfo('none');
        this.props.getBurstInfo({})
    }
    closeModal2(){
        document.getElementById("renwu").style.display="none";
    }
    async renwu(id){
        document.getElementById("renwu").style.display="block";
    }
    async yaocan(id){
        document.getElementById("longcan").style.display="none";
        document.getElementById("yaocan").style.display="block";
    }
    async yaocanclose(id){
        document.getElementById("yaocan").style.display="none";
    }
    async longcan(id){
        document.getElementById("yaocan").style.display="none";
        document.getElementById("longcan").style.display="block";
    }
    async longcanclose(id){
        document.getElementById("longcan").style.display="none";
    }
    /**
     * 连线
     * @param {*} id 
     */
    async link(id){
        await PostFun(Emergency(this.props.mediate,'hg0004'),{})   //hg0004
        // if( this.props.info.seriesName && (this.props.info.seriesName == '突发事件' || this.props.info.seriesName == '110警情')){
        //     /**
        //      * 请求retina
        //      */
        //     let retinaJson = await getDetail(retina(this.props.mediate,this.props.info.id))
        //     /**
        //     * emergency  type => ur;l
        //     */
        //    console.log(this.props.info.hsusername)
          
        //     await PostFun(Emergency(this.props.mediate,this.props.info.hsusername),retinaJson)
        // }else if( this.props.info.seriesName && this.props.info.seriesName == '辖区信息'){
        //     await PostFun(Emergency(this.props.mediate,this.props.info.username),{})
        // }
        
    }
    /**
     * 连线
     * @param {*} id 
     */
    async link2(id){
        await PostFun(Emergency(this.props.mediate,'hg0003'),{})   //hg0003
        // if( this.props.info.seriesName && (this.props.info.seriesName == '突发事件' || this.props.info.seriesName == '110警情')){
        //     /**
        //      * 请求retina
        //      */
        //     let retinaJson = await getDetail(retina(this.props.mediate,this.props.info.id))
        //     /**
        //     * emergency  type => ur;l
        //     */
        //    console.log(this.props.info.hsusername)
          
        //     await PostFun(Emergency(this.props.mediate,this.props.info.hsusername),retinaJson)
        // }else if( this.props.info.seriesName && this.props.info.seriesName == '辖区信息'){
        //     await PostFun(Emergency(this.props.mediate,this.props.info.username),{})
        // }
        
    }
    /**
     * 连线
     * @param {*} id 
     */
    async link3(id){
        await PostFun(Emergency(this.props.mediate,'hg0005'),{}) 
        // if( this.props.info.seriesName && (this.props.info.seriesName == '突发事件' || this.props.info.seriesName == '110警情')){
        //     /**
        //      * 请求retina
        //      */
        //     let retinaJson = await getDetail(retina(this.props.mediate,this.props.info.id))
        //     /**
        //     * emergency  type => ur;l
        //     */
        //    console.log(this.props.info.hsusername)
          
        //     await PostFun(Emergency(this.props.mediate,this.props.info.hsusername),retinaJson)
        // }else if( this.props.info.seriesName && this.props.info.seriesName == '辖区信息'){
        //     await PostFun(Emergency(this.props.mediate,this.props.info.username),{})
        // }
        
    }
    //modify by liulinqing 20190514连线修改
    // /**
    //  * 连线
    //  * @param {*} id 
    //  */
    // async link(id){
        
    //     if( this.props.info.seriesName && (this.props.info.seriesName == '突发事件' || this.props.info.seriesName == '110警情')){
    //         /**
    //          * 请求retina
    //          */
    //         let retinaJson = await getDetail(retina(this.props.mediate,this.props.info.id))
    //         /**
    //         * emergency  type => ur;l
    //         */
    //        console.log(this.props.info.hsusername)
          
    //         await PostFun(Emergency(this.props.mediate,this.props.info.hsusername),retinaJson)
    //     }else if( this.props.info.seriesName && this.props.info.seriesName == '辖区信息'){
    //         await PostFun(Emergency(this.props.mediate,this.props.info.username),{})
    //     }
        
    // }
    /**
     * 督查和介入
     * @param {type} params 督查和介入的mode
     */
    async supervision(type){
        let result = await Axios.get('http://127.0.0.1:1234/duty/meeting/user/'+ 'hg0004')
        let meetingId = result.data.m_id
        await getSupervision(type,meetingId)
    }
    //modify by liulinqing 20190514督查更改
    // /**
    //  * 督查和介入
    //  * @param {type} params 督查和介入的mode
    //  */
    // async supervision(type){
    //     // console.log('类型：'+type)
    //     // console.log(this.props.info)
    //     console.log('***************')
    //     console.log(this.props.info.username)
    //     if(this.props.info.seriesName == '调委会'){
    //         //console.log('调委会')
    //         let result = await Axios.get('http://rmtj.homolo.net/api/orgOverview?id=' + this.props.info.id)
    //         if(result.data.meetingid){
    //             await getSupervision(type,result.data.meetingid)
    //         }else{
    //             console.log('无会议号')
    //         }
    //     }else{
    //         if(this.props.info.meetingId){
    //             //console.log('事件')
    //             await getSupervision(type,this.props.info.meetingId)
    //         }else if(this.props.info.username){
    //             //console.log('司法所')
    //             let result = await Axios.get('http://127.0.0.1:1234/duty/meeting/user/'+ this.props.info.username)
    //             let meetingId = result.data.m_id
    //             await getSupervision(type,meetingId)
    //         }
    //     }
    // }

    async huishang(){
        //console.log('会商连线')
        try{
            await getHuishang('/sfj/connect')
        } catch (error) {
            console.log(error)
        }
        
    }
    /**
     * 下钻到调委会
     */
    async renderThebasiclevel (params){
        this.props.ShowInfo('none');
        this.props.setBaiscID(params.data.id)
        let china = echarts.init(document.getElementById('china'))
        china.clear()
        let url = childIds(this.props.mediate, params.data.id)
        let data = await getDetail(url)
        let dataTWH = []
        dataTWH[0] = {
            name: params.data.name,
            value: params.value,
            officeOnline: params.data.officeOnline,
            staffOnline: params.data.staffOnline,
            caseInProcessCount: params.data.caseInProcessCount,
            caseTodayInProcessCount: params.data.caseTodayInProcessCount,
            seriesName: '辖区信息',
            id:params.data.id
        }
        if (data.data.length > 0) {
            data.data.map((item, index) => {
                let geoCoord = [];
                geoCoord[0] = item.gps.split(',')[1]
                geoCoord[1] = item.gps.split(',')[0]
                if (geoCoord) {
                    dataTWH.push({
                        name: item.name,
                        value: geoCoord.concat(0),
                        officeOnline: item.officeOnline,
                        staffOnline: item.staffOnline,
                        caseInProcessCount: item.caseInProcessCount,
                        caseTodayInProcessCount: item.caseTodayInProcessCount,
                        seriesName: '调委会',
                        id:item.id
                    });
                }
            })
        }
        provinceConfig.geo.center = [params.value[0], params.value[1]];
        provinceConfig.geo.zoom = 2;
        provinceConfig.series[1].data = []
        provinceConfig.series[2].data = dataTWH
        provinceConfig.series[3].data = []
        china.setOption(provinceConfig)    
    }
    render(){

        let headerArr = []
        let arr = []
        if(this.props.info.seriesName &&  (this.props.info.seriesName == '突发事件' || this.props.info.seriesName == '110警情' )){
            arr.push(
                <div className={css(styles.tubiao)} key="1">
                    <div className={css(styles.listLi)}>
                        <span className={css(styles.liLabel)}>实验室信息：</span>
                        <span className={css(styles.liText)}></span>
                    </div>
                    <div className={css(styles.listLi)}>
                        <span className={css(styles.liLabel)}>实验室名称：</span>
                        <span className={css(styles.liText)}>{this.props.info.name}</span>
                    </div>
                    <div className={css(styles.listLi)}>
                        <span className={css(styles.liLabel)}>联系人：</span>
                        <span className={css(styles.liText)}>王工</span>
                    </div>
                    <div className={css(styles.listLi)}>
                        <span className={css(styles.liLabel)}>手机号：</span>
                        <span className={css(styles.liText)}>13688889999</span>
                    </div>
                    <div className={css(styles.listLi)}>
                        <span className={css(styles.liLabel)}>机构地址：</span>
                        <span className={css(styles.liText)}>{this.props.info.name}</span>
                    </div>
                </div>
                // <div className={css(styles.tubiao)} key="1">
                //     <div className={css(styles.listLi)}>
                //         <span className={css(styles.liLabel)}>首次报警：</span>
                //         <span className={css(styles.liText)}>{this.props.info.callTime}</span>
                //     </div>
                //     <div className={css(styles.listLi)}>
                //         <span className={css(styles.liLabel)}>当事人：</span>
                //         <span className={css(styles.liText)}>{this.props.info.callerName}</span>
                //     </div>
                //     <div className={css(styles.listLi)}>
                //         <span className={css(styles.liLabel)}>案由：</span>
                //         <span className={css(styles.liText)}>{this.props.info.cause}</span>
                //     </div>
                //     <div className={css(styles.listLi)}>
                //         <span className={css(styles.liLabel)}>联系电话：</span>
                //         <span className={css(styles.liText)}>{this.props.info.callerPhone}</span>
                //     </div>
                //     <div className={css(styles.listLi)}>
                //         <span className={css(styles.liLabel)}>事件地址：</span>
                //         <span className={css(styles.liText)}>{this.props.info.eventAddress}</span>
                //     </div>
                //     <div className={css(styles.listLi)}>
                //         <span className={css(styles.liLabel)}>处置日期：</span>
                //         <span className={css(styles.liText)}>{this.props.info.feedbackDate || ''}</span>
                //     </div>
                //     <div className={css(styles.listLi)}>
                //         <span className={css(styles.liLabel)}>处置人员：</span>
                //         <span className={css(styles.liText)}>{this.props.info.staff || ''}</span>
                //     </div>
                //     <div className={css(styles.listLi)}>
                //         <span className={css(styles.liLabel)}>所在单位：</span>
                //         <span className={css(styles.liText)}>{this.props.info.staffOrg || ''}</span>
                //     </div>
                // </div>
            )
        }else if( this.props.info.seriesName && (this.props.info.seriesName == '辖区信息' || this.props.info.seriesName == '调委会')){
            headerArr.push(
                <div>
                <span className={css(styles.titlespan)}>
                隶属关：{this.props.info.name}
                </span>
                <span className={css(styles.btn9)}
                onClick={this.link2.bind(this)}  //huishang
                style={{
                    backgroundSize: '100% 100%',
                }}>会商连线</span>
                </div>
            )
            arr.push(
                <div className={css(styles.tubiao9)} key="2">

                    <div className={css(styles.listleft)}>
                        <div className={css(styles.leftone)}> 
                            <span className={css(styles.liLabel3)}>企业数量：116</span>
                            <span className={css(styles.liLabel3)}>合格率：99.6%</span>
                            <span className={css(styles.liLabel3)}>执法终端：1</span>
                        </div>
                        <div id='renwu' style={{display:'none',width:'280px',zindex:9999999,height:'220px',cursor:'pointer',position:'absolute',bottom:'210px',left:'7px',border:'1px solid #000000',backgroundColor:'#fff'}}>
                            <span className={css(styles.close2)} onClick={this.closeModal2.bind(this)}></span>
                            <span className={css(styles.liLabel3)} style={{marginTop:'3px'}}>任务名：</span>
                            <span className={css(styles.liLabel31)} style={{marginTop:'3px'}}>隶属关：京关保税</span>
                            <span className={css(styles.liLabel31)} style={{marginTop:'3px'}}>企业：北京东升食品贸易有限公司</span>
                            <span className={css(styles.liLabel31)} style={{marginTop:'3px'}}>报关单号：6328505902</span>
                            <span className={css(styles.liLabel31)} style={{marginTop:'3px'}}>金额：20万</span>
                            <span className={css(styles.liLabel31)} style={{marginTop:'3px'}}>时间：2019-05-16 15:05:06</span>
                            <span className={css(styles.liLabel31)} style={{marginTop:'3px'}}>处理时间：2019-05-16 16:05:06</span>
                            <span className={css(styles.btn19)}
                            onClick={this.link3.bind(this)}  //huishang
                            style={{
                                backgroundSize: '100% 100%',
                            }}>会商连线</span>
                        </div>
                        <div className={css(styles.lefttwo)}>
                            <span className={css(styles.liLabel3)}>现场执法移动终端：</span>
                            <table className={css(styles.tableclass)} border="1px solid #64C2FF" cellspacing="0">
                                <tr className={css(styles.trclassHeard)}>
                                    <td className={css(styles.trclassHeard)}>抽检人员</td>
                                    <td className={css(styles.trclassHeard)}>企业名</td>
                                    <td className={css(styles.trclassHeard)}>金额</td>
                                </tr>
                                <tr className={css(styles.trclass)} onClick={this.renwu.bind(this)}>
                                    <td>陈旭东</td>
                                    <td>东升食品</td>
                                    <td>20万</td>
                                </tr>
                                <tr className={css(styles.trclass)}>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr className={css(styles.trclass)}>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr className={css(styles.trclass)}> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr className={css(styles.trclass)}>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr className={css(styles.trclass)}>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                        </div>

                        <div className={css(styles.leftthree)}>
                            <ShowBar11/>
                        </div>
                    </div>
                    <div className={css(styles.listcenter)}>
                    <div className={css(styles.centerone)}>
                            <span className={css(styles.liLabel3)}>&nbsp;检测总额：96万元    当日任务数：7</span>
                            <table className={css(styles.tableclass)} border="1px solid #000000" cellspacing="0">
                                <tr className={css(styles.trclassHeard)}>
                                    <td className={css(styles.trclassHeard)}>企业名</td>
                                    <td className={css(styles.trclassHeard)}>报检信息</td>
                                    <td className={css(styles.trclassHeard)}>报检时间</td>
                                    <td className={css(styles.trclassHeard)}>金额</td>
                                </tr>
                                <tr className={css(styles.trclass)}>
                                    <td>宇恒通顺食品</td>
                                    <td>冰鲜三文鱼</td>
                                    <td>2019-05-17</td>
                                    <td>11万</td>
                                </tr>
                                <tr className={css(styles.trclass)}>
                                    <td>鑫荣食品</td>
                                    <td>冷冻牛肉</td>
                                    <td>2019-05-17</td>
                                    <td>13万</td>
                                </tr>
                                <tr className={css(styles.trclass)}>
                                <td>鑫荣食品</td>
                                    <td>冷冻鲜牛肉</td>
                                    <td>2019-05-17</td>
                                    <td>7万</td>
                                </tr>
                                <tr className={css(styles.trclass)}>
                                <td>海之渔食品</td>
                                    <td>冰鲜三文鱼</td>
                                    <td>2019-05-17</td>
                                    <td>16万</td>
                                </tr>
                                <tr className={css(styles.trclass)}>
                                <td>海之渔食品</td>
                                    <td>冰鲜三文鱼</td>
                                    <td>2019-05-17</td>
                                    <td>14万</td>
                                </tr>
                                <tr className={css(styles.trclass)}>
                                <td>妙多食品</td>
                                    <td>牛奶</td>
                                    <td>2019-05-17</td>
                                    <td>20万</td>
                                </tr>
                                <tr className={css(styles.trclass)}>
                                <td>浩宇明达食品</td>
                                    <td>饼干</td>
                                    <td>2019-05-17</td>
                                    <td>15万</td>
                                </tr>
                                <tr className={css(styles.trclass)}>
                                <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr className={css(styles.trclass)}>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr className={css(styles.trclass)}>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                        </div>
                        <div className={css(styles.centertwo)}>
                            <div className={css(styles.centerItem1)}><ShowBar6/></div>
                            <div className={css(styles.centerItem2)}><ShowBar7/></div>
                        </div>
                    </div>
                    <div className={css(styles.listright)}>
                        <div className={css(styles.rightone)}>
                            <div className={css(styles.paneldiv)}>
                            <span className={css(styles.liLabel3)}>不合格预警：</span>
                            <span className={css(styles.liLabel2)}>日期：2019-05-13</span>
                            <span className={css(styles.liLabel2)}>时间：10:06:20</span>
                            <span className={css(styles.liLabel2)}>隶属关：机场货管</span>
                            <span className={css(styles.liLabel2)}>企业:北京一零六食品贸易有限公司</span>
                            <span className={css(styles.liLabel2)}>报关单号：520050532000003</span>
                            <span className={css(styles.liLabel2)}>不合格指标：呋喃妥因超标 0.8</span>
                            <span className={css(styles.liLabel2)}>指标正常范围：0</span>
                            </div>
                        </div>
                        <div className={css(styles.righttwo)}>
                            <div className={css(styles.rightItem2)}><ShowBar3/></div>
                        </div>
                        <div className={css(styles.rightthree)}>
                            <span className={css(styles.liLabel3)} style={{marginTop:'10px'}}>实验室检测能力：</span>
                            <span className={css(styles.liLabel2)} style={{marginTop:'5px'}}>检测项目：</span>
                            <span className={css(styles.liLabel2)}>&nbsp;&nbsp;<a className={css(styles.yaocana)} onClick={this.yaocan.bind(this)}>药残</a>、<a className={css(styles.yaocana)} onClick={this.longcan.bind(this)}>农残</a>、重金属</span>
                            <span className={css(styles.liLabel2)} style={{marginTop:'10px'}}>覆盖的行业：</span>
                            <span className={css(styles.liLabel2)}>&nbsp;&nbsp;肉类、生鲜、果蔬</span>
                        </div>
                        
                        <div id='yaocan' onClick={this.yaocanclose.bind(this)} style={{display:'none',width:'195px',height:'210px',cursor:'pointer',position:'absolute',bottom:'130px',border:'1px solid #000000',backgroundColor:'#fff'}}>
                            <span className={css(styles.liLabel3)} style={{marginTop:'3px'}}>药残：</span>
                            <span className={css(styles.liLabel3)} style={{marginTop:'3px'}}>检测项1：多氯联苯</span>
                            <span className={css(styles.liLabel3)} style={{marginTop:'3px'}}>检测项2：氯霉素</span>
                            <span className={css(styles.liLabel3)} style={{marginTop:'3px'}}>检测项3：呋喃唑酮</span>
                            <span className={css(styles.liLabel3)} style={{marginTop:'3px'}}>检测项4：呋喃它酮</span>
                            <span className={css(styles.liLabel3)} style={{marginTop:'3px'}}>检测项5：呋喃妥因</span>
                        </div> 
                        <div id='longcan' onClick={this.longcanclose.bind(this)} style={{display:'none',width:'195px',height:'210px',cursor:'pointer',position:'absolute',bottom:'130px',border:'1px solid #000000',backgroundColor:'#fff'}}>
                            <span className={css(styles.liLabel3)} style={{marginTop:'3px'}}>农残：</span>
                            <span className={css(styles.liLabel3)} style={{marginTop:'3px'}}>检测项1：联苯菊酯</span>
                            <span className={css(styles.liLabel3)} style={{marginTop:'3px'}}>检测项2：甲氰菊酯</span>
                            <span className={css(styles.liLabel3)} style={{marginTop:'3px'}}>检测项3：三氯杀螨醇</span>
                            <span className={css(styles.liLabel3)} style={{marginTop:'3px'}}>检测项4：水胺硫磷</span>
                            <span className={css(styles.liLabel3)} style={{marginTop:'3px'}}>检测项5：克百威</span>
                        </div>
                    </div>
                    {/* <div className={css(styles.listLi)}>
                        <span className={css(styles.liLabel)}>辖区名称：</span>
                        <span className={css(styles.liText)}>{this.props.info.name || ''}</span>
                    </div>
                    <div className={css(styles.listLi)}>
                        <span className={css(styles.liLabel)}>辖区在线：</span>
                        <span className={css(styles.liText)}>{this.props.info.officeOnline || 0}</span>
                    </div>
                    <div className={css(styles.listLi)}>
                        <span className={css(styles.liLabel)}>在线人员：</span>
                        <span className={css(styles.liText)}>{this.props.info.staffOnline || 0}</span>
                    </div>
                    <div className={css(styles.listLi)}>
                        <span className={css(styles.liLabel)}>在办案件：</span>
                        <span className={css(styles.liText)}>{this.props.info.caseInProcessCount || 0}</span>
                    </div>
                    <div className={css(styles.listLi)}>
                        <span className={css(styles.liLabel)}>今日在办：</span>
                        <span className={css(styles.liText)}>{this.props.info.caseTodayInProcessCount || 0}</span>
                    </div> */}
                </div>
            )
        }
        let btnsArr = []
        
        if(this.props.config.data){
            {/*btnsArr.push(
                <div key="1">
                    <div className={css(styles.btn1)} onClick={this.link.bind(this)}>连线</div>
                    <div className={css(styles.btn1)} onClick={this.supervision.bind(this,'silence')}>督查</div>
                    <div className={css(styles.btn1)} onClick={this.supervision.bind(this,'normal')}>介入</div>
                    <div className={css(styles.btn1)} onClick={this.renderThebasiclevel.bind(this,this.props.config)}>辖区</div>
                </div>
            )*/}
            // btnsArr.push(
            //     <div key="1">
            //         <div className={css(styles.btn1)} onClick={this.link.bind(this)}>连线</div>
            //         <div className={css(styles.btn1)} onClick={this.supervision.bind(this,'silence')}>督查</div>
            //         <div className={css(styles.btn1)} onClick={this.supervision.bind(this,'normal')}>介入</div>
            //         <div className={css(styles.btn1)} onClick={this.renderThebasiclevel.bind(this,this.props.config)}>辖区</div>
            //     </div>
            // )

            
        }else{
            
            // if(this.props.info.seriesName &&  (this.props.info.seriesName == '突发事件' || this.props.info.seriesName == '辖区信息')){  //
            //     btnsArr.push(
            //         <div key="2">
            //             <div className={css(styles.btn)} onClick={this.link.bind(this)}>连线</div>
            //             <div className={css(styles.btn)} onClick={this.supervision.bind(this,'silence')}>督查</div>
            //             <div className={css(styles.btn)} onClick={this.supervision.bind(this,'normal')}>介入</div>
            //         </div>
            //     )
            // }
            console.log("***************************")
            console.log(this.props.info.seriesName)
            if(this.props.info.seriesName &&  (this.props.info.seriesName == '突发事件' )){  //|| this.props.info.seriesName == '辖区信息'
                btnsArr.push(
                    <div key="2">
                        
                        <div className={css(styles.btn)} onClick={this.supervision.bind(this,'silence')}>督查</div>
                        <div className={css(styles.btn)} onClick={this.link.bind(this)}>会商连线</div>
                        {/*<div className={css(styles.btn)} onClick={this.supervision.bind(this,'normal')}>介入</div>*/}
                    </div>
                )
            }else if(this.props.info.seriesName == '110警情'){
                btnsArr.push(
                    <div key="2">
                        <div className={css(styles.btna)} onClick={this.link.bind(this)}>连线</div>
                        {/* <div className={css(styles.btn)} onClick={this.supervision.bind(this,'silence')}>督查</div>
                        <div className={css(styles.btn)} onClick={this.supervision.bind(this,'normal')}>介入</div> */}
                    </div>
                )
            }else{
                btnsArr.push(
                    <div key="2">
                        {/* <div className={css(styles.btn2)} onClick={this.supervision.bind(this,'silence')}>督查</div>
                        <div className={css(styles.btn2)} onClick={this.supervision.bind(this,'normal')}>介入</div> */}
                    </div>
                )
            }
        }
        if(this.props.info.seriesName &&  (this.props.info.seriesName == '突发事件' )){
            return(
                <div className={css(styles.container2)}>
                    <div className={css(styles.header)}>
                        {headerArr}
                        {/*{this.props.info.seriesName || ''}
                        <span className={css(styles.jiantouL)}></span>
                        <span className={css(styles.jiantouR)}></span>*/}
                        <span className={css(styles.close)} onClick={this.closeModal.bind(this)}></span>
                    </div>
                    {arr}
                    {btnsArr}
                </div>
            )
        }else{
            return(
                <div className={css(styles.container)}>
                    <div className={css(styles.header)}>
                        {headerArr}
                        {/*{this.props.info.seriesName || ''}
                        <span className={css(styles.jiantouL)}></span>
                        <span className={css(styles.jiantouR)}></span>*/}
                        <span className={css(styles.close)} onClick={this.closeModal.bind(this)}></span>
                    </div>
                    {arr}
                    {btnsArr}
                </div>
            )
        }
    }
}
export default connect(
    state => {
        return {
            info : state.burstCaseInfo,
            mediate :state.mediate,
            judicalName : state.currentJudicalName
        }
    },
    dispatch=>{
        return {
            ShowInfo : text=>{
                dispatch(showInfoModal(text))
            },
            getBurstInfo : (obj)=>{
                dispatch(geBburstCaseInfo(obj))
            },
            setBaiscID : text =>{
                dispatch(setBaiscId(text))
            }
        }
    }
)(InformationModal)
const styles = StyleSheet.create({
    tableclass:{
        textAlign:'center',
        width:'94%',
        height:'85%',
        marginLeft:'3%',
        border:'1px solid #64C2FF',
        marginTop:'8px'
    },
    trclassHeard:{
        height:'12px',
        lineHeight:'12px',
        backgroundColor:'#64C2FF',
        color:'#000000'
    },
    yaocana:{
        color:'#64C2FF',
        cursor:'pointer'
    },
    trclass:{
        height:'15px',
        lineHeight:'15px',
        fontSize:'15px'

    },
    centerItem1:{
        width:'60%',
        height:'100%',
        float:'right'
    },
    centerItem2:{
        width:'39%',
        height:'100%',
        float:'right',
        marginRight:'1%'
    },
    rightItem2:{
        width:'100%',
        height:'200px',
        //padding:'6px 6px 13px',
        boxSizing:'border-box',
        color:'#fff',
        background:`url('./image/gfxaj.png') center center no-repeat`,
        background:'none',
        backgroundSize:'100%',
        marginTop:'2px',
        float:'right'
    },
    container4:{
        width:'100%',
        height:'100%',
        position:'relative'
    },
    header4:{
        width:'166px',
        height:'35px',
        lineHeight:'30px',
        fontSize:'17px',
        color:'#090909',
        textIndent:'1em',
        position:'absolute',
        top:10,
        right:0
    },
    tubiao4:{
        paddingTop:'32px',
        boxSizing:'border-box'
    },
    showDiv4:{
        width:'358px',
        height:'240px',
        float:'right',
        overflow:'hidden',
        overflowY:'hidden',
        //background:'red'
    },
    container2:{
        width:'400px',
        height:'280px',
        padding: '10px',
        boxSizing: 'border-box',
        position:'relative',
        background:`url('./image/tcK.png') center center no-repeat`,
        // background:'none',
        // backgroundColor:'#fff',
        backgroundSize:'100% 100%',
        // border:'2px solid #000000'
        
    },
    leftone:{
        width:'100%',
        border:'1px solid #64C2FF',
        height:'100px',
        color:'#fff'
    },
    centerone:{
        width:'100%',
        height:'420px',
        border:'1px solid #64C2FF',
        color:'#fff'
    },
    rightone:{
        width:'100%',
        border:'1px solid #64C2FF',
        height:'220px',
        color:'#fff'
    },
    paneldiv:{
        width:'100%',
        height:'100%',
        overflowX:'scroll',
        color:'#fff'
    },
    lefttwo:{
        width:'100%',
        border:'1px solid #64C2FF',
        height:'300px',
        marginTop:'18px',
        color:'#fff'
    },
    centertwo:{
        width:'100%',
        height:'220px',
        marginTop:'8px'
    },
    righttwo:{
        width:'100%',
        height:'220px',
        marginTop:'18px'
    },
    rightthree:{
        width:'100%',
        height:'177px',
        marginTop:'0px',
        border:'1px solid #64C2FF',
        color:'#fff'
    },
    leftthree:{
        width:'100%',
        height:'230px',
        marginTop:'18px'
    },
    container:{
        width:'100%',
        height:'100%',
        padding: '10px',
        boxSizing: 'border-box',
        position:'relative',
        background:`url('./image/tcK.png') center center no-repeat`,
        background:'none',
        backgroundColor:'#07297A',
        backgroundSize:'100% 100%',
        border:'2px solid #64C2FF'
        
    },
    titlespan:{
        color:'#fff'
    },
    header:{
        width:'100%',
        height:'30px',
        lineHeight:'30px',
        padding:'0 5px',
        boxSizing:'border-box',
        fontSize:'18px',
        color:'#00feff',
        textAlign:'left',
        position:'relative'
    },
    jiantouL:{
        width:'40px',
        height:'40px',
        float:'left',
        background:`url('./image/jiantouL.png') center right no-repeat`,
        backgroundSize:'50%',
    },
    listleft:{
        float:'left',
        width:'20%',
        height:'100%'
    },
    listcenter:{
        float:'left',
        width:'57%',
        height:'100%',
        marginLeft:'1%'
    },
    listright:{
        float:'left',
        width:'20%',
        height:'100%',
        marginLeft:'1%'
    },
    jiantouR:{
        width:'40px',
        height:'40px',
        float:'right',
        background:`url('./image/jiantouL.png') center right no-repeat`,
        backgroundSize:'50%',
        transform:'rotateY(180deg)'
    },
    close2:{
        width:'30px',
        height:'30px',
        background:`url('./image/close.png') center center no-repeat`,
        backgroundSize:'60%',
        position:'absolute',
        right:'10px',
        top:'2px',
        cursor:'pointer',
        // border:'1px solid #000000'
    },
    close:{
        width:'30px',
        height:'30px',
        background:`url('./image/close.png') center center no-repeat`,
        backgroundSize:'60%',
        position:'absolute',
        right:'20px',
        bottom:'-2px',
        cursor:'pointer',
        // border:'1px solid #000000'
    },
    tubiao:{
        width:'100%',
        height:'145px',
        position:'relative',
        overflow:'hidden'
    },
    tubiao9:{
        width:'100%',
        height:'95%',
        marginTop:'8px',
        position:'relative',
        overflow:'hidden'
    },
    listLi:{
        width:'100%',
        height:'25px',
        color:'#fff',
        padding:'0 30px',
        boxSizing:'border-box'
    },
    liLabel4:{
        float:'left',
        width:'100%',
        height:'15px',
        lineHeight:'15px',
        textAlign:'left',
        fontSize:'15px',
        padding:'0px 30px'
    },
    liLabel31:{
        float:'left',
        width:'100%',
        height:'15px',
        lineHeight:'15px',
        textAlign:'left',
        fontSize:'15px',
        padding:'2px 30px'
    },
    liLabel3:{
        float:'left',
        width:'100%',
        height:'26px',
        lineHeight:'26px',
        textAlign:'left',
        fontSize:'17px',
        padding:'2px 10px'
    },
    liLabel2:{
        float:'left',
        width:'140%',
        height:'15px',
        lineHeight:'15px',
        textAlign:'left',
        fontSize:'17px',
        padding:'5px 8px'
    },
    liLabel:{
        float:'left',
        width:'30%',
        height:'25px',
        lineHeight:'25px',
        textAlign:'right',
        fontSize:'15px'
    },
    liText:{
        float:'left',
        width:'70%',
        height:'25px',
        lineHeight:'25px',
        textIndent:'1em',
        fontSize:'15px',
        overflow:'hidden',
        textOverflow: 'ellipsis',
        wordWrap:'break-word'
    },
    liText2:{
        float:'left',
        width:'70%',
        height:'45px',
        textIndent:'1em',
        fontSize:'15px',
        overflow:'hidden',
        textOverflow: 'ellipsis',
        wordWrap:'break-word'
    },
    footer:{
        width:'100%',
        height:'35px',
        padding:'0 10px',
        boxSizing:'border-box'
        // border:'1px solid red'
    },
    btn9: {
        width: '104px',
        height: '30px',
        lineHeight: '30px',
        textAlign: 'center',
        color: '#000000',
        fontSize: '18px',
        fontWeight: 100,
        marginRight: '58px',
        marginTop: '0px',
        float: 'right',
        cursor: 'pointer',
        backgroundColor:'#199ED8',
        // background:`url("./image/topBtn.png") no-repeat center`,  //topBtn lxbtn
        backgroundSize:'100% 100%'
        // ':hover':{
        //     background:`url('./image/topBtn2.png') no-repeat center`,
        //     backgroundSize:'100% 100%'
        // }
    },
    btn19: {
        width: '104px',
        height: '30px',
        lineHeight: '30px',
        textAlign: 'center',
        color: '#000000',
        fontSize: '18px',
        fontWeight: 100,
        marginRight: '88px',
        marginTop: '10px',
        float: 'right',
        cursor: 'pointer',
        backgroundColor:'#199ED8',
        // background:`url("./image/topBtn.png") no-repeat center`,  //topBtn lxbtn
        backgroundSize:'100% 100%'
        // ':hover':{
        //     background:`url('./image/topBtn2.png') no-repeat center`,
        //     backgroundSize:'100% 100%'
        // }
    },
    btn:{
        width:'27.3%',
        height:'35px',
        lineHeight:'35px',
        margin:'0 10%',
        background:`url("./image/lxbtn.png") no-repeat center`,
        // backgroundColor:'#169BD5',
        backgroundSize:'100% 100%',
        float:'left',
        boxSizing:'border-box',
        color:'#fff',
        textAlign:'center',
        cursor:'pointer'
    },
    btna:{
        width:'27.3%',
        height:'35px',
        lineHeight:'35px',
        margin:'0 auto',
        background:`url("./image/lxbtn.png") no-repeat center`,
        backgroundSize:'100% 100%',
        // float:'left',
        boxSizing:'border-box',
        color:'#fff',
        textAlign:'center',
        cursor:'pointer'
    },
    btn1:{
        width:'19%',
        height:'35px',
        lineHeight:'35px',
        margin:'0 3%',
        background:`url("./image/lxbtn.png") no-repeat center`,
        backgroundSize:'100% 100%',
        float:'left',
        boxSizing:'border-box',
        color:'#fff',
        textAlign:'center',
        cursor:'pointer'
    },
    btn2:{
        width:'44%',
        height:'35px',
        lineHeight:'35px',
        margin:'0 3%',
        background:`url("./image/lxbtn.png") no-repeat center`,
        backgroundSize:'100% 100%',
        float:'left',
        boxSizing:'border-box',
        color:'#fff',
        textAlign:'center',
        cursor:'pointer'
    }
})