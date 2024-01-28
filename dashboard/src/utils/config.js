const local = 'http://localhost:5000'
const production = 'http://localhost:6000'

let  base_url = ''
let mode = 'dev'

if(mode === 'pro'){
    base_url = production
}else{
    base_url = local
}
export{base_url}