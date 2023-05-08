const MESSAGE = require("../models/gpt");
const HttpError = require("../helper/HttpError");
// const AGE = require("../models/ageGpt");
// const WEIGHT = require("../models/weightGpt");
// const HEIGHT = require("../models/heightGpt");
// const SYSMTOMS = require("../models/sysmtomsGpt");
// const ALLERGIES = require("../models/allergiesGpt");
// const MEDICATION = require("../models/medicationGpt");
// const TEMP = require("../models/temperatureGpt");
// const HEARTRATE = require("../models/heartrateGpt");
// const RESPIRATORY = require("../models/respiratoryGpt");
// const OXYGEN = require("../models/oxygenGpt");
// const WAIST = require("../models/waistGpt");
// const HIP = require("../models/hipGpt");
// const SYSTOLIC = require("../models/systolicGpt");
// const DIASTOLIC = require("../models/diastolicGpt");
// const ALBUMIN = require("../models/albuminGpt");
// const ALT = require("../models/altGpt");
// const AST = require("../models/astGpt");
// const BUN = require("../models/bunGpt");
// const CALCIUM = require("../models/calciumGpt");
// const CREATINE = require("../models/creatineGpt");
// const GLUCOSE = require("../models/glucoseGpt");
// const HBA = require("../models/hbaGpt");
// const POTASSIUM = require("../models/potassiumGpt");
// const SODIUM = require("../models/sodiumGpt");
// const TRIG = require("../models/trigGpt");
// const LDL = require("../models/ldlGpt");
// const HDL = require("../models/hdlGpt");
// const EGFR = require("../models/egfrGpt");

const createGpt = async (req, res, next) => {
  const openAi = req.app.get("gpt");
  const { extraId, message, messages } = req.body;

  console.log(message);

  //protection
  let lmessages;
  if (!req.body.token) {
    try {
      lmessages = await MESSAGE.find({ userId: req.body.extraId });
    } catch (err) {
      console.log(err);
    }
    if (lmessages.length === 3) {
      const errors = new HttpError(
        "Login / Signup for free to send more messages.",
        500
      );
      return next(errors);
    }
  }
  //protection

  let dbData;

  try {
    dbData = await MESSAGE.find({ userId: extraId });
  } catch (err) {
    console.log(err);
  }

  let assistantData = dbData.map((item) => ({
    role: "assistant",
    content: `${item.gpt}`,
  }));

  openAi
    .createChatCompletion({
      model: "gpt-3.5-turbo",

      messages: [
        {
          role: "system",
          content:
            "You are AI physician chatbot and helpful assistance.You will provide any medical concerns information to the patient. And you will must remember all the previous conversation or information that a patient had given to you. if they provide you any remember them and symtoms response them based on their symtoms  ",
        },
        ...assistantData,

        ...messages,
        {
          role: "user",
          content: message,
        },
      ],
    })
    .then((ress) => {
      //console.log(res.data.choices[0].message.content);
      res.status(200).json({ result: ress.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getMessage = async (req, res) => {
  let message;

  try {
    message = await MESSAGE.find({ userId: req.body.userId });
  } catch (err) {
    console.log(err);
  }

  res.status(200).json({ result: message });
};

const createMessage = async (req, res, next) => {
  let message;

  if (!req.body.token) {
    let messages;

    try {
      messages = await MESSAGE.find({ userId: req.body.userId });
    } catch (err) {
      console.log(err);
    }

    if (messages.length === 3) {
      const errors = new HttpError(
        "Login / Signup for free to send more messages.",
        500
      );
      return next(errors);
    }
  }

  try {
    message = await MESSAGE.create(req.body);
  } catch (err) {
    const errors = new HttpError("create message failed", 500);
    return next(errors);
  }
  res.status(200).json({ result: message });
};

// const createAge = async (req, res) => {
//   let message;

//   try {
//     message = await AGE.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getAge = async (req, res) => {
//   let message;

//   try {
//     message = await AGE.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createWeight = async (req, res) => {
//   let message;

//   try {
//     message = await WEIGHT.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getWeight = async (req, res) => {
//   let message;

//   try {
//     message = await WEIGHT.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createHeight = async (req, res) => {
//   let message;

//   try {
//     message = await HEIGHT.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getHeight = async (req, res) => {
//   let message;

//   try {
//     message = await HEIGHT.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createSystoms = async (req, res) => {
//   let message;

//   try {
//     message = await SYSMTOMS.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getSymstoms = async (req, res) => {
//   let message;

//   try {
//     message = await SYSMTOMS.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createAllergies = async (req, res) => {
//   let message;

//   try {
//     message = await ALLERGIES.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getAllergies = async (req, res) => {
//   let message;

//   try {
//     message = await ALLERGIES.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createMedication = async (req, res) => {
//   let message;

//   try {
//     message = await MEDICATION.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getMedication = async (req, res) => {
//   let message;

//   try {
//     message = await MEDICATION.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createTemp = async (req, res) => {
//   let message;

//   try {
//     message = await TEMP.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getTemp = async (req, res) => {
//   let message;

//   try {
//     message = await TEMP.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createHeartRate = async (req, res) => {
//   let message;

//   try {
//     message = await HEARTRATE.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getHeartRate = async (req, res) => {
//   let message;

//   try {
//     message = await HEARTRATE.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createRespiratory = async (req, res) => {
//   let message;

//   try {
//     message = await RESPIRATORY.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getRespiratory = async (req, res) => {
//   let message;

//   try {
//     message = await RESPIRATORY.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createOxygen = async (req, res) => {
//   let message;

//   try {
//     message = await OXYGEN.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getOxygen = async (req, res) => {
//   let message;

//   try {
//     message = await OXYGEN.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createWaist = async (req, res) => {
//   let message;

//   try {
//     message = await WAIST.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getWaist = async (req, res) => {
//   let message;

//   try {
//     message = await WAIST.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createHip = async (req, res) => {
//   let message;

//   try {
//     message = await HIP.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getHip = async (req, res) => {
//   let message;

//   try {
//     message = await HIP.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createSystolic = async (req, res) => {
//   let message;

//   try {
//     message = await SYSTOLIC.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getSystolic = async (req, res) => {
//   let message;

//   try {
//     message = await SYSTOLIC.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createDiastolic = async (req, res) => {
//   let message;

//   try {
//     message = await DIASTOLIC.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getDiastolic = async (req, res) => {
//   let message;

//   try {
//     message = await DIASTOLIC.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createAlbumin = async (req, res) => {
//   let message;

//   try {
//     message = await ALBUMIN.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getAlbumin = async (req, res) => {
//   let message;

//   try {
//     message = await ALBUMIN.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createAlt = async (req, res) => {
//   let message;

//   try {
//     message = await ALT.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getAlt = async (req, res) => {
//   let message;

//   try {
//     message = await ALT.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createAst = async (req, res) => {
//   let message;

//   try {
//     message = await AST.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getAst = async (req, res) => {
//   let message;

//   try {
//     message = await AST.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createBun = async (req, res) => {
//   let message;

//   try {
//     message = await BUN.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getBun = async (req, res) => {
//   let message;

//   try {
//     message = await BUN.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createCalcium = async (req, res) => {
//   let message;

//   try {
//     message = await CALCIUM.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getCalcium = async (req, res) => {
//   let message;

//   try {
//     message = await CALCIUM.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createCreatine = async (req, res) => {
//   let message;

//   try {
//     message = await CREATINE.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getCreatine = async (req, res) => {
//   let message;

//   try {
//     message = await CREATINE.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createGlucose = async (req, res) => {
//   let message;

//   try {
//     message = await GLUCOSE.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getGlucose = async (req, res) => {
//   let message;

//   try {
//     message = await GLUCOSE.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createHba = async (req, res) => {
//   let message;

//   try {
//     message = await HBA.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getHba = async (req, res) => {
//   let message;

//   try {
//     message = await HBA.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createPotassium = async (req, res) => {
//   let message;

//   try {
//     message = await POTASSIUM.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getPotassium = async (req, res) => {
//   let message;

//   try {
//     message = await POTASSIUM.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createSodium = async (req, res) => {
//   let message;

//   try {
//     message = await SODIUM.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getSodium = async (req, res) => {
//   let message;

//   try {
//     message = await SODIUM.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createTrig = async (req, res) => {
//   let message;

//   try {
//     message = await TRIG.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getTrig = async (req, res) => {
//   let message;

//   try {
//     message = await TRIG.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createLdl = async (req, res) => {
//   let message;

//   try {
//     message = await LDL.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getLdl = async (req, res) => {
//   let message;

//   try {
//     message = await LDL.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createHdl = async (req, res) => {
//   let message;

//   try {
//     message = await HDL.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getHdl = async (req, res) => {
//   let message;

//   try {
//     message = await HDL.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const createEgfr = async (req, res) => {
//   let message;

//   try {
//     message = await EGFR.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

// const getEgfr = async (req, res) => {
//   let message;

//   try {
//     message = await EGFR.findOne({ userId: req.body.userId });
//   } catch (err) {
//     console.log(err);
//   }
//   res.status(200).json({ result: message });
// };

module.exports = {
  createGpt,
  createMessage,
  getMessage,
  // createAge,
  // createWeight,
  // createHeight,
  // getAge,
  // getWeight,
  // getHeight,
  // createSystoms,
  // getSymstoms,
  // createAllergies,
  // getAllergies,
  // createMedication,
  // getMedication,
  // createTemp,
  // getTemp,
  // createHeartRate,
  // getHeartRate,
  // createRespiratory,
  // getRespiratory,
  // createOxygen,
  // getOxygen,
  // createWaist,
  // getWaist,
  // createHip,
  // getHip,
  // createSystolic,
  // getSystolic,
  // createDiastolic,
  // getDiastolic,
  // createAlbumin,
  // getAlbumin,
  // createAlt,
  // getAlt,
  // createAst,
  // getAst,
  // createBun,
  // getBun,
  // createCalcium,
  // getCalcium,
  // createCreatine,
  // getCreatine,
  // createGlucose,
  // getGlucose,
  // createHba,
  // getHba,
  // createPotassium,
  // getPotassium,
  // createSodium,
  // getSodium,
  // createTrig,
  // getTrig,
  // createLdl,
  // getLdl,
  // createHdl,
  // getHdl,
  // createEgfr,
  // getEgfr,
};
