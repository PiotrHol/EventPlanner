const actionsType = {
  setUser: "events/setUser",
};

const setUser = (payload) => {
  return {
    type: actionsType.setUser,
    payload,
  };
};

export { actionsType, setUser };
