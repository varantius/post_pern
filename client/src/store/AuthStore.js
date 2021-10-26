import {makeAutoObservable} from "mobx";

export default class AuthStore{
    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

    setUser(user){
        return this._user = user
    }

    get user(){
        return this._user
    }

    setIsAuth(bool){
        this._isAuth = bool
    }

    get isAuth(){
        return this._isAuth
    }
}