import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const vedioSchema = new Schema(
  {
    vedioFile:{ 
      type: String, //cloudnary Url
      require: true
    },
    thumbnail:{ 
      type: String, //cloudnary Url
      require: true
    },
    title:{ 
      type: String, 
      require: true
    },
    description:{ 
      type: String, 
      require: true
    },
    duration:{ 
      type: Number, //cloudnary Url
      require: true
    },
    veiws:{ 
      type: Number, //cloudnary Url
      default: 0
    },
    isPublished: {
      type: Boolean,
      default: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

vedioSchema.plugin(mongooseAggregatePaginate);
export const Vedio = mongoose.model("Vedio", vedioSchema);