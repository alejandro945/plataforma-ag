import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL

export async function getDepartments() {
    return await axios.get(`${baseUrl}places/departments`);
}
export async function getCities(idCity) {
    return await axios.get(`${baseUrl}places/cities${idCity}`)
}
export async function getVehicles(){
    return await axios.get(`${baseUrl}vehicles`);
}
export async function saveCollaborator(collaborator){
   return await axios.post(`${baseUrl}collaborator/save`,collaborator)
}
export async function authentication(user){
    return await axios.post(`${baseUrl}users/auth`,user)
}