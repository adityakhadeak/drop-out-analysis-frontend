import mongoose from "mongoose";

const dataEntrySchema = new mongoose.Schema({
    doname: String,
    dostd: Number,
    dolc: {
      type:String,
      unique: true,
    },
    docaste: String,
    doreason: String,
    doScid: String,
  });

export default mongoose.model('dataentry',dataEntrySchema)