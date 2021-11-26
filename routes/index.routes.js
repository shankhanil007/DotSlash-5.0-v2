const router = require('express').Router();
const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');
const { matchString } = require('../utils');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://dotslash4-8b10e.firebaseio.com',
});
let db = admin.firestore();

router.post('/users', async (req, res) => {
  let {
    teamName,
    collegeName,
    track,

    fname1,
    dob1,
    selGen1,
    email1,
    mob1,
    git1,
    link1,
    twit1,
    face1,
    resume1,
    tShirt1,

    fname2,
    dob2,
    selGen2,
    email2,
    mob2,
    git2,
    link2,
    twit2,
    face2,
    resume2,
    tShirt2,

    fname3,
    dob3,
    selGen3,
    email3,
    mob3,
    git3,
    link3,
    twit3,
    face3,
    resume3,
    tShirt3,
    needs,
    heardFrom,
    firstTime,
  } = req.body;
  let emailSent = false;
  let found = false;

  try {
    const docs = await db.collection('users').get();
    docs.forEach(doc => {
      let docEmail1 = doc.data().members[0].email1;
      let docEmail2 = doc.data().members[1].email2;
      let docEmail3 = doc.data().members[2].email3;
      if (
        matchString(docEmail1, docEmail2, docEmail3, email1, email2, email3)
      ) {
        found = true;
      }
    });
    if (found) {
      res.status(503);
      throw new Error('Duplicate Email entry found');
    }
    const user = await db.collection('users').add({
      teamName,
      collegeName,
      track,
      members: [
        {
          fname1,
          dob1,
          selGen1,
          email1,
          mob1,
          git1,
          link1,
          twit1,
          face1,
          resume1,
          tShirt1,
        },
        {
          fname2,
          dob2,
          selGen2,
          email2,
          mob2,
          git2,
          link2,
          twit2,
          face2,
          resume2,
          tShirt2,
        },
        {
          fname3,
          dob3,
          selGen3,
          email3,
          mob3,
          git3,
          link3,
          twit3,
          face3,
          resume3,
          tShirt3,
        },
      ],
      needs,
      heardFrom,
      firstTime,
      emailSent,
    });
    res.set('Sec-Fetch-Site', 'same-origin');
    res.status(200).json({ success: true });
  } catch (err) {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    // console.log(statusCode);
    res.status(statusCode).json({ success: false, error: err });
  }
});

module.exports = router;
