import React from "react";

const UserContext = React.createContext('Tushar'); // Default value. If in App.js we dont use <UserProvider>, then after writing <ComponentC/> default value 'Tushar' will be displayed

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}

export default UserContext // doing it to access contextType property in component D
