import {observable, autorun} from 'mobx';
import AuthStore from './AuthStore'

export default class Store {
    
    constructor() {
        this.authStore = new AuthStore(this)
    }
}