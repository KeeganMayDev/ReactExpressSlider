const express = require('express');
const app = express();
const port = 5000;
app.get('/api/images', (req, res) => {
    const imgs = [
        {key : "http://www.hdnicewallpapers.com/Walls/Big/WWE/WWE_Superstar_Brock_Lesnar_vs_Roman_Reigns.jpg", desc : "Brock Lesnar vs Roman Reigns" },
        {key : "http://www.hdnicewallpapers.com/Walls/Big/WWE/WWE_Champion_The_Miz.jpg", desc : "The Miz"},
        {key : "http://www.hdnicewallpapers.com/Walls/Big/WWE/WWE_Champion_Randy_Orton.jpg", desc : "Randy Orton"},
        {key : "http://www.hdnicewallpapers.com/Walls/Big/WWE/Brock_Lesnar_Sphere_to_Undertaker.jpg", desc : "Brock Lesnar vs Undertaker"},
        {key : "http://www.hdnicewallpapers.com/Walls/Big/WWE/Rock_and_John_Cena_Fight_in_Popular_American_Figting_Show_WWE_HD_Photos.jpg", desc : "Rock vs Cena"}
    ];

    res.json(imgs);

});
app.listen(port, () => console.log(`server started on port ${port} `));