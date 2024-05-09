const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  name: String,
  email: String,
  password:String,
  photoURL:String, 
  userUid:String,
  quizzes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }], // Quizzes participated in
  score:Number,
  history: [
     {
    userUid: String,
    quizId: String,
    quizScore: Number,
    metricId:mongoose.Schema.Types.Mixed,
    quizScoreDetails: Object,
    startTime:Number,
    endTime:Number,
    date:Date,
    completionTimestamp: Number,
    userResponses: [String],
    correctAnswer:[String],
  },
]
});

module.exports = mongoose.model('Participant', participantSchema);
