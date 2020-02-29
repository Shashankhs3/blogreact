const initState={
    blogs:[
        {id:'1',title:"ddssdf" ,content:"hfhgifbdjbvkj"},
        {id:'2',title:"ddssdf" ,content:"hfhgifbdjbvkj"},
        {id:'3',title:"ddssdf", content:"hfhgifbdjbvkj"}
        
    ]
}


const blogreducer=(state=initState,action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
        console.log("created blog",action.project)
        return state
        case 'CREATE_PROJECT_ERROR':
        console.log("Error",action.err)
        return state
        default:
            return state
    }
}

export default blogreducer