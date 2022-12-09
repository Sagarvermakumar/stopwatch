import { READ_DATA, WRITE_DATA, ERROR } from "../constants/index";



export const readData = async(dispatch)=>{
try {
    dispatch({type:READ_DATA})
} catch (error) {
    dispatch({type:ERROR})
}
}