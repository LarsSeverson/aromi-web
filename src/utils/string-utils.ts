export const formatBytes = (bytes: number) => {
  if (!Number.isFinite(bytes)) return ''
  const units = ['B', 'KB', 'MB', 'GB']
  let n = bytes
  let i = 0
  while (n >= 1024 && i < units.length - 1) {
    n = n / 1024
    i += 1
  }
  return `${n.toFixed(n < 10 && i > 0 ? 1 : 0)} ${units[i]}`
}

export const formatNumber = (num: number) => {
  if (!Number.isFinite(num)) return ''
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`
  return num.toString()
}

export const formatDate = (date: string | Date): string => {
  const parsedDate = typeof date === 'string' ? new Date(date) : date
  if (isNaN(parsedDate.getTime())) return ''

  return parsedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export const formatDateRelative = (date: string | Date): string => {
  const parsedDate = typeof date === 'string' ? new Date(date) : date
  if (isNaN(parsedDate.getTime())) return ''

  const now = new Date()
  const diff = now.getTime() - parsedDate.getTime()
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const weeks = Math.floor(days / 7)
  const months = Math.floor(days / 30)
  const years = Math.floor(days / 365)

  if (years > 0) return years === 1 ? '1 year ago' : `${years} years ago`
  if (months > 0) return months === 1 ? '1 month ago' : `${months} months ago`
  if (weeks > 0) return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`
  if (days > 0) return days === 1 ? '1 day ago' : `${days} days ago`
  if (hours > 0) return hours === 1 ? '1 hour ago' : `${hours} hours ago`
  if (minutes > 0) return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`
  return seconds <= 1 ? 'just now' : `${seconds} seconds ago`
}