import React, { TdHTMLAttributes, forwardRef } from 'react'
import { cln } from '@/utils'

type TableHeadCellProps = TdHTMLAttributes<HTMLTableCellElement>

const TableHeadCell = forwardRef<HTMLTableCellElement, TableHeadCellProps>((props, ref): JSX.Element => {
  const { className, children, ...restProps } = props

  return (
    <td ref={ref} className={cln('border-b border-zinc-200 p-4', className)} {...restProps}>
      {children}
    </td>
  )
})

TableHeadCell.displayName = 'TableHeadCell'

export default TableHeadCell
