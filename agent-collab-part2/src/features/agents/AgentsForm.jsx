import React from 'react'
import { useStore } from '@nanostores/react'
import { $agentForm, setAgentForm, resetAgentForm } from '../../store/storeAgentForm'
import { addAgent, updateAgent } from '../../store/storeAgents'
import {
  Box,
  Button,
  TextField,
  Flex,
  Select,
  TextArea,
  Slider,
  Text,
} from '@radix-ui/themes'

function AgentsForm({ onClose }) {
  const form = useStore($agentForm)

  const handleChange = (e) => {
    setAgentForm({ [e.target.name]: e.target.value })
  }

  const handleSlider = (value) => {
    setAgentForm({ temperature: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.id) {
      updateAgent(form.id, form)
    } else {
      addAgent({ ...form, id: Math.random().toString() })
    }
    resetAgentForm()
    onClose()
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        minWidth: 320,
        maxWidth: 400,
        margin: '0 auto',
        padding: 16,
        border: '1px solid var(--accent-3)',
      }}>
      <Flex
        direction='column'
        gap='3'>
        <label>
          Emoji
          <TextField.Root
            name='emoji'
            value={form.emoji}
            onChange={handleChange}
            placeholder='😀'
            style={{ marginTop: 4 }}
          />
        </label>
        <label>
          Title
          <TextField.Root
            name='title'
            value={form.title}
            onChange={handleChange}
            placeholder='Agent title'
            style={{ marginTop: 4 }}
          />
        </label>
        <label>
          Role
          <TextField.Root
            name='role'
            value={form.role}
            onChange={handleChange}
            placeholder='Agent role'
            style={{ marginTop: 4 }}
          />
        </label>
        <label>
          Response Format
          <Select.Root
            name='response_format'
            value={form.response_format}
            onValueChange={(value) => setAgentForm({ response_format: value })}
            style={{ marginTop: 4 }}>
            <Select.Trigger />
            <Select.Content>
              <Select.Item value='text'>Text</Select.Item>
              <Select.Item value='json'>JSON</Select.Item>
            </Select.Content>
          </Select.Root>
        </label>
        <label>
          Desired Response
          <TextArea
            name='desired_response'
            value={form.desired_response}
            onChange={handleChange}
            placeholder='Desired response...'
            style={{ marginTop: 4 }}
          />
        </label>
        <label>
          <Flex
            align='center'
            gap='2'>
            <span>Temperature</span>
            <Text
              color='gray'
              size='2'
              style={{ marginLeft: 8 }}>
              {Number(form.temperature).toFixed(2)}
            </Text>
          </Flex>
          <Slider
            min={0}
            max={1}
            step={0.01}
            value={[Number(form.temperature)]}
            onValueChange={([value]) => handleSlider(value)}
            style={{ marginTop: 4 }}
          />
        </label>
        <Button
          type='submit'
          color='blue'
          style={{ marginTop: 16 }}>
          ✔ Sauver
        </Button>
      </Flex>
    </form>
  )
}

export default AgentsForm
