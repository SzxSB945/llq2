import React from 'react'
import {StyleSheet,css} from 'aphrodite'
import { fadeInDown } from 'react-animations';
import { connect } from 'react-redux'
  
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
//import 'echarts-gl'
import 'echarts/lib/component/visualMap'
import 'echarts/map/js/china'
import $ from 'jquery'

/**
 * 引入action
 */
import {
    showInfoModal,
    geBburstCaseInfo,
    showInfoModalPosition,
    setstateDataSource,
    changeLastCase,
    setCurrentAreaName,
    setCurrentJudicalName,
    setBaiscId,
    setDetailmodalVision,
    setTreatenent
} from '../action/action'

/**
 * 获取图表的配置
 */
import provinceConfig from './provinces.config'
import provinces from './provinces'
import citys from './citys'

/**
 * 引入组件
 */
import Buttons from './buttons'
import ButtonsNot from './buttonsNot'
import InformationModal from './dataModal'
import TodayNews from './todayNews'
import ShowBar6 from './showBar6'
import ShowBar7 from './showBar7'

/**
 * 拿到点位数据
 */
import areaConfig from '../data/area.config'
import { detail , childIds } from '../data/api'
import { getHighRisk,getDetail,getTreatenent } from '../data/http'

const label = ['机场货管', '京监管处', '京关展览', '京关保税', '京涉外处', '京关关税', '机场库区', '机场旅检', '平谷海关', '京五里店', '京邮办处', '京中关村', '京国际局', '京东郊站', '机场货二', '京开发区','十八里店','旅检征税']
// const label = ['黄浦区', '徐汇区', '长宁区', '静安区', '普陀区', '虹口区', '杨浦区', '闵行区', '宝山区', '嘉定区', '浦东新区', '金山区', '松江区', '青浦区', '奉贤区', '崇明区']

class shanghaiMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectState: false, //下拉框打开和闭合
            lunbo      : false, //轮播开关
            basicparam : {} ,//下钻到调委会
        }
    }
    /**
     * 地图——数据配置---司法所点位
     */
    async renderSFS() {
        try {
            let sfsGPS = []
            provinceConfig.series[2].data = sfsGPS

            let url = childIds(this.props.mediate, areaConfig(this.props.mediate, "北京"))  ///this.props.areaname
            let sfsData = await getDetail(url)
            if (sfsData.data.length > 0) {
                sfsData.data.map((item, index) => {
                    let geoCoord = [];
                    geoCoord[0] = item.gps.split(',')[1]
                    geoCoord[1] = item.gps.split(',')[0]
                    if (geoCoord) {
                        sfsGPS.push({
                            name: item.area,
                            value: geoCoord.concat(0),
                            officeOnline: item.officeOnline,
                            staffOnline: item.staffOnline,
                            caseInProcessCount: item.caseInProcessCount,
                            caseTodayInProcessCount: item.caseTodayInProcessCount,
                            seriesName: '辖区信息',
                            id : item.id,
                            username : item.hsusername
                        });
                    }
                })
            }
            //console.log("返回数据：");
            //console.log(sfsGPS);
            return sfsGPS
        } catch (error) {
            console.log('司法所点位')
            console.log(error)
        }
    }
    /**
     * 地图——数据配置---突发事件点位
     */
    async renderScatter() {
        var res = [];
        provinceConfig.series[1].data = res
        let highriskdata = await getHighRisk(this.props.mediate, areaConfig(this.props.mediate, this.props.areaname))
        // console.log('=======突发事件========')
        // console.log(highriskdata)
        // console.log(highriskdata.emergencies)
        if (highriskdata.emergencies.length > 0) {
            highriskdata.emergencies.map((item, index) => {
                let geoCoord = [];
                geoCoord[0] = item.gps.split(',')[1]
                geoCoord[1] = item.gps.split(',')[0]
                if (geoCoord) {
                    res.push({
                        name: item.title,
                        id: item.id,
                        value: geoCoord.concat(0),
                        location: item.location, // 地址
                        caseType: item.description, // 事项类型
                        status: item.status, // 案件状态
                        notary: item.mediator, // 公证员
                        notarialOffice: item.mediationCommittee, // 公证机构
                        seriesName: '突发事件',
                        meetingId : '910091626517'
                    });
                }
            })
        }
        return res
        
    }
    /**
     * 地图——数据配置---110警情点位
     */
    async renderHighRiskScatter() {
        var res = [];
        provinceConfig.series[3].data = res
        //console.log("参数：");
        //console.log(this.props.mediate);
        //console.log(this.props.mediate);
        //console.log(this.props.areaname);
        //let treatenentdata = await getTreatenent(this.props.mediate, areaConfig(this.props.mediate, this.props.areaname))
        let treatenentdata = await getTreatenent(this.props.mediate, areaConfig(this.props.mediate, "北京"))
        //console.log('********************')
        //console.log(treatenentdata)
        this.props.setTreatenentdata(treatenentdata.data)
        if (treatenentdata.length > 0) {
            treatenentdata.map((item, index) => {
                let geoCoord = [];
                geoCoord[0] = item.gps.split(',')[1]
                geoCoord[1] = item.gps.split(',')[0]
                if (geoCoord) {
                    res.push({
                        callTime: item.callerName,
                        id: item.id,
                        value: geoCoord.concat(0),
                        callerName:item.callerName,
                        cause:item.cause,
                        callerPhone:item.callerPhone,
                        eventAddress: item.eventAddress, // 地址
                        feedbackDate: item.feedbackDate, // 案件状态
                        staff: item.staff, // 公证员
                        staffOrg: item.staffOrg, // 公证机构
                        seriesName: '110警情',
                        meetingId : item.hsusername
                    });
                }
            })
        }
        return res
    }
    async renderProvincesMap(mapCode, name) {
        
        if(this.props.dataSource && this.props.dataSource.treatevent){
            let treatenentlast = this.props.dataSource.treatevent[0]
            
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
        let china = echarts.init(document.getElementById('china'))
        china.clear()
        $.get(mapCode, data => {
            let datas = []
            let datajson
            if (data && mapCode) {
                if (typeof (data) == 'string') {
                    datajson = eval("(" + data + ")")
                } else {
                    datajson = data
                }
                echarts.registerMap(name, data)
                datajson.features.map(item => {
                    datas.push({
                        name: item.properties.name,
                        value: parseInt(Math.random(0, 1) * 1000)
                    })
                })
                //console.log(datas);
                //modify by liulinqing 20190508 地图区域设置
                datas = [{name:"密云县",value:23},{name:"怀柔区",value:1123},{name:"房山区",value:123},{name:"延庆县",value:123},{name:"门头沟区",value:1566.34},{name:"昌平区",value:1623},
                {name:"大兴区",value:623},{name:"顺义区",value:1123},{name:"平谷区",value:323},{name:"通州区",value:1523},{name:"朝阳区",value:423},{name:"海淀区",value:823},
                {name:"丰台区",value:1223},{name:"石景山区",value:1523},{name:"西城区",value:1123},{name:"东城区",value:1923},{name:"宣武区",value:123},{name:"崇文区",value:2123}]
                // china.clear();
                //console.log(datas);
                provinceConfig.geo.center = ['47%', '50%'];
                provinceConfig.geo.zoom = 1;
                provinceConfig.geo.map = name;
                provinceConfig.series[0].data = datas;
                let that = this

                china.setOption(provinceConfig)

                //设置隶属关坐标点
                var opss = [{name:"机场货管",value:[116.60038,40.085756,0],officeOnline:312,staffOnline:1411,caseInProcessCount:19,
                                caseTodayInProcessCount:0,id:"1919f62326314b6fbff7d570f4aead62",seriesName:"辖区信息",username:""},
                                {name:"京监管处",value:[116.573759,40.086815,0],officeOnline:312,staffOnline:1411,caseInProcessCount:19,
                                caseTodayInProcessCount:0,id:"1919f62326314b6fbff7d570f4aead62",seriesName:"辖区信息",username:""},
                                {name:"京关展览",value:[116.499297,39.902957,0],officeOnline:312,staffOnline:1411,caseInProcessCount:19,
                                caseTodayInProcessCount:0,id:"1919f62326314b6fbff7d570f4aead62",seriesName:"辖区信息",username:""},
                                {name:"京涉外处",value:[117.027442,40.092313,0],officeOnline:312,staffOnline:1411,caseInProcessCount:19,
                                caseTodayInProcessCount:0,id:"1919f62326314b6fbff7d570f4aead62",seriesName:"辖区信息",username:""},
                                {name:"京关保税",value:[116.603039,40.116385,0],officeOnline:312,staffOnline:1411,caseInProcessCount:19,
                                caseTodayInProcessCount:0,id:"1919f62326314b6fbff7d570f4aead62",seriesName:"辖区信息",username:""},
                                {name:"京开发区",value:[116.512158,39.805319,0],officeOnline:312,staffOnline:1411,caseInProcessCount:19,
                                caseTodayInProcessCount:0,id:"1919f62326314b6fbff7d570f4aead62",seriesName:"辖区信息",username:""},
                                {name:"十八里店",value:[116.485418,39.843556,0],officeOnline:312,staffOnline:1411,caseInProcessCount:19,
                                caseTodayInProcessCount:0,id:"1919f62326314b6fbff7d570f4aead62",seriesName:"辖区信息",username:""},
                                {name:"京邮办处",value:[116.442547,39.918916,0],officeOnline:312,staffOnline:1411,caseInProcessCount:19,
                                caseTodayInProcessCount:0,id:"1919f62326314b6fbff7d570f4aead62",seriesName:"辖区信息",username:""},
                                {name:"京五里店",value:[116.260163,39.865294,0],officeOnline:312,staffOnline:1411,caseInProcessCount:19,
                                caseTodayInProcessCount:0,id:"1919f62326314b6fbff7d570f4aead62",seriesName:"辖区信息",username:""},
                                {name:"京中关村",value:[116.340921,39.982662,0],officeOnline:312,staffOnline:1411,caseInProcessCount:19,
                                caseTodayInProcessCount:0,id:"1919f62326314b6fbff7d570f4aead62",seriesName:"辖区信息",username:""},
                                {name:"京关展览",value:[116.447397,39.967615,0],officeOnline:312,staffOnline:1411,caseInProcessCount:19,
                                caseTodayInProcessCount:0,id:"1919f62326314b6fbff7d570f4aead62",seriesName:"辖区信息",username:""}]
                provinceConfig.series[2].data = opss
                var opss2 = [{name:"十八里店实验室",value:[116.485418,39.843556,0],officeOnline:312,staffOnline:1411,caseInProcessCount:19,
                                caseTodayInProcessCount:0,id:"1919f62326314b6fbff7d570f4aead62",seriesName:"突发事件",username:""},
                                {name:"京邮办处实验室",value:[116.442547,39.918916,0],officeOnline:312,staffOnline:1411,caseInProcessCount:19,
                                caseTodayInProcessCount:0,id:"1919f62326314b6fbff7d570f4aead62",seriesName:"突发事件",username:""},
                                {name:"京五里店实验室",value:[116.260163,39.865294,0],officeOnline:312,staffOnline:1411,caseInProcessCount:19,
                                caseTodayInProcessCount:0,id:"1919f62326314b6fbff7d570f4aead62",seriesName:"突发事件",username:""},
                                {name:"京中关村实验室",value:[116.340921,39.982662,0],officeOnline:312,staffOnline:1411,caseInProcessCount:19,
                                caseTodayInProcessCount:0,id:"1919f62326314b6fbff7d570f4aead62",seriesName:"突发事件",username:""},
                                {name:"京关展览实验室",value:[116.447397,39.967615,0],officeOnline:312,staffOnline:1411,caseInProcessCount:19,
                                caseTodayInProcessCount:0,id:"1919f62326314b6fbff7d570f4aead62",seriesName:"突发事件",username:""}]
                provinceConfig.series[3].data = opss2
                china.setOption(provinceConfig)

                // this.renderSFS().then(res => {
                //     console.log("坐标点数据");
                //     res[0].name = '密云县'
                //     res[0].value[0] = 116.5694347919
                //     res[0].value[1] = 39.8613824196
                //     console.log(res);
                    
                //     provinceConfig.series[2].data = res
                //     that.renderHighRiskScatter().then(res => {
                //         provinceConfig.series[3].data = res
                //         china.setOption(provinceConfig)
                //     })
                // })
                this.renderScatter().then(res => {
                    provinceConfig.series[1].data = res
                    
                })
            } else {
                console.log('无法加载该地图');
            }
        })
    }

    async initApp() {
        let name = '北京' //地区name example : 江苏 
        let mapCode = provinces[name] //地区的json数据的地址
        let china = echarts.init(document.getElementById('china'))
        this.renderProvincesMap(mapCode, name)
        this.props.setBaiscID('')
        this.props.setDetailmodal(false,'')
        

        /**
         * 地图点击事件
         */
        china.on('click', async params => {
            console.log("地图点击事件");
            console.log(params.data);
            if (params.componentSubType == 'scatter') {
                /**
                 * 出资讯弹框
                 */
                // let x = params.event.offsetX;
                // let y = params.event.offsetY;
                if(this.props.areaname != '上海' && params.data.seriesName == '辖区信息'){

                    //县级地区上的司法所可以下钻
                    this.props.setCurrentJudical(params.name)
                    this.setState({
                        basicparam : params
                    })
                    // this.renderThebasiclevel(params)

                }else if(this.props.areaname != '上海' && params.data.seriesName == '调委会'){
                    
                    //点击调委会的星星
                    this.setState({
                        basicparam : {}
                    })
                }else{

                    //"上海"首页地图上不可下钻
                    this.props.setCurrentJudical('')
                    this.setState({
                        basicparam : {}
                    })
                }
                //console.log('******************************')
                //console.log(params.data);
                // this.jiSuanPosition(x,y)
                this.props.ShowInfo('block')
                this.props.getBurstInfo(params.data)
            }

        })

        /**
         * 下钻
         */
        china.on('dblclick', async params => {
            this.props.ShowInfo('none')
            /**
             * 双击地图下钻
             */
            if (params.componentSubType == 'map') {
                clearInterval(this.mapTimer)
                this.setState({
                    lunbo : true
                })
                let name = '' //地区name example : 江苏 
                if (params.name == '闸北区') {
                    name = '静安区'
                } else {
                    name = params.name
                }
                let cityCode = citys[name] //城市的json代码
                let cityUrl = './couties/' + cityCode + '.json'; //城市的地图json
                this.props.setcurrentarea(name)
                if (cityCode != undefined /* && name != '金山区' */ ) {
                    this.renderProvincesMap(cityUrl, name)
                }
                try {
                    let url = detail(this.props.mediate, areaConfig(this.props.mediate, name))
                    let data = await getDetail(url)
                    if (this.props.mediate == 'unmediate') {
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
                    console.log('下级')
                    // console.log(url)
                    // console.log(data)
                    this.props.setData(data)
                } catch (error) {
                    console.log('双击下钻')
                    console.log(error)
                }
            }
        })
    }

    /**
     * 打开和收缩下拉框
     */
    toggle() {
        this.setState({
            selectState: !this.state.selectState
        })
    }

    /**
     * 
     * @param {*} name 下拉框选择区域
     */
    async selectArea(name) {
        
        var strs = name
        //console.log(strs)
        if(strs == '机场货管'){
            strs = '平谷海关'
        }
        var datass = {name:strs,value:[116.60038,40.085756,0],officeOnline:312,staffOnline:1411,caseInProcessCount:19,
        caseTodayInProcessCount:0,id:"1919f62326314b6fbff7d570f4aead62",seriesName:"辖区信息",username:""}
         // this.jiSuanPosition(x,y)
         this.props.ShowInfo('block')
         this.props.getBurstInfo(datass)
        //下拉选择触发事件 liulinqing 20190509

        // this.props.ShowInfo('none')
        // this.props.setBaiscID('')
        // this.setState({
        //     basicparam : {}
        // })
        // clearInterval(this.mapTimer)
        // this.setState({
        //     lunbo : true
        // })
        // let cityCode = citys[name] //城市的json代码
        // let cityUrl = './couties/' + cityCode + '.json'; //城市的地图json
        // this.props.setcurrentarea(name)
        // if (cityCode != undefined && name != '金山区') {
        //     this.renderProvincesMap(cityUrl, name)
        // }
        try {
            // let url = detail(this.props.mediate, areaConfig(this.props.mediate, name))
            // let data = await getDetail(url)
            // if (this.props.mediate == 'unmediate') {
            //     data.globalStats = {
            //         officeCount: data.officeCount,
            //         officeOnline: data.officeOnline,
            //         staffCount: data.staffCount,
            //         staffOnline: data.staffOnline,
            //         caseTotalCount: data.caseTotalCount,
            //         caseInProcessCount: data.caseInProcessCount,
            //         caseTodayTotalCount: data.caseTodayTotalCount,
            //         caseTodayInProcessCount: data.caseTodayTotalCount
            //     }
            // }
            // this.props.setData(data)
        } catch (error) {
            console.log('下拉框选择')
            console.log(error)
        }
    }

    /**
     * 返回地图首页
     */
    async back() {
        this.props.ShowInfo('none')
        this.props.setBaiscID('')
        this.setState({
            basicparam : {}
        })
        clearInterval(this.mapTimer)
        this.setState({
            lunbo : false
        })
        if(this.props.judicalname != ''){
            //返回县级
            this.props.setCurrentJudical('')
            let name = '北京' //this.props.areaname //地区name example : 江苏 
            let cityCode = citys[name] //城市的json代码
            let cityUrl = './couties/' + cityCode + '.json'; //城市的地图json
            this.renderProvincesMap(cityUrl, name)
            try {
                let url = detail(this.props.mediate, areaConfig(this.props.mediate, name))
                let data = await getDetail(url)
                this.props.setData(data)
            } catch (error) {
                console.log('返回地图')
                console.log(error) 
            }
        }else{
            //返回上海
            this.props.setcurrentarea('北京')
            let name = '北京' //地区name example : 江苏 
            let mapCode = provinces[name] //地区的json数据的地址
            this.renderProvincesMap(mapCode, name)
            try {
                let url = detail(this.props.mediate)
                let data = await getDetail(url)
                this.props.setData(data)
            } catch (error) {
                console.log('返回地图')
                console.log(error)
            }
        } 
    }

    /**
     * 地图在"上海"首页的时候轮播
     */
    timerTick(){
        let lunbotype = this.state.lunbo
        let cout = 0;
        if(lunbotype == false && this.props.areaname == '上海'){
            this.setState({
                lunbo : true
            })
            let name1 = label[0];
            this.selectArea(name1)
            let that = this;
            this.mapTimer = setInterval(()=>{
                cout = (cout+1) % label.length;
                let name = label[cout];
                that.selectArea(name)
            },6*1000)
        }else if(lunbotype == true && this.props.areaname != '上海'){
            clearInterval(this.mapTimer)
            this.setState({
                lunbo : true
            })
        }else{
            this.back()
        }
    }
    /**
     * 
     * @param {*} x 
     * @param {*} y 
     */
    jiSuanPosition(x, y) {
        let right = '';
        let bottom = '';
        if (x <= 504) {
            right = 0 + 'px'
        } else {
            right = Math.abs(504 - x) + 'px'
        }
        if (y < 489) {
            bottom = (489 - y) + 'px'
        } else {
            bottom = 0 + 'px'
        }
        this.props.showPosition(right, bottom)
    }
    componentDidMount() {
        this.initApp()
    }
    componentDidUpdate() {
        // this.renderScatter()
        this.renderSFS()
        this.renderHighRiskScatter()
    }
    render() {
        let btns = []
        if (this.props.mediate == 'block') {
            btns.push( <
                Buttons key = 'mediate' / >
            )
        } else if (this.props.mediate == 'none') {
            btns.push( <
                ButtonsNot key = 'nortarization' / >
            )
        }
        return (
            <div style = {{width: '100%',height: '100%',position: 'relative' }}>
               { /* <div className={css(styles.contentTop)}>{btns}</div> */} 
                <div style = {{width: '900px',height: '722px',overflow: 'hidden',marginTop:'50px',marginLeft:'20px'}} id = "china" > </div> 
                <div id='mapdiv' className = {css(styles.modal)} style = {{right: -30,bottom: 250,display: this.props.vision}}>
                   <InformationModal config={this.state.basicparam}/>
                </div> 
                <div className = {css(styles.contentBottom3)}>
                    <div className = {css(styles.contentBottom)} >
                        <ShowBar7 />
                    </div>
                    <div className = {css(styles.contentBottom2)} >
                        <ShowBar6 />
                    </div>
                </div>
                <div className = {css(styles.backBtn)} onClick = {this.back.bind(this)} style = {{display: `${ this.props.areaname == '北京2' ? 'block':'none' }`}} ></div>
                <div className = {css(styles.areaName)} style={{height:`${ this.props.judicalname != '' ?  this.props.judicalname.length*35+'px' : this.props.areaname.length*35+'px' }` }}>
                    <span className = {css(styles.areaNamespan)}> { this.props.judicalname != '' ?  this.props.judicalname : this.props.areaname } </span> 
                </div>
                <div className = {css(styles.tuli)}>
                    <div className={css(styles.tuli2)}>隶属关</div>
                    <div className={css(styles.tuli3)}>实验室</div>
                </div> 
                <div className = {css(styles.ditutitle)}></div> 
                {/*<div className={css(styles.lunboBtn)} onClick={this.timerTick.bind(this)} style={{
                    background:`${this.state.lunbo ? "url('./image/lunboBtn1.png') no-repeat center center" : "url('./image/lunboBtn.png') no-repeat center center"}`,
                }}>*/}
                <div className={css(styles.lunboBtn)}>
                    隶属关
                    {/*<span className={css(styles.bulletinText)} style={{color:`${this.state.lunbo ? '#00a79d' : '#00FCED'}`}}>轮播</span>*/}
                </div>
                
                <div  className = {css(styles.selectDiv)} onClick = {this.toggle.bind(this)}>
                    请选择 
                    <span className = {css(styles.icon)} style = {{
                        transform: `${ this.state.selectState ? 'translate(0,-50%) rotate(180deg)':'translate(0,-50%)'}`
                    }}></span> 
                    <div id='clisss2' className = {`${css(styles.nextDiv)} ${css(styles.bounce)}` } style = {{ display: `${this.state.selectState ? 'block':'none'}`}}> 
                        {
                            label && label.map((item, index) => {
                                return (
                                    <div id='clisss' className = {css(styles.nextLi)} key = {index} onClick = {this.selectArea.bind(this, item)} style = {{
                                        background: `${ this.props.areaname == item ? "url('./image/xqdian.png') no-repeat center" :''}`
                                    }}> 
                                        {item} 
                                    </div>
                                )
                            })
                        }
                    </div> 
                </div>
            </div>
        )
    }
}
export default connect(
    state => {
        return {
            mediate: state.mediate,
            vision : state.showModal,
            right  : state.infoModalX,
            bottom : state.infoModalY,
            areaname: state.currentAreaName,
            judicalname: state.currentJudicalName
        }
    },
    dispatch => {
        return {
            ShowInfo: text => {
                dispatch(showInfoModal(text))
            },
            showPosition: (x, y) => {
                dispatch(showInfoModalPosition(x, y))
            },
            getBurstInfo: (obj) => {
                dispatch(geBburstCaseInfo(obj))
            },
            setData: data => {
                dispatch(setstateDataSource(data))
            },
            getLastCase: obj => {
                dispatch(changeLastCase(obj))
            },
            setcurrentarea: text => {
                dispatch(setCurrentAreaName(text))
            },
            setCurrentJudical:text => {
                dispatch(setCurrentJudicalName(text))
            },
            setBaiscID : text =>{
                dispatch(setBaiscId(text))
            },
            setDetailmodal : (vision,type) => {
                dispatch(setDetailmodalVision(vision,type))
            },
            setTreatenentdata : (arr) =>{
                dispatch(setTreatenent(arr))
            }

        }
    }
)(shanghaiMap)

const styles = StyleSheet.create({
    bounce: {
        // animationName: fadeInDown,
        // animationDuration: '1s'
    },
    contentTop: {
        width: '100%',
        height: '150px'
    },
    contentBottom3:{
        width:'100%',
        height:'220px',
        background: `url('./image/jrdt.png') center center no-repeat`,
        backgroundSize: '100% 100%',
    },
    contentBottom: {
        left:'2%',
        width: '49%',
        height: '200px',
        background: `url('./image/jrdt.png') center center no-repeat`,
        background:'none',
        backgroundSize: '100%',
        position: 'absolute',
        bottom: '40px'
    },
    contentBottom2: {
        width: '49%',
        height: '200px',
        background: `url('./image/jrdt.png') center center no-repeat`,
        background:'none',
        backgroundSize: '100%',
        position: 'absolute',
        bottom: '40px',
        right:'0px'
    },
    modal: {
        width: '1000px',  //350
        height: '720px',  //330
        position: 'absolute',
        zIndex: 9999999
    },
    backBtn: {
        width: '60px',
        height: '60px',
        background: `url('./image/back.png') center center no-repeat`,
        backgroundSize: '100%',
        position: 'absolute',
        left: '-30px',
        bottom: '300px',
        cursor: 'pointer'
    },
    areaName: {
        width: '39px',
        background: `url('./image/areaname.png') center center no-repeat`,
        backgroundSize: '100% 100%',
        position: 'absolute',
        left: '-20px',
        bottom: '400px',
        cursor: 'pointer',
        color: '#fff',
        padding: '5px',
        boxSizing: 'border-box',
        textAlign: 'center',
        display:'none'
    },
    areaNamespan: {
        display: 'inline-block',
        transform: 'translate(-50%,-50%)',
        position: 'absolute',
        top: '50%',
        left: '50%'
    },
    selectDiv: {
        width: '98px',
        height: '35px',
        lineHeight: '35px',
        background: `url('./image/xqk.png') no-repeat center`,
        backgroundSize: '100% 100%',
        position: 'absolute',
        right: '-20px',
        top: '-45px',
        textIndent: '1em',
        color: '#fff',
        zIndex: '10',
        cursor: 'pointer',
        border: '1px solid #888'
    },
    icon: {
        width: '10px',
        height: '7px',
        background: `url('./image/sanjiao.png') no-repeat center`,
        backgroundSize: '100% 100%',
        position: 'absolute',
        right: '10px',
        top: '50%'
    },
    nextDiv: {
        width: '98px',
        height: '631px',
        background: `url('./image/group.png') no-repeat center`,
        backgroundSize: '100% 100%',
        position: 'absolute',
        left: '0px',
        top: '35px',
        zIndex: '5'
    },
    nextLi: {
        width: '98px',
        height: '35px',
        lineHeight: '35px',
        float: 'left',
        textAlign: 'center',
        textIndent: '0',
        backgroundSize: '100% 100%',
        cursor: 'pointer',
        ':hover': {
            background: `url('./image/xqdian.png') no-repeat center`,
            backgroundSize: '100% 100%',
            color:'#fff'
        }
    },
    tuli: {
        width: '140px',
        height: '100px',
        background: `url('./image/tuli.png') no-repeat center`,
        //background:'none',
        backgroundSize: '100% 100%',
        position: 'absolute',
        right: '60px',
        bottom: '360px',
        textAlign:'left'
    },
    tuli2: {
        background: `url('./image/sfs.png') no-repeat left`,
        backgroundSize: '26px 26px',
        height:'40px',
        lineHeight:'40px',
        color:'#fff',
        width:'100%',
        height:'40px',
        marginTop:'10px',
        marginLeft:'25px',
        paddingLeft:'28px'
    },
    tuli3: {
        background: `url('./image/gfxicon.png') no-repeat left`,
        backgroundSize: '26px 26px',
        height:'40px',
        lineHeight:'40px',
        color:'#fff',
        width:'100%',
        height:'40px',
        marginLeft:'25px',
        paddingLeft:'28px'
    },
    ditutitle:{
        width: '206px',
        height: '29px',
        background: `url('./image/ditutitle.png') no-repeat center`,
        background:'none',
        backgroundSize: '90% 90%',
        position: 'absolute',
        right: '328px',
        top: '46px'
    },
    lunboBtn:{
        width:'120px',
        height:'37px',
        backgroundSize: '100%',
        position: 'absolute',
        color:'#fff',
        right: '79px',
        top: '-45px',
        cursor: 'pointer',
        zIndex:'100000',
        textAlign:'center',
        lineHeight:'37px',
        fontSize:'17px',
        // display:'none'
        backgroundColor:'#22488E'  //ffcc29 199ED8
        //display:'none'
    },
    bulletinText:{
        display:'inline-block',
        width:'40px',
        height:'20px',
        position:'relative',
        top:'34px',
        fontSize: '12px',
        letterSpacing: '2.9px',
        textAlign:'center',
    },
})
