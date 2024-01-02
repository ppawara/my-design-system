import React, { HTMLAttributes, forwardRef } from 'react'
import { cln } from '@/utils'

type TableHeadProps = HTMLAttributes<HTMLTableSectionElement>

const Table = forwardRef<HTMLTableSectionElement, TableHeadProps>((props, ref): JSX.Element => {
  const { className, children, ...restProps } = props

  return (
    <tbody ref={ref} className={cln('', className)} {...restProps}>
      {children}
    </tbody>
  )
})

Table.displayName = 'Table'

export default Table
