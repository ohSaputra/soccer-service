import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinTable } from 'typeorm'
import { Teams } from './teams.entity'

export interface IPlayers {
  id?: number
  name: string
  dateOfBirth: Date
  countryOfBirth: string
  nationality: string
  position: string
  team: Teams
  lastUpdated?: Date
}

@Entity()
export class Players {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({
    length: 100
  })
  public name: string

  @Column()
  public dateOfBirth: Date

  @Column()
  public countryOfBirth: string

  @Column()
  public nationality: string

  @Column()
  public position: string

  @ManyToOne(type => Teams, team => team.players, {
    eager: true
  })
  @JoinTable()
  public team: Teams

  @Column()
  public lastUpdated: Date
}
