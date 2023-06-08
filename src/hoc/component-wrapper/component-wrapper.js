import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import PrimaryLayout from "../../layout/primary-layout";
import { SplashScreen } from '../../components';

function ComponentWrapper({ item = {}, ...props }) {
    const { layout, _for, ele, isProtected, fallBack } = item;
    const [isLoading, setIsLoading] = useState(true);
    const { isLogged } = useSelector(state => state.appReducer);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogged && !isLoading && isProtected) {
            navigate(fallBack);
        }
    }, []);

    useEffect(() => {
        async function init() {
            if (isProtected) {
                try {
                    let token = localStorage.getItem("@AccessToken")
                    if (token) {
                        // server request for user authentication
                    }
                } catch (error) {
                    console.log("🚀 ~ file: component-wrapper.js ~ useEffect ~ error:", error)
                } finally {
                    setIsLoading(false);
                }
            } else {
                setIsLoading(false);
            }
        }
        setTimeout(() => {
            init();
        }, 2000);
    }, []);

    if (isLoading) {
        return <SplashScreen />
    }


    // restrict authenticated user from routes by the help of role of user
    // if (_for !== "all" && role !== _for) {
    //     alert("You are unauthorized.")
    //     return <></>
    // }

    if (isProtected) {
        return <PrimaryLayout children={ele} />
    }

    return <PrimaryLayout children={ele} />
}

export default ComponentWrapper;