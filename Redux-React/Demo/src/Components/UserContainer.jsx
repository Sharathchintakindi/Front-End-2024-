import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../Redux";

const UserContainer = ({ userData, fetchUsers }) => {
  const { loading, error, users } = userData;

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {users && users.length > 0 ? (
          users.map((user) => <p key={user.id}>{user.name}</p>)
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userData: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
