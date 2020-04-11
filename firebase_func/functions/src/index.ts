import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'
admin.initializeApp(functions.config().firebase);
const db = admin.database();

exports.scheduledFunctionCrontab = functions.pubsub.schedule('0 9 * * MON')
  .timeZone('America/New_York')
  .onRun((context) => {
        const ref = db.ref("users").orderByChild('completedQuiz').equalTo(false)
        ref.on("value", (snapshot) => {
            snapshot?.forEach((data) => {
                console.log(data)
            })
        })
        return null;
});
