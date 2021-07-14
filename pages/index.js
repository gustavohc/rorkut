
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import ProfileSidebar from '../src/components/ProfileSidebar'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

export default function Home() {
  const githubUser = 'gustavohc';
  const favPeople = [
    'peas',
    'omariosouto',
    'felipefialho'
  ]
  return (
    <>
      <AlurakutMenu/>
      <MainGrid>
        <div className="profileArea">
          <ProfileSidebar githubUser={githubUser}/>
        </div>
        <div className="welcomeArea">
          <Box className="title">
            <h1>Bem vindo(a)</h1>
            
            <OrkutNostalgicIconSet/>
          </Box>
        </div>
        <div className="profileRelationsArea">
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Amigos ({favPeople.length})
            </h2>
            <ul>
              {favPeople.map(e => {
                return (
                  <li>
                    <a href={`/users/${e}`} key={e}>
                      <img src={`https://github.com/${e}.png`}/>
                      <span>{e}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>Comunidades</Box>
        </div>
      </MainGrid>
    </>
  )
}
