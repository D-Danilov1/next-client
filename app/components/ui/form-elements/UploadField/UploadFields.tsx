import { FC, useRef } from 'react';

import MaterialIcon from '../../MaterialIcon';

import styles from './UploadFields.module.scss';
import { useUpload } from './useUpload';

interface IUploadField {
  folder?: string;
  onChange: () => void;
  isMulti?: boolean;
  accept?: string;
}

const UploadField: FC<IUploadField> = ({ onChange, folder, isMulti = false, accept = '.pdf' }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { uploadFile } = useUpload(onChange, folder, inputRef);
  return (
    <div className={styles.field}>
      <input
        ref={inputRef}
        type="file"
        onChange={uploadFile}
        accept={accept}
        max-size="1000000000"
        multiple={isMulti}
      />
      <MaterialIcon name="MdAdd" />
    </div>
  );
};
export default UploadField;
