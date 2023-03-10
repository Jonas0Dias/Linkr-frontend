import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input"
import { useHistory, useNavigate } from "react-router-dom"
import styled from "styled-components"

const [ logOut, setLogout ] = useState(false)
const [ search, setSearch ] = useState("")
const [ users, setUsers ] = useState(null)

const navigate = useNavigate()

async function getUsers () {

    const token = JSON.ṕarse(localStorage.getItem("token"))

    if (token && token !== "") {
        try {
            const config = { headers: { authentication: `Bearer ${token}`}}

            const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/get-users`, {name: search}, config)
            setUsers(data)

        } catch (err) {
            throw new Error(err)

        }
    }
}

useEffect(() => {
    async function data() { 

        const userData = await getUsers()
        return userData
    }

    data()
}, [search])

async function logout () {

    setLogout(!logOut)
    const token = JSON.parse(localStorage.getItem(`token`))

    try {

        const config = { authentication : `Bearer ${token}`}

        await axios.delete(`${process.env.REACT_APP_API_URL}/logout`, config)

        localStorage.removeItem('token')
        navigate('/')

    } catch (err) {
        throw new Error(err)
    }


return (
    <HeaderContainer>
      <Background
        logout={logout}
        onClick={() => setLogout(false)}
      >

      </Background>
      <h1>linkr</h1>
      <DebounceInput
        placeholder="Search for people"
        minLength={3}
        debounceTimeout={300}
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
      <UsersSearch
        display={(search.length > 3).toString()}
      >
        {
          users?.map(({imageUrl, name, id}, index) => (
            <UserSearch key={index}>
              <img alt="profile" src={imageUrl}/>
              <button onClick={() => {
                navigate(`/user/${id}`)
                window.location.reload();
              }}>{name}</button>
            </UserSearch>
          ))
        }
      </UsersSearch>
      <ImageContainer>
        <button
          type="text"
          onClick={() => setShowLogout(!showLogout)}
        >
          <ion-icon name={`chevron-${showLogout ? 'up' : 'down'}-outline`}></ion-icon>
        </button>
        <button
          type="button"
          onClick={() => setShowLogout(!showLogout)}
        >
          <img src={user.imageUrl} />
        </button>
      </ImageContainer >
      <LogoutStyled
        type="button"
        onClick={logout}
        showLogout={showLogout}
      >
        Logout
      </LogoutStyled>
    </HeaderContainer >
  );
    }


const WallStyled = styled.button`
position: absolute;
top: 0;
min-height: 110vh;
min-width: 110vw;
background-color: transparent;
border: none;
display: ${({ showLogout }) => showLogout ? 'block' : 'none'};
`;

const LogoutStyled = styled.button`
  position: absolute;
  right: 0;
  top: 100%;
  border-radius: 10px;
  border: none;
  background-color: #151515;
  color: white;
  padding: 15px;
  display: ${({ showLogout }) => showLogout ? 'block' : 'none'};
`;

const HeaderContainer = styled.header`
  width: 100%;
  height: 75px;
  background-color: #151515;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  z-index: 10;
  h1 {
      font-family: 'Passion One', cursive;
      color: #FFF;
      font-size: 50px;
      line-height: 54px;
      letter-spacing: 0.05em;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  ion-icon {
      font-size: 23px;
      color: #FFF;
  }
  img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-left: 18px;
      
  }
  button {
    background-color: transparent;
    border: none;
  }
`
;

const UsersSearch = styled.ul`
position: absolute;
top: 70px;
left: 50%;
transform: translate(-50%);
min-height: 210px;
min-width: 390px;
background-color: #e7e7e7;
border: none;
border-radius: 8px;
display: ${({ display }) => display === 'true' ? 'block' : 'none'};
`;

const UserSearch = styled.li`
display: flex;
align-items: center;
justify-content: space-around;
padding: 10px;
`