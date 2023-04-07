
//we can simply export like this or
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

export {
    Home,
    Login,
    Signup
};

//we can export also like this but when Home.js does not has any default export--

// export * from './Home'