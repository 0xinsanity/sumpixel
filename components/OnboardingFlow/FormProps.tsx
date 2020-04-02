
import {User, NavBarStatus, Employer} from '../../model/model'

export default interface FormProps {
    currentUser?: User | Employer;
    changeCurrentUser?: (user: User | Employer) => void
    changeStep: (change: number) => void
    changeNavbarStatus?: (navBarStatus: NavBarStatus) => void
}
