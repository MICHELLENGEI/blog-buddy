const express = require('express');
const path = require('path');

//import file upload package
const fileupload = require('express-fileupload')

// Define the path to the 'public' directory
let initial_path = path.join(__dirname,"public");

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(initial_path));
app.use(fileupload());

// Route to serve the homepage from the 'uploads' folder
app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"));
});

app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path, "editor.html"));
});

//uploads route
app.post('/upload',(req, res) => {
    let file = req.files.image;
    let date = new Date();

    //image name
    let imagename = date.getDate() + date.getTime() + file.name;

    //image upload path
    let path = 'public/uploads/' + imagename;


    //create upload
    file.mv(path,(err,result) =>{
        if(err){
            throw err;
        }else{
            //image upload path
            res.json(`uploads/${imagename}`);

        }
    })
})
app.get("/:blog",(req, res) =>{
    res.sendFile(path.join(initial_path,"blog.html"));
})
app.use((req,res)=>{
    res.json("404");
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
