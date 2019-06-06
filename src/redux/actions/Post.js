import axios from 'axios'

import { PRODUCT_SUCCESS, PRODUCT_ERROR} from './types'

export const Post = ({name,price,category,stock,image})=>{
    return async (dispatch)=>{
        try {
            const data = new FormData()
            data.append('image',image)
            data.append('name',name)
            data.append('stock',stock)
            data.append('category',category)
            data.append('price',price)
           const res = await axios.post('http://localhost:5000/product/add', data)
           
           console.log(res)
           dispatch({
               type: PRODUCT_SUCCESS,
               payload: "success"
           })
        } catch (error) {
            
            dispatch({
                type: PRODUCT_ERROR,
                payload:"error Post"
            })
            console.log('errores:', error)
        }
    }

}