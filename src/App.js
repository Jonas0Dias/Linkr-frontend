import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/SignInPage/SignIn";
import Cadastro from "./pages/SignUpPage/Cadastro";
import HomePage from "./pages/HomePage/HomePage";

function App() {
	const [habilitado, setHabilitado] = React.useState(false);
	const [login, setLogin] = React.useState({ email: "", password: "" });
	const [dadosUsuario, setDadosUsuario] = React.useState(null);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<Login
							habilitado={habilitado}
							setHabilitado={setHabilitado}
							login={login}
							setLogin={setLogin}
							dadosUsuario={dadosUsuario}
							setDadosUsuario={setDadosUsuario}
						/>
					}
				/>

				<Route
					path="/cadastro"
					element={
						<Cadastro
							habilitado={habilitado}
							setHabilitado={setHabilitado}
						/>
					}
				/>

				<Route
					path="/home"
					element={
						<HomePage
							dadosUsuario={dadosUsuario}
							setDadosUsuario={setDadosUsuario}
						/>
					}
				/>

				{/*
          <Route path="/restaurant" element={
            <RestaurantDetails 
            restaurantchoosed={restaurantchoosed}
            setRestaurantChoosed={setRestaurantChoosed}
            setIdProduct={setIdProduct}
            dadosUsuario={dadosUsuario}
            />} />

          <Route path="/restaurant/:restaurantId/product/:productId" element={
            <ProductPage
              dadosUsuario={dadosUsuario}
              setDadosUsuario={setDadosUsuario}
              idproduct={idproduct}
            />} />

          <Route path="/cart" element={
            <Cart
              dadosUsuario={dadosUsuario}
              restaurantData={restaurantData}
            />} />  */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
