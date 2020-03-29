
import {User} from '../../model/model'

export default interface FormProps {
    currentUser: User;
    changeCurrentUser: (user: User) => void
    changeStep: (change: number) => void
}
