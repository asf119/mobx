import {observable, computed, asStructure,action} from 'mobx';

export default class {
    @observable isLogin = false
    @observable user = ""

    @action ToLogin (login) {
        this.isLogin = login
    }

}