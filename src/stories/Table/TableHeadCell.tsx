import React, { ThHTMLAttributes, forwardRef } from 'react'
import { cln } from '@/utils'

type TableHeadCellProps = ThHTMLAttributes<HTMLTableCellElement>

const TableHeadCell = forwardRef<HTMLTableCellElement, TableHeadCellProps>((props, ref): JSX.Element => {
  const { className, children, ...restProps } = props

  return (
    <th
      ref={ref}
      className={cln('border-b border-zinc-200 text-left px-4 py-3 bg-zinc-100 font-semibold', className)}
      {...restProps}
    >
      {children}
    </th>
  )
})

TableHeadCell.displayName = 'TableHeadCell'

export default TableHeadCell
