const axios = require("axios").default;

const getUsers = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const users = await axios.get(url).then((response) => response).catch((error) => error);

    return users;
};

module.exports = getUsers;
