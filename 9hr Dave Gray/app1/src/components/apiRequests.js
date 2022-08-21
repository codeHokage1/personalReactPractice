// api function to add to, update and delete from an api endpoint

const apiRequests = async (url = '', objOptions = null, err = null) => {
    try {
        const response = await fetch(url, objOptions);
        if (!response.ok) {
            throw new Error('Please reload the page');
        }        
    } catch (error) {
        err = error.message;
    } finally {
        return err;
    }
}

export default apiRequests;