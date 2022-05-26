import { makeAutoObservable } from "mobx";

export default class ObjectStore {
    constructor() {
        this._typesObj = []
        this._categsObj = []
        this._objects = []
        this._selectedCateg = {}
        makeAutoObservable(this)
    }

    setTypesObj(typesObj) {
        this._typesObj = typesObj
    }
    setCategsObj(categsObj) {
        this._categsObj = categsObj
    }
    setObjects(objects) {
        this._objects = objects
    }


    setSelectedCateg(categsObj){
        this._selectedCateg = categsObj
    }


    get typesObj() {
        return this._typesObj
    }
    get categsObj() {
        return this._categsObj
    }
    get objects() {
        return this._objects
    }
    get selectedCateg() {
        return this._selectedCateg
    }

}