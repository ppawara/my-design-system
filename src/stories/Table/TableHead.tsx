import React, { HTMLAttributes, forwardRef } from 'react'
import { cln } from '@/utils'

type TableHeadProps = HTMLAttributes<HTMLTableSectionElement>

const Table = forwardRef<HTMLTableSectionElement, TableHeadProps>((props, ref): JSX.Element => {
  const { className, children, ...restProps } = props

  return (
    <thead ref={ref} className={cln('', className)} {...restProps}>
      {children}
    </thead>
  )
})

Table.displayName = 'Table'

export default Table
