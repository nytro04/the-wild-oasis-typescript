import Table from '../../common/Table'
import { useCabins } from './useCabins'

function CabinTable() {
	const { isLoading, error, cabins } = useCabins()

	console.log(isLoading, error, cabins)

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
				{tableHeader.map((header, index) => (
					<div key={index}>{header}</div>
				))}
			</Table.Header>

			{/* <Table.Body /> */}
		</Table>
	)
}

export default CabinTable
