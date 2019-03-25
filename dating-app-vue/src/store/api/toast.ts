import izitoast from 'izitoast';

const toast = {
    error: (message: any, title = 'Error', timeout: any) => {
        return izitoast.error({
            title: title,
            message: message,
            position: 'topCenter',
            timeout: timeout,
        });
    },
    success: (message: any, title = 'Success') => {
        return izitoast.error({
            title: title,
            message: message,
            position: 'bottomCenter',
        });
    },
};

export default toast;
