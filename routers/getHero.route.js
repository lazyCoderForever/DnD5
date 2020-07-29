const {Router} = require('express');
const router = Router();
const config = require('config');
const pdf = require('html-pdf');

const pdfTemplate = require('../templatePdf');

// /api/create/ getHero
router.post('/create-hero', async(req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile((`${__dirname }result.pdf`), (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
})

router.get('/get-hero', async(req, res) => {
    res.sendFile(`${__dirname}result.pdf`)
})


module.exports = router;