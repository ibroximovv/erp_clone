import { TeamOutlined, UngroupOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons"
import { Groups, Home, Major, MajorCrud, MajorMore, Students, Teachers } from "../pages/Dashboard"
import NotFound from "../pages/NotFound"
import { NavLink } from "react-router-dom"

export const paths = {
    home: '/',
    major: '/major',
    majorCrud: '/major/create',
    majorMore: '/major/:id',
    students: '/students',
    groups: '/groups',
    teachers: '/teachers',
    signIn: '/sign-in',
    notFound: '*'
}

export const DashboardRouteList = [
    {
        id: 1,
        path: paths.home,
        element: <Home />
    },
    {
        id: 2,
        path: paths.major,
        element: <Major />
    },
    {
        id: 3,
        path: paths.groups,
        element: <Groups />
    },
    {
        id: 4,
        path: paths.teachers,
        element: <Teachers />
    },
    {
        id: 5,
        path: paths.students,
        element: <Students />
    },
    {
        id: 6,
        path: paths.notFound,
        element: <NotFound />
    },
    {
        id: 7,
        path: paths.majorCrud,
        element: <MajorCrud />
    },
    {
        id: 8,
        path: paths.majorMore,
        element: <MajorMore />
    }
]

export const DashboardNavList = [
    {
        key: 1,
        label:<NavLink to={paths.major}>Yo'nalishlar</NavLink>,
        icon: <UnorderedListOutlined />
    },
    {
        key: 2,
        label: <NavLink to={paths.groups}>Guruhlar</NavLink>,
        icon: <UngroupOutlined />
    },
    {
        key: 3,
        label: <NavLink to={paths.students}>O'quvchilar</NavLink>,
        icon: <TeamOutlined />
    },
    {
        key: 4,
        label: <NavLink to={paths.teachers}>Ustozlar</NavLink>,
        icon: <UserOutlined />
    },
]