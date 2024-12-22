import configPromise from '@payload-config'
import { NextApiRequest, NextApiResponse } from 'next'
import { getPayload } from 'payload'

export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'users',
  })

  return Response.json(data)
}

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const webhookUrl = process.env.NETIFLY_WEBHOOK_URL

    if (!webhookUrl) {
      throw new Error('webhook URL is not configured.')
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    })

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to trigger webook' })
    }

    return res.status(200).json({ message: 'Webhook triggered successfully' })
  } catch (err) {
    console.error('Error triggering webhook: ', err)
  }
}
