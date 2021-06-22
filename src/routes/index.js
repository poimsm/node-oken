const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.json({message: 'hola ajammmm 44444'})
})

module.exports = router;