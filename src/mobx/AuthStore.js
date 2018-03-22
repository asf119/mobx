import {observable, computed, asStructure,action} from 'mobx';

export default class {
    @observable isLogin = false
    @observable user = ""

    @action.bound SetLogin (login) {
        this.isLogin = login
    }

}