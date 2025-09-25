export function AddressDTO(data){
    this.street = data.street
    this.suite = data.suite
    this.city = data.city
    this.zipcode = data.zipcode
}
export function UserDTO(user){
    this.id = user.id
    this.username = user.username,
    this.email = user.email,
    this.userData = new AddressDTO(user.address)
}