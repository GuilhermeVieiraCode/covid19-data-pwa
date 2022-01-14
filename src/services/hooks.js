import { useContext } from "react"
import { CovidApiContext } from "./provider"

const useCovidApi = () => {
    const { dataState, getCovidData } = useContext(CovidApiContext);

    return { dataState, getCovidData };
}

export default useCovidApi;