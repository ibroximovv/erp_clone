import { TeamOutlined, UngroupOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons"
import { Groups, Home, Major, Students, Teachers } from "../pages/Dashboard"
import NotFound from "../pages/NotFound"

export const paths = {
    home: '/',
    major: '/major',
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
]

export const DashboardNavList = [
    {
        id: 1,
        title: "Yo'nalishlar",
        icon: <UnorderedListOutlined />
    },
    {
        id: 2,
        title: "Guruhlar",
        icon: <UngroupOutlined />
    },
    {
        id: 3,
        title: "O'quvchilar",
        icon: <TeamOutlined />
    },
    {
        id: 4,
        title: "Ustozlar",
        icon: <UserOutlined />
    },
]