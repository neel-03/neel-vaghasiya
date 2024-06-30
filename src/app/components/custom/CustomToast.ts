import toast from "react-hot-toast"

export const displayToast = (promise: Promise<unknown>) => {
    toast.promise(promise, {
        loading: 'Sending mail... Please hold tight!',
        success: 'Success! Your mail has been sent.',
        error: 'Failed to send. Retry?'
    }, {
        style: {
            padding: '16px',
            color: '#ffffff',
            background: '#000000',
        },
        iconTheme: {
            primary: '#000000',
            secondary: '#ffffff'
        }
    })
}

export const displayErrorToast = (msg: string) => {
    toast.error(msg, {
        style: {
            padding: '16px',
            color: '#ffffff',
            background: '#000000',
        },
        iconTheme: {
            primary: '#000000',
            secondary: '#ffffff'
        }
    })
}