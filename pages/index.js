import { useEffect, useState } from 'react'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import ProfileSidebar from '../src/components/ProfileSidebar'
import ItemList from '../src/components/ItemList'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

export default function Home() {
  const githubUser = 'gustavohc';
  const [communities, setCommnuties] = useState([{
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  const favPeople = [
    'peas',
    'omariosouto',
    'felipefialho'
  ];
  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/peas/followers')
    .then(response => response.json())
    .then(response => setFollowers(response));
    // API GraphQL
    fetch('', {
      method: 'POST',
      headers: {
        'Authorization': '...',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "query": `query {
          allComminities {
            title
            id
            imageUrl
            creatorSlug
          }
        }`
      })
    })
  }, []);

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

          <Box>
            <h2 className="subTitle">O que você desaja fazer?</h2>
            <form onSubmit={function handleCreateCommunity(ev) {
              ev.preventDefault();
              const formDate = new FormData(ev.target);
              const community = {
                title: formDate.get('title'),
                image: formDate.get('image')
              };

              fetch('/api/community', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(community)
              })
              setCommnuties([...communities, community]);
            }}>
              <div>
                <input 
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"/>
              </div>
              <div>
                <input 
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"/>
              </div>
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea">
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Amigos ({favPeople.length})
            </h2>
            <ul>
              {favPeople.map((e, index) => {
                return (
                  <li key={index}>
                    <ItemList
                      link={`/users/${e}`}
                      image={`https://github.com/${e}.png`}
                      title={e}/>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({communities.length})
            </h2>
            <ul>
              {communities.map((e, index) => {
                return (
                  <li key={index}>
                    <ItemList 
                      link={`/communities`}
                      image={e.image}
                      title={e.title}/>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
