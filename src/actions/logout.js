import { redirect } from 'react-router-dom';
import { deleteItem } from '../Storage';
import { toast } from 'react-toastify';

export async function logoutAction() {

    deleteItem({
        key: "userName"
    })
    toast.success("You have successfully deleted your account!")
    return redirect('./')
}