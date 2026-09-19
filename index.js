import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const posts = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('main', {posts: posts});
});
//------------------dodavanje novog posta
app.get("/new", (req, res) => {
    res.render('newpost', { post: null });
});

app.post("/add", (req, res) => {
    const newPost = {
        id: Date.now(),
        title: req.body.title,
        content: req.body.content,
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" })
    };

    posts.push(newPost);

    res.redirect('/');
});
//------------------------------------

// видалення posta
app.post("/delete/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(post => post.id === postId);

    if (postIndex !== -1) {
        posts.splice(postIndex, 1);
    }   
    res.redirect('/');
});
//------------------------------------

//edit posta
app.get("/edit/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const targetPost = posts.find((p) => p.id === postId);

    if (!targetPost) {
        return res.redirect("/");
    }       

    res.render('newpost', { post: targetPost });
});

app.post("/edit/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex((p) => p.id === postId);

    if (postIndex !== -1) {
        posts[postIndex].title = req.body.title;
        posts[postIndex].content = req.body.content;
    }

    res.redirect('/');
});
//------------------------------------
// about page
app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});