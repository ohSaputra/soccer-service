import mockTeams from '../../mockTeams.json'
import mockPlayers from '../../mockPlayers.json'
import PlayersService from '@services/players-service'
import TeamsService from '@services/teams-service'

const teams: any[] = []
/**
 * Soccer Generator
 * - this function will generate data from mock data
 */
export default async (): Promise<void> => {
  for(const team of mockTeams) {
    const createdTeam = await TeamsService.create({
      name: team.name,
      tla: team.tla,
      address: team.address,
      email: team.email,
      founded: team.founded
    })
    teams.push(createdTeam.raw)
  }
  for(const player of mockPlayers) {
    const rand = Math.floor(Math.random() * 5)
    await PlayersService.create({
      name: player.name,
      dateOfBirth: new Date(player.dateOfBirth),
      countryOfBirth: player.countryOfBirth,
      nationality: player.nationality,
      position: player.position,
      team: teams[rand]
    })
  }
}
