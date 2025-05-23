import React from 'react'
import { Tabs, Flex, Button } from '@radix-ui/themes'
import { EXPRESSIONES, GESTURES, FOOD, PLACES, NATURE } from '../../utils/emojis'

const categories = [
  { label: 'Smileys', emojis: EXPRESSIONES },
  { label: 'Gestes', emojis: GESTURES },
  { label: 'Natures', emojis: NATURE },
  { label: 'Nourriture', emojis: FOOD },
  { label: 'Lieux', emojis: PLACES },
]

function EmojiPickerComponent({ value, onChange }) {
  return (
    <Tabs.Root defaultValue={categories[0].label}>
      <Tabs.List>
        {categories.map((cat) => (
          <Tabs.Trigger
            key={cat.label}
            value={cat.label}>
            {cat.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {categories.map((cat) => (
        <Tabs.Content
          key={cat.label}
          value={cat.label}>
          <Flex
            wrap='wrap'
            gap='1'
            style={{ marginTop: 8 }}>
            {cat.emojis.map((emoji) => (
              <Button
                key={emoji}
                type='button'
                variant={value === emoji ? 'solid' : 'ghost'}
                onClick={() => onChange(emoji)}
                style={{ fontSize: 24, padding: 4, minWidth: 36 }}>
                {emoji}
              </Button>
            ))}
          </Flex>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}

export default EmojiPickerComponent

// Usage example in another component
/*
<label>
  Emoji
  <EmojiPicker
    value={form.emoji}
    onChange={(emoji) => setAgentForm({ emoji })}
  />
</label>
*/
