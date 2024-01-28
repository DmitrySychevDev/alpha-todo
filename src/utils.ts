/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL

export default function request<T, RT>(
  method: string,
  path: string,
  params?: T
): Promise<RT | any> {
  const requestPromise: Promise<RT | any> = new Promise((resolve, rejects) => {
    axios({
      method: method,
      url: apiUrl + path,
      ...(method === 'POST' || method === 'PUT' ? { data: params } : {}),
      ...(method === 'GET' ? { params: params } : {}),
    })
      .then((req) => {
        resolve(req.data)
      })
      .catch((e) => {
        rejects(e)
      })
  })
  return requestPromise
}
