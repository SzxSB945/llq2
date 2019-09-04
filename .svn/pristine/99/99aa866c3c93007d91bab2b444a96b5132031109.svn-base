import initialState from './store'

const reducer = (state = initialState ,action) => {
    //console.log(`redux : action ------------> reducer`)
    switch (action.type) {
        case 'CLICK_NAVIGATION' :
            return {
                ...state,
                mediate : action.text
            }
        case 'SET_STATE_DATASOURCE' :
            return {
                ...state,
                dataSource : action.data
            }
        case 'SHOW_INFO_MODAL':
            return {
                ...state,
                showModal : action.text
            }
        case 'SHOW_INFO_MODAL_POSITION' :
            return {
                ...state,
                infoModalX : action.right,
                infoModalY : action.bottom
            }
        case 'GET_BURST_CASE_INFO' :
            return {
                ...state,
                burstCaseInfo : action.data
            }
        case 'CHANGE_LAST_CASE':
            return {
                ...state,
                lastestCase : action.data
            }
        case 'SET_CURREBT_AREA_NAME':
            return {
                ...state,
                currentAreaName : action.data
            }
        case 'SET_CURREBT_JUDICAL_NAME':
            return {
                ...state,
                currentJudicalName : action.data
            }
        case 'SET_SHOWBAR_TYPE' :
            return {
                ...state,
                barName : action.name,
                barType : action.key
            }
        case 'SET_BASIC_ID' : 
            return {
                ...state,
                basicId : action.data
            }
        case 'SET_DETAILMDAOL_VISION' :
            return {
                ...state,
                detailModal : action.vision,
                detailType  : action.key
            }
        case 'SET_TREATENENT' :
            return{
                ...state,
                detailSource: action.data
            }
        default :
            return initialState
    }
} 

export default reducer