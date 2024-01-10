const init = {
  cars: ["BWM"],
};

export default function reducer(state, action, args) {
  console.log(action, args);
  switch (action) {
    case "ADD":
      const [newCar] = args
      return{
        ...state,
        cars: [...state.cars, newCar]
      }
    default:
      return init;
  }
}
