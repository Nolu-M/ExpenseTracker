import { Outlet, useLoaderData } from 'react-router-dom';
import Nav from '../components/Nav';
import { fetchData } from '../Storage';

export function mainLoader() {
    const userName = fetchData("userName");
    return { userName }
}

const Main = () => {
  const { userName } = useLoaderData()

  return (
    <div>
        <Nav userName = {userName}/>
            <main>
                <Outlet/>
            </main>
        <img src="" alt="" />
    </div>
  )
}

export default Main