import cn from 'clsx'
import { forwardRef, useState } from 'react'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'

import { IField } from './form.interface'
import styles from './form.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
  ({ text, placeholder, error, type = 'text', style, ...rest }, ref) => {
    const [visible, setVisible] = useState(false)

    return (
      <div className={styles.field} style={style}>
        <label>
          <input
            ref={ref}
            type={visible || type !== 'password' ? 'text' : 'password'}
            placeholder={placeholder}
            autoComplete="off"
            {...rest}
            className={cn({ [styles.fieldError]: error?.message })}
          />
          {type === 'password' && (
            <span onClick={() => setVisible(!visible)}>
              {visible ? <IoMdEyeOff /> : <IoMdEye />}
            </span>
          )}
        </label>
        {error && <div className={styles.error}>{error.message}</div>}
      </div>
    )
  },
)

export default Field
