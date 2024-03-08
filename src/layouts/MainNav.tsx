import {
	CalendarDaysIcon,
	HomeIcon,
	Cog6ToothIcon,
	HomeModernIcon,
	UsersIcon,
} from '@heroicons/react/24/outline'
import { Icon } from '../types/utils'

import { NavLink } from 'react-router-dom'

function MainNav() {
	type NavItem = {
		name: string
		to: string
		icon: Icon
	}
	const NavListings: NavItem[] = [
		{
			name: 'Home',
			to: 'dashboard',
			icon: HomeIcon,
		},
		{
			name: 'Bookings',
			to: 'bookings',
			icon: CalendarDaysIcon,
		},
		{
			name: 'Cabins',
			to: 'cabins',
			icon: HomeModernIcon,
		},
		{
			name: 'Users',
			to: 'users',
			icon: UsersIcon,
		},
		{
			name: 'Settings',
			to: 'settings',
			icon: Cog6ToothIcon,
		},
	]
	return (
		<div>
			<ul className='flex flex-col gap-4'>
				{NavListings.map((list) => {
					const Icon = list.icon
					return (
						<li>
							<NavLink to={list.to} className='flex items-center gap-5'>
								{/* TODO  */}
								{/* className={({ isActive }) =>
									isActive ? 'text-green-500' : 'text-gray-400'
								} */}
								<Icon className='w-6 h-6 hover:text-green-500 active:text-green-500' />
								<span className='text-black font-medium'>{list.name}</span>
							</NavLink>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default MainNav
