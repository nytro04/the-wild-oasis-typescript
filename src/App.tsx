import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Dashboard from './pages/Dashboard'
import Cabins from './pages/Cabins'
import Bookings from './pages/Bookings'
import Settings from './pages/Settings'
import Users from './pages/Users'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
})

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route index element={<Navigate replace to='dashboard' />} />
						<Route path='dashboard' element={<Dashboard />} />
						<Route path='cabins' element={<Cabins />} />
						<Route path='bookings' element={<Bookings />} />
						<Route path='settings' element={<Settings />} />
						<Route path='users' element={<Users />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	)
}

export default App
