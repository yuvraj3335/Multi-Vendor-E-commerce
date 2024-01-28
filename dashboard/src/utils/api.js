const local = 'http://localhost:5000'
const production = 'http://localhost:6000'

let baseURL = ''
let mode = 'dev'

if(mode === 'pro'){
    baseURL = production
}else{
    baseURL = local
}

export { baseURL}