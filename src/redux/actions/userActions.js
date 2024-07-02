import axios from 'axios';

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: 'USER_LOADING' });

        const res = await axios.get('/api/auth/user');

        dispatch({
            type: 'USER_LOADED',
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: 'AUTH_ERROR',
        });
    }
};

export const login = (email, password) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/api/auth/login', body, config);

        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res.data,
        });

        dispatch(loadUser());
    } catch (err) {
        dispatch({
            type: 'LOGIN_FAIL',
        });
    }
};

export const register = (email, password) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/api/auth/register', body, config);

        dispatch({
            type: 'REGISTER_SUCCESS',
            payload: res.data,
        });

        dispatch(loadUser());
    } catch (err) {
        dispatch({
            type: 'REGISTER_FAIL',
        });
    }
};

export const logout = () => (dispatch) => {
    dispatch({ type: 'LOGOUT_SUCCESS' });
};
