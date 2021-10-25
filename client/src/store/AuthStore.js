import {makeAutoObservable} from "mobx";

export default class AuthStore{
    constructor() {
        this._isAuth = false
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }

    get isAuth(){
        return this._isAuth
    }
}