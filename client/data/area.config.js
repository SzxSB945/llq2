/**
 * 地区对应地图机构id
 */
const mediated = {
    "北京": "",
    "密云县": "1919f62316d44cfbaca762ed5d73798e",
    "怀柔区": "1919f623c59b4e2bb1a1324a7e7d658a",
    "房山区": "1919f6233c63460d8ab7880f85172159",
    "延庆县": "1919f623dfd041699dd7b2ceecfac627",
    "门头沟区": "1919f623473b4af19789efb3a99d34b4",
    "昌平区": "1919f623ef414f64af488edf2cceb40d",
    "大兴区": "1919f62351d448639abdf431f568a930",
    "顺义区": "1919f623ac7a40d2bf753e4cf60313ee",
    "平谷区": "1919f623670f4f0b8e8a4c7415a7d466",
    "通州区": "1919f623c5344825b95b5059b8fa5c76",
    "朝阳区": "1919f6232ad14e65b3dbc2781248cdf3",
    "海淀区": "1919f6237eef43da9200a2b22e30e9de",
    "丰台区": "1919f62326314b6fbff7d570f4aead62",
    "石景山区": "1919f623e1394d97b4212acabbb1ca2c",
    "西城区": "1919f623082944c9a9858df92d176d87",
    "东城区": "1919f623772743039c801ecb3421697d",
    "宣武区": "1919f623a28c4fe1aea644cba5c66c94"
}

// const mediated = {
//     "上海": "",
//     "黄浦区": "1919f62316d44cfbaca762ed5d73798e",
//     "徐汇区": "1919f623c59b4e2bb1a1324a7e7d658a",
//     "长宁区": "1919f6233c63460d8ab7880f85172159",
//     "静安区": "1919f623dfd041699dd7b2ceecfac627",
//     "普陀区": "1919f623473b4af19789efb3a99d34b4",
//     "闸北区": "1919f623ef414f64af488edf2cceb40d",
//     "虹口区": "1919f62351d448639abdf431f568a930",
//     "杨浦区": "1919f623ac7a40d2bf753e4cf60313ee",
//     "闵行区": "1919f623670f4f0b8e8a4c7415a7d466",
//     "宝山区": "1919f623c5344825b95b5059b8fa5c76",
//     "嘉定区": "1919f6232ad14e65b3dbc2781248cdf3",
//     "浦东新区": "1919f6237eef43da9200a2b22e30e9de",
//     "金山区": "1919f62326314b6fbff7d570f4aead62",
//     "松江区": "1919f623e1394d97b4212acabbb1ca2c",
//     "青浦区": "1919f623082944c9a9858df92d176d87",
//     "奉贤区": "1919f623772743039c801ecb3421697d",
//     "崇明区": "1919f623a28c4fe1aea644cba5c66c94"
// }

const unmediated = {
    "北京": "",
    "密云县": "eab9e51dbeb940cf97ae8b54f38d306d",
    "怀柔区": "eab9e51d261c4710846dbc9a8a7be794",
    "房山区": "eab9e51d569248ea87da1412ca0a1985",
    "延庆县": "eab9e51dbfda482abe4a511ea8e3a62c",
    "门头沟区": "eab9e51db3c648ef9237fcce442e6e5a",
    "昌平区": "eab9e51d4b78424abc6526247a5047e4",
    "大兴区": "eab9e51d2db246aeaafcc5606ae9a8a5",
    "顺义区": "eab9e51d56584d1f8b36da835d0a2c61",
    "平谷区": "eab9e51d8a574b4087abe36c6062bc91",
    "通州区": "eab9e51d98cb417bbc52f588527fc3a1",
    "朝阳区": "eab9e51db68a40758d1482cc482e4f74",
    "海淀区": "eab9e51ddf814505b95537bc6c4aa293",
    "丰台区": "eab9e51dd74d475b9ed4afb2e7cdca1f",
    "石景山区": "eab9e51d660d45c6834dfad0f7c48109",
    "西城区": "eab9e51d0bb54ab4a8e2196ec401830c",
    "东城区": "eab9e51d7077471bbf18ae5a038869da",
    "宣武区": "eab9e51d6f90491da45d0223a3c3b176"

}

// const unmediated = {
//     "上海": "",
//     "黄浦区": "eab9e51dbeb940cf97ae8b54f38d306d",
//     "徐汇区": "eab9e51d261c4710846dbc9a8a7be794",
//     "长宁区": "eab9e51d569248ea87da1412ca0a1985",
//     "静安区": "eab9e51dbfda482abe4a511ea8e3a62c",
//     "普陀区": "eab9e51db3c648ef9237fcce442e6e5a",
//     "闸北区": "eab9e51d4b78424abc6526247a5047e4",
//     "虹口区": "eab9e51d2db246aeaafcc5606ae9a8a5",
//     "杨浦区": "eab9e51d56584d1f8b36da835d0a2c61",
//     "闵行区": "eab9e51d8a574b4087abe36c6062bc91",
//     "宝山区": "eab9e51d98cb417bbc52f588527fc3a1",
//     "嘉定区": "eab9e51db68a40758d1482cc482e4f74",
//     "浦东新区": "eab9e51ddf814505b95537bc6c4aa293",
//     "金山区": "eab9e51dd74d475b9ed4afb2e7cdca1f",
//     "松江区": "eab9e51d660d45c6834dfad0f7c48109",
//     "青浦区": "eab9e51d0bb54ab4a8e2196ec401830c",
//     "奉贤区": "eab9e51d7077471bbf18ae5a038869da",
//     "崇明区": "eab9e51d6f90491da45d0223a3c3b176"

// }
export default function (type, area) {
    if (type == 'mediate') {
        return (mediated[area])
    } else {
        return (unmediated[area])
    }
}