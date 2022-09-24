import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import moment from 'moment';
import EditIcon from '@mui/icons-material/Edit';
import styled from 'styled-components'
import { fetchAllUser } from '../../redux/actions/authActions'
import UserUpdate from './UserUpdate';

const Userdetails = () => {
  var users = useSelector(state => state.allUserReducer);
  var currentuser = useSelector(state => state.currentUserReducer);
  const { id } = useParams();
  const [profile, setProfile] = useState(true);
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  useEffect(() => {
    dispatch(fetchAllUser())
    var array = users.filter((user) => user._id === id)
    setUser(array[0]);
  }, [id, dispatch])
  return (
    <div>
      {profile ?
        <UserdetailsWrapper>

          {currentuser?.user._id === user?._id ?
            <div className='editProfile'>
              <button onClick={() => setProfile(!profile)}>Edit Profile <EditIcon /></button>
            </div> : ""}
          {(user === null || user?.name === null) ? <p>loading</p> :
            <div className='userdetailcard'>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div className='nameInitals'>
                  <p>{user?.name[0].toUpperCase()}</p>
                </div>
                <div className='userDetails'>
                  <p className='name'>{user?.name}</p>
                  <p className='joined'>joined {moment(user?.joinedOn).fromNow()}</p>
                </div>
              </div>
              <div className='about'>
                <p style={{ fontSize: "1rem", fontWeight: 500 }}>About</p>
                <p style={{ fontSize: "0.8rem", }}>{user?.about}</p>
              </div>
            </div>
          }
        </UserdetailsWrapper> : <UserUpdate />}
    </div>
  )
}

const UserdetailsWrapper = styled.div`
display: flex;
position: relative;
margin-top: 2rem;
padding: 2rem;
.userdetailcard{
  display: flex;
  flex-direction: column;
  gap: 1rem;
.nameInitals{
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  font-size: 3rem;
  background-color: purple;
  color:white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
}
.userDetails{
  margin-top: 0.51rem;
  .name{
    font-weight: 500;
    text-transform: capitalize;
  }
  .joined{
    font-size: 0.8rem;
    color: #484848;
  }
}

}

.editProfile{
  position: absolute;
  right: 0;
  top: 0;
  button{
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem ;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap:0.5rem;
    font-size: 0.9rem;
    border: 1px solid grey;
    svg{
      font-size: 0.9rem;
    }
  }
}
`

export default Userdetails