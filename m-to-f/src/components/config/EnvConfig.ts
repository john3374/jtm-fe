type EnvType={
    REST_API : string,
    CLIENT_SECRET : string
}

const EnvConfig : EnvType = {
    REST_API : process.env.REACT_APP_REST_API || '',
    CLIENT_SECRET : process.env.REACT_APP_CLIENT_SECRET || ''
}

export default EnvConfig