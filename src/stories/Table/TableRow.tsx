import React, { HTMLAttributes, forwardRef } from 'react'
import { cln } from '@/utils'

type TableRowProps = HTMLAttributes<HTMLTableRowElement>

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>((props, ref): JSX.Element => {
  const { className, children, ...restProps } = props

  return (
    <tr ref={ref} className={cln('', className)} {...restProps}>
      {children}
    </tr>
  )
})

TableRow.displayName = 'TableRow'

export default TableRow
