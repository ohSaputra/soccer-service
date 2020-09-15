import { getRepository, Repository } from 'typeorm'
import { Teams, ITeams } from '@app/models/teams.entity'

const TeamsService = {
  getRepository (): Repository<Teams> {
    return getRepository(Teams)
  },

  /**
   * create a team
   * @param {Object} params - team properties
   * @returns {Promise} Promise of created teams
   */
  async create (params: ITeams) {
    const {
      name,
      tla,
      address,
      email,
      founded
    } = params
    const repository = TeamsService.getRepository()
    return await repository.insert({
      name,
      tla,
      address,
      email,
      founded,
      lastUpdated: new Date()
    })
  },

  /**
   * list teams
   * @param {number} skip
   * @param {number} limit
   * @returns {Promise} Promise of teams + Count
   */
  async list ({ skip = 0, limit = 10 }) {
    const repository = TeamsService.getRepository()
    return await repository
      .createQueryBuilder('teams')
      .offset(skip)
      .limit(limit)
      .orderBy('id')
      .getManyAndCount()
  },

  /**
   * edit a team
   * @param {number} id
   * @param {object} params
   * @returns {Promise} Promise of updated team
   */
  async edit (id: number, params: object) {
    const repository = TeamsService.getRepository()
    return await repository.update(id, params)
  },

  /**
   * find one team
   * @param {number} id
   * @returns {Promise} Promise of found team
   */
  async findOne (id: number) {
    const repository = TeamsService.getRepository()
    return await repository.findOne(id)
  },

  /**
   * remove a team
   * @param {number} id
   */
  async remove (id: number) {
    const repository = TeamsService.getRepository()
    await repository.delete(id)
  },

  /**
   * clear table team
   */
  async flush () {
    const repository = TeamsService.getRepository()
    await repository.clear()
  }
}

export default TeamsService
