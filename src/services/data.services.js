import service from "./config.services"

const getDataService = () => {
    return service.get("/");
};

export default getDataService;