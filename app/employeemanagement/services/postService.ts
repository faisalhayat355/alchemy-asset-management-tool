import axios from "axios";

class Employee{
    create(formData){
        const url = "http://127.0.0.1:8000/employee/create";
        const config = {
            headers:{
                'content-type': 'multipart/form-data',
            }
        };

        return axios.post(url, formData, config);
    }

    getPosts(){
        const url = "http://127.0.0.1:8000/employee/get-employee-posts";
        return axios.get(url);
    }
}

export default new Employee ();