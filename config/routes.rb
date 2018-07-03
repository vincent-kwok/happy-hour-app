Rails.application.routes.draw do
  root 'users#index'

  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/bars" => "bars#index"
  get "/bars/:id" => "bars#show"

end
