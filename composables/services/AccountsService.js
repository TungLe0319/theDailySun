import Pop from '../../utils/Pop'
// import { cartService } from './CartService'

class AccountsService {
  async getAccount () {
    try {
      const { data, status } = await useSession()
      // const userStore = useUserStore()
      // userStore.user = data.value
      AppState.user = data.value
      AppState.user = { ...AppState.user, isAuthenticated: status.value === 'authenticated' ? status.value : 'no' }
    } catch (error) {
      Pop.error(error)
    }
  }

  async isAuthed (data) {
    // logger.log('auth', data)
    if (data) {
      await this.getAccount(data)
    }
  }

  async createAccount (body) {
    const account = await useFetch('/api/me', {
      method: 'POST',
      body
    })
    logger.log('account created', account)
    return account
  }
}
export const accountsService = new AccountsService()
