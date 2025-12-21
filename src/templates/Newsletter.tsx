import React from 'react'
import { render } from '@react-email/render'
import { Html, Text } from '@react-email/components'
import type { Document } from 'payload'

type Props = {
  contents: Document
}

const Template: React.FC<Props> = ({ contents }) => {
  return (
    <Html>
      <Text>This is a test newsletter</Text>
      {contents.bodyHtml}
    </Html>
  )
}

export async function newsletter(data: Props) {
  return render(<Template {...data} />)
}
