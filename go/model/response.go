package model

// ApiResponse is a generic API response wrapper.
type ApiResponse[T any] struct {
	Message string `json:"message"`
	Data    T      `json:"data"`
}
