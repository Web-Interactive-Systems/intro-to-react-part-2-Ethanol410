import { Flex } from '@radix-ui/themes'
import AgentsList from './AgentsList'
import AgentsForm from './AgentsForm'
import { $agentForm, setAgentForm, resetAgentForm } from '../../store/storeAgentForm'
// import { addAgent, updateAgent } from '../../store/storeAgents'
import { useState } from 'react'

function Agents() {
  const [showForm, setShowForm] = useState(false)
  const [selectedAgent, setSelectedAgent] = useState(null)

  const handleAdd = () => {
    setAgentForm({ id: '', emoji: '😀', title: '', role: '' })
    setShowForm(true)
    setSelectedAgent(null)
  }

  const handleEdit = (agent) => {
    setAgentForm(agent)
    setShowForm(true)
    setSelectedAgent(agent.id)
  }

  const handleCloseForm = () => {
    setShowForm(false)
    setSelectedAgent(null)
  }

  return (
    <Flex
      direction='row'
      gap='4'
      width='100%'
      height='100%'
      p='1'>
      <AgentsList
        onAdd={handleAdd}
        onEdit={handleEdit}
        selectedAgent={selectedAgent}
      />
      {showForm && <AgentsForm onClose={handleCloseForm} />}
    </Flex>
  )
}

export default Agents
