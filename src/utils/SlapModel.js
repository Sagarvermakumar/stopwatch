
class User {
  setName(name) {
    this.name = name
  }
  setEmail(email) {
    this.email = email
  }
  setPhone(phone) {
    this.phone = phone
  }

  getName(name) {
    return name ;
  }
  getEmail(email) {
    return email
  }
  getPhone(phone) {
    return phone
  }
}

module.exports = User;