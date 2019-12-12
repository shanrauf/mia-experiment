import {
  DataType,
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey
} from "sequelize-typescript";
import { DataQuestion } from "./dataQuestion";
@Table
export class DataAnswer extends Model<DataAnswer> {
  @BelongsTo(() => DataQuestion, "dataQuestionId")
  dataQuestion: DataQuestion;

  @Column({ primaryKey: true })
  dataAnswerId: string;

  @Column
  dataQuestionId: string;

  @Column
  userId: string;

  @Column
  experimentId: string;

  @Column
  surveyId: string;

  @Column(DataType.SMALLINT)
  answerSmallint: number;

  @Column
  answerInt: number;

  @Column(DataType.FLOAT)
  answerFloat: number;

  @Column
  answerBoolean: Boolean;

  @Column(DataType.TEXT) // change?
  answerVarchar: string;

  @Column(DataType.TEXT)
  answerText: string;

  @Column(DataType.JSON)
  answerJSON: string;
}
