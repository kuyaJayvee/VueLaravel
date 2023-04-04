import axios from "axios";
import { ref } from "vue";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

export default function useEmployee() {

    const employees = ref([]);

    const getEmployees = async () => {
       const response = await axios.get('employees');
       employees.value = response.data.employees.data
    }

    


    return {
        getEmployees,
        employees
    }
}