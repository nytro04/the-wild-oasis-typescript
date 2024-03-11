import supabase from './supabase'

export async function getCabins() {
	const { data, error } = await supabase.from('cabins').select('*')

	if (error) {
		console.log(error, 'error loading cabins')
		throw new Error('Error loading cabins')
	}

	return data
}

export type CabinsResponse = ReturnType<typeof getCabins>
// export type CabinResponseSuccess = CabinsResponse['data']
