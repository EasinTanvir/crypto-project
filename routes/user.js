const express = require("express");
const router = express.Router();
const gptRoutes = require("../controllers/user");
const protectRoutes = require("../helper/protectRoutes");

router.route("/gpt").post(gptRoutes.createGpt);
router.route("/gpts").post(gptRoutes.getMessage);
router.route("/message").post(gptRoutes.createMessage);

// router.route("/age").post(gptRoutes.createAge);
// router.route("/getage").post(gptRoutes.getAge);

// router.route("/weight").post(gptRoutes.createWeight);
// router.route("/getweight").post(gptRoutes.getWeight);

// router.route("/height").post(gptRoutes.createHeight);
// router.route("/getheight").post(gptRoutes.getHeight);

// router.route("/symtoms").post(gptRoutes.createSystoms);
// router.route("/getsymtoms").post(gptRoutes.getSymstoms);

// router.route("/allergies").post(gptRoutes.createAllergies);
// router.route("/getallergies").post(gptRoutes.getAllergies);

// router.route("/medication").post(gptRoutes.createMedication);
// router.route("/getmedication").post(gptRoutes.getMedication);

// router.route("/temperature").post(gptRoutes.createTemp);
// router.route("/gettemperature").post(gptRoutes.getTemp);

// router.route("/heartrate").post(gptRoutes.createHeartRate);
// router.route("/getheartrate").post(gptRoutes.getHeartRate);

// router.route("/respiratory").post(gptRoutes.createRespiratory);
// router.route("/getrespiratory").post(gptRoutes.getRespiratory);

// router.route("/oxygen").post(gptRoutes.createOxygen);
// router.route("/getoxygen").post(gptRoutes.getOxygen);

// router.route("/waist").post(gptRoutes.createWaist);
// router.route("/getwaist").post(gptRoutes.getWaist);

// router.route("/hip").post(gptRoutes.createHip);
// router.route("/gethip").post(gptRoutes.getHip);

// router.route("/systolic").post(gptRoutes.createSystolic);
// router.route("/getsystolic").post(gptRoutes.getSystolic);

// router.route("/diastolic").post(gptRoutes.createDiastolic);
// router.route("/getdiastolic").post(gptRoutes.getDiastolic);

// router.route("/albumin").post(gptRoutes.createAlbumin);
// router.route("/getalbumin").post(gptRoutes.getAlbumin);

// router.route("/alt").post(gptRoutes.createAlt);
// router.route("/getalt").post(gptRoutes.getAlt);

// router.route("/ast").post(gptRoutes.createAst);
// router.route("/getast").post(gptRoutes.getAst);

// router.route("/bun").post(gptRoutes.createBun);
// router.route("/getbun").post(gptRoutes.getBun);

// router.route("/calcium").post(gptRoutes.createCalcium);
// router.route("/getcalcium").post(gptRoutes.getCalcium);

// router.route("/creatine").post(gptRoutes.createCreatine);
// router.route("/getcreatine").post(gptRoutes.getCreatine);

// router.route("/glucose").post(gptRoutes.createGlucose);
// router.route("/getglucose").post(gptRoutes.getGlucose);

// router.route("/hba").post(gptRoutes.createHba);
// router.route("/gethba").post(gptRoutes.getHba);

// router.route("/potassium").post(gptRoutes.createPotassium);
// router.route("/getpotassium").post(gptRoutes.getPotassium);

// router.route("/sodium").post(gptRoutes.createSodium);
// router.route("/getsodium").post(gptRoutes.getSodium);

// router.route("/trig").post(gptRoutes.createTrig);
// router.route("/gettrig").post(gptRoutes.getTrig);

// router.route("/ldl").post(gptRoutes.createLdl);
// router.route("/getldl").post(gptRoutes.getLdl);

// router.route("/hdl").post(gptRoutes.createHdl);
// router.route("/gethdl").post(gptRoutes.getHdl);

// router.route("/egfr").post(gptRoutes.createEgfr);
// router.route("/getegfr").post(gptRoutes.getEgfr);
module.exports = router;
