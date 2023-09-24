import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true, maxLenth: 80 },
    description: { type: String, required: true, trim: true, minLenth: 5 },
    createAt: { type: Date, required: true, default: Date.now() }, // 만들어진 시간으로 정렬을 할 경우를 생각해서 required를 true로 설정하였다.
    hashtags: [{ type : String, trim: true, }],
    meta:{
        views: { type: Number, default: 0, required: true },
        rating : { type: Number, default: 0, required: true },
    }
});

const Video = mongoose.model("video", videoSchema);
export default Video;