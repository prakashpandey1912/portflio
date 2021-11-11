import React, { useEffect } from "react";
import store from "../../store/store";
import './Loading.scss'
import { useNavigate } from 'react-router-dom';

function Loading(props) {
        // const navigate = useNavigate();

        // useEffect(() => {
        //         setTimeout(() => {
        //                 console.log(new Date())
        //                 store.dispatch({
        //                         type: 'ROUTE_CHANGE', payload: {
        //                                 currentRoute: "/",
        //                                 pageLoading: true
        //                         }
        //                 })
        //                 navigate('/')
        //         }, 2000)
        // }, [props.currentRoute])


        return (
                <>
                        <div className="loaderParent">
                                <div className="loader">
                                        <svg viewBox="0 0 80 80">
                                                <circle id="test" cx="40" cy="40" r="32"></circle>
                                        </svg>
                                </div>
                                <div className="loader triangle">
                                        <svg viewBox="0 0 86 80">
                                                <polygon points="43 8 79 72 7 72"></polygon>
                                        </svg>
                                </div>

                                <div className="loader">
                                        <svg viewBox="0 0 80 80">
                                                <rect x="8" y="8" width="64" height="64"></rect>
                                        </svg>
                                </div>
                        </div>
                </>
        )
}
export default Loading;