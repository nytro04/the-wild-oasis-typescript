type EmptyProps = {
	resourceName: string
}

function Empty({ resourceName }: EmptyProps) {
	return <p>No {resourceName} was found</p>
}

export default Empty
