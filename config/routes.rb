Rails.application.routes.draw do

  root to: "pages#home"

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [ :show ] do
    resources :questions
    get "test", to: "users#test"
  end
end
