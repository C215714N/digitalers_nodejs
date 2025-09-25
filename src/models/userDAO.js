import usersData from "../data/user.json" with { type: "json" };
import { UserDTO } from "./userDTO.js";

class UserDAO{
    users = usersData.map(user => new UserDTO(user))
    async createUser (data){
        const newUser = new userDTO(data);
        newUser.id = Math.max(...this.users.map(({id}) => id + 1));
        this.users.push(newUser);
        return newUser;
    }
    async findUser(id){
        return this.users.find(usr => usr.id === Number(id) || usr.username === id)
    }
    async updateUser(id, data){
        this.users = this.users.map(usr => id === usr.id ? 
            new UserDTO({...usr, ...data}) : usr)
        return {message: "usuario actualizado", data }
    }
    async deleteUser(id){
        this.users = this.users.filter(usr => usr.id !== Number(id))
        return { message: "usuario eliminado" }
    }
}
export const users = new UserDAO();