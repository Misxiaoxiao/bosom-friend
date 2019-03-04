import Utils from '@/utils/index';
const Local: any = Utils.Storage.Local;

// state
interface StateType {
  isLogin: boolean;
  [key: string]: any;
}

const state: StateType = {
  isLogin: Local.get('account') !== '',
  account: Local.get('account'),
  bindings: Local.get('bindings'),
  profile: Local.get('profile'),
};

// mutations
const SET_USER_DATA = 'SET_USER_DATA';

const mutations = {
  SET_USER_DATA: (state: StateType, data: any) => {
    Object.keys(data).forEach((key: string) => {
      state[key] = data[key];
    });
  },
};

// actions
const actions = {
  Login({ commit, state }: {commit: any, state: StateType}, res: any) {
    const data = {
      isLogin: true,
      account: res.account,
      bindings: res.bindings,
      profile: res.profile,
    };
    Local.set('account', res.account);
    Local.set('bindings', res.bindings);
    Local.set('profile', res.profile);
    commit('SET_USER_DATA', data);
  },
};

export default {
  state,
  mutations,
  actions,
};
