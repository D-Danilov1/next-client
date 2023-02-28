import { FC } from 'react'

import styles from './UploadFields.module.scss'
import { useUpload } from './useUpload'

interface IUploadField {
  folder?: string
  onChange: () => void
}

const UploadField: FC<IUploadField> = ({ onChange, folder }) => {
  const { uploadFile } = useUpload(onChange, folder)

  return (
    <div className={styles.fieldImg}>
      <input type="file" onChange={uploadFile} accept="image/*" />
    </div>
  )
}
export default UploadField
