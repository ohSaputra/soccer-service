import { getRepository, Repository } from 'typeorm'
import { Players, IPlayers } from '@app/models/players.entity'

const PlayersService = {
  getRepository (): Repository<Players> {
    return getRepository(Players)
  },

  /**
   * create a player
   * @param {Object} params - player properties
   * @returns {Promise} Promise of created player
   */
  async create (params: IPlayers) {
    const { 
      name,
      dateOfBirth,
      countryOfBirth,
      nationality,
      position,
      team
    } = params
    const repository = PlayersService.getRepository()
    return await repository.insert({
      name,
      dateOfBirth,
      countryOfBirth,
      nationality,
      position,
      team,
      lastUpdated: new Date
    })
  },

  /**
   * list player
   * @param {number} skip
   * @param {number} limit
   * @returns {Promise} Promise of player + Count
   */
  async list ({ skip = 0, limit = 10 }) {
    const repository = PlayersService.getRepository()
    return await repository
      .createQueryBuilder('players')
      .leftJoinAndSelect('players.team', 'teams')
      .offset(skip)
      .limit(limit)
      .orderBy('players.id')
      .getManyAndCount()
  },

  /**
   * edit a player
   * @param {number} id
   * @param {object} params
   * @returns {Promise} Promise of updated player
   */
  async edit (id: number, params: object) {
    const repository = PlayersService.getRepository()
    return await repository.update(id, params)
  },

  /**
   * find one player
   * @param {number} id 
   * @returns {Promise} Promise of found player
   */
  async findOne (id: number) {
    const repository = PlayersService.getRepository()
    return await repository.findOne(id)
  },

  /**
   * remove a player
   * @param {number} id
   */
  async remove (id: number) {
    const repository = PlayersService.getRepository()
    await repository.delete(id)
  },

  /**
   * clear table player
   */
  async flush () {
    const repository = PlayersService.getRepository()
    await repository.clear()
  }
}

export default PlayersService
