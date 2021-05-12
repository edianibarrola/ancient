const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			locations: [
				{
					name: "Puma Punku",
					location: "Turkey",
					coords: "233, 855",
					details: "Turkey",
					imgurl: "",
					maplink: `https://www.google.com/maps/embed/v1/place?key=${
						process.env.MAPAPIKEY
					}&maptype=satellite&q=puma+punku`
				},
				{
					name: "Great Pryamid",
					location: "Egypt",
					coords: "100, 439",
					details: "Ancient Ruins",
					imgurl: "",
					maplink: `https://www.google.com/maps/embed/v1/place?key=${
						process.env.MAPAPIKEY
					}&maptype=satellite&q=great+pyramid`
				},
				{
					name: "Machu Pichu",
					location: "Peru",
					coords: "001, 004",
					details: "Ancient Ruins",
					imgurl: "",
					maplink: `https://www.google.com/maps/embed/v1/place?key=${
						process.env.MAPAPIKEY
					}&maptype=satellite&q=machu+picchu+complex`
				}
			],
			site: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			setSite: item => {
				setStore({ site: item });
			}
		}
	};
};

export default getState;
