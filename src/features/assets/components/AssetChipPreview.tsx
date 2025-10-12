import React, { useMemo } from 'react'
import { BsFiletypeJson } from 'react-icons/bs'
import { PiFileZipFill } from 'react-icons/pi'
import { RiFile2Line, RiFileExcel2Line, RiImage2Line } from 'react-icons/ri'

export interface AssetChipPreviewProps {
  name: string
  type?: string
  size?: number
}

const AssetChipPreview = (props: AssetChipPreviewProps) => {
  const { name, type = '', size = 28 } = props

  const isImage = useMemo(() => type.startsWith('image/'), [type])

  const isZip = useMemo(
    () => type === 'application/zip' || name.endsWith('.zip') || name.endsWith('.tar.gz') || name.endsWith('.tgz'),
    [type, name]
  )

  const isJson = useMemo(
    () => type === 'application/json' || name.endsWith('.json'),
    [type, name]
  )

  const isSpreadsheet = useMemo(
    () =>
      type === 'text/csv' ||
      name.endsWith('.csv') ||
      name.endsWith('.xlsx') ||
      name.endsWith('.xls'),
    [type, name]
  )

  if (isImage) return <RiImage2Line size={size} />
  if (isZip) return <PiFileZipFill size={size} />
  if (isJson) return <BsFiletypeJson size={size} />
  if (isSpreadsheet) return <RiFileExcel2Line size={size} />
  return <RiFile2Line size={size} />
}

export default AssetChipPreview
