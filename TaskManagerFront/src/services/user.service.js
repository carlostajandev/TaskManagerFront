import axiosInstance from "../adapters/axiosInstance"

export const getAllUsers = async () => {
    const res = await axiosInstance.get("/admin/list");
    return res.data;
}

export const crearUsuario = async ( token,
    userName,
    email,
    password,
    roles
) => {
    try {
        console.log(userName,email,password,roles);
        const result = await axiosInstance.post("/admin/create", {
            userName,
            email,
            password,
            role: roles
        }, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return result.data;
    } catch (error) {
        if (error.response && error.response.status === 400) {
            return error.response.data;
        }
    }
};

export const getUsersById = async (token, id) => {
    const res = await axiosInstance.get("/admin/" + id, {  headers: { Authorization: `Bearer ${token}` }});
    return res.data;
}

export const EditUser = async ( token, id,
    userName,
    email,
    password,
    roles
) => {
    try {
        console.log(userName,email,password,roles);
        const result = await axiosInstance.put("/admin/edit/"+id, {
            userName,
            email,
            password,
            role: roles
        }, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return result.data;
    } catch (error) {
        if (error.response && error.response.status === 400) {
            return error.response.data;
        }
    }
};

export const DeletUser = async ( token, id) => {
    try {
        const result = await axiosInstance.delete("/admin/delete/"+id,   
         {
            headers: { Authorization: `Bearer ${token}` }
        });
        return result.data;
    } catch (error) {
        if (error.response && error.response.status === 400) {
            return error.response.data;
        }
    }
};




