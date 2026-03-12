package model

// Links represents external links exposed by the API.
type Links struct {
	CreadlyLink                 string `json:"creadlyLink"`
	RestaurantAroundStationLink string `json:"restaurantAroundStationLink"`
	AdvancedSearchYoutubeLink   string `json:"advancedSearchYoutubeLink"`
}
