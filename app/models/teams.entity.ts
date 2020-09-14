import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Players } from './players.entity'

export interface ITeams {
  id?: number
  name: string
  tla: string
  address: string
  email: string
  founded: number
  players?: Players[]
  lastUpdated?: Date
}

@Entity()
export class Teams {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({
    length: 100
  })
  public name: string

  @Column()
  public tla: string

  @Column()
  public address: string

  @Column()
  public email: string

  @Column()
  public founded: number

  @OneToMany(type => Players, players => players.team)
  public players: Players[]

  @Column()
  public lastUpdated: Date
}
