export const host = "http://localhost:5000" || process.env.REACT_APP_YOUR_HOST;
export const registerRoute = `${host}/api/auth/register`;
export const loginRoute = `${host}/api/auth/login`;
export const setAvatarRoute = `${host}/api/auth/setAvatar`;
export const allUsersRoute = `${host}/api/auth/allUsers`;
export const sendMessageRoute = `${host}/api/messages/addMsg`;
export const getAllMessageRoute = `${host}/api/messages/getMsg`;
