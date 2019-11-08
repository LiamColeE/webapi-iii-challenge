const express = require("express");
const db = require("./userDb");

const router = express.Router();

router.post('/', validateUser, (req, res) => {

});

router.post('/:id/posts', validateUserId, (req, res) => {

});

router.get('/', (req, res) => {
    
});

router.get('/:id', validateUserId, (req, res) => {
    res.send(req.user);
});

router.get('/:id/posts', validateUserId, (req, res) => {

});

router.delete('/:id', validateUserId, (req, res) => {

});

router.put('/:id', validateUserId, (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {
    db.getById(req.params.id)
    .catch((err) => {
        res.send({ error: "internal server error" });
        res.status(500);
    })
    .then((user) => {
        if(user != null){
            req.user = user;
            next();
        }
        else{
            res.send({ message: "invalid user id" });
            res.status(404);
        }
    })
};

function validateUser(req, res, next) {
    if(req.body.name != null){
        next();
    }
    else{
        res.status(400);
        res.send({ message: "missing required name field" });
    }
};

function validatePost(req, res, next) {
    next();
};

module.exports = router;
