import {$authHost, $host} from "./index"
import jwt_decode from "jwt-decode"

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type_obj', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type_obj')
    return data
}

export const createCateg = async (categ) => {
    const {data} = await $authHost.post('api/categ_obj', categ)
    return data
}

export const fetchCategs = async () => {
    const {data} = await $host.get('api/categ_obj', )
    return data
}

export const createObject = async (object) => {
    const {data} = await $authHost.post('api/object', object)
    return data
}

export const fetchObjects = async (categ, page, limit= 5) => {
    const {data} = await $host.get('api/object', {params: {
            categ, page, limit
        }})
    return data
}

export const fetchOneObject = async (id) => {
    const {data} = await $host.get('api/object/' + id)
    return data
}