import * as React from 'react'
import { fetchData } from '../Storage'

export function dashboardLoader() {
    const userName = fetchData("userName");
    return { userName }
}

const Dashboard = () => {
  const { userName } = useLoaderData()

  return (
    <div>
      <h1>{userName}
      Dashboard</h1>
        Dashboard
    </div>
  )
}

export default Dashboard

