/**
 * Created by Huangliang on 2017/5/16.
 */
let dbModels = {};

/**
 * 4000 家法院的数据结构
 */
dbModels.fylist = {
  pid: {
    type: String,
    default: ""
  },
  parentId: {
    type: String,
    default: ""
  },
  sortNumber: {
    type: Number,
    default: 0
  },
  orgName: {
    type: String,
    default: ""
  },
  level: {
    type: Number,
    default: 0
  },
  userName: {
    type: String,
    default: ""
  },
  displayName: {
    type: String,
    default: ""
  },
  isMaster: {
    type: Boolean,
    default: false
  },
  groupId: {
    type: Array,
    default: []
  }
};

dbModels.group = {
  creator: {
    type: String,
    default: ""
  },
  members: {
    type: Array,
    default: []
  }
};

dbModels.meeting = {
  meetingId: {
    type: String,
    default: ""
  },
  meetingName: {
    type: String,
    default: ""
  },
  createdUser: {
    type: String,
    default: ""
  },
  status: {
    type: String,
    default: ""
  },
  password: {
    type: String,
    default: ""
  },
  startTime: {
    type: String,
    default: ""
  },
  endTime: {
    type: String,
    default: ""
  },
  groupId: {
    type: String,
    default: ""
  },
  level: {
    type: Number,
    default: 0
  }
};

/**
 * 法院值守详细数据
 */
dbModels.fybh = {
  code: { type: String, default: "" },
  fymc: { type: String, default: "" },
  zhzxmc: { type: String, default: "" },
  fzrmc: { type: String, default: "" },
  zbdh: { type: String, default: "" },
  zxfgrs: { type: String, default: "" },
  zxrs: { type: String, default: "" },
  zzajs: { type: String, default: "" },
  xcqzcs: { type: String, default: "" },
  xcqzjs: { type: String, default: "" },
  zhlxs: { type: String, default: "" }
};

/**
 * 值守关联用户数据
 */
dbModels.fybhuser = {
  code: { type: String, default: "" },
  fymc: { type: String, default: "" },
  username: { type: String, default: "" }
};

module.exports = dbModels;
