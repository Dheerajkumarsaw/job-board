import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../database/database';

interface JobAttributes {
   id: string;
   pk: number;
   title: string;
   company: string;
   location: string;
   salary: number;
   description: string;
   is_deleted: boolean;
   createdAt?: Date;
   updatedAt?: Date;
}

interface JobCreationAttributes extends Optional<JobAttributes, 'id' | 'is_deleted' | 'createdAt' | 'updatedAt' | "pk"> { }


class Job extends Model<JobAttributes, JobCreationAttributes> implements JobAttributes {
   public id!: string;
   public pk!: number;
   public title!: string;
   public company!: string;
   public location!: string;
   public salary!: number;
   public description!: string;
   public is_deleted!: boolean;

   public readonly createdAt!: Date;
   public readonly updatedAt!: Date;
}

Job.init(
   {
      id: {
         type: DataTypes.UUID,
         defaultValue: DataTypes.UUIDV4,
      },
      pk: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true,
      },
      title: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      company: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      location: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      salary: {
         type: DataTypes.FLOAT,
         allowNull: false,
      },
      description: {
         type: DataTypes.TEXT,
         allowNull: false,
      },
      is_deleted: {
         type: DataTypes.BOOLEAN,
         defaultValue: false,
      },
   },
   {
      sequelize,
      tableName: 'jobs',
      timestamps: true,
   }
);

export default Job;
