import { Resizable } from '@/components/Resizable'
import Agents from '@/features/agents/Agents'
import Chat from '@/features/chat/Chat'
import { Flex } from '@radix-ui/themes'

function Home() {
  return (
    <Flex
      gap='8'
      width='100%'
      height='100%'>
      {/* Todo add agent view here */}
      <Agents />

      <Resizable
        className='resizable'
        style={{
          background: 'var(--focus-a3)',
          borderLeft: '1px solid var(--gray-9)',
          marginLeft: 'auto',
        }}
        enable={{
          top: false,
          right: false,
          bottom: false,
          left: true,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}>
        <Chat />
      </Resizable>
    </Flex>
  )
}

export default Home
