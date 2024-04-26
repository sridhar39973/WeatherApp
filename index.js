    import express from "express"
    import axios from "axios"
    import bodyparser from "body-parser"

    const app=express()
    app.use(bodyparser.urlencoded({extended:true}))

    app.get("/",async(req,res)=>{
        res.render("index.ejs",{data:null,error:null})
    })

    app.post("/", async (req, res) => {
        try {
            const city = req.body.city;
            console.log("City:", city); 
            const APIkey = '34277b51cbf01367539713078ac5f02e';
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIkey}`);
            console.log("Response Data:", response.data);
            res.render("index.ejs", { data: response.data});
        } catch (error) {
            console.error("Error:", error.message);
            res.render("index.ejs", { error: "Error fetching weather data" });
        }
    });
    app.listen(3000,()=>{
        console.log('success');
    })



