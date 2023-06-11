import React, { useState } from "react";


const User = () => {
  const [users, setUsers] = useState([]);
  const[state,setState]=useState([]);
  const[gender,setGender]=useState('all');
  console.log(state)
  console.log(gender);
  const addUser=()=>{
    
     fetch(`https://randomuser.me/api/?results=20&gender=${gender}`).then
     ((resp)=>resp.json()).then
     ((data)=>setUsers(data.results)).catch
     ((error)=>console.log(error));

  }
  addUser();


  return (
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, voluptates nesciunt? Perferendis exercitationem iste corporis itaque placeat a tenetur adipisci reiciendis dignissimos optio unde, earum repellendus consectetur nam delectus error.</p>
      <div>
        All
        <input
          type="radio"
          name="gender"
          value="all"
          onClick={(e)=>addUser() && setGender(e.target.value) }
          onChange={() => {
            setState(users.filter((ele) => users)) 
          }}
        ></input>
        Male
        <input
          type="radio"
          name="gender"
          value="male"
          onClick={(e)=>addUser() && setGender(e.target.value)  }
          onChange={() => {
            setState(users.filter((ele) => ele.gender === "male"));
          }}
        ></input>
        Female
        <input
          type="radio"
          name="gender"
          value="female"
          onClick={(e)=> addUser() && setGender(e.target.value)   }
          onChange={() => {
           setState(users.filter((ele) => ele.gender === "female"));
          }}
        ></input>
      </div>
     
      
      {users.length > 0 && (
        <div>
          <table width="100%" frame="box" rules="all">
            <thead>
              <tr>
                <th>Image</th>
                <th> Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody align="center">
              {state.map((ele) => {
                return (
                  <tr>
                    <td>
                      <img
                        width="70px"
                        height="70px"
                        src={ele.picture.medium}
                        alt=""
                      ></img>
                    </td>
                    <td>
                      {ele.name.first}
                      {ele.name.last}
                    </td>
                    <td>{ele.gender}</td>
                    <td>{ele.email}</td>
                    <td>{ele.location.city}</td>
                  </tr>
                );
              })}{" "}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default User;
