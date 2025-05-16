import { atom } from 'nanostores'

export const $agentForm = atom({
  id: '',
  emoji: '😀',
  title: '',
  role: '',
  response_format: 'text',
  temperature: 0.1,
  desired_response: '',
})

export const setAgentForm = (data) => {
  $agentForm.set({ ...$agentForm.get(), ...data })
}

export const resetAgentForm = () => {
  $agentForm.set({
    id: '',
    emoji: '😀',
    title: '',
    role: '',
    response_format: 'text',
    temperature: 0.1,
    desired_response: '',
  })
}