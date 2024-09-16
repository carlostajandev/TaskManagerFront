import axiosInstance from "../adapters/axiosInstance"

export const getAllTasks = async () => {
    const res = await axiosInstance.get("/task/list");
    return res.data;
}

export const saveTask = async (token,
    title,
    description,
    status,
    assignedTo
) => {
    try {
        // console.log(userName,email,password,roles);
        const result = await axiosInstance.post("/task/create", {
            title,
            description,
            status,
            assignedTo
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

export const getTaskById = async (token, id) => {
    const res = await axiosInstance.get("/task/" + id, { headers: { Authorization: `Bearer ${token}` } });
    return res.data;
}

export const EditTask = async (token, id,
    title,
    description,
    status,
    assignedT
) => {
    try {
        // console.log(userName, email, password, roles);
        const result = await axiosInstance.put("/task/edit/" + id, {
            title,
            description,
            status,
            assignedT
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

export const DeletTask = async (token, id) => {
    try {
        const result = await axiosInstance.delete("/task/delete/" + id,
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




