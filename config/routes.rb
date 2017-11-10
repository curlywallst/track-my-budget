Rails.application.routes.draw do
  scope '/api' do
    resources :expenses, only: [:index, :show, :create, :update, :destroy]
    resources :income, only: [:index, :show, :create, :update, :destroy]
  end

end














# Rails.application.routes.draw do
#   namespace :api, defaults: { format: :json } do
#       resources :expenses, only: [:index, :show, :create, :update, :destroy]
#       post 'register', to: 'users#create'
#       post 'signin', to: 'auth#create'
#     end
# end
