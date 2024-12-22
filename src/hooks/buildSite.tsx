import { toast } from '@payloadcms/ui'

export const buildSite = async (): Promise<void> => {
  try {
    const response = await fetch('/api/publish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.ok) {
      toast.success('Publish webhook successfully triggered')
    } else {
      toast.error('Could not trigger publish webook')
    }
  } catch (err) {
    toast('Error triggering webhook')
  }
}
