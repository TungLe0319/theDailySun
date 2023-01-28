import Pop from './Pop'

class AccountsService {
  async getAccount (data) {
    try {
      logger.log('data', data)
      const account = await useFetch('/api/me')
      if (!account) {
        createAccount(data)
      }
      return account
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
}
async function createAccount (body) {
  const account = await useFetch('/api/me', {
    method: 'POST',
    body
  })
  logger.log('account created', account)
  return account
}
export const accountsService = new AccountsService()
