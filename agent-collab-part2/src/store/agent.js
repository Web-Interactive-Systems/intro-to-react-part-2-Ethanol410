import { atom } from 'nanostores'

export const $agents = atom([
  {
    id: Math.random().toString(),
    emoji: '😀',
    title: 'Scifi writer',
    role: 'you are a wonderful writer',
    response_format: 'text',
    temperature: 0.1,
    desired_response: 'a draft of scifi writing',
  },
])

export const addAgent = (agent) => {
  $agents.set([...$agents.get(), agent])
}

export const removeAgent = (id) => {
  $agents.set($agents.get().filter((a) => a.id !== id))
}

export const updateAgent = (id, data) => {
  $agents.set($agents.get().map((a) => (a.id === id ? { ...a, ...data } : a)))
}
