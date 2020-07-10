import mongoose, {Schema} from 'mongoose';

let snippet = new Schema({
    title: String,
    description: String,
    slug: String,
    published: Boolean,
    content: [mongoose.Mixed],
    tags: [String],
    created: {
        type: Date,
        default: Date.now
    },
    comments: [{
        user: String,
        content: String,
        votes: Number
    }]
});

export const Snippet = mongoose.model('Snippet', snippet);
