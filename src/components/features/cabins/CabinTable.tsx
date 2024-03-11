import Table from '../../common/Table'

function CabinTable() {
	const tableHeader: string[] = [
		'',
		'Cabin',
		'Capacity',
		'Price',
		'Discount',
		'',
	]

	return (
		<Table columns={6}>
			<Table.Header>
				{tableHeader.map((header) => (
					<div key={header}>{header}</div>
				))}
			</Table.Header>

			{/* <Table.Body /> */}
		</Table>
	)
}

export default CabinTable
