import { createContext, useContext } from 'react'

type columns = number

const TableContext = createContext<columns>(6)

type TableProps = {
	columns: number
	children: React.ReactNode
}

type ChildrenProps = Omit<TableProps, 'columns'>

function Table({ columns, children }: TableProps) {
	return (
		<TableContext.Provider value={columns}>
			<div
				role='table'
				className='border border-gray-200 rounded-md overflow-hidden'
			>
				{children}
			</div>
		</TableContext.Provider>
	)
}

function Header({ children }: ChildrenProps) {
	const columns = useContext(TableContext)

	return (
		<div
			role='row'
			className={`grid gap-10 items-center py-6 px-10 bg-gray-50 border border-b-gray-100 uppercase font-semibold text-gray-600 grid-cols-${columns} `}
		>
			{children}
		</div>
	)
}
function Row({ children }: ChildrenProps) {
	const columns = useContext(TableContext)

	return (
		<div
			role='row'
			className={`grid gap-10 items-center py-6 px-10 bg-gray-50 border border-b-gray-100 uppercase font-semibold text-gray-600 grid-cols-${columns} `}
		>
			{children}
		</div>
	)
}

function Body({ data, render }) {
	return <div className='my-3 mx-0'>Row</div>
}

Table.Header = Header
Table.Row = Row
Table.Body = Body

export default Table
