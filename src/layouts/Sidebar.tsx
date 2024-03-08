import Logo from '../components/common/Logo'
import MainNav from './MainNav'

function Sidebar() {
	return (
		<div className='px-8 py-12 border-r col-span-1 border-gray-200 bg-gray-50 flex flex-col gap-14'>
			<Logo />
			<MainNav />
		</div>
	)
}

export default Sidebar
