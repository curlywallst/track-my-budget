Rails.application.routes.draw do
  scope '/api' do
    get :expenses, to: 'expenses#index'
    post :expenses/new, to 'expenses#new'
  end
end
