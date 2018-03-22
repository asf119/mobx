import {observable, computed, asStructure,action} from 'mobx';

export default class {
    @observable isLogin = false
    @observable user = ""

    @action.bound ToLogin () {
        this.isLogin = !this.isLogin
    }

}