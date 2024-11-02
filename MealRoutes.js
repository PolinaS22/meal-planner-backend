const { Router } = require('express');
const { getMeal, saveMeal, deleteMeal, editMeal } = require('./MealController');

const router = Router();

router.get('/', getMeal);
router.post('/saveMeal', saveMeal);

// you can use post instead of delete
// router.delete('/deleteMeal', deleteMeal);
router.post('/deleteMeal', deleteMeal);

// you can use post instead of put
// router.put('/editMeal', editMeal)
router.post('/editMeal', editMeal)

module.exports = router;