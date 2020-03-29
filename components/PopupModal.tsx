import React from 'react'
import Modal from 'react-modal'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    modal: {
        content: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            padding: 0,
            border: 0,
            borderRadius: 0
        }
    },
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: '100vh'
    }
})

interface PopupModalProps {
    visible: boolean;
    children: React.ReactNode
}
export const PopupModal: React.FC<PopupModalProps> = (props) => {
    const classes = useStyles()
    return (
        <Modal
            animationType="fade"
            transparent={true}
            isOpen={props.visible}
            className={classes.modal}
        >
            <div className={classes.container}>
                {props.children}
            </div>
        </Modal>
    );
};