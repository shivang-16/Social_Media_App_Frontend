import axios from "axios";
import toast from 'react-hot-toast'
import { server } from "../main";


export const sinupUser = (name, userName, email, password)=> async(dispatch)=>{
    
   try {
    dispatch({
        type:"OtpRequest",
    })
    const {data} = await axios.post(`${server}/user/register`,{
        name, userName, email, password
    },{
        headers:{
            "Content-Type": "application/json"
        },
        withCredentials:true,
    })
    dispatch({
        type:"OtpSuccess",
        payload: data.message,
    })
    toast.success(data.message)
   } catch (error) {
    dispatch({
        type:"OtpFaliure",
        payload: error.response.data.message,
    })
    toast.error(error.response.data.message)
   }
}

export const verifyOtp = (otp)=> async(dispatch)=>{
    try {
        dispatch({
            type:"RegisterRequest",
        })
        const {data} = await axios.post(`${server}/user/verify`,{
            otp
        },{
            headers:{
                "Content-Type": "application/json"
            },
            withCredentials:true,
        })
        dispatch({
            type:"RegisterSuccess",
            payload: data.user,
        })
        toast.success(data.message)
       } catch (error) {
        console.log(error)
        dispatch({
            type:"RegisterFaliure",
            payload: error.response.data.message,
        })
        toast.error( error.response.data.message)
       }
}

export const loginUser = (loginIdentifier,password)=> async(dispatch)=>{
    try {
        dispatch({
            type:"LoginRequest",
        })
        const {data} = await axios.post(`${server}/user/login`,{
            loginIdentifier, password
        },{
            headers:{
                "Content-Type": "application/json"
            },
            withCredentials:true,
        })
        dispatch({
            type:"LoginSuccess",
            payload: data.user,
        })
        toast.success(data.message)
       } catch (error) {
        console.log(error)
        dispatch({
            type:"LoginFaliure",
            payload: error.response.data.message,
        })
        toast.error( error.response.data.message)
       }
}


export const loadUser = () => async (dispatch) => {
    try {
      dispatch({
        type: "LoadUserRequest",
      });
  
      const { data } = await axios.get(`${server}/user/myProfile`,{
        withCredentials: true
      });
  
      dispatch({
        type: "LoadUserSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "LoadUserFailure",
        payload: error.response.data.message,
      });
    }
  };

export const logoutUser = () => async (dispatch) => {
    try {
      dispatch({
        type: "LogoutRequest",
      });
  
      const { data } = await axios.get(`${server}/user/logout`,{
          withCredentials: true      
      });
  
      dispatch({
        type: "LogoutSuccess",
        payload: data.message,
      });
    } catch (error) {
        console.log(error)
      dispatch({
        type: "LogoutFailure",
        payload: error.response.data.message,
      });
    }
  };


export const getAllUser = ()=> async (dispatch)=>{
    try {
      dispatch({
        type: "allUserRequest"
      })

      let {data} = await axios.get(`${server}/user/all`,{
        withCredentials: true
      })
      console.log(data)
      dispatch({
        type: "allUserSuccess",
        payload: data.users
      })
    } catch (error) {
        dispatch({
            type: "allUserFailure",
            payload: error.response.data.message
          })
    }
}

export const followUser= (_id) => async(dispatch)=>{
  try {
    console.log(_id)
    dispatch({
      type: "FollowRequest"
    })
    let {data} = await axios.get(`${server}/follow/${_id}`,{
         withCredentials: true,
    })
    console.log(data)
    dispatch({
      type: "FollowRequest",
      payload: data.message
    })
    toast.success(data.message)
  } catch (error) {
    console.log(error)
    dispatch({
      type: "FollowRequest",
      payload: error.response.data.message
    })
    toast.error(error.response.data.message)
  }
}