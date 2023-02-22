export default()=>({
    isLoading:true,
    entries:[
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text:'Commodo cillum voluptate dolor ut adipisicing culpa.',
            picture:null
        },
        {
            id: new Date().getTime()+1000,
            date: new Date().toDateString(),
            text:'Amet mollit ipsum eu ex.',
            picture:null
        },
        {
            id: new Date().getTime()+2000,
            date: new Date().toDateString(),
            text:'Pariatur magna dolore dolor veniam ut non officia eu dolor consequat aliqua.',
            picture:null
        },
    ]
})