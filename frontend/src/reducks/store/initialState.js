const initialState = {
  items: {
    results: [],
    count: 0,
    next: null,
    previous: null,
  },
  user: {
    username: "",
    email: "",
    token: "",
    token_expires_at: "",
  },
  carts: {
    results: [],
    // subtotal: 0,
    // results: [],
    count: 0,
    // next: null,
    // previous: null,
    subtotal: 0,
  },
  order: {
    list: [],
    subtotal: 0,
  },
};

export default initialState;
