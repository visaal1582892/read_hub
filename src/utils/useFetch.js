import { useEffect,useState } from "react"
import { setBooks, setError, setLoading } from "./dataSlice";
import { useDispatch } from "react-redux";

// This is a custom Hook used to fetch data from an API. It takes a URL as an argument and returns the data, loading state, and error state.
const usefetch = (url) => {
    const dispatch=useDispatch();
    dispatch(setLoading(true));

    // Used useEffect to fetch data from the API when the component mounts or when the URL changes.
    useEffect(() => {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                dispatch(setBooks(data));
                dispatch(setError(null));
            })
            .catch((error) => {
                dispatch(setError(error.message));
            })
            .finally(() => {
                dispatch(setLoading(false));
            });
    }, [url]);
}

export default usefetch;