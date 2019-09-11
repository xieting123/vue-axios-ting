const CONTANCT_API={
    getcontentList:{
        methods:'get',
        url:"/contactList"
    },
    addcontentList:{
        methods:'post',
        url:'/contact/new/form'
    },
    editcontentList:{
        methods:'put',
        url:'/contact/edit'
    },
    savecontentList:{
        methods:'post',
        url:'/contact/new/json'
    },
    deltelecontentList:{
        methods:'delete',
        url:'/contact'
    }
}
export default CONTANCT_API