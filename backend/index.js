const express = require('express');
const cors = require('cors');       //calls the server from any other origin
const { default: axios } = require('axios');


const app = express();
app.use(express.json());
app.use(cors({ origin : true }));

app.post('/authenticate',  async (req,res)=>{
    const { username } = req.body;
    try{
        const response = await axios.put(
            'https://api.chatengine.io/users/',
            {username : username, secret : username},
            {headers : {"private-key":"dcd7dfdf-617c-4a95-9eb6-c2b7357864db"}}
        );
        return res.status(response.status).json(response.data);
    }
    catch(err){
        return res.status(err.response.status).json(err.response.data);
    }
});

const PORT = 3000;

app.listen(PORT, (req,res)=>{
    console.log(`Server is runnign at port`, PORT);
});