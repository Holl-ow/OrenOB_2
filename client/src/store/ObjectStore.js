import { makeAutoObservable } from "mobx";

export default class ObjectStore {
    constructor() {
        this._typesObj = []
        this._categsObj = []
        this._tagsObj = []
        this._objects = []
        this._selectedTags = []
        this._selectedCateg = {}
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTypesObj(typesObj) {
        this._typesObj = typesObj
    }
    setCategsObj(categsObj) {
        this._categsObj = categsObj
    }
    setTags(tagsObj) {
        this._tagsObj = tagsObj
    }
    setObjects(objects) {
        this._objects = objects
    }


    setSelectedCateg(categsObj){
        this._selectedCateg = categsObj
    }
    setSelectedType(typesObj){
        this._selectedType = typesObj
    }
    selectedTags(tagsObj){
        this._selectedTags = tagsObj
    }


    get typesObj() {
        return this._typesObj
    }
    get categsObj() {
        return this._categsObj
    }
    get tagsObj() {
        return this._tagsObj
    }
    get objects() {
        return this._objects
    }
    get selectedCateg() {
        return this._selectedCateg
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedTags() {
        return this._selectedTags
    }

}