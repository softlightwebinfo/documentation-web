import mongoose, {Schema} from 'mongoose';

let blog = new Schema({
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

export const Article = mongoose.model('Article', blog);
