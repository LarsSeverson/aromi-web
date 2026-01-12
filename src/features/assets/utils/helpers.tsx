export const getDisplayFileSize = (sizeInBytes: number) => {
  if (sizeInBytes < 1024) {
    return `${sizeInBytes} B`
  } else if (sizeInBytes < 1024 * 1024) {
    return `${(sizeInBytes / 1024).toFixed(0)} KB`
  } else if (sizeInBytes < 1024 * 1024 * 1024) {
    return `${(sizeInBytes / (1024 * 1024)).toFixed(0)} MB`
  } else {
    return `${(sizeInBytes / (1024 * 1024 * 1024)).toFixed(0)} GB`
  }
}