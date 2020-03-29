import React from 'react'

export const UserInfoContext = React.createContext({
    id: undefined,
    updateId: (id) => {}
});