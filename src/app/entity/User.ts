import { Entity, ObjectIdColumn, Column, ObjectID } from "typeorm";

@Entity()
export class User {
    @ObjectIdColumn()
    id?: ObjectID;

    @Column()
    title!: string;

    @Column()
    text!: string;

    @Column("int", {
        nullable: false
    })
    likesCount!: number;
}
