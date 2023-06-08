import axios from 'axios';

let _token = localStorage.getItem(process.env.REACT_APP_TOKEN);
let _baseUrl = process.env.REACT_APP_API_KEY;

export default function apiManager({
    header = { 'Content-Type': 'application/json' },
    method = "get",
    path = "",
    params = null,
    baseUrl = _baseUrl,
    token = _token
}) {
    let HEADER = { headers: header };
    if (token) {
        HEADER = { headers: { Authorization: `Bearer ${token}`, ...header } }
    }

    return new Promise(function (myResolve, myReject) {
        if (method === 'post') {
            axios[method](baseUrl + path, params, HEADER)
                .then(response => {
                    myResolve(response);
                }).catch(err => {
                    myReject(err);
                })
            return
        }
        axios[method](baseUrl + path, HEADER)
            .then(response => {
                myResolve(response);
            }).catch(err => {
                myReject(err);
            })
    });
};