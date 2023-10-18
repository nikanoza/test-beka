import mongoose from "mongoose";
import slugify from "slugify";
const subtaskSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  isCompleted: Boolean,
});

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
  },
  subTasks: [subtaskSchema],
});

const columnSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  tasks: [taskSchema]
});

const boardSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  slug: {
    type: String,
    require: false
  },
  columns: [columnSchema],
});

// boardSchema.pre("save", function (next) {
//   this.slug = slugify(this.name, { lower: true });
//   next();
// });

const Board = mongoose.model("board", boardSchema);

export default Board;
