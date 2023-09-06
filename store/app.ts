import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'


interface AppUser {
  email?: string
}

interface AppStore {
  loading: boolean,
  token?: string
  user?: AppUser
}

interface AppActions {
  setLoading: (loading: boolean) => void
  setToken: (token?: string) => void
  fetchUser: () => void
  signout: () => void
}
const userURL = "https://login.xsolla.com/api/users/me"

export const useAppStore = create<AppStore & AppActions>()(
  devtools(
    persist(
      (set, get) => ({
        loading: false,
        token: undefined,
        user: undefined,
        setLoading: (loading: boolean) => set((state) => ({ loading })),
        setToken: (token?: string) => set((state) => ({ token })),
        fetchUser: async () => {
          const token =  get().token

          set((state) => ({ loading: true }))

          try {
            const resp = await fetch(
              userURL,
              {
                method: 'GET',
                headers: {
                  Authorization: token!
                }
              }
            );
            
            const user = await resp.json();
            set((_) => ({ user, loading: false }))
          } catch (e) {
            console.log(e)
            set((_) => ({ loading: false }))
          }
        },
        signout: () => {
          set((_) => ({ user: undefined, token: undefined }))
        }
      }),
      {
        name: 'app-store',
      }
    )
  )
)