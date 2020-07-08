import mongoose, {Schema} from 'mongoose';

let authorSchema = Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstName: String,
        lastName: String
    },
    biography: String,
    twitter: String,
    facebook: String,
    linkedin: String,
    created: {
        type: Date,
        default: Date.now
    }
});
export const Author = mongoose.model('Author', authorSchema);
