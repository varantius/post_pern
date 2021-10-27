import {makeAutoObservable} from "mobx";

export default class UsersStore{
    constructor() {
        this._users = []
        makeAutoObservable(this)
    }

    setUsers(users){
        this._users = users
        console.log(this._users )
    }
    get getUsers(){
        return this._users
    }

}