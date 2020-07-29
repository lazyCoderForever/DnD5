const { Router } = require("express");
const Hero = require("../models/Hero");
const auth = require("../middleware/auth.middleware");
const router = Router();

// /api/hero/ save
router.post("/save", auth, async (req, res) => {
  try {
    const { dataHero } = req.body;
    const hero = new Hero({
      code: dataHero.code,
      dataHero,
      owner: req.user.userId,
    });
    const existing = await Hero.findOne({ code: dataHero.code });

    if (!!existing) {
      const updateHero = await Hero.updateOne(
        { code: dataHero.code },
        { dataHero }
      );
      if (updateHero.ok === 1) {
        return res.status(201).json({ message: "Данные успешно сохранены" });
      }
      return res.json({ hero: dataHero });
    } else {
      await hero.save();
    }

    res.status(201).json({ hero });
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const hero = await Hero.findById({ _id: req.params.id });

    res.json(hero);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const heroes = await Hero.find({ owner: req.user.userId });
    res.json(heroes);
  } catch (e) {
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

module.exports = router;
