import React, { TableHTMLAttributes, forwardRef } from 'react'

import TableHead from './TableHead'
import TableHeadCell from './TableHeadCell'
import TableBody from './TableBody'
import TableRow from './TableRow'
import TableCell from './TableCell'

import { cln } from '@/utils'

type TableProps = TableHTMLAttributes<HTMLTableElement>

const Table = forwardRef<HTMLTableElement, TableProps>((props, ref): JSX.Element => {
  const { className, children, ...restProps } = props

  return (
    <table ref={ref} className={cln('border-separate border-spacing-0 w-full', className)} {...restProps}>
      {children}
    </table>
  )
})

Table.displayName = 'Table'

const CompoundTable = Object.assign(Table, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  HeadCell: TableHeadCell,
  Cell: TableCell,
})

export default CompoundTable
