import service from "./config.services"

const getDataService = () => {
    return service.get("/");
};

const postDataService = (data) => {
    return service.post("/", data);
};

export {
    getDataService,
    postDataService
};