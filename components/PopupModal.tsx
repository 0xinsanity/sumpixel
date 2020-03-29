import React from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'

const ModalContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    height: 100vh;
`

interface PopupModalProps {
    visible: boolean;
    children: React.ReactNode
}
export const PopupModal: React.FC<PopupModalProps> = (props) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            isOpen={props.visible}
            style={{
                content: {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: 0,
                    border: 0,
                    borderRadius: 0
                }
            }}
        >
            <ModalContainer>
                {props.children}
            </ModalContainer>
        </Modal>
    );
};