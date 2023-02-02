// import { useFetch } from '@nuxt/content'

// import { Ref } from 'nuxt/dist/app/compat/capi'

export class useApi {
  // headers: HeadersInit | undefined
  // static headers: HeadersInit | Ref<HeadersInit | undefined> | undefined

  // /**
  //  *
  //  */
  // constructor (headers = false) {
  //   if (headers === true) {
  //     this.headers = useRequestHeaders(['cookie']) as HeadersInit
  //   }
  // }

  static async put (url: string, body: any) {
    const headers = useRequestHeaders(['cookie']) as HeadersInit

    const { data } = await useFetch(url, {
      method: 'PUT',
      body,
      headers
    })
    return data.value
    // return await useFetch(url, {
    //   method: 'PUT',
    //   body,
    //   headers
    // })
  }

  static async post (url: string, body: any) {
    const headers = useRequestHeaders(['cookie']) as HeadersInit
    const { data } = await useFetch(url, {
      method: 'POST',
      body,
      headers
    })
    return data.value
  }

  static delete (url: string) {
    return useFetch(url, {
      method: 'DELETE'
    })
  }

  static get (url: string) {
    return useFetch(url)
  }
}

// useApi.post('api/hello', body)
