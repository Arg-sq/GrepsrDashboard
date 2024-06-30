import axios from "axios"
import { BaseURL } from "./service-axios"
import { useQuery } from "react-query"
import { grepsrAPI } from "./service-api"


    export interface IDataSet {
        id: number
        name: string
        username: string
        email: string
        address: Address
        phone: string
        website: string
        company: Company
      }
      
       interface Address {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: Geo
      }
      
       interface Geo {
        lat: string
        lng: string
      }
      
       interface Company {
        name: string
        catchPhrase: string
        bs: string
      }

const getDataSet=async()=>{
    return await axios.get<IDataSet[]>(`${BaseURL}/${grepsrAPI.dataset}`)
    
}
export const useGetDataSet=()=>{
    return useQuery(["DataSet"],getDataSet,{
      select:resp=>resp.data
    })
}