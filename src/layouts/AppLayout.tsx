import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

function AppLayout() {
	return (
		<div className='grid grid-cols-6 h-screen'>
			<Sidebar />
			<div className='col-span-5'>
				<Header />
				<main className='px-24 py-16 overflow-scroll'>
					<div className='mx-auto flex-col gap-12 flex max-w-[120rem]'>
						<Outlet />
					</div>
				</main>
			</div>
		</div>
	)
}

export default AppLayout
