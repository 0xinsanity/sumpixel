
import {User, NavBarStatus, Employer} from '../../model/model'

export default interface FormProps {
    deleteUser?: () => void
    changeCurrentUser?: (user: User | Employer) => void
    changeStep?: (change: number) => void
    changeNavbarStatus?: (navBarStatus: NavBarStatus) => void
}
