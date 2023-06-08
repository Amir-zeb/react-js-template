import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeToast } from '../../store/reducer';

function Toast() {
    const { toast } = useSelector(state => state.appReducer);
    const dispatch = useDispatch();

    return (
        <>
            {toast.length ? <div className="toast_container">
                {toast.length && toast.map((item) => (
                    <Item item={item} key={item.id} removeToast={(e) => dispatch(removeToast(e))} />
                ))}
            </div> : <></>
            }
        </>
    );
}

const Item = ({ item, removeToast: propsFunc }) => {
    const { message, type, duration } = item;

    useEffect(() => {
        setTimeout(() => {
            propsFunc();
        }, duration);
    }, []);

    const hideToast = () => {
        clearTimeout();
        propsFunc(item.id);
    }

    return <div className={`${type}_toast __toast`}>
        <div>
            <p className="toast_title">{type}</p>
            <p className="toast_msg">{message}</p>
        </div>
        <button onClick={hideToast} aria-label="close">&times;</button>
    </div>
}

export default Toast;