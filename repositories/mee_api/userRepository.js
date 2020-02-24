import Repository from './Repository'

const resource = '/userlists'
export default {
  fetchUsers () {
    return Repository.get(`${resource}`)
  },
  fetchUser (userId) {
    return Repository.get(`${resource}/${userId}`)
  }
}
