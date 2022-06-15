const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000


//express template engine
//handlebars
app.engine('handlebars', exphbs.engine({defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


//routes setting
app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(port,()=>{
    console.log(`Express is listening on localhost: ${port}`)
})