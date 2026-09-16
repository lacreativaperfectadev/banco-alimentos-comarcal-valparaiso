import { AdminGate } from '../components/admin/admin-gate'
import { AdminDashboard } from '../components/admin/admin-dashboard'

export function AdminPage() {
  return (
    <AdminGate>
      <AdminDashboard />
    </AdminGate>
  )
}
