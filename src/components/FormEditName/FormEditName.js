import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, connect } from "react-redux";
import { setUser, updateUser } from "../../utils/reducers";
import ButtonEditName from "../ButtonEditName/ButtonEditName";
import InputEditName from "../InputEditName/InputEditName";
import ApiProvider from "../../Api/Api";
import "./FormEditName.css";

const FormEditName = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [editName, setEditName] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    //Call API provider
    const getProfile = async (e) => {
      // POST request
      const response = await new ApiProvider().getUserProfile(props.token);

      if (response.status !== 200) {
        return setErrorMessage("Error user : " + response.statusText);
      }
      dispatch(setUser(response.body));
      setFirstName(response.body.firstName);
      setLastName(response.body.lastName);
      setErrorMessage("");
    };
    getProfile();
  }, [dispatch, props.token]);

  //Send firstname and lastname to api server
  async function changeUserProfile() {
    // PUT request
    const response = await new ApiProvider().setUserProfile(
      firstName,
      lastName,
      props.token
    );

    if (response.status !== 200) {
      return setErrorMessage("Error updating user : " + response.statusText);
    }

    dispatch(updateUser(response.body));
    setEditName(false);
  }

  return (
    <section className="headerProfile">
      {editName ? (
        <Fragment>
          <h1>Welcome back</h1>
          {errorMessage.length > 0 && (
            <div className="error-msg">{errorMessage}</div>
          )}
          <InputEditName
            className="headerProfileInput"
            type="text"
            placeholder={firstName}
            action={(e) => setFirstName(e.target.value)}
          />
          <InputEditName
            className="headerProfileInput"
            type="text"
            placeholder={lastName}
            action={(e) => setLastName(e.target.value)}
          />
          <br />
          <ButtonEditName
            className="buttonEdited"
            text="Save"
            action={() => changeUserProfile()}
          />
          <ButtonEditName
            className="buttonEdited"
            text="Cancel"
            action={() => setEditName(false)}
          />
        </Fragment>
      ) : (
        <Fragment>
          <h1>
            Welcome back <br />
            {props.user.firstName} {props.user.lastName}
            {errorMessage.length > 0 && (
              <div className="error-msg">{errorMessage}</div>
            )}
          </h1>
          <ButtonEditName
            className="editButton"
            text="Edit Name"
            action={() => setEditName(true)}
          />
        </Fragment>
      )}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    connected: state.user.connected,
    token: state.user.token,
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(FormEditName);
