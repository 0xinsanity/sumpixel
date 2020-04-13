import Router from 'next/router'

const OpenPage = (setLoading: (newLoad: boolean) => void, new_page: string) => {
    Router.push(new_page).then(() => {
        setLoading(false)
    })
}

export default OpenPage