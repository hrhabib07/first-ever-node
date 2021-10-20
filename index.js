const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get('/', (req, res)=>{
    res.send("I am exited to learn node ")
});

const users = [
    {id:0, name:"subosri", email:"subossri@gmail.com"},
    {id:1, name:"sabana", email:"sabana@gmail.com"},
    {id:2, name:"sabanur", email:"sabnur@gmail.com"},
    {id:3, name:"suchorita", email:"suchorita@gmail.com"},
    {id:4, name:"soniya", email:"soniya@gmail.com"},
    {id:5, name:"susmitha", email:"susmitha@gmail.com"}
    
]

app.get('/users', (req, res)=>{
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user=>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    } 
    else{
        res.send(users)
    }

})
app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})
app.get('/fruits/mangos/fazli',(req, res)=>{
    res.send("Yammi yammi tok fazli")
})
app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length; 
    users.push(newUser)
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})
app.listen(port, ()=>{
    console.log('listening to', port);
})