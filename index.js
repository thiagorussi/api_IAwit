const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());

app.post('/', (req, res) => {
    const { msg } = req.body;
    console.log(msg);

    async function sendMsg() {
        await axios.get('https://api.wit.ai/message?v=20221127&q=' + msg,

            { headers: { Authorization: 'Bearer ' + 'EOHIDOYJHDEPXZ3V3ZKZVMVV5YR3JPXC' } }
        )
            .then(response => {
                console.log(response.data);
                res.send(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
    sendMsg();
        // axios.get ('https://api.wit.ai/message?v=20221127&q=' + msg,

        //     { headers : { Authorization: 'Bearer ' + 'EOHIDOYJHDEPXZ3V3ZKZVMVV5YR3JPXC' } }
        // )
        // .then(response => {
        //     console.log(response.data);
        //     res.send(response.data);
        // })
    }
);

app.listen(3001, () => {
    console.log('Server listening on port 3001');
});


