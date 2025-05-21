import React from 'react'
import { useStore } from '@nanostores/react'
import { Box, Flex, Button, Card, Text } from '@radix-ui/themes'
import { $agents, removeAgent } from '@/store/storeAgents'

function AgentsList({ onEdit, onAdd, selectedAgent }) {
  const agents = useStore($agents)

  return (
    <Flex
      direction='column'
      gap='2'>
      <Flex
        style={{
          background: '',
          padding: '4px 8px',
          borderRadius: 18,
          marginLeft: 18,
          alignItems: 'center',
        }}>
        <Button onClick={onAdd}>+ Ajouter</Button>
      </Flex>
      <Flex
        direction='column'
        gap='3'
        mt=''>
        {agents.map((agent) => (
          <Card
            key={agent.id}
            style={{
              background: selectedAgent === agent.id ? 'var(--focus-7)' : '',
              display: 'flex',
              flexDirection: 'row',
              padding: '8px 12px',
              alignItems: 'center',
              gap: 15,
            }}>
            <span style={{ fontSize: 28 }}>{agent.emoji}</span>
            <Box>
              <Text
                as='div'
                mr='4'
                weight='bold'>
                {agent.title}
              </Text>
              <Text
                as='div'
                size='2'
                color='gray'>
                {agent.role}
              </Text>
            </Box>
            <Button
              variant='ghost'
              onClick={() => onEdit(agent)}
              style={{ marginLeft: 'auto' }}>
              ✏️
            </Button>
            <Button
              variant='ghost'
              color='red'
              onClick={() => removeAgent(agent.id)}>
              🗑️
            </Button>
          </Card>
        ))}
      </Flex>
    </Flex>
  )
}

export default AgentsList
