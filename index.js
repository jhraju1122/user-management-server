const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const users = [
    {id: 1, name: 'raju' , email:'razmcj@gmail.com'},
    {id: 1, name: 'rajuvai' , email:'razvaimcj@gmail.com'},
    {id: 1, name: 'jhraju' , email:'jhrazmcj@gmail.com'},
]

app.get('/', (req, res) =>{
    res.send('Users management server is running')
})


app.get('/users', (req, res)=>{
    res.send(users);
})
app.listen(port, () =>{
    console.log(`Server is running on PORT : ${port}`)
})
