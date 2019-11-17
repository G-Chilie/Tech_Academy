import moment from 'moment';
import uuid from 'uuid';

class User {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.users = [];
  }
  /**
   * 
   * @returns {object} user object
   */
  create(data) {
    const newUser = {
      id: uuid.v4(),
      name: data.name || '',
      gender: data.gender || '',
      password: data.password || '',
      employmentStatus: data.employmentStatus || '',
      maritalStatus: data.maritalStatus || '',
      homeAddress: data.homeAddress || ''

    };
    this.users.push(newUser);
    return newUser
  }
  /**
   * 
   * @param {uuid} id
   * @returns {object} user object
   */
  findOne(id) {
    return this.users.find(u => u.id === id);
  }
  /**
   * @returns {object} returns all users
   */
  findAll() {
    return this.users;
  }
  /**
   * 
   * @param {uuid} id
   * @param {object} data 
   */
  update(id, data) {
    const user = this.findOne(id);
    const index = this.users.indexOf(user);
    this.users[index].name = data['name'] || user.name;
    this.users[index].gender = data['gender'] || user.gender;
    this.users[index].password = data['password'] || user.password;
    this.users[index].employmentStatus = data['employmentStatus'] || user.employmentStatus;
    this.users[index].maritalStatus = data['maritalStatus'] || user.maritalStatus;
    this.users[index].homeAddress = data['homeAddress'] || user.homeAddress;
    return this.users[index];
  }
  /**
   * 
   * @param {uuid} id 
   */
  delete(id) {
    const user = this.findOne(id);
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
    return {};
  }
}
export default new User();
