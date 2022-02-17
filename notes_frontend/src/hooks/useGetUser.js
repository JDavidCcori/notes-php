import {useState, useEffect} from "react";
import axios from "axios";

const useGetUser = (API) => {
    const [userDates, setUserDates] = useState([])
    useEffect( async () => {
        const response = await axios.get(API);
        setUserDates(response.data.items[0]);
    }, []);
    return userDates;
}

export {useGetUser}