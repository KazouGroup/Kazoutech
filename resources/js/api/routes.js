import DashboardIndex from "../components/admin/DashboardIndex";
import AdminAccount from "../components/admin/account/AdminAccount";
import AdminProfileEdit from "../components/admin/account/AdminProfileEdit";
import ColorIndex from "../components/admin/partial/color/ColorIndex";
import CountriesIndex from "../components/admin/partial/country/CountriesIndex";
import AdminChangePassword from "../components/admin/account/AdminChangePassword";
import CategoryIndex from "../components/admin/partial/category/site/CategoryIndex";
import CategoryCreate from "../components/admin/partial/category/site/CategoryCreate";
import CategoryEdit from "../components/admin/partial/category/site/CategoryEdit";
import ContactIndex from "../components/admin/contact/ContactIndex";
import ContactMessageShow from "../components/admin/contact/ContactMessageShow";
import TagIndex from "../components/admin/partial/tag/TagIndex";
import TagCreate from "../components/admin/partial/tag/TagCreate";
import TagEdit from "../components/admin/partial/tag/TagEdit";
import TagView from "../components/admin/partial/tag/TagView";
import ChatIndex from "../components/site/chat/ChatIndex";
import UserIndex from "../components/admin/user/UserIndex";
import UserEdit from "../components/admin/user/UserEdit";
import MessageIndex from "../components/admin/user/message/MessageIndex";
import MessageSend from "../components/admin/user/message/MessageSend";
import MessageView from "../components/admin/user/message/MessageView";
import OccupationIndex from "../components/admin/occupation/OccupationIndex";
import CategoryFaqIndex from "../components/admin/faq/CategoryFaqIndex";
import FaqIndex from "../components/admin/faq/FaqIndex";
import FaqCreate from "../components/admin/faq/FaqCreate";
import FaqEdit from "../components/admin/faq/FaqEdit";
import AdministratorIndex from "../components/admin/administrator/AdministratorIndex";
import AdministratorEdit from "../components/admin/administrator/AdministratorEdit";
import CityIndex from "../components/admin/partial/city/CityIndex";
import PermissionIndex from "../components/admin/permission/PermissionIndex";
import NoteIndex from "../components/admin/partial/note/NoteIndex";
import TaskIndex from "../components/admin/partial/task/TaskIndex";
import TaskUser from "../components/admin/partial/task/TaskUser";
import RoleIndex from "../components/admin/role/RoleIndex";
import AboutIndex from "../components/admin/partial/about/AboutIndex";
import AboutCreate from "../components/admin/partial/about/AboutCreate";
import AboutEdit from "../components/admin/partial/about/AboutEdit";
import AdministratorShow from "../components/admin/account/AdministratorShow";
import AdminResetPassword from "../components/admin/account/AdminResetPassword";
import TechnicianIndex from "../components/user/technician/TechnicianIndex";
import TechnicianCreate from "../components/user/technician/TechnicianCreate";
import TechnicianEdit from "../components/user/technician/TechnicianEdit";
import TasktechnicianIndex from "../components/admin/tasktechnician/TasktechnicianIndex";
import TasktechnicianCreate from "../components/admin/tasktechnician/TasktechnicianCreate";


export const routes = [

    {path: '/dashboard/', name: 'dashboard.index', component: DashboardIndex},
    {path: '/dashboard/account/profile/', name: 'admin.account', component: AdminAccount},
    {path: '/dashboard/profile/:username', name: 'admin.view', component: AdminAccount},
    {path: '/dashboard/user/update/', name: 'admin.edit_profile', component: AdminProfileEdit},
    {path: '/dashboard/user/password/change/', name: 'admin.change_password', component: AdminChangePassword,},
    {path: '/dashboard/user/password/reset/', name: 'admin.reset_password', component: AdminResetPassword},
    {path: '/dashboard/colors/', name: 'colors.index', component: ColorIndex},
    {path: '/dashboard/countries/', name: 'countries.index', component: CountriesIndex},

    //Route administrators
    {path: '/dashboard/administrators/', name: 'administrators.index', component: AdministratorIndex},
    {path: '/dashboard/administrators/:id/edit/', name: 'administrators.edit', component: AdministratorEdit},

    //Route occupations
    {path: '/dashboard/occupations/', name: 'occupations.index', component: OccupationIndex},

    //Route cities
    {path: '/dashboard/cities/', name: 'cities.index', component: CityIndex},

    //Route categories FAQS
    {path: '/dashboard/category-faqs/', name: 'categoryfaqs.index', component: CategoryFaqIndex},
    //Route permissions
    {path: '/dashboard/permissions/', name: 'permissions.index', component: PermissionIndex},
    //Route roles
    {path: '/dashboard/roles/', name: 'roles.index', component: RoleIndex},

    //Route FAQS
    {path: '/dashboard/faqs/', name: 'faqs.index', component: FaqIndex},
    {path: '/dashboard/faqs/create/', name: 'faqs.create', component: FaqCreate},
    {path: '/dashboard/faqs/:id/edit/', name: 'faqs.edit', component: FaqEdit},

    //Route categories
    {path: '/dashboard/categories/', name: 'categories.index', component: CategoryIndex},
    {path: '/dashboard/categories/create/', name: 'categories.create', component: CategoryCreate},
    {path: '/dashboard/categories/:id/edit/', name: 'categories.edit', component: CategoryEdit},

    //Route Abouts
    {path: '/dashboard/abouts/', name: 'abouts.index', component: AboutIndex},
    {path: '/dashboard/abouts/create/', name: 'abouts.create', component: AboutCreate},
    {path: '/dashboard/abouts/:id/edit/', name: 'abouts.edit', component: AboutEdit},

    //Route tags
    {path: '/dashboard/tags/', name: 'tags.index', component: TagIndex},
    {path: '/dashboard/tags/create/', name: 'tags.create', component: TagCreate},
    {path: '/dashboard/tags/:id/edit/', name: 'tags.edit', component: TagEdit},
    {path: '/dashboard/tags/show/:tag/', name: 'tags.view', component: TagView},

    //Route users
    {path: '/dashboard/users/', name: 'users.index', component: UserIndex},
    {path: '/dashboard/users/:id/edit/', name: 'users.edit', component: UserEdit},
    {path: '/dashboard/users/profile/:username/', name: 'users.view', component: AdministratorShow},

    //Route contacts
    {path: '/dashboard/contacts/', name: 'contacts.index', component: ContactIndex},
    {path: '/dashboard/contacts/msg/:contact/', name: 'contacts.view', component: ContactMessageShow},


    {
        path: '/dashboard/messages/',
        name: 'messages.index',
        component: MessageIndex,
        //children: [
        //    {path: 'send/', name: 'messages.send', component: MessageSend,},
        //]
    },
    {path: '/dashboard/messages/msg/:message/', name: 'messages.view', component: MessageView},
    {path: '/dashboard/messages/m/send/', name: 'messages.send', component: MessageSend},

    {path: '/dashboard/chat/', name: 'messages.chat', component: ChatIndex},


    {path: '/dashboard/notes/', name: 'notes.index', component: NoteIndex},
    {path: '/dashboard/tasks/', name: 'tasks.index', component: TaskIndex},
    {path: '/dashboard/tasks/u/:username/', name: 'tasks.view', component: TaskUser},

    //Route technicians
    {path: '/dashboard/technicians/', name: 'technicians.index', component: TechnicianIndex},
    {path: '/dashboard/technicians/create/', name: 'technicians.create', component: TechnicianCreate},
    {path: '/dashboard/technicians/:id/edit/', name: 'technicians.edit', component: TechnicianEdit},

    //Route tasks technicians
    {path: '/dashboard/task_technicians/', name: 'task_technicians.index', component: TasktechnicianIndex},
    {path: '/dashboard/task_technicians/create/', name: 'task_technicians.create', component: TasktechnicianCreate},

];