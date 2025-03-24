export const formatVoteTypeNumber = (num: number): string => {
  if (num >= 1000) {
    const formatted = (num / 1000).toFixed(1)
    return formatted.endsWith('.0') ? formatted.slice(0, -2) + 'k' : formatted + 'k'
  }

  return num.toString()
}

export const formatDate = (date: string | Date): string => {
  const parsedDate = typeof date === 'string' ? new Date(date) : date
  if (isNaN(parsedDate.getTime())) return ''

  return parsedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}
