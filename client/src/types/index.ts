

export type adminReducerType = {
    loading:boolean,
    admin:boolean,
    surveys: survey[]
    err: any
}

export type survey = {
    username:string,
    email: string,
    phone: string
    gender:string,
    nationality: string,
    address: string
    message: string,
    createdAt: string,
}

export type logoutModalAndLoading = {
    modal: boolean,
    loading: boolean
}

export type Country = {
    flags: {
        svg:string,
    }
    name: {
        common: string
    },
}